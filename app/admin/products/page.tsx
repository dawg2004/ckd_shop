'use client';

import { giftScenes, giftTargets } from '@/lib/data';
import { useStore } from '@/components/store';

export default function AdminProductsPage() {
  const { products, setProducts, categories } = useStore();

  return (
    <main className="container-x py-8 space-y-3">
      {products.map((p: any, i: number) => (
        <div className="card grid md:grid-cols-8 gap-2" key={p.id}>
          <input
            value={p.name}
            onChange={(e) => {
              const next = [...products];
              next[i].name = e.target.value;
              setProducts(next);
            }}
          />
          <select
            value={p.category_ids[0]}
            onChange={(e) => {
              const next = [...products];
              next[i].category_ids = [e.target.value];
              setProducts(next);
            }}
          >
            {categories.map((c: any) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <label><input type="checkbox" checked={p.is_gift_recommended} onChange={(e) => { const next=[...products]; next[i].is_gift_recommended=e.target.checked; setProducts(next); }} />ギフト</label>
          <label><input type="checkbox" checked={p.gift_wrapping_available} onChange={(e) => { const next=[...products]; next[i].gift_wrapping_available=e.target.checked; setProducts(next); }} />包装</label>
          <label><input type="checkbox" checked={p.message_card_available} onChange={(e) => { const next=[...products]; next[i].message_card_available=e.target.checked; setProducts(next); }} />カード</label>
          <select value={p.gift_targets[0]} onChange={(e) => { const next=[...products]; next[i].gift_targets=[e.target.value]; setProducts(next); }}>
            {giftTargets.map((t) => <option key={t}>{t}</option>)}
          </select>
          <select value={p.gift_scenes[0]} onChange={(e) => { const next=[...products]; next[i].gift_scenes=[e.target.value]; setProducts(next); }}>
            {giftScenes.map((s) => <option key={s}>{s}</option>)}
          </select>
          <input type="number" value={p.stock_quantity} onChange={(e) => { const next=[...products]; next[i].stock_quantity=Number(e.target.value); setProducts(next); }} />
        </div>
      ))}
    </main>
  );
}
