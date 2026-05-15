'use client';import Link from 'next/link';import { useStore } from '@/components/store';
export default function C(){const {categories}=useStore();return <main className='container-x py-8 grid md:grid-cols-3 gap-3'>{categories.map((c:any)=><Link key={c.id} href={`/collections/${c.slug}`} className='card'>{c.name}</Link>)}</main>}
