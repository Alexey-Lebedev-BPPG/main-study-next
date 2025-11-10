import { createNavigation } from 'next-intl/navigation';

export const locales = ['ru', 'en'] as const;
export const localePrefix = 'always';

export const {
  Link: AppLink,
  permanentRedirect: permanentAppRedirect,
  redirect: redirectApp,
  usePathname: useAppPathname,
  useRouter: useAppRouter,
} = createNavigation({ localePrefix, locales });
