"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  getConsent,
  hasGlobalPrivacyControl,
  setConsent,
} from "@/lib/analytics";

const ConsentBanner = () => {
  const pathname = usePathname();
  const [needsConsent, setNeedsConsent] = useState(false);
  const [needsGpcConsent, setNeedsGpcConsent] = useState(false);

  // Read storage after mount so server and client render the same markup.
  useEffect(() => {
    const consent = getConsent();
    const gpc = hasGlobalPrivacyControl();
    if (!consent && !gpc) setNeedsConsent(true);
    else if (consent === "granted" && gpc) setNeedsGpcConsent(true);
  }, []);

  const choose = (allowed: boolean) => {
    setConsent(allowed);
    setNeedsConsent(false);
    setNeedsGpcConsent(false);
  };

  // The privacy page has its own consent toggle.
  if ((!needsConsent && !needsGpcConsent) || pathname === "/privacy")
    return null;

  return (
    <div
      role="dialog"
      aria-label="Analytics consent"
      className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-4 bg-secondary p-4 text-secondary-content sm:flex-row sm:justify-center"
    >
      <p className="max-w-2xl text-sm">
        {needsGpcConsent
          ? "Last time you visited, you allowed analytics. Your browser now sends a Global Privacy Control signal, so analytics are off. Would you like to turn them back on?"
          : "May we count your visit? We use anonymous analytics to see how many people visit. Nothing is collected unless you allow it."}{" "}
        <Link className="link" href="/privacy">
          Privacy Policy
        </Link>
      </p>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => choose(false)}>
          Decline
        </Button>
        <Button className="text-primary-content" onClick={() => choose(true)}>
          Allow
        </Button>
      </div>
    </div>
  );
};

export default ConsentBanner;
