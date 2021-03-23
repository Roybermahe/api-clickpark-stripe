import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';
import { UserAccountsRepository } from '../repository/repositorys/user-accounts.repository';
const YOUR_DOMAIN = 'https://paymentsclickpark.redlandsandwhales.com';

@Injectable()
export class AppService {
  constructor(
    @InjectStripe() private readonly stripeClient: Stripe,
    private UserRepository: UserAccountsRepository,
  ) {}

  async createSesion(email: string, value: number, data: string) {
    const session = await this.stripeClient.checkout.sessions.create({
      customer_email: email,
      submit_type: 'pay',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Parking',
            },
            unit_amount: value * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/ClickPark/Success/${data}`,
      cancel_url: `${YOUR_DOMAIN}/ClickPark/Cancel`,
    });
    return JSON.stringify({ id: session.id });
  }

  async paySanzion(email: string, value: number, data: string) {
    const session = await this.stripeClient.checkout.sessions.create({
      customer_email: email,
      submit_type: 'pay',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Pago de sanción',
            },
            unit_amount: value * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/ClickPark/Success/Sancion/${data}`,
      cancel_url: `${YOUR_DOMAIN}/ClickPark/Cancel`,
    });
    return JSON.stringify({ id: session.id });
  }

  async reloadMonedero(email: string, value: number, data: string) {
    const session = await this.stripeClient.checkout.sessions.create({
      customer_email: email,
      submit_type: 'pay',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Recarga de monedero',
            },
            unit_amount: value * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/ClickPark/Success/Monedero/${data}`,
      cancel_url: `${YOUR_DOMAIN}/ClickPark/Cancel`,
    });
    return JSON.stringify({ id: session.id });
  }
}
