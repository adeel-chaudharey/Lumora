import { headers } from "next/headers";
import { stripe } from "@/utils/stripe/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();

  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return new Response("Missing stripe signature", {
      status: 400,
    });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response("Missing webhook secret", {
      status: 500,
    });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Stripe webhook verification failed:", error);

    return new Response("Invalid signature", {
      status: 400,
    });
  }

  console.log("Stripe event received:", event.type);

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log("Checkout completed:", session.id);
      console.log("Customer email:", session.customer_details?.email);
      console.log("Payment status:", session.payment_status);

      break;
    }

    default:
      console.log(`Unhandled Stripe event: ${event.type}`);
  }

  return new Response("Webhook received", {
    status: 200,
  });
}