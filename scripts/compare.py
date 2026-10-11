import cv2
import numpy as np
import os
import sys
import json
from skimage.metrics import structural_similarity as ssim
from skimage.color import rgb2lab, deltaE_ciede2000

def compare_images(ref_path, actual_path, out_diff_path=None):
    ref = cv2.imread(ref_path)
    actual = cv2.imread(actual_path)
    
    if ref is None:
        return {"error": f"Reference image not found: {ref_path}"}
    if actual is None:
        return {"error": f"Actual image not found: {actual_path}"}
    
    # Ensure dimensions match
    if ref.shape != actual.shape:
        actual = cv2.resize(actual, (ref.shape[1], ref.shape[0]))
    
    # SSIM calculation
    score_ssim = float(ssim(ref, actual, channel_axis=2))
    
    # CIEDE2000 on flat region: dynamically search for lowest variance patch in ref (flat field)
    h, w, _ = ref.shape
    best_patch = (50, 100)
    min_var = 999999
    
    for y in range(20, h - 80, 60):
        for x in range(20, w - 80, 80):
            patch = ref[y:y+50, x:x+50]
            var = patch.var()
            if var < min_var:
                min_var = var
                best_patch = (y, x)
                if min_var < 5:
                    break
        if min_var < 5:
            break
            
    by, bx = best_patch
    ref_patch = ref[by:by+50, bx:bx+50]
    act_patch = actual[by:by+50, bx:bx+50]
    
    ref_rgb = cv2.cvtColor(ref_patch, cv2.COLOR_BGR2RGB) / 255.0
    act_rgb = cv2.cvtColor(act_patch, cv2.COLOR_BGR2RGB) / 255.0
    
    lab_ref = rgb2lab(ref_rgb)
    lab_act = rgb2lab(act_rgb)
    de = float(deltaE_ciede2000(lab_ref, lab_act).mean())
    
    # Generate diff heatmap
    diff = cv2.absdiff(ref, actual)
    diff_gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
    heatmap = cv2.applyColorMap(diff_gray * 4, cv2.COLORMAP_JET)
    
    if out_diff_path:
        os.makedirs(os.path.dirname(out_diff_path), exist_ok=True)
        cv2.imwrite(out_diff_path, heatmap)
    
    return {
        "ssim": round(score_ssim, 4),
        "ciede2000": round(de, 3),
        "flat_patch": [by, bx],
        "passed_static": score_ssim >= 0.90,
        "diff_path": out_diff_path
    }

def run_self_test():
    ref_path = "reference/golden/hero.png"
    if not os.path.exists(ref_path):
        print("Self-test error: reference/golden/hero.png missing")
        sys.exit(1)
    
    res_self = compare_images(ref_path, ref_path)
    print(f"Self-test against itself: SSIM={res_self['ssim']}, CIEDE2000={res_self['ciede2000']}")
    assert res_self['ssim'] >= 0.999, "Self-test failed: SSIM is not 1.0"
    
    ref = cv2.imread(ref_path)
    shifted = np.roll(ref, 20, axis=0)
    shifted_path = "docs/compare/self_test_shifted.png"
    cv2.imwrite(shifted_path, shifted)
    
    res_shifted = compare_images(ref_path, shifted_path, "docs/compare/self_test_diff.png")
    print(f"Self-test against shifted: SSIM={res_shifted['ssim']}, CIEDE2000={res_shifted['ciede2000']}")
    assert res_shifted['ssim'] < 0.90, "Self-test failed: Shifted image should not pass"
    
    print("Self-test PASSED successfully!")

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--self-test":
        run_self_test()
    elif len(sys.argv) >= 3:
        ref = sys.argv[1]
        act = sys.argv[2]
        diff_out = sys.argv[3] if len(sys.argv) > 3 else None
        res = compare_images(ref, act, diff_out)
        print(json.dumps(res, indent=2))
    else:
        print("Usage: compare.py <ref_path> <actual_path> [out_diff_path] OR --self-test")
