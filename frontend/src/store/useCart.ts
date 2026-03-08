import { create } from 'zustand';
import type { IProduct } from '@ecommerce/shared';

export interface CartItem extends IProduct {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
    items: [],

    addToCart: (product) => set((state) => {
        const existingNode = state.items.find(item => item.id === product.id);
        if (existingNode) {
            return {
                items: state.items.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        }
        return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

    removeFromCart: (productId) => set((state) => ({
        items: state.items.filter(item => item.id !== productId)
    })),

    clearCart: () => set({ items: [] }),

    totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),

    totalPrice: () => get().items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
}));
