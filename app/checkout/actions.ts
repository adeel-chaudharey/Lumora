"use server";

import { redirect } from "next/navigation";
import { stripe } from "@/utils/stripe/server";

export async function createCheckoutSession() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    payment_method_types: ["card"],

    line_items: [
      {
        price_data: {
          currency: "usd",

          product_data: {
            name: "Lumora Demo Order",
          },

          unit_amount: 5000,
        },

        quantity: 1,
      },
    ],

    success_url:
      "http://localhost:3000/checkout/success",

    cancel_url:
      "http://localhost:3000/checkout/cancel",
  });

  redirect(session.url!);
}