"use server";

import { redirect } from "next/navigation";
import { stripe } from "@/utils/stripe/server";
import { createClient } from "@/utils/supabase/server";

export async function createCheckoutSession() {
  const supabase = await createClient(await);

  // Get authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in to checkout.");
  }

  // Get user's cart
  const { data: cartItems, error } = await supabase
    .from("cart_items")
    .select(`
      id,
      quantity,
      products (
        id,
        name,
        price,
        thumbnail,
        stock
      )
    `)
    .eq("customer_id", user.id);

  if (error) {
    console.error("Failed to fetch cart:", error);
    throw new Error("Unable to load cart.");
  }

  if (!cartItems || cartItems.length === 0) {
    throw new Error("Your cart is empty.");
  }

  // Validate stock before creating Stripe session
  for (const item of cartItems) {
    const product = item.products;

    if (!product) {
      throw new Error("A product in your cart no longer exists.");
    }

    if (product.stock < item.quantity) {
      throw new Error(
        `${product.name} does not have enough stock.`
      );
    }
  }

  // Convert Lumora cart → Stripe line items
  const lineItems = cartItems.map((item) => {
    const product = item.products;

    if (!product) {
      throw new Error("Invalid product.");
    }

    return {
      price_data: {
        currency: "usd",

        product_data: {
          name: product.name,

          ...(product.thumbnail
            ? {
                images: [product.thumbnail],
              }
            : {}),
        },

        // Stripe expects the amount in cents
        unit_amount: Math.round(product.price * 100),
      },

      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    payment_method_types: ["card"],

    line_items: lineItems,

    metadata: {
      user_id: user.id,
    },

    success_url:
      "http://localhost:3000/checkout/success",

    cancel_url:
      "http://localhost:3000/checkout/cancel",
  });

  if (!session.url) {
    throw new Error("Stripe checkout URL was not created.");
  }

  redirect(session.url);
}