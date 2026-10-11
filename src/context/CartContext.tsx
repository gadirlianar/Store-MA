"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";

export interface CartItem {
  product: Product;
  size: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: number, quantity?: number) => void;
  removeItem: (productId: string, size: number) => void;
  updateQty: (productId: string, size: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isBagOpen: boolean;
  setIsBagOpen: (open: boolean) => void;
  justAdded: boolean;
}

const DEFAULT_ITEMS: CartItem[] = (() => {
  const ghost = PRODUCTS.find((p) => p.slug === "ghost-runner");
  const shatter = PRODUCTS.find((p) => p.slug === "shatter");
  if (ghost && shatter) {
    return [
      { product: ghost, size: 9, quantity: 1 },
      { product: shatter, size: 10, quantity: 1 },
    ];
  }
  return [];
})();

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(DEFAULT_ITEMS);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Load from localStorage on mount after hydration
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mavric_cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // Storage access error
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("mavric_cart", JSON.stringify(items));
    } catch {
      // Storage failed
    }
  }, [items]);

  const addItem = (product: Product, size: number, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, size, quantity }];
    });

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
    setIsBagOpen(true);
  };

  const removeItem = (productId: string, size: number) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
  };

  const updateQty = (productId: string, size: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        itemCount,
        subtotal,
        isBagOpen,
        setIsBagOpen,
        justAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
