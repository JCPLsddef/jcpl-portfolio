"use client";

import { ctaCopy } from "@/lib/content";
import { useTranslations } from "@/context/LocaleContext";
import StaggeredMenu from "@/components/nav/StaggeredMenu";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import type { StaggeredMenuItem } from "@/components/nav/StaggeredMenu";

export default function Navbar() {
  const t = useTranslations();
  const staggeredMenuItems: StaggeredMenuItem[] = [
    { label: t<string>("nav.home"), link: "/", ariaLabel: t<string>("nav.home") },
    { label: t<string>("nav.services"), link: "/services", ariaLabel: t<string>("nav.services") },
    { label: t<string>("nav.results"), link: "/results", ariaLabel: t<string>("nav.results") },
    { label: t<string>("nav.about"), link: "/about", ariaLabel: t<string>("nav.about") },
    {
      label: t<string>("nav.apply"),
      link: ctaCopy.href,
      ariaLabel: t<string>("nav.apply"),
    },
  ];

  return (
    <StaggeredMenu
      items={staggeredMenuItems}
      displayItemNumbering={true}
      accentColor="#1e1e22"
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      colors={["transparent", "transparent"]}
      isFixed={true}
      position="right"
      logoUrl="https://static.wixstatic.com/media/62f926_5324879084e1438391f656f8121a391a~mv2.png"
      languageSwitcher={<LanguageSwitcher />}
      languageSwitcherPanel={<LanguageSwitcher variant="dark" />}
      menuLabel={t<string>("common.menu")}
      closeLabel={t<string>("common.close")}
    />
  );
}
