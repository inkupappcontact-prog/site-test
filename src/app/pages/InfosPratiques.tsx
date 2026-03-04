import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Euro, Check, Car, Train, ChevronDown } from "lucide-react";

const FONT_WEIGHT_BOLD = 700;
const FONT_WEIGHT_OPEN = 600;
const FONT_WEIGHT_CLOSED = 400;
const MAP_IMAGE_HEIGHT = 180;
const PARKING_SPACES = 50;

const familyFarm = "https://images.unsplash.com/photo-1770374934512-7ef430c3d2f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBmYXJtJTIwdmlzaXQlMjBncmVlbiUyMG1lYWRvd3xlbnwxfHx8fDE3NzI2MjA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const schedules = [
  { day: "Lundi", hours: "Fermé", open: false },
  { day: "Mardi", hours: "10h – 18h", open: true },
  { day: "Mercredi", hours: "10h – 18h", open: true },
  { day: "Jeudi", hours: "10h – 18h", open: true },
  { day: "Vendredi", hours: "10h – 18h", open: true },
  { day: "Samedi", hours: "9h30 – 19h", open: true },
  { day: "Dimanche", hours: "9h30 – 19h", open: true },
];

const today = new Date().toLocaleDateString("fr-FR", { weekday: "long" });
const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1);

const tarifsList = [
  {
    category: "Adulte",
    price: "9€",
    desc: "À partir de 18 ans",
    color: "#4a7c59",
  },
  {
    category: "Enfant",
    price: "6€",
    desc: "3 à 17 ans",
    color: "#c4703a",
  },
  {
    category: "Moins de 3 ans",
    price: "Gratuit",
    desc: "Avec un adulte",
    color: "#5a6e8e",
  },
  {
    category: "Famille",
    price: "28€",
    desc: "2 adultes + 2 enfants",
    color: "#9a5a8a",
  },
  {
    category: "Scolaire",
    price: "Sur devis",
    desc: "Dès 10 élèves",
    color: "#a07840",
  },
];

const inclusList = [
  "Entrée dans le parc",
  "Nourrissage des ânes",
  "Accès aux prairies et sentiers",
  "Livret découverte offert aux enfants",
  "Parking gratuit",
];

const faqsList = [
  {
    q: "Peut-on venir sans réservation ?",
    a: "Oui, les entrées individuelles et familiales se font sans réservation, dans la limite des places disponibles. Pour les groupes et les sorties scolaires, une réservation préalable est indispensable.",
  },
  {
    q: "Le parc est-il accessible aux personnes à mobilité réduite ?",
    a: "Absolument ! Le Parc des Ânes est labellisé 'Tourisme & Handicap'. Les allées principales sont carrossables, des sanitaires adaptés sont disponibles et nos animateurs sont formés à l'accueil de tous les publics.",
  },
  {
    q: "Les animaux sont-ils en contact direct avec les visiteurs ?",
    a: "Oui, c'est même l'un des points forts de notre visite ! Vous pouvez nourrir, brosser et câliner nos ânes, toujours sous la supervision de nos animateurs pour le bien-être de tous.",
  },
  {
    q: "Peut-on apporter un pique-nique ?",
    a: "Bien sûr ! Nous disposons de tables de pique-nique ombragées dans un cadre naturel magnifique. Une petite buvette est également disponible les week-ends.",
  },
  {
    q: "Que faire en cas de mauvais temps ?",
    a: "Le parc reste ouvert par temps de pluie légère. Des abris sont disponibles. En cas d'intempéries majeures, le parc peut exceptionnellement fermer — nous le communiquons sur nos réseaux sociaux.",
  },
  {
    q: "Les chiens sont-ils acceptés ?",
    a: "Les chiens tenus en laisse sont acceptés, mais ne doivent pas approcher des enclos des ânes pour ne pas les stresser. La présence de chiens est sous la responsabilité de leurs maîtres.",
  },
];

