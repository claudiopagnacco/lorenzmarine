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
};
