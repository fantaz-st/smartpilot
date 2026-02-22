


import { notFound } from "next/navigation";
import { i18n } from "@/settings/i18n";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { wpFetchAllMenuItems } from "@/lib/wpFetchAllMenuItems";
import LocaleSync from "@/components/LocaleSync/LocaleSync";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!i18n.locales.includes(locale)) return notFound();
  const menuItems = await wpFetchAllMenuItems();

  return (
    <>
    <div className="main-wrapper">
          <LocaleSync locale={locale} />
          <Header menuItems={menuItems} locale={locale} />
        {children}
        <Footer menuItems={menuItems}/>
        </div>

    </>
  );
}