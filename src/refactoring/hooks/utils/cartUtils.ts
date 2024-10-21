import { CartItem, Coupon, Discount } from '../../../types';

/**
 * 적용 가능한 가장 높은 할인율을 반환. 할인이 없으면 0 반환
 * @param item
 * @returns
 */
export const getMaxApplicableDiscount = (item: CartItem) => {
  const {
    product: { discounts },
    quantity,
  } = item;
  console.log(discounts);

  return discounts.reduce(
    (maxDiscount, discount) =>
      quantity >= discount.quantity && discount.rate > maxDiscount
        ? discount.rate
        : maxDiscount,
    0,
  );
};

/**
 * 적용 가능한 가장 높은 할인율을 적용한 가격을 반환한다.
 * @param item
 * @returns
 */
export const calculateItemTotal = (item: CartItem) => {
  const {
    product: { price },
    quantity,
  } = item;

  const discount = getMaxApplicableDiscount(item);
  console.log(discount);

  return price * quantity * (1 - discount);
};

export const calculateCartTotal = (
  cart: CartItem[],
  selectedCoupon: Coupon | null,
) => {
  let totalBeforeDiscount: number = 0;
  let totalAfterDiscount: number = 0;
  let totalDiscount: number = 0;

  cart.forEach((item) => {
    const {
      product: { price },
      quantity,
    } = item;

    totalBeforeDiscount += price * quantity;
    totalAfterDiscount += calculateItemTotal(item);
  });

  totalDiscount = totalBeforeDiscount - totalAfterDiscount;

  // 쿠폰 적용
  if (selectedCoupon) {
    if (selectedCoupon.discountType === 'amount') {
      totalAfterDiscount = Math.max(
        0,
        totalAfterDiscount - selectedCoupon.discountValue,
      );
    } else {
      totalAfterDiscount *= 1 - selectedCoupon.discountValue / 100;
    }

    totalDiscount = totalBeforeDiscount - totalAfterDiscount;
  }

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    totalDiscount,
  };
};

export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  newQuantity: number,
): CartItem[] => {
  return [];
};
