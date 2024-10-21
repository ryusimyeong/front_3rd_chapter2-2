/**
 * 숫자를 원하는 통화 형식에 맞춰 변환하고 반환한다.
 * @param targetNumber
 * @param currency
 * @returns
 */
export const formatCurrency = (
  targetNumber: number,
  currency: string = 'KRW',
): string => {
  switch (currency) {
    case 'JPY':
      return `￥ ${targetNumber.toLocaleString('ja-JP')}`;

    case 'USD':
      return `$ ${targetNumber.toLocaleString('en-US')}`;

    default:
      return `${targetNumber.toLocaleString('ko-KR')}원`;
  }
};
