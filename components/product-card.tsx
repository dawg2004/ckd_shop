import Link from 'next/link';import { Product } from '@/lib/types';
export default function ProductCard({p}:{p:Product}){return <Link href={`/products/${p.slug}`} className='card block'><img src={p.images[0]} className='w-full aspect-[4/5] object-cover mb-3'/><p>{p.name}</p><p className='text-sm text-zinc-500'>¥{p.price.toLocaleString()}</p></Link>}
