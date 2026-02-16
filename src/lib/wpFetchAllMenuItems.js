import site from "@/settings/site";
import { MENU_PAGE } from "./queries";
import { wpFetch } from "./wpFetch";

export async function wpFetchAllMenuItems(menuName = site.menu) {
  let after = null;
  const all = [];

  for (;;) {
    const data = await wpFetch(MENU_PAGE, { name: menuName, after });
    const conn = data?.menu?.menuItems;
    if (!conn) break;

    all.push(...conn.nodes);

    if (!conn.pageInfo?.hasNextPage) break;
    after = conn.pageInfo.endCursor;
  }

  return all;
}
