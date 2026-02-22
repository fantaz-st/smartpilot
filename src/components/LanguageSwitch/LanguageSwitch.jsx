"use client";

import { FormControl, MenuItem, Select } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { i18n } from "@/settings/i18n";

const NEWS_SEG = { en: "news", hr: "novosti" };

function translatePathname(pathname, toLocale) {
  const segs = (pathname || "/").split("/").filter(Boolean);
  const fromLocale = segs[0];
  const hasLocale = i18n.locales.includes(fromLocale);

  const rest = hasLocale ? segs.slice(1) : segs;

  if (hasLocale && rest[0] === NEWS_SEG[fromLocale]) {
    rest[0] = NEWS_SEG[toLocale];
  }

  const next = `/${toLocale}${rest.length ? `/${rest.join("/")}` : ""}`;
  return next;
}

export default function LanguageSwitch({ locale, size = "small", fullWidth = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const value = locale || i18n.defaultLocale;

  const handleChange = (e) => {
    const nextLocale = String(e.target.value || "");
    if (!nextLocale || nextLocale === value) return;

    try {
      localStorage.setItem(i18n.cookieName, nextLocale);
    } catch {}

    document.cookie = `${i18n.cookieName}=${nextLocale}; path=/; max-age=31536000`;

    const query = sp?.toString();
    const nextPath = translatePathname(pathname, nextLocale);
    const href = query ? `${nextPath}?${query}` : nextPath;

    router.push(href);
  };

  return (
    <FormControl size={size} fullWidth={fullWidth}>
      <Select
        value={value}
        onChange={handleChange}
        variant="outlined"
        MenuProps={{ disableScrollLock: true }}
        sx={{
          height: size === "small" ? 34 : 40,
          borderRadius: "999px",
          minWidth: 86,
        }}
      >
        <MenuItem value="hr">HR</MenuItem>
        <MenuItem value="en">EN</MenuItem>
      </Select>
    </FormControl>
  );
}