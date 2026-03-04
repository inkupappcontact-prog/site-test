import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, BookOpen, ShoppingBag, Clock, Star, ChevronRight, ChevronDown } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1755523155740-2575998b03c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25rZXklMjBncmF6aW5nJTIwZ3JlZW4lMjBmaWVsZCUyMHN1bm55fGVufDF8fHx8MTc3MjYyMDg2Nnww&ixlib=rb-4.1.0&q=80&w=1080";
const donkeyPortrait = "https://images.unsplash.com/photo-1627507257749-73bd64a21f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZG9ua2V5JTIwcG9ydHJhaXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MjYyMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const familyFarm = "https://images.unsplash.com/photo-1770374934512-7ef430c3d2f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBmYXJtJTIwdmlzaXQlMjBncmVlbiUyMG1lYWRvd3xlbnwxfHx8fDE3NzI2MjA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const ICON_SIZE = 28;
const HERO_ANIMATION_Y = 40;
const FONT_WEIGHT_BOLD = 700;
const FONT_WEIGHT_SEMIBOLD = 600;
const SCROLL_INDICATOR_HEIGHT = 48;
const INTRO_ANIMATION_X = 30;
const PORTRAIT_IMG_WIDTH = 320;
const PORTRAIT_IMG_HEIGHT = 360;
const FAMILY_IMG_WIDTH = 380;
const FAMILY_IMG_HEIGHT = 280;

const highlights = [
  {
    icon: <BookOpen size={ICON_SIZE} />,
    title: "Mission Pédagogique",
    desc: "Des ateliers et visites guidées pour les classes scolaires et les familles qui veulent découvrir la vie à la ferme.",
    color: "#4a7c59",
    link: "/le-parc",
  },
  {
    icon: <Heart size={ICON_SIZE} />,
    title: "Nos Ânes",
    desc: "Rencontrez Fripouille, Caramel, Pomponette et toute notre famille asinée dans leurs portraits et anecdotes.",
    color: "#c4703a",
    link: "/nos-anes",
  },
  {
    icon: <ShoppingBag size={ICON_SIZE} />,
    title: "Boutique Artisanale",
    desc: "Savons, peluches, cartes et bien d'autres trésors fabriqués avec amour à la ferme ou par des artisans locaux.",
    color: "#a07840",
    link: "/boutique",
  },
  {
    icon: <Clock size={ICON_SIZE} />,
    title: "Infos & Contact",
    desc: "Horaires, tarifs et comment nous retrouver. Le parc est ouvert du mardi au dimanche, de 10h à 18h.",
    color: "#5a6e8e",
    link: "/infos-pratiques",
  },
];

const testimonials = [
  {
    text: "Une visite magique avec mes enfants ! Les ânes sont tellement doux et les explications de Laurence sont passionnantes.",
    author: "Marie-Claire, maman de 3 enfants",
    stars: 5,
  },
  {
    text: "Notre classe de CE2 a adoré cette sortie. Les enfants ont appris énormément et reparti avec des souvenirs plein les yeux !",
    author: "M. Dubois, instituteur",
    stars: 5,
  },
  {
    text: "Un endroit hors du temps, ressourçant et authentique. Les ânes ont quelque chose de vraiment apaisant…",
    author: "Sophie & Thomas, en weekend",
    stars: 5,
  },
];

