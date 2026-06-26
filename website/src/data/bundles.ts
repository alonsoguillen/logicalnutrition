import { getCollection } from 'astro:content';

export interface Bundle {
  id: string;
  title: string;
  description: string;
  productIds: string[];
  discountPercent: number;
  badge?: string;
}

export const bundles: Bundle[] = [
  {
    id: 'strength-stack',
    title: 'Strength Stack',
    description: 'Creatina + L-Citrulina para fuerza máxima, bombeo y resistencia.',
    productIds: ['creatina-monohidratada', 'l-citrulina'],
    discountPercent: 10,
    badge: 'Ahorra 10%',
  },
];

export async function getBundleForProduct(productId: string) {
  return bundles.find((b) => b.productIds.includes(productId));
}

export async function resolveBundleProducts(bundle: Bundle) {
  const all = await getCollection('supplements');
  return bundle.productIds
    .map((id) => all.find((s) => s.id === id))
    .filter(Boolean) as Awaited<ReturnType<typeof getCollection>>;
}

export function formatPrice(amount: number, currency = 'PEN') {
  return new Intl.NumberFormat('es-PE', { style: 'currency', currency }).format(amount);
}

export function getBundlePrice(bundle: Bundle, products: { data: { price?: number; currency?: string } }[]) {
  const total = products.reduce((sum, p) => sum + (p.data.price || 0), 0);
  const discounted = total * (1 - bundle.discountPercent / 100);
  return { total, discounted };
}
