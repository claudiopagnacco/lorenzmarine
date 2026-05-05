const BASE_URL = process.env.WOOCOMMERCE_URL!;
const KEY = process.env.WOOCOMMERCE_KEY!;
const SECRET = process.env.WOOCOMMERCE_SECRET!;

function authHeader() {
  const token = Buffer.from(`${KEY}:${SECRET}`).toString("base64");
  return { Authorization: `Basic ${token}` };
}

async function wcFetch<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${BASE_URL}/wp-json/wc/v3/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const res = await fetch(url.toString(), {
    headers: authHeader(),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`WC API error: ${res.status} ${endpoint}`);
  return res.json();
}

async function wcPost<T>(endpoint: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}/wp-json/wc/v3/${endpoint}`, {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`WC API error: ${res.status} ${endpoint} — ${text}`);
  }
  return res.json();
}

export interface WCAddress {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2?: string;
  city: string;
  postcode: string;
  country: string;
  state?: string;
  email?: string;
  phone?: string;
}

export interface WCOrder {
  id: number;
  status: string;
  order_key: string;
  payment_url: string;
  total: string;
}

export interface WCProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  sale_price: string;
  short_description: string;
  description: string;
  images: { src: string; alt: string }[];
  categories: { id: number; name: string; slug: string }[];
  purchasable: boolean;
  permalink: string;
}

export interface WCCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  image: { src: string } | null;
}

export const wc = {
  getProducts: (params?: Record<string, string>) =>
    wcFetch<WCProduct[]>("products", { per_page: "20", ...params }),

  getProduct: (id: number) =>
    wcFetch<WCProduct>(`products/${id}`),

  getCategories: () =>
    wcFetch<WCCategory[]>("products/categories", { per_page: "50", hide_empty: "true" }),

  createOrder: (data: {
    line_items: { product_id: number; quantity: number }[];
    billing: WCAddress;
    shipping: WCAddress;
    customer_note?: string;
  }) =>
    wcPost<WCOrder>("orders", {
      payment_method: "",
      payment_method_title: "Da scegliere",
      set_paid: false,
      ...data,
    }),
};