export function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(30,50,20,0.45) 0%, rgba(20,35,10,0.65) 100%)" }}
        />
        <div className="relative flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 md:py-20" style={{ minHeight: "85vh" }}>
          <motion.div
            initial={{ opacity: 0, y: HERO_ANIMATION_Y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="mb-4 flex justify-center">
              <span
                className="px-4 py-1.5 rounded-full text-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#f0e8d0", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(4px)" }}
              >
                Ferme pédagogique en pleine nature
              </span>
            </div>
            <h1
              className="mb-4 sm:mb-6 leading-tight"
              style={{ color: "white", fontSize: "clamp(1.8rem, 8vw, 4rem)", fontWeight: FONT_WEIGHT_BOLD, fontFamily: "'Georgia', serif", textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
            >
              Bienvenue au<br />
              <span style={{ color: "#f5d68a" }}>Parc des Ânes</span>
            </h1>
            <p
              className="max-w-lg mx-auto mb-8 sm:mb-10"
              style={{ color: "#e8dfc4", fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)", lineHeight: "1.7", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              Venez à la rencontre de nos ânes adorables dans un cadre naturel et verdoyant.
              Une expérience inoubliable pour petits et grands, pleine de douceur et de découvertes.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <Link
                to="/nos-anes"
                className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-medium text-sm transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#4a7c59", color: "white", boxShadow: "0 4px 16px rgba(74,124,89,0.5)" }}
              >
                Découvrir nos ânes
              </Link>
              <Link
                to="/infos-pratiques"
                className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-medium text-sm transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", border: "1.5px solid rgba(255,255,255,0.5)", backdropFilter: "blur(4px)" }}
              >
                Préparer ma visite
              </Link>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown 
              size={32} 
              color="rgba(255,255,255,0.7)" 
              strokeWidth={2}
            />
          </motion.div>
        </div>
      </section>

      {/* INTRO LAURENCE */}
      <section style={{ backgroundColor: "#fff9f0" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -INTRO_ANIMATION_X }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ color: "#4a7c59", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Mot de la fondatrice
            </div>
            <h2 style={{ color: "#3a2a0e", fontSize: "1.9rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
              Bonjour, je suis Laurence
            </h2>
            <p style={{ color: "#5a4020", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
              Passionnée par les ânes depuis toujours, j'ai fondé le Parc des Ânes pour partager cet amour avec le plus grand nombre.
              Ici, dans notre écrin de nature, chaque visite est une invitation à ralentir, observer et s'émerveiller.
            </p>
            <p style={{ color: "#5a4020", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              Que vous veniez en famille, avec une classe scolaire ou simplement en quête de sérénité,
              nos ânes vous attendent avec leurs grandes oreilles et leur regard plein de tendresse.
            </p>
            <Link
              to="/le-parc"
              className="inline-flex items-center gap-2 transition-all hover:gap-3"
              style={{ color: "#4a7c59", fontWeight: FONT_WEIGHT_SEMIBOLD }}
            >
              En savoir plus sur le parc <ChevronRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={donkeyPortrait}
                alt="Un de nos ânes"
                className="rounded-2xl object-cover"
                style={{ width: PORTRAIT_IMG_WIDTH, height: PORTRAIT_IMG_HEIGHT, boxShadow: "0 8px 32px rgba(107,76,30,0.18)" }}
              />
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl"
                style={{ backgroundColor: "#4a7c59", color: "white", fontSize: "0.85rem", boxShadow: "0 4px 12px rgba(74,124,89,0.4)" }}
              >
                Caramel vous salue !
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section style={{ backgroundColor: "#f9f4ec" }} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div style={{ color: "#4a7c59", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Tout ce qu'on vous propose
            </div>
            <h2 style={{ color: "#3a2a0e", fontSize: "1.8rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
              Le Parc des Ânes, c'est…
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={h.link}
                  className="block h-full rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc", textDecoration: "none" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: h.color + "18", color: h.color }}
                  >
                    {h.icon}
                  </div>
                  <h3 style={{ color: "#2e1e08", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{h.title}</h3>
                  <p style={{ color: "#6a5030", fontSize: "0.88rem", lineHeight: "1.6" }}>{h.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: h.color }}>
                    Découvrir <ChevronRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT SECTION */}
      <section style={{ backgroundColor: "#eef5ec" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={familyFarm}
              alt="Famille en visite"
              className="rounded-2xl object-cover"
              style={{ width: FAMILY_IMG_WIDTH, height: FAMILY_IMG_HEIGHT, boxShadow: "0 8px 32px rgba(74,124,89,0.2)" }}
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ color: "#4a7c59", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Venez nous rendre visite !
            </div>
            <h2 style={{ color: "#3a2a0e", fontSize: "1.9rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
              Une journée inoubliable en famille
            </h2>
            <p style={{ color: "#5a4020", fontSize: "1rem", lineHeight: "1.8", marginBottom: "1rem" }}>
              Nourrissez les ânes, assistez à nos ateliers pédagogiques, promenez-vous dans nos prairies fleuries…
              Le Parc des Ânes est un lieu de vie où la nature reprend ses droits.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: "Ouvert", value: "Mar – Dim" },
                { label: "Horaires", value: "10h – 18h" },
                { label: "Adultes", value: "9€" },
                { label: "Enfants", value: "6€" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-3"
                  style={{ backgroundColor: "white", border: "1px solid #d4e8d4" }}
                >
                  <div style={{ color: "#4a7c59", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</div>
                  <div style={{ color: "#2e1e08", fontSize: "1.1rem", fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <Link
              to="/infos-pratiques"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "#4a7c59", color: "white" }}
            >
              Voir toutes les infos <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: "#fff9f0" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div style={{ color: "#c4703a", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Ce qu'on dit de nous
            </div>
            <h2 style={{ color: "#3a2a0e", fontSize: "1.8rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
              Ils ont adoré leur visite
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc", boxShadow: "0 2px 12px rgba(107,76,30,0.06)" }}
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={`star-${t.author}-${j}`} size={15} fill="#f5c842" color="#f5c842" />
                  ))}
                </div>
                <p style={{ color: "#5a4020", fontSize: "0.92rem", lineHeight: "1.7", marginBottom: "1rem", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ color: "#4a7c59", fontSize: "0.82rem", fontWeight: 600 }}>— {t.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DON */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #4a7c59 0%, #3d5c40 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <div className="mb-4"></div>
          <h2 style={{ color: "white", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
            Soutenez le Parc des Ânes
          </h2>
          <p style={{ color: "#c8e0c0", fontSize: "1rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
            Vos dons nous permettent d'entretenir le parc, de soigner nos animaux et de développer nos programmes pédagogiques pour les écoles.
          </p>
          <Link
            to="/dons"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
            style={{ backgroundColor: "#f5d68a", color: "#3a2a0e", boxShadow: "0 4px 16px rgba(245,214,138,0.4)" }}
          >
            Faire un don
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
