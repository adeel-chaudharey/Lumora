import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY,
  {
    apiVersion: "2025-06-30.basil",
    typescript: true,
  }
);




//this is the code from official stripe documentation for creating a checkout session

// Don't put any keys in code. See https://docs.stripe.com/keys-best-practices. Find your keys at https://dashboard.stripe.com/apikeys.
/*const stripe = require('stripe')('sk_test_51U0lDxJI72e5gwizH7PHLTQ5nQ9R9wWxc5D9slslW4oDA7SYWRHgHKLcTy7feHQ61ULiZzFKh5NKWaoCqOd9u3i900a8gKWoaC');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 500,
  currency: 'gbp',
 payment_method: 'pm_card_visa',
 payment_method_types: ['card'],
//});     */