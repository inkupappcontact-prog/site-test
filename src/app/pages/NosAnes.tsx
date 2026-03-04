import { motion } from "motion/react";
import { useState } from "react";

const donkeyPortrait = "https://images.unsplash.com/photo-1627507257749-73bd64a21f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZG9ua2V5JTIwcG9ydHJhaXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MjYyMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const babyDonkey = "https://images.unsplash.com/photo-1637516713908-c0fad1d47e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25rZXklMjBiYWJ5JTIwZm9hbCUyMGN1dGUlMjBhbmltYWx8ZW58MXx8fHwxNzcyNjIwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const donkeyEars = "https://images.unsplash.com/photo-1712240346722-68e4c315c4bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25rZXklMjBlYXJzJTIwZnVubnklMjBjbG9zZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjYyMDg4M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const donkeyGrazing = "https://images.unsplash.com/photo-1755523155740-2575998b03c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25rZXklMjBncmF6aW5nJTIwZ3JlZW4lMjBmaWVsZCUyMHN1bm55fGVufDF8fHx8MTc3MjYyMDg2Nnww&ixlib=rb-4.1.0&q=80&w=1080";

const CARD_IMAGE_HEIGHT = 220;
const MODAL_IMAGE_HEIGHT = 240;
const DESCRIPTION_PREVIEW_LENGTH = 120;
const FONT_WEIGHT_BOLD = 700;
const MODAL_SCALE_INITIAL = 0.95;

const donkeys = [
  {
    name: "Fripouille",
    age: "12 ans",
    race: "Âne normand",
    color: "#c4703a",
    image: donkeyPortrait,
    personality: "Espiègle & affectueux",
    description:
      "Le doyen de la ferme et le premier amour de Laurence ! Fripouille est arrivé il y a 12 ans, à peine sevré, et n'a jamais quitté le domaine. Avec ses grandes oreilles et son regard malicieux, il a conquis le cœur de milliers de visiteurs.",
    funFact: "Fripouille sait ouvrir les portails avec son museau et vole régulièrement les sandwichs des pique-niqueurs !",
    loves: ["Les carottes", "Se faire brosser", "Faire la sieste au soleil"],
  },
  {
    name: "Caramel",
    age: "7 ans",
    race: "Âne de Provence",
    color: "#a07840",
    image: donkeyGrazing,
    personality: "Doux & rêveur",
    description:
      "Caramel est l'âme sensible de la ferme. Son pelage couleur miel et ses yeux doux font fondre tous ceux qui le croisent. Il adore les enfants et se laisse volontiers câliner pendant des heures.",
    funFact: "Caramel reconnaît le son du sac de croquettes à plus de 200 mètres. Rien ne lui échappe quand il s'agit de nourriture !",
    loves: ["Les pommes", "La musique douce", "Regarder les couchers de soleil"],
  },
  {
    name: "Pomponette",
    age: "5 ans",
    race: "Âne miniature",
    color: "#9a5a8a",
    image: donkeyEars,
    personality: "Coquette & curieuse",
    description:
      "Pomponette est notre petite princesse ! Malgré sa taille minuscule (seulement 85 cm au garrot !), elle a un caractère bien trempé. Elle est la chouchoute des enfants qui adorent la brosser et lui tresser des fleurs dans la crinière.",
    funFact: "Pomponette a sa propre opinion sur tout. Elle dit 'non' avec sa tête quand on lui demande quelque chose qu'elle ne veut pas faire !",
    loves: ["Les fleurs fraîches", "Se faire admirer", "Jouer à cache-cache"],
  },
  {
    name: "Hercule",
    age: "9 ans",
    race: "Baudet du Poitou",
    color: "#5a6e8e",
    image: babyDonkey,
    personality: "Majestueux & protecteur",
    description:
      "Hercule est notre géant au grand cœur. Avec son pelage long et bouclé caractéristique du Baudet du Poitou, il attire tous les regards. Malgré son impressionnante stature, il est d'une douceur absolue.",
    funFact: "Hercule est le gardien du troupeau. Il veille sur les autres ânes la nuit et brait si quelque chose l'inquiète. Un vrai chef de famille !",
    loves: ["Les bains de boue", "Protéger ses amis", "Les longues promenades"],
  },
  {
    name: "Biscotte",
    age: "3 ans",
    race: "Âne d'Auvergne",
    color: "#4a7c59",
    image: donkeyPortrait,
    personality: "Malicieuse & enjouée",
    description:
      "La petite dernière de la ferme, arrivée il y a 3 ans après un sauvetage ! Biscotte était en état de sous-nutrition quand nous l'avons recueillie. Aujourd'hui, elle rayonne de santé et de joie de vivre.",
    funFact: "Biscotte a inventé son propre jeu : elle vole les casquettes des visiteurs et les trimballe fièrement dans la prairie !",
    loves: ["Courir dans les prairies", "Les biscottes (bien sûr !)", "Faire des bêtises avec Fripouille"],
  },
  {
    name: "Grisou",
    age: "11 ans",
    race: "Âne gris cendré",
    color: "#6a7a8a",
    image: donkeyGrazing,
    personality: "Sage & méditatif",
    description:
      "Grisou est notre philosophe. Il passe ses journées à observer le monde avec sérénité, ruminant (au sens figuré !) de profondes pensées asinées. Sa présence apaisante est particulièrement bénéfique lors de nos séances de médiation animale.",
    funFact: "Grisou prédit la météo ! Il se réfugie toujours sous l'auvent exactement 30 minutes avant la pluie. Plus fiable que Météo France !",
    loves: ["La contemplation", "Les vieux arbres", "La pluie (vue de l'intérieur)"],
  },
];

