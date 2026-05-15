'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import ProductCard from '@/components/product-card';
import { useStore } from '@/components/store';
import { budgets, giftScenes, giftTargets } from '@/lib/data';

export default function GF() {
  const { products } = useStore();
  const searchParams = useSearchParams();
  const [t, setT] = useState(searchParams.get('target') ?? '');
  const [b, setB] = useState(searchParams.get('budget') ?? '');
  const [s, setS] = useState(searchParams.get('scene') ?? '');
  const [m, setM] = useState('ナチュラル');

  const r = products
    .filter(
      (p: any) =>
        (!t || p.gift_targets.includes(t)) &&
        (!b || p.gift_budget_range === b) &&
        (!s || p.gift_scenes.includes(s)),
    )
    .slice(0, 8);

  return (
    <main className="container-x py-8">
      <h1 className="text-2xl mb-4">ギフト診断</h1>
      <div className="grid md:grid-cols-4 gap-2 mb-6">
        <select className="card" onChange={(e) => setT(e.target.value)} value={t}>
          <option value="">誰に贈る？</option>
          {giftTargets.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <select className="card" onChange={(e) => setB(e.target.value)} value={b}>
          <option value="">予算</option>
          {budgets.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <input className="card" onChange={(e) => setM(e.target.value)} placeholder="雰囲気" value={m} />
        <select className="card" onChange={(e) => setS(e.target.value)} value={s}>
          <option value="">シーン</option>
          {giftScenes.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {r.map((p: any) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </main>
  );
}
