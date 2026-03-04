import { motion } from "motion/react";
import { useState } from "react";
import { Heart, Check } from "lucide-react";

const babyDonkey = "https://images.unsplash.com/photo-1637516713908-c0fad1d47e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25rZXklMjBiYWJ5JTIwZm9hbCUyMGN1dGUlMjBhbmltYWx8ZW58MXx8fHwxNzcyNjIwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const DEFAULT_AMOUNT = 20;
const DONATION_IMAGE_HEIGHT = 200;
const FONT_WEIGHT_BOLD = 700;
const HEART_ICON_SIZE = 36;
const ANIMATION_X = 30;
const presetAmounts = [5, 10, 20, 50, 100];

const impactsList = [
  { amount: 5, text: "Un mois de carottes pour Caramel" },
  { amount: 10, text: "Le foin d'une semaine pour nos ânes" },
  { amount: 20, text: "Une séance vétérinaire préventive" },
  { amount: 50, text: "Du matériel pédagogique pour une classe" },
  { amount: 100, text: "La rénovation d'un abri pour nos animaux" },
];

const sponsorsList = [
  { name: "La Famille Dupont", amount: "50€", message: "Continuez votre magnifique travail !" },
  { name: "École Marie Curie", amount: "30€", message: "Nos élèves adorent votre parc, merci !" },
  { name: "Sophie M.", amount: "15€", message: "Un petit geste pour vos adorables ânes" },
  { name: "Pierre & Nathalie", amount: "100€", message: "Votre ferme est un trésor, protégez-la !" },
];

