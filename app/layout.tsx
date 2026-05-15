import './globals.css';import { Header, Footer } from '@/components/layout';import { StoreProvider } from '@/components/store';
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='ja'><body><StoreProvider><Header/>{children}<Footer/></StoreProvider></body></html>}
