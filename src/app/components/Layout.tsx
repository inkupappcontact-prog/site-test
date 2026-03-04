import { Outlet, NavLink, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const FONT_WEIGHT_BOLD = 700;
const FONT_WEIGHT_SEMIBOLD = 600;
const SCROLL_THRESHOLD = 20;
const POSTAL_CODE = "12345";
const PHONE_NUMBER = "06 12 34 56 78";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/le-parc", label: "Le Parc" },
  { to: "/nos-anes", label: "Nos Ânes" },
  { to: "/boutique", label: "Boutique" },
  { to: "/dons", label: "Faire un Don" },
  { to: "/infos-pratiques", label: "Infos Pratiques" },
];

export function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f9f4ec", fontFamily: "'Nunito', 'Georgia', sans-serif" }}>
      {/* Navbar */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,252,244,0.97)" : "#fffcf4",
          boxShadow: scrolled ? "0 2px 12px rgba(107,76,30,0.10)" : "none",
          borderBottom: "1.5px solid #e8d8bc",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl select-none"></span>
            <div>
              <div style={{ color: "#4a7c59", fontFamily: "'Georgia', serif", fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
                Parc des Ânes
              </div>
              <div style={{ color: "#a07840", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "-2px" }}>
                Ferme pédagogique
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "hover:bg-amber-50"
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#4a7c59", color: "white" }
                    : { color: "#5a4020" }
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#4a7c59" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-1" style={{ backgroundColor: "#fffcf4", borderTop: "1.5px solid #e8d8bc" }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive ? "text-white" : "hover:bg-amber-50"
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#4a7c59", color: "white" }
                    : { color: "#5a4020" }
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#3d5c40", color: "#d8ead0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl"></span>
              <span style={{ color: "white", fontSize: "1.1rem", fontWeight: FONT_WEIGHT_BOLD }}>Parc des Ânes</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#b8d4b0", lineHeight: "1.6" }}>
              Une ferme pédagogique en pleine nature, où la douceur des ânes rencontre la curiosité des enfants et des adultes.
            </p>
          </div>
          <div>
            <h3 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.95rem", fontWeight: FONT_WEIGHT_SEMIBOLD }}>Navigation</h3>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{ color: "#b8d4b0", fontSize: "0.85rem", textDecoration: "none" }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ color: "white", marginBottom: "0.75rem", fontSize: "0.95rem", fontWeight: FONT_WEIGHT_SEMIBOLD }}>Contact</h3>
            <div className="space-y-1.5" style={{ fontSize: "0.85rem", color: "#b8d4b0" }}>
              <p>Route de la Forêt, {POSTAL_CODE} Campagne</p>
              <p>{PHONE_NUMBER}</p>
              <p>bonjour@parcdanes.fr</p>
              <p className="mt-3">Mar–Dim : 10h–18h</p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", padding: "1rem", fontSize: "0.75rem", color: "#8ab090" }}>
          © 2026 Parc des Ânes — Fait avec beaucoup d'amour
        </div>
      </footer>
    </div>
  );
}