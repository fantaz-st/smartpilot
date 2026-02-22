"use client";

import { useEffect } from "react";
import { i18n } from "@/settings/i18n";

export default function LocaleSync({ locale }) {
  useEffect(() => {
    try {
      localStorage.setItem(i18n.cookieName, locale);
    } catch {}
    document.cookie = `${i18n.cookieName}=${locale}; path=/; max-age=31536000`;
  }, [locale]);

  return null;
}