import { EmailSenderServiceInterface } from '@src/modules/order/utils/email-sender.interface';

export class SendEmailByJeanPierreService implements EmailSenderServiceInterface {
  sendEmail(order: Order): void {
    if (order.user.name === 'Jean Pierre') {
      console.log('Sending email to Jean Pierre');
    }
  }
}
