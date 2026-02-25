import site from "@/settings/site";
import { wpFetchAllMenuItems } from "@/lib/wpFetchAllMenuItems";
import createDataTree from "@/functions/createDataTree";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const menuName = site.menu?.[locale] || site.menu?.hr || site.menu;

  const flat = await wpFetchAllMenuItems(menuName);
  const menuItems = createDataTree(flat);

  return (
    <>
      <Header menuItems={menuItems} locale={locale} />
      {children}
      <Footer menuItems={menuItems} locale={locale} />
    </>
  );
}
