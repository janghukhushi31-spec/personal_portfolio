import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>Designed & built with curiosity <span className="footer-heart">✦</span></span>
        <span>© {new Date().getFullYear()} Khushi Singh</span>
        <a href="#home" aria-label="Back to top">Back to top <ArrowUp size={15} /></a>
      </div>
    </footer>
  );
}