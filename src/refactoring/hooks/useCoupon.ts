import { Coupon } from '../../types.ts';
import { useState } from 'react';

export const useCoupons = (initialCoupons: Coupon[]) => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

  const addCoupon = (target: Coupon) => {
    setCoupons([...coupons, target]);
  };

  return { coupons, addCoupon };
};
