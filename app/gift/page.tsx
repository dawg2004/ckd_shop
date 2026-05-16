'use client';

import Link from 'next/link';

import ProductCard from '@/components/product-card';
import { budgets, giftScenes, giftTargets } from '@/lib/data';
import { useStore } from '@/components/store';

export default function GiftPage() {
  const { products } = useStore();

  return (
    <main className="container-x py-8 space-y-10">
      <section className="bg-sand p-8 md:p-12">
        <h1 className="text-3xl mb-2">大切な人へ、日常に残る小さな贈り物を。</h1>
        <p className="text-zinc-600">誕生日、引っ越し祝い、結婚祝い、お礼まで。贈る相手に合わせて選べます。</p>
      </section>

      <section>
        <h2 className="text-xl mb-3">価格帯から探す</h2>
        <div className="grid md:grid-cols-4 gap-2">
          {budgets.map((b) => (
            <Link className="card" href={`/products?budget=${encodeURIComponent(b)}`} key={b}>
              {b}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-3">贈る相手から探す</h2>
        <div className="grid md:grid-cols-3 gap-2">
          {giftTargets.map((target) => (
            <Link className="card" href={`/gift-finder?target=${encodeURIComponent(target)}`} key={target}>
              {target}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-3">シーンから探す</h2>
        <div className="grid md:grid-cols-3 gap-2">
          {giftScenes.map((scene) => (
            <Link className="card" href={`/gift-finder?scene=${encodeURIComponent(scene)}`} key={scene}>
              {scene}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-3">おすすめギフト</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products
            .filter((p: any) => p.is_gift_recommended)
            .slice(0, 8)
            .map((p: any) => (
              <ProductCard key={p.id} p={p} />
            ))}
        </div>
      </section>
    </main>
  );
}
