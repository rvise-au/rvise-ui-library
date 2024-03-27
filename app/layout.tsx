import '~/assets/styles/base.css';

import { Metadata } from 'next';
import { Inter as CustomFont } from 'next/font/google';
import Providers from '~/components/atoms/Providers';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import Header from '~/components/widgets/Header';
import { SITE } from '~/config.js';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth text-[16px] ${customFont.variable} font-sans`}>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300">
        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
