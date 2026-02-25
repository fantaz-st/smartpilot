import "@/styles/reset.css";
import "@/styles/globals.css";
import { Inter, DM_Serif_Display } from "next/font/google";
import Providers from "./providers";
import site from "@/settings/site";
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


  return (
    <html className={`${inter.variable} ${dmSerif.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <BackToTop />
        </Providers >
      </body>
    </html>
  );
}
