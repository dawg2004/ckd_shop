'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

import ProductCard from '@/components/product-card';
import { budgets, giftScenes, giftTargets } from '@/lib/data';
import { useStore } from '@/components/store';

export default function GiftFinderPage() {
  const { products } = useStore();
  const searchParams = useSearchParams();

  const [target, setTarget] = useState(searchParams.get('target') ?? '');
  const [budget, setBudget] = useState(searchParams.get('budget') ?? '');
  const [scene, setScene] = useState(searchParams.get('scene') ?? '');
  const [mood, setMood] = useState('ナチュラル');

  const results = useMemo(
    () =>
      products
        .filter((p: any) => p.is_published)
        .filter((p: any) => (!target ? true : p.gift_targets.includes(target)))
        .filter((p: any) => (!budget ? true : p.gift_budget_range === budget))
        .filter((p: any) => (!scene ? true : p.gift_scenes.includes(scene)))
        .slice(0, 8),
    [products, target, budget, scene],
  );

  return (
    <main className="container-x py-8">
      <h1 className="text-2xl mb-4">ギフト診断</h1>
      <div className="grid md:grid-cols-4 gap-2 mb-6">
        <select className="card" value={target} onChange={(e) => setTarget(e.target.value)}>
          <option value="">誰に贈る？</option>
          {giftTargets.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <select className="card" value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">予算</option>
          {budgets.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <input className="card" value={mood} onChange={(e) => setMood(e.target.value)} placeholder="雰囲気" />
        <select className="card" value={scene} onChange={(e) => setScene(e.target.value)}>
          <option value="">シーン</option>
          {giftScenes.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </div>

      <p className="text-sm text-zinc-500 mb-4">診断結果: {results.length}件</p>
      {results.length === 0 ? (
        <div className="card">条件に合う商品が見つかりませんでした。条件をゆるめて再検索してください。</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {results.map((p: any) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </main>
  );
}