export function InfosPratiques() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #f0e8d8 0%, #f9f4ec 100%)", borderBottom: "1.5px solid #e8d8bc" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div style={{ color: "#a07840", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Préparez votre visite
          </div>
          <h1 style={{ color: "#3a2a0e", fontSize: "2.5rem", fontWeight: FONT_WEIGHT_BOLD, lineHeight: 1.2, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
            Infos Pratiques
          </h1>
          <p style={{ color: "#5a4020", fontSize: "1.05rem", lineHeight: "1.8" }}>
            Tout ce qu'il faut savoir avant de venir nous rendre visite : horaires, tarifs, accès et contact.
          </p>
        </motion.div>
      </section>

      {/* Horaires + Tarifs */}
      <section style={{ backgroundColor: "#f9f4ec" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-7"
            style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc", boxShadow: "0 4px 20px rgba(107,76,30,0.07)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Clock size={20} color="#4a7c59" />
              <h2 style={{ color: "#3a2a0e", fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
                Horaires d'ouverture
              </h2>
            </div>
            <div className="space-y-2">
              {schedules.map((s) => {
                const isToday = s.day === capitalizedToday;
                return (
                  <div
                    key={s.day}
                    className="flex justify-between items-center px-4 py-2.5 rounded-xl"
                    style={{
                      backgroundColor: isToday ? "#4a7c5912" : "transparent",
                      border: isToday ? "1.5px solid #4a7c5930" : "1.5px solid transparent",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ color: isToday ? "#4a7c59" : "#5a4020", fontWeight: isToday ? 700 : 400, fontSize: "0.9rem" }}>
                        {s.day}
                      </span>
                      {isToday && (
                        <span className="px-1.5 py-0.5 rounded text-xs" style={{ backgroundColor: "#4a7c59", color: "white" }}>
                          Auj.
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        color: s.open
                          ? isToday ? "#4a7c59" : "#2e1e08"
                          : "#c0a080",
                        fontWeight: s.open ? FONT_WEIGHT_OPEN : FONT_WEIGHT_CLOSED,
                        fontSize: "0.9rem",
                      }}
                    >
                      {s.hours}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 rounded-xl p-3" style={{ backgroundColor: "#fff9f0", border: "1px solid #e8d8bc" }}>
              <p style={{ color: "#8a6a40", fontSize: "0.82rem" }}>
                <strong>Vacances scolaires :</strong> Le parc est ouvert tous les jours (y compris le lundi) de 9h30 à 19h.
              </p>
            </div>
          </motion.div>

          {/* Tarifs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-7"
            style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc", boxShadow: "0 4px 20px rgba(107,76,30,0.07)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Euro size={20} color="#a07840" />
              <h2 style={{ color: "#3a2a0e", fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
                Nos Tarifs
              </h2>
            </div>
            <div className="space-y-2">
              {tarifsList.map((t) => (
                <div
                  key={t.category}
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{ backgroundColor: "#f9f4ec", border: "1.5px solid #e8d8bc" }}
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <div style={{ color: "#2e1e08", fontSize: "0.9rem", fontWeight: 600 }}>{t.category}</div>
                      <div style={{ color: "#a09070", fontSize: "0.75rem" }}>{t.desc}</div>
                    </div>
                  </div>
                  <span style={{ color: t.color, fontSize: "1.05rem", fontWeight: 700 }}>{t.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <div style={{ color: "#5a4020", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                Compris dans le tarif :
              </div>
              <div className="space-y-1">
                {inclusList.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={13} color="#4a7c59" />
                    <span style={{ color: "#5a4020", fontSize: "0.82rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accès & Contact */}
      <section style={{ backgroundColor: "#fff9f0" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Accès */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl p-7 h-full" style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc" }}>
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={20} color="#c4703a" />
                <h2 style={{ color: "#3a2a0e", fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
                  Comment nous trouver
                </h2>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden" style={{ height: MAP_IMAGE_HEIGHT }}>
                  <img src={familyFarm} alt="Chemin vers le parc" className="w-full h-full object-cover" />
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "#f9f4ec" }}>
                  <MapPin size={18} color="#c4703a" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <div style={{ color: "#2e1e08", fontSize: "0.88rem", fontWeight: 600 }}>Adresse</div>
                    <div style={{ color: "#6a5030", fontSize: "0.85rem" }}>Route de la Forêt<br />12345 Campagne-en-Nature</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "#f9f4ec" }}>
                  <Car size={18} color="#4a7c59" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <div style={{ color: "#2e1e08", fontSize: "0.88rem", fontWeight: 600 }}>En voiture</div>
                    <div style={{ color: "#6a5030", fontSize: "0.85rem" }}>15 min depuis l'autoroute A75 (sortie 12). Parking gratuit sur place ({PARKING_SPACES} places).</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "#f9f4ec" }}>
                  <Train size={18} color="#5a6e8e" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <div style={{ color: "#2e1e08", fontSize: "0.88rem", fontWeight: 600 }}>En train + navette</div>
                    <div style={{ color: "#6a5030", fontSize: "0.85rem" }}>Gare de Villebonne (TER). Navette gratuite le week-end sur réservation.</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{ backgroundColor: "#4a7c59", color: "white" }}
                  >
                    Voir sur Google Maps
                  </a>
                  <a
                    href="https://maps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{ backgroundColor: "#f9f4ec", color: "#5a4020", border: "1.5px solid #e8d8bc" }}
                  >
                    Apple Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl p-7 h-full" style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc" }}>
              <div className="flex items-center gap-2 mb-2">
                <Mail size={20} color="#5a6e8e" />
                <h2 style={{ color: "#3a2a0e", fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
                  Nous contacter
                </h2>
              </div>

              <div className="flex gap-4 mb-5">
                <a href="tel:0612345678" className="flex items-center gap-2 text-sm" style={{ color: "#4a7c59" }}>
                  <Phone size={14} /> 06 12 34 56 78
                </a>
                <a href="mailto:bonjour@parcdanes.fr" className="flex items-center gap-2 text-sm" style={{ color: "#4a7c59" }}>
                  <Mail size={14} /> bonjour@parcdanes.fr
                </a>
              </div>

              {formSent ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#eef5ec" }}>
                    <Check size={32} color="#4a7c59" />
                  </div>
                  <h3 style={{ color: "#3a2a0e", fontSize: "1.1rem", fontWeight: 700 }}>Message envoyé !</h3>
                  <p style={{ color: "#6a5030", fontSize: "0.88rem", textAlign: "center" }}>
                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais, généralement sous 24–48h.
                  </p>
                  <button
                    onClick={() => { setFormSent(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                    style={{ color: "#4a7c59", fontSize: "0.85rem" }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label style={{ color: "#5a4020", fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.3rem" }}>
                        Nom / Prénom *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full px-3 py-2.5 rounded-xl outline-none text-sm"
                        style={{ border: "1.5px solid #e8d8bc", backgroundColor: "#f9f4ec", color: "#2e1e08" }}
                      />
                    </div>
                    <div>
                      <label style={{ color: "#5a4020", fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.3rem" }}>
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.fr"
                        className="w-full px-3 py-2.5 rounded-xl outline-none text-sm"
                        style={{ border: "1.5px solid #e8d8bc", backgroundColor: "#f9f4ec", color: "#2e1e08" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ color: "#5a4020", fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.3rem" }}>
                      Sujet *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl outline-none text-sm"
                      style={{ border: "1.5px solid #e8d8bc", backgroundColor: "#f9f4ec", color: formData.subject ? "#2e1e08" : "#a09070" }}
                    >
                      <option value="" disabled>Choisir un sujet</option>
                      <option value="visite">Renseignement sur les visites</option>
                      <option value="scolaire">Sortie scolaire / groupe</option>
                      <option value="boutique">Commande boutique</option>
                      <option value="don">Don et partenariat</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ color: "#5a4020", fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.3rem" }}>
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      rows={4}
                      className="w-full px-3 py-2.5 rounded-xl outline-none text-sm resize-none"
                      style={{ border: "1.5px solid #e8d8bc", backgroundColor: "#f9f4ec", color: "#2e1e08" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{ backgroundColor: "#4a7c59", color: "white" }}
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#eef5ec" }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div style={{ color: "#4a7c59", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Questions fréquentes
            </div>
            <h2 style={{ color: "#3a2a0e", fontSize: "1.8rem", fontWeight: 700, fontFamily: "'Georgia', serif" }}>
              Vous avez des questions ?
            </h2>
          </div>
          <div className="space-y-3">
            {faqsList.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "white", border: "1.5px solid #c8dfc0" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span style={{ color: "#2e1e08", fontSize: "0.95rem", fontWeight: 600, paddingRight: "1rem" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#4a7c59"
                    style={{
                      flexShrink: 0,
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="px-6 pb-5"
                      style={{ color: "#3a4a30", fontSize: "0.9rem", lineHeight: "1.7", borderTop: "1px solid #d8e8d0" }}
                    >
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
