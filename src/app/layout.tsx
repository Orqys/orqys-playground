import { Outfit } from 'next/font/google';
import './globals.css';
import "flatpickr/dist/flatpickr.css";
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';

import { Metadata } from 'next';

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orqys Playground - Next.js 15+",
  description: "A premium application.",
  icons: {
    icon: "/images/logo/orqys-logo.png",
    shortcut: "/images/logo/orqys-logo.png",
    apple: "/images/logo/orqys-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
