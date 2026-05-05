"use server";

import { wc, type WCAddress } from "@/lib/woocommerce";

export interface CheckoutInput {
  items: { productId: number; quantity: number }[];
  billing: WCAddress;
  shipping: WCAddress;
  note?: string;
}

export async function createOrderAction(input: CheckoutInput) {
  try {
    const order = await wc.createOrder({
      line_items: input.items.map((i) => ({
        product_id: i.productId,
        quantity: i.quantity,
      })),
      billing: input.billing,
      shipping: input.shipping,
      customer_note: input.note,
    });

    return {
      ok: true as const,
      orderId: order.id,
      paymentUrl: order.payment_url,
      total: order.total,
    };
  } catch (e) {
    return {
      ok: false as const,
      error: e instanceof Error ? e.message : "Errore sconosciuto",
    };
  }
}
