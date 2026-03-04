import { Link } from "react-router";
import { motion } from "motion/react";
import { Users, BookOpen, TreePine, ChevronRight, Heart } from "lucide-react";

const farmImg = "https://images.unsplash.com/photo-1764942988888-c541abb5b1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25rZXklMjBmYXJtJTIwbmF0dXJlJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzcyNjIwODYyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const schoolImg = "https://images.unsplash.com/photo-1653184860948-3e215c726452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nJTIwYW5pbWFscyUyMG91dGRvb3J8ZW58MXx8fHwxNzcyNjIwODY3fDA&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Bienveillance",
    desc: "Chaque animal est traité avec soin, respect et tendresse. Le bien-être de nos ânes est notre priorité absolue.",
    color: "#c4703a",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Pédagogie",
    desc: "Nous croyons que l'apprentissage passe par l'expérience directe avec les animaux et la nature.",
    color: "#4a7c59",
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: "Nature",
    desc: "Notre ferme est un havre de verdure où biodiversité, jardins et prairies se côtoient harmonieusement.",
    color: "#5a6e3a",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Accessibilité",
    desc: "Nous accueillons familles, écoles, seniors et personnes en situation de handicap avec égale attention.",
    color: "#5a6e8e",
  },
];

const FARM_IMG_WIDTH = 380;
const FARM_IMG_HEIGHT = 280;
const SCHOOL_IMG_WIDTH = 360;
const SCHOOL_IMG_HEIGHT = 240;
const FONT_WEIGHT_BOLD = 700;
const ANIMATION_X = 30;
const DONKEYS_COUNT = 12;

const programs = [
  {
    title: "Sorties scolaires",
    audience: "Maternelle → Lycée",
    desc: "Des visites adaptées à chaque niveau scolaire, avec ateliers pratiques, observations et carnets pédagogiques.",
    duration: "2h à la journée",
  },
  {
    title: "Visites en famille",
    audience: "Tous les âges",
    desc: "Nourrissage, brossage, balade et découverte libre du parc. Une expérience sensorielle complète pour toute la famille.",
    duration: "Libre ou guidée",
  },
  {
    title: "Groupes & associations",
    audience: "Sur réservation",
    desc: "Ateliers thérapeutiques, team-building nature, sorties EHPAD, accueil de groupes spécialisés sur demande.",
    duration: "Sur devis",
  },
  {
    title: "Ateliers nature",
    desc: "Initiation au jardinage, observation des insectes, découverte des plantes sauvages et compostage.",
    audience: "Dès 4 ans",
    duration: "1h30",
  },
];

