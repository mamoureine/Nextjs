import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <Link className="wordmark" href="/">
          marieme<span>.</span>
        </Link>
        <p>Made with care, one detail at a time.</p>
        <span>© {new Date().getFullYear()} Marieme SALL</span>
      </div>
    </footer>
  );
}
