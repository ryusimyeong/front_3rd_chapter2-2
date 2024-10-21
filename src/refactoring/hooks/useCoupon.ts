import { Coupon } from '../../types.ts';
import { useState } from 'react';

export const useCoupons = (initialCoupons: Coupon[]) => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  const addCoupon = (target: Coupon) => {
    setCoupons([...coupons, target]);
  };

  const applyCoupon = (coupon: Coupon) => {};

  return { coupons, addCoupon, applyCoupon, selectedCoupon };
};
