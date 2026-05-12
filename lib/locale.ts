import { cookies } from "next/headers";
import { DEFAULT_LOCALE, type Locale, LOCALES } from "./i18n";

const COOKIE_NAME = "lang";

export async function getLocale(): Promise<Locale> {
  const c = await cookies();
  const v = c.get(COOKIE_NAME)?.value;
  return LOCALES.includes(v as Locale) ? (v as Locale) : DEFAULT_LOCALE;
}

export { COOKIE_NAME };