const anecdotes = [
  {
    title: "Le saviez-vous ?",
    text: "Les ânes ont une mémoire exceptionnelle. Ils peuvent se souvenir d'un endroit ou d'une personne après 25 ans de séparation !",
  },
  {
    title: "L'âge dans les dents",
    text: "Pour connaître l'âge d'un âne, on peut examiner ses dents ! Jusqu'à 5 ans, les dents poussent. Après, elles s'usent progressivement.",
  },
  {
    title: "Des pieds solides",
    text: "Les sabots d'un âne sont bien plus durs que ceux d'un cheval. Ils sont parfaitement adaptés aux terrains rocheux et secs.",
  },
  {
    title: "Le fameux braiment",
    text: "Un âne peut braiment s'entendre jusqu'à 3 km de distance ! Cela leur servait à communiquer dans les paysages désertiques de leur origine.",
  },
  {
    title: "Debout même la nuit",
    text: "Les ânes dorment peu et préfèrent faire des siestes debout. Ils ne s'allongent vraiment que pour les phases de sommeil profond.",
  },
  {
    title: "Animaux sociaux",
    text: "Les ânes sont très sociaux et souffrent de la solitude. C'est pourquoi ils vivent toujours en groupe chez nous !",
  },
];

export function NosAnes() {
  const [selectedDonkey, setSelectedDonkey] = useState<typeof donkeys[0] | null>(null);

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #fff9f0 0%, #f0e8d8 100%)", borderBottom: "1.5px solid #e8d8bc" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div style={{ color: "#c4703a", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Faites leur connaissance
          </div>
          <h1 style={{ color: "#3a2a0e", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
            Nos adorables Ânes
          </h1>
          <p style={{ color: "#5a4020", fontSize: "1.1rem", lineHeight: "1.8" }}>
            Chaque âne a sa personnalité, son histoire et ses petites manies. Découvrez les portraits
            de nos résidents à longues oreilles et leurs anecdotes craquantes !
          </p>
        </motion.div>
      </section>

      {/* Portraits des ânes */}
      <section style={{ backgroundColor: "#f9f4ec" }} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {donkeys.map((donkey, i) => (
              <motion.div
                key={donkey.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc", boxShadow: "0 2px 12px rgba(107,76,30,0.08)" }}
                onClick={() => setSelectedDonkey(donkey)}
              >
                <div className="relative overflow-hidden" style={{ height: CARD_IMAGE_HEIGHT }}>
                  <img
                    src={donkey.image}
                    alt={donkey.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: donkey.color, color: "white" }}
                  >
                    {donkey.personality}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 style={{ color: "#2e1e08", fontSize: "1.2rem", fontWeight: 700 }}>
                        {donkey.name}
                      </h3>
                      <div style={{ color: "#8a6a40", fontSize: "0.82rem", marginTop: "0.15rem" }}>
                        {donkey.race} • {donkey.age}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "#6a5030", fontSize: "0.87rem", lineHeight: "1.6", marginBottom: "0.75rem" }}>
                    {donkey.description.slice(0, DESCRIPTION_PREVIEW_LENGTH)}…
                  </p>
                  <button
                    className="text-sm font-medium transition-colors"
                    style={{ color: donkey.color }}
                    onClick={() => setSelectedDonkey(donkey)}
                  >
                    Lire son portrait complet →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal portrait */}
      {selectedDonkey && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(20,12,4,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setSelectedDonkey(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: MODAL_SCALE_INITIAL }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: MODAL_SCALE_INITIAL }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl overflow-hidden max-w-lg w-full"
            style={{ backgroundColor: "white", boxShadow: `0 24px 80px rgba(0,0,0,0.25)`, maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ height: MODAL_IMAGE_HEIGHT }}>
              <img
                src={selectedDonkey.image}
                alt={selectedDonkey.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDonkey(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,0,0,0.4)", color: "white", fontSize: "1.1rem" }}
              >
                ✕
              </button>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 mb-1">
                <span style={{ fontSize: "1.8rem" }}></span>
                <h2 style={{ color: "#2e1e08", fontSize: "1.6rem", fontWeight: FONT_WEIGHT_BOLD, fontFamily: "'Georgia', serif" }}>
                  {selectedDonkey.name}
                </h2>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: selectedDonkey.color + "20", color: selectedDonkey.color }}>
                  {selectedDonkey.race}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: "#f0e8d8", color: "#8a6a40" }}>
                  {selectedDonkey.age}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: selectedDonkey.color + "20", color: selectedDonkey.color }}>
                  {selectedDonkey.personality}
                </span>
              </div>
              <p style={{ color: "#5a4020", fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "1.25rem" }}>
                {selectedDonkey.description}
              </p>

              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "#fff9f0", border: "1px solid #e8d8bc" }}>
                <div style={{ color: "#c4703a", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                  Anecdote
                </div>
                <p style={{ color: "#5a4020", fontSize: "0.9rem", lineHeight: "1.7", fontStyle: "italic" }}>
                  {selectedDonkey.funFact}
                </p>
              </div>

              <div>
                <div style={{ color: "#4a7c59", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                  {selectedDonkey.name} adore…
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedDonkey.loves.map((love) => (
                    <span
                      key={love}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: "#eef5ec", color: "#3a5a3a" }}
                    >
                      {love}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Le saviez-vous */}
      <section style={{ backgroundColor: "#fff9f0" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div style={{ color: "#c4703a", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Fascinants & attachants
            </div>
            <h2 style={{ color: "#3a2a0e", fontSize: "1.8rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
              Le saviez-vous ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {anecdotes.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc" }}
              >
                <h3 style={{ color: "#2e1e08", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.5rem" }}>{a.title}</h3>
                <p style={{ color: "#6a5030", fontSize: "0.87rem", lineHeight: "1.6" }}>{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