export function LeParc() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #eef5ec 0%, #f9f4ec 100%)",
          borderBottom: "1.5px solid #d8e8d0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div style={{ color: "#4a7c59", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Notre histoire
          </div>
          <h1 style={{ color: "#3a2a0e", fontSize: "2.5rem", fontWeight: FONT_WEIGHT_BOLD, lineHeight: 1.2, marginBottom: "1.25rem", fontFamily: "'Georgia', serif" }}>
            Le Parc des Ânes
          </h1>
          <p style={{ color: "#5a4020", fontSize: "1.1rem", lineHeight: "1.8" }}>
            Niché dans un écrin de verdure, le Parc des Ânes est bien plus qu'une ferme :
            c'est un lieu de vie, de partage et d'émerveillement, où hommes et animaux coexistent en harmonie.
          </p>
        </motion.div>
      </section>

      {/* Notre histoire */}
      <section style={{ backgroundColor: "#fff9f0" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -ANIMATION_X }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={farmImg}
              alt="Le parc"
              className="rounded-2xl object-cover"
              style={{ width: FARM_IMG_WIDTH, height: FARM_IMG_HEIGHT, boxShadow: "0 8px 32px rgba(107,76,30,0.15)" }}
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: ANIMATION_X }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ color: "#4a7c59", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Comment tout a commencé
            </div>
            <h2 style={{ color: "#3a2a0e", fontSize: "1.7rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
              Une passion devenue un lieu de vie
            </h2>
            <p style={{ color: "#5a4020", fontSize: "0.98rem", lineHeight: "1.8", marginBottom: "0.9rem" }}>
              Tout a commencé avec Fripouille, notre premier âne adopté il y a plus de 12 ans. Devant la joie
              qu'il procurait à quiconque croisait son chemin, Laurence a eu une idée : pourquoi ne pas partager
              cette magie avec le plus grand nombre ?
            </p>
            <p style={{ color: "#5a4020", fontSize: "0.98rem", lineHeight: "1.8", marginBottom: "0.9rem" }}>
              Aujourd'hui, le Parc des Ânes s'étend sur 8 hectares de prairies et de forêts, et accueille
              plus de 3 000 visiteurs chaque année. Nos {DONKEYS_COUNT} ânes (et quelques autres animaux invités !)
              y coulent des jours heureux, entourés de soins attentifs.
            </p>
            <p style={{ color: "#5a4020", fontSize: "0.98rem", lineHeight: "1.8" }}>
              Labellisé "Tourisme & Handicap", nous mettons tout en œuvre pour que chaque visiteur,
              quel que soit son âge ou ses besoins, puisse profiter pleinement de l'expérience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section style={{ backgroundColor: "#f9f4ec" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div style={{ color: "#4a7c59", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Ce qui nous guide
            </div>
            <h2 style={{ color: "#3a2a0e", fontSize: "1.8rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
              Nos valeurs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 rounded-2xl p-6"
                style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc" }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: v.color + "18", color: v.color }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 style={{ color: "#2e1e08", fontSize: "1rem", fontWeight: 700, marginBottom: "0.3rem" }}>{v.title}</h3>
                  <p style={{ color: "#6a5030", fontSize: "0.88rem", lineHeight: "1.6" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission pédagogique */}
      <section style={{ backgroundColor: "#eef5ec" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ color: "#4a7c59", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Notre raison d'être
              </div>
              <h2 style={{ color: "#3a2a0e", fontSize: "1.8rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
                Une mission pédagogique au cœur de tout
              </h2>
              <p style={{ color: "#3a4a30", fontSize: "0.98rem", lineHeight: "1.8", marginBottom: "0.9rem" }}>
                Le Parc des Ânes est avant tout un espace d'éducation à la nature et au vivant.
                Nous accueillons chaque année des centaines de classes scolaires, en adaptant nos programmes
                aux référentiels de l'Éducation Nationale.
              </p>
              <p style={{ color: "#3a4a30", fontSize: "0.98rem", lineHeight: "1.8" }}>
                Nos animateurs diplômés en médiation animale accompagnent les groupes avec bienveillance,
                encourageant la curiosité, l'empathie et le respect du vivant.
              </p>
            </motion.div>
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={schoolImg}
                alt="Sortie scolaire"
                className="rounded-2xl object-cover"
                style={{ width: SCHOOL_IMG_WIDTH, height: SCHOOL_IMG_HEIGHT, boxShadow: "0 8px 32px rgba(74,124,89,0.2)" }}
              />
            </motion.div>
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "white", border: "1.5px solid #c8dfc0" }}
              >
                <h3 style={{ color: "#2e1e08", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.25rem" }}>{p.title}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: "#4a7c5918", color: "#4a7c59" }}>
                    {p.audience}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: "#c4703a18", color: "#c4703a" }}>
                    {p.duration}
                  </span>
                </div>
                <p style={{ color: "#3a4a30", fontSize: "0.87rem", lineHeight: "1.6" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#fff9f0" }} className="py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 style={{ color: "#3a2a0e", fontSize: "1.6rem", fontWeight: 700, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
            Envie de venir nous rendre visite ?
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/infos-pratiques"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "#4a7c59", color: "white" }}
            >
              Horaires & Tarifs <ChevronRight size={16} />
            </Link>
            <Link
              to="/nos-anes"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "white", color: "#4a7c59", border: "1.5px solid #4a7c59" }}
            >
              Rencontrer nos ânes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}