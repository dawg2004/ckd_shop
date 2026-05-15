'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { initialCategories, initialProducts } from '@/lib/data';
import { Category, Product } from '@/lib/types';
const C=createContext<any>(null);
export function StoreProvider({children}:{children:React.ReactNode}){const [categories,setCategories]=useState<Category[]>(initialCategories);const [products,setProducts]=useState<Product[]>(initialProducts);
useEffect(()=>{const c=localStorage.getItem('categories');const p=localStorage.getItem('products');if(c) setCategories(JSON.parse(c));if(p) setProducts(JSON.parse(p));},[]);
useEffect(()=>localStorage.setItem('categories',JSON.stringify(categories)),[categories]);
useEffect(()=>localStorage.setItem('products',JSON.stringify(products)),[products]);
return <C.Provider value={{categories,setCategories,products,setProducts}}>{children}</C.Provider>}
export const useStore=()=>useContext(C);
