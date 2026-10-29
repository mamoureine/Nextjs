import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Marieme SALL to talk about a project or idea.",
};

export default function ContactPage() {
  return (
    <div className="container page-shell contact-page">
      <section className="page-intro">
        <p className="eyebrow">YOUR NEXT IDEA STARTS HERE</p>
        <h1>
          Let&apos;s start
          <br />
          <span>a conversation.</span>
        </h1>
        <p className="page-lede">
          Have a project, a question, or just want to say hello? I&apos;d love
          to hear from you.
        </p>
      </section>
      <section className="contact-card">
        <div className="contact-mark" aria-hidden="true">✳</div>
        <p className="eyebrow">THE BEST WAY TO REACH ME</p>
        <h2>Drop me a line.</h2>
        <p className="muted">
          Add your preferred email address here to make it easy for people to
          get in touch.
        </p>
        <Link className="button button-dark" href="mailto:hello@example.com">
          hello@example.com <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <div className="contact-back">
        <Link className="text-link" href="/projects">
          In the meantime, explore my projects <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
