"use client";

import { useEffect, useState } from "react";
import {
  hasGlobalPrivacyControl,
  isAnalyticsAllowed,
  setConsent,
} from "@/lib/analytics";

const ConsentToggle = () => {
  const [allowed, setAllowed] = useState(false);
  const [gpc, setGpc] = useState(false);

  // Read storage after mount so server and client render the same markup.
  useEffect(() => {
    setAllowed(isAnalyticsAllowed());
    setGpc(hasGlobalPrivacyControl());
  }, []);

  return (
    <label className="flex items-center gap-3">
      <input
        type="checkbox"
        className="toggle toggle-success"
        checked={allowed}
        onChange={(e) => {
          setAllowed(e.target.checked);
          setConsent(e.target.checked);
        }}
      />
      <span>
        {gpc && !allowed
          ? "Analytics are off because your browser sent a Global Privacy Control signal."
          : `Anonymous analytics are ${allowed ? "on" : "off"}.`}
      </span>
    </label>
  );
};

export default ConsentToggle;
