"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { navProps } from "../types/type";

export const useSidebar = (navData: navProps[]) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const pathname = usePathname();

  const toggleDropdown = useCallback((id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  }, []);

  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  const isSubItemActive = useCallback(
    (subItems: { path: string }[] | undefined) => {
      return (
        subItems?.some(
          (subItem) => pathname && pathname.startsWith(subItem.path)
        ) || false
      );
    },
    [pathname]
  );

  useEffect(() => {
    const activeItem = navData.find((item) => isSubItemActive(item.items));
    if (activeItem) {
      setOpenDropdown(activeItem.id);
    }
  }, [isSubItemActive, navData]);

  return {
    openDropdown,
    toggleDropdown,
    isActive,
    pathname,
  };
};
