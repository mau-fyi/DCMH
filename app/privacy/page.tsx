import type { Metadata } from "next";
import ConsentToggle from "@/components/consent-toggle";

export const metadata: Metadata = {
  title: "Privacy Policy | DCMH Pantry",
};

const PrivacyPage = () => {
  return (
    <main className="container max-w-3xl space-y-6 py-10 [&_h2]:text-xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p>Effective October 9, 2026.</p>
      <p>
        This site is run by Davis Community Meals and Housing (DCMH) to show
        which pantry items we need. This policy explains what information the
        site collects, why, and the choices you have.
      </p>

      <section className="space-y-3">
        <h2>Analytics settings</h2>
        <ConsentToggle />
        <p>
          You can change this at any time. Turning it off takes effect
          immediately.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Anonymous analytics (only with your permission)</h2>
        <p>
          If you allow analytics, we use{" "}
          <a
            className="link"
            href="https://posthog.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            PostHog
          </a>{" "}
          to count visits. For each page you view, your browser sends PostHog
          the page address, the site that referred you, and standard browser
          information such as your browser type. PostHog turns this into an
          anonymous visitor ID on its servers, so it can count unique visitors
          without cookies or storing anything on your device. The page address
          and referring site are stored as sent. We have configured PostHog not
          to store your IP address.
        </p>
        <p>
          We do not record clicks, keystrokes, or screen sessions, and we do not
          build a profile of you. If you decline, or your browser sends a Global
          Privacy Control signal, the site does not load analytics at all unless
          you turn them on below.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Cookies and local storage</h2>
        <ul>
          <li>
            <strong>Login cookies</strong> (<code>__pa_at</code>,{" "}
            <code>__pa_rt</code>, <code>__pa_org_id</code>,{" "}
            <code>__pa_state</code>): set by our login provider,{" "}
            <a
              className="link"
              href="https://www.propelauth.com/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              PropelAuth
            </a>
            , only for DCMH staff who sign in. They are required to keep you
            signed in.
          </li>
          <li>
            <strong>
              <code>analytics-consent</code>
            </strong>{" "}
            (local storage): remembers your analytics choice.
          </li>
          <li>
            <strong>
              <code>theme</code>
            </strong>{" "}
            (local storage): remembers whether you chose light or dark mode.
          </li>
        </ul>
        <p>We do not use advertising or cross-site tracking cookies.</p>
      </section>

      <section className="space-y-3">
        <h2>Sharing</h2>
        <p>
          We do not sell or share your personal information for advertising.
        </p>
      </section>

      <section className="space-y-3">
        <h2>For more information</h2>
        <p>
          For more information about your rights and how your information is
          used, please see the{" "}
          <a href="https://daviscommunitymeals.org/privacy/">
            DCMH website privacy policy
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2>Contact</h2>
        <p>
          Questions or requests about your information can be sent through our{" "}
          <a
            className="link"
            href="https://daviscommunitymeals.org/contact-us/"
            target="_blank"
            rel="noreferrer"
          >
            contact page
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default PrivacyPage;
