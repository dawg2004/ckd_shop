'use client';

import { use } from 'react';

import ProductCard from '@/components/product-card';
import { useStore } from '@/components/store';

export default function CD({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { categories, products } = useStore();
  const c = categories.find((x: any) => x.slug === slug);

  if (!c) return null;

  const list = products.filter((p: any) => p.category_ids.includes(c.id));

  return (
    <main className="container-x py-8">
      <h1 className="text-2xl mb-4">{c.name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {list.map((p: any) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </main>
  );
}
