import { useState } from "react";
import { Menu, X, Orbit } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["Internship", "#internship"],
  ["Skills", "#skills"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Orbit size={19} /></span>
          <span>Khushi<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s connect <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}