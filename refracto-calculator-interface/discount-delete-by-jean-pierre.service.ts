import { DiscountDeleteServiceInterface } from '@src/modules/order/utils/discount-delete.interface';

export class DiscountDeleteByJeanPierreService implements DiscountDeleteServiceInterface {
  deleteDiscount(order: Order): void {
    if (order.user.name === 'Jean Pierre') {
      order.discount = 0;
    }
  }
}