import "@/styles/reset.css";
import "@/styles/globals.css";
import Providers from "./providers";
import site from "@/settings/site";
import { Inter, DM_Serif_Display } from "next/font/google";

import { wpFetchAllMenuItems } from "@/lib/wpFetchAllMenuItems";
import createDataTree from "@/functions/createDataTree";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: site.name,
  description: site.description,
};

export default async function RootLayout({ children }) {

  const menuItems = await wpFetchAllMenuItems();

  return (
    <html lang={site.locale} className={`${inter.variable} ${dmSerif.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
        <Header menuItems={menuItems} />
        {children}
        <Footer menuItems={menuItems}/>
        <BackToTop />
        </Providers >
      </body>
    </html>
  );
}
