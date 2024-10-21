// useCart.ts
import { useState } from 'react';
import { CartItem, Coupon, Product } from '../../types';
import { calculateCartTotal, updateCartItemQuantity } from './utils/cartUtils';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    // 재고가 없으면 실행 안 함
    if (!product.stock) {
      return;
    }

    const existingItem = cart.find(
      (cartItem) => cartItem.product.id === product.id,
    );

    const newCart: CartItem[] = existingItem
      ? cart.map((cartItem) => {
          if (cartItem.product.id === product.id) {
            cartItem.quantity++;
          }

          return cartItem;
        })
      : [
          ...cart,
          {
            product,
            quantity: 1,
          },
        ];

    setCart(newCart);
  };

  const removeFromCart = (productId: string) => {};

  const updateQuantity = (productId: string, newQuantity: number) => {};

  const calculateTotal = () => ({
    totalBeforeDiscount: 0,
    totalAfterDiscount: 0,
    totalDiscount: 0,
  });

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal,
  };
};
