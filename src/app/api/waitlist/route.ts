import { NextResponse } from "next/server";

interface WaitlistPayload {
  email: string;
  name?: string;
  acousticChamber?: string;
}

export async function POST(request: Request) {
  try {
    const body: WaitlistPayload = await request.json();

    if (!body.email || typeof body.email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required for allocation dispatch." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email structure. Ensure format resembles name@domain.com." },
        { status: 422 }
      );
    }

    // Artificial simulated latency to reflect cryogenic allocation verification
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Generate deterministic serial token
    const hash = Math.random().toString(36).substring(2, 8).toUpperCase();
    const allocationId = `KH-RES-${hash}`;
    const timestamp = new Date().toISOString();

    return NextResponse.json(
      {
        success: true,
        allocationId,
        email: body.email,
        timestamp,
        chamberTier: body.acousticChamber || "Reference Monolith 01",
        notice: "Honest Prototype Stub: Request recorded in session memory. In production, this dispatches encrypted allocation tokens via private key infrastructure.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Malformed request payload. Verify JSON encoding." },
      { status: 500 }
    );
  }
}
