import { create } from "zustand";
import type { CartItem } from "../cartTypes";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>()(
  devtools(
    persist(
      immer((set) => ({
        items: [],
        addItem: (item: CartItem) =>
          set((state) => ({ items: [...state.items, item] })),
        removeItem: (itemId: string) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== itemId),
          })),
        clearCart: () => set(() => ({ items: [] })),
      })),
      { name: "cart-storage" },
    ),
  ),
);

export default useCartStore;
