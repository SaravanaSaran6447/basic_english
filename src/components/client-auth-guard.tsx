"use client";

import { useStore } from "@/store/useStore";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ClientAuthGuard({ children }: { children: React.ReactNode }) {
  const currentUser = useStore((state) => state.currentUser);
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (!currentUser && !['/login', '/signup', '/reset'].includes(pathname)) {
        router.push("/login");
      } else if (currentUser && ['/login', '/signup', '/reset'].includes(pathname)) {
        router.push("/dashboard");
      }
    }
  }, [currentUser, mounted, pathname, router]);

  if (!mounted) return null; // Prevent hydration mismatch

  return <>{children}</>;
}
