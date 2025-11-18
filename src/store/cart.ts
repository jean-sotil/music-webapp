import { create } from "zustand";

import type { LocalizedProduct } from "@/types/content";

export type CartItem = LocalizedProduct;

interface CartState {
  // state
  selectedProduct: CartItem | null;
  isModalOpen: boolean;
  items: CartItem[];
  // actions
  openModal: (product: CartItem) => void;
  closeModal: () => void;
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  selectedProduct: null,
  isModalOpen: false,
  items: [],
  openModal: (product) => set({ selectedProduct: product, isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, selectedProduct: null }),
  addToCart: (product) => {
    set((state) => {
      const itemIndex = state.items.findIndex((item) => item.id === product.id);

      if (itemIndex > -1) {
        const newItems = [...state.items] as CartItem[];
        if (newItems[itemIndex].quantity && product.quantity) {
          newItems[itemIndex].quantity += product.quantity;
        }
        return { items: newItems };
      } else {
        return { items: [...state.items, product] };
      }
    });
  },

  removeFromCart: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  getTotalItems: () => {
    return get().items.reduce(
      (total, item) => total + (item?.quantity ?? 0),
      0
    );
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + (item.price ?? 0) * (item.quantity ?? 0),
      0
    );
  },
}));