export function Dons() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(DEFAULT_AMOUNT);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finalAmount || finalAmount <= 0) return;
    setSubmitted(true);
  };

  const getImpactText = (amount: number | null) => {
    if (!amount) return null;
    const sorted = [...impactsList].sort((a, b) => b.amount - a.amount);
    return sorted.find(i => amount >= i.amount) || impactsList[0];
  };

  const impact = getImpactText(finalAmount);

  if (submitted) {
    return (
      <div style={{ backgroundColor: "#f9f4ec", minHeight: "60vh" }} className="flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center rounded-3xl p-12"
          style={{ backgroundColor: "white", boxShadow: "0 8px 40px rgba(107,76,30,0.12)", border: "1.5px solid #d8e8d0" }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "#4a7c5918" }}
          >
            <Heart size={HEART_ICON_SIZE} fill="#4a7c59" color="#4a7c59" />
          </div>
          <h2 style={{ color: "#3a2a0e", fontSize: "1.8rem", fontWeight: FONT_WEIGHT_BOLD, marginBottom: "0.75rem", fontFamily: "'Georgia', serif" }}>
            Merci du fond du cœur
          </h2>
          <p style={{ color: "#5a4020", fontSize: "1rem", lineHeight: "1.8", marginBottom: "0.5rem" }}>
            Votre don de <strong>{finalAmount?.toFixed(2)}€</strong> va directement soutenir
            le bien-être de nos ânes et nos programmes pédagogiques.
          </p>
          <p style={{ color: "#5a4020", fontSize: "0.95rem", lineHeight: "1.7" }}>
            Un reçu vous sera envoyé par email. Fripouille, Caramel et toute la famille vous remercient !
          </p>
          <div className="mt-8 rounded-2xl p-4" style={{ backgroundColor: "#eef5ec" }}>
            <p style={{ color: "#3a5a3a", fontSize: "0.9rem" }}>
              Avec votre soutien, nous pouvons continuer à accueillir des milliers de visiteurs
              et faire découvrir le monde merveilleux des ânes à toutes les générations.
            </p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setSelectedAmount(20); setCustomAmount(""); setDonorName(""); setDonorEmail(""); setMessage(""); }}
            className="mt-6 px-6 py-2.5 rounded-full text-sm font-medium"
            style={{ backgroundColor: "#4a7c59", color: "white" }}
          >
            Faire un autre don
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3d5c40 0%, #4a7c59 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${babyDonkey})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <div className="text-5xl mb-4"></div>
          <h1 style={{ color: "white", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
            Soutenez le Parc des Ânes
          </h1>
          <p style={{ color: "#c8e0c0", fontSize: "1.1rem", lineHeight: "1.8" }}>
            Chaque don, même petit, fait une grande différence pour nos ânes
            et pour les milliers d'enfants qui viennent découvrir leur monde chaque année.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section style={{ backgroundColor: "#f9f4ec" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Formulaire de don */}
          <motion.div
            initial={{ opacity: 0, x: -ANIMATION_X }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl p-8" style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc", boxShadow: "0 4px 24px rgba(107,76,30,0.08)" }}>
              <h2 style={{ color: "#3a2a0e", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.5rem", fontFamily: "'Georgia', serif" }}>
                Faire un don
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Montants prédéfinis */}
                <div>
                  <label style={{ color: "#5a4020", fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    Choisissez un montant
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                        className="py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                        style={
                          selectedAmount === amount && !customAmount
                            ? { backgroundColor: "#4a7c59", color: "white", border: "2px solid #4a7c59" }
                            : { backgroundColor: "#f9f4ec", color: "#5a4020", border: "1.5px solid #e8d8bc" }
                        }
                      >
                        {amount}€
                      </button>
                    ))}
                  </div>
                </div>

                {/* Montant libre */}
                <div>
                  <label style={{ color: "#5a4020", fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    Ou entrez un montant libre
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={1}
                      step={0.5}
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                      placeholder="Montant en €"
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                      style={{
                        border: `1.5px solid ${customAmount ? "#4a7c59" : "#e8d8bc"}`,
                        backgroundColor: "#f9f4ec",
                        color: "#2e1e08",
                      }}
                    />
                    <span
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      style={{ color: "#8a6a40", fontWeight: 600 }}
                    >€</span>
                  </div>
                </div>

                {/* Impact */}
                {impact && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-xl p-3 flex items-center gap-3"
                    style={{ backgroundColor: "#eef5ec", border: "1px solid #c8dfc0" }}
                  >
                    <div>
                      <div style={{ color: "#4a7c59", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Votre impact</div>
                      <div style={{ color: "#3a5a3a", fontSize: "0.88rem", fontWeight: 600 }}>{impact.text}</div>
                    </div>
                  </motion.div>
                )}

                {/* Infos donateur */}
                <div>
                  <label style={{ color: "#5a4020", fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    Votre prénom {anonymous && <span style={{ color: "#a09070", fontSize: "0.78rem", fontWeight: 400 }}>(non affiché)</span>}
                  </label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Prénom ou pseudonyme"
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{ border: "1.5px solid #e8d8bc", backgroundColor: "#f9f4ec", color: "#2e1e08" }}
                  />
                </div>

                <div>
                  <label style={{ color: "#5a4020", fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    Email (pour votre reçu)
                  </label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="votre@email.fr"
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{ border: "1.5px solid #e8d8bc", backgroundColor: "#f9f4ec", color: "#2e1e08" }}
                  />
                </div>

                <div>
                  <label style={{ color: "#5a4020", fontSize: "0.85rem", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    Un message pour nous ? (facultatif)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Partagez vos encouragements..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                    style={{ border: "1.5px solid #e8d8bc", backgroundColor: "#f9f4ec", color: "#2e1e08" }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAnonymous(!anonymous)}
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ border: `2px solid ${anonymous ? "#4a7c59" : "#d0c0a8"}`, backgroundColor: anonymous ? "#4a7c59" : "white" }}
                  >
                    {anonymous && <Check size={11} color="white" />}
                  </button>
                  <span style={{ color: "#6a5030", fontSize: "0.85rem" }}>Don anonyme (votre nom ne sera pas affiché)</span>
                </div>

                <button
                  type="submit"
                  disabled={!finalAmount || finalAmount <= 0}
                  className="w-full py-3.5 rounded-xl font-medium text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
                  style={
                    !finalAmount || finalAmount <= 0
                      ? { backgroundColor: "#d8d0c0", color: "#a09070", cursor: "not-allowed" }
                      : { backgroundColor: "#4a7c59", color: "white", boxShadow: "0 4px 16px rgba(74,124,89,0.4)" }
                  }
                >
                  <Heart size={16} fill="white" />
                  Faire un don {finalAmount ? `de ${Number(finalAmount).toFixed(2)}€` : ""}
                </button>

                  <p style={{ color: "#a09070", fontSize: "0.75rem", textAlign: "center" }}>
                    Paiement sécurisé · Reçu fiscal disponible sur demande
                  </p>
              </form>
            </div>
          </motion.div>

          {/* Côté droit : impact + donateurs */}
          <motion.div
            initial={{ opacity: 0, x: ANIMATION_X }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Pourquoi donner */}
            <div className="rounded-3xl p-7" style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc" }}>
              <h3 style={{ color: "#3a2a0e", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
                À quoi sert votre don ?
              </h3>
              <div className="space-y-3">
                {impactsList.map((item) => (
                  <div key={item.amount} className="flex items-start gap-3">
                    <div>
                      <span className="font-semibold" style={{ color: "#4a7c59" }}>{item.amount}€ </span>
                      <span style={{ color: "#6a5030", fontSize: "0.9rem" }}>= {item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donateurs récents */}
            <div className="rounded-3xl p-7" style={{ backgroundColor: "#fff9f0", border: "1.5px solid #e8d8bc" }}>
              <h3 style={{ color: "#3a2a0e", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
                Ils ont déjà donné
              </h3>
              <div className="space-y-3">
                {sponsorsList.map((s) => (
                  <div key={s.name} className="rounded-xl p-3" style={{ backgroundColor: "white", border: "1px solid #e8d8bc" }}>
                    <div className="flex justify-between items-start mb-1">
                      <span style={{ color: "#2e1e08", fontSize: "0.88rem", fontWeight: 600 }}>{s.name}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: "#4a7c5918", color: "#4a7c59", fontWeight: 600 }}>
                        {s.amount}
                      </span>
                    </div>
                    <p style={{ color: "#6a5030", fontSize: "0.82rem", fontStyle: "italic" }}>{s.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="rounded-3xl overflow-hidden" style={{ height: DONATION_IMAGE_HEIGHT }}>
              <img src={babyDonkey} alt="Nos ânes" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
