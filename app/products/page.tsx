'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import ProductCard from '@/components/product-card';
import { budgets } from '@/lib/data';
import { useStore } from '@/components/store';

export default function ProductsPage() {
  const { products, categories } = useStore();
  const searchParams = useSearchParams();

  const category = searchParams.get('cat');
  const budget = searchParams.get('budget');
  const showNew = Boolean(searchParams.get('new'));
  const showBest = Boolean(searchParams.get('best'));
  const inStockOnly = Boolean(searchParams.get('stock'));
  const giftOnly = Boolean(searchParams.get('gift'));
  const wrappingOnly = Boolean(searchParams.get('wrapping'));
  const cardOnly = Boolean(searchParams.get('card'));

  const activeCategories = categories.filter((c: any) => c.is_active);

  let list = products.filter((p: any) => p.is_published);

  if (category) list = list.filter((p: any) => p.category_ids.includes(category));
  if (budget) list = list.filter((p: any) => p.gift_budget_range === budget);
  if (showNew) list = list.filter((p: any) => p.is_new);
  if (showBest) list = list.filter((p: any) => p.is_best_seller);
  if (inStockOnly) list = list.filter((p: any) => p.stock_quantity > 0);
  if (giftOnly) list = list.filter((p: any) => p.is_gift_recommended);
  if (wrappingOnly) list = list.filter((p: any) => p.gift_wrapping_available);
  if (cardOnly) list = list.filter((p: any) => p.message_card_available);

  return (
    <main className="container-x py-8 grid md:grid-cols-[280px_1fr] gap-6">
      <aside className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">カテゴリ</p>
          <div className="space-y-2">
            {activeCategories.map((c: any) => (
              <Link key={c.id} className="block card" href={`/products?cat=${c.id}`}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">価格帯</p>
          <div className="space-y-2">
            {budgets.map((b) => (
              <Link key={b} className="block card" href={`/products?budget=${encodeURIComponent(b)}`}>
                {b}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Link className="block card" href="/products?stock=1">在庫ありのみ</Link>
          <Link className="block card" href="/products?gift=1">ギフトおすすめ</Link>
          <Link className="block card" href="/products?wrapping=1">ラッピング対応</Link>
          <Link className="block card" href="/products?card=1">メッセージカード対応</Link>
          <Link className="block card" href="/products?new=1">New</Link>
          <Link className="block card" href="/products?best=1">Best Seller</Link>
          <Link className="block card" href="/products">絞り込み解除</Link>
        </div>
      </aside>

      <section>
        <p className="text-sm text-zinc-500 mb-4">{list.length}件の商品</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {list.map((p: any) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
