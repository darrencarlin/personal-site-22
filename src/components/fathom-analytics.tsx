"use client";

import { DOMAIN } from "@/utils/constants";
import { load, trackPageview } from "fathom-client";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function TrackPageView() {
  // Current Path
  const pathname = usePathname();
  // Current query params
  const searchParams = useSearchParams();

  // Load the Fathom script on mount
  useEffect(() => {
    // Optional: Only track on production; remove these two lines if you want to track other environments
    const env = process.env.NODE_ENV;
    if (env !== "production") return;

    load(process.env.NEXT_PUBLIC_FATHOM_ID as string, {
      auto: false,
      // Optional but I like to explicitly choose the domains to track:
      includedDomains: [DOMAIN],
    });
  }, []);

  // Record a pageview when route changes
  useEffect(() => {
    if (!pathname) return;

    trackPageview({
      url: pathname + searchParams.toString(),
      referrer: document.referrer,
    });
  }, [pathname, searchParams]); // 👈 Track page views if path or params change

  return null;
}

// We use this in our main layout.tsx or jsx file
export default function Fathom() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  );
}
