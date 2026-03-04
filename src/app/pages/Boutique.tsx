import { motion } from "motion/react";
import { useState } from "react";
import { ShoppingCart, X, Check } from "lucide-react";

const soapImg = "https://images.unsplash.com/photo-1588959570943-b686e76e5c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHNvYXAlMjBuYXR1cmFsJTIwb3JnYW5pYyUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MjYyMDg2N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const artisanImg = "https://images.unsplash.com/photo-1652379718270-dae57d6fc6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwaGFuZG1hZGUlMjBjcmFmdCUyMHByb2R1Y3RzJTIwcnVzdGljfGVufDF8fHx8MTc3MjYyMDg2NHww&ixlib=rb-4.1.0&q=80&w=1080";
const wickerImg = "https://images.unsplash.com/photo-1699800751646-6e0584f004f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWNrZXIlMjBiYXNrZXQlMjBzdHJhdyUyMGhhdCUyMHJ1c3RpYyUyMGZhcm0lMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzI2MjA4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const donkeyPortrait = "https://images.unsplash.com/photo-1627507257749-73bd64a21f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZG9ua2V5JTIwcG9ydHJhaXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MjYyMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const donkeyPlushie = "/assets/peluche-ane-fripouille.jpg";

const PRODUCT_IMAGE_HEIGHT = 200;
const DESCRIPTION_PREVIEW_LENGTH = 90;
const COFFRET_PRICE = 22.00;
const PELUCHE_PRICE = 18.00;
const CARNET_PRICE = 12.00;
const CARTES_PRICE = 7.00;

const categories = ["Tout", "Savonnerie", "Souvenirs", "Livres & Cartes", "Accessoires"];

const products = [
  {
    id: 1,
    name: "Savon au lait d'ânesse",
    category: "Savonnerie",
    price: 8.50,
    image: soapImg,
    badge: "Bestseller",
    badgeColor: "#c4703a",
    description: "Formulé avec le lait de nos propres ânesses, ce savon hydratant aux vertus apaisantes est un incontournable. Parfum lavande et miel de fleurs.",
    stock: true,
  },
  {
    id: 2,
    name: "Coffret savons × 3",
    category: "Savonnerie",
    price: COFFRET_PRICE,
    image: soapImg,
    badge: "Idée cadeau",
    badgeColor: "#9a5a8a",
    description: "Un assortiment de 3 savons au lait d'ânesse dans un joli emballage kraft. Parfums au choix : lavande, rose & vanille, citron & menthe.",
    stock: true,
  },
  {
    id: 3,
    name: "Peluche âne Fripouille",
    category: "Souvenirs",
    price: PELUCHE_PRICE,
    image: donkeyPlushie,
    badge: "Coup de cœur",
    badgeColor: "#4a7c59",
    description: "La peluche officielle de Fripouille, fabriquée en coton biologique. Ses grandes oreilles et son sourire sont garantis pour faire fondre les cœurs.",
    stock: true,
  },
  {
    id: 4,
    name: "Carnet illustré \"Ânes & Prairies\"",
    category: "Livres & Cartes",
    price: CARNET_PRICE,
    image: wickerImg,
    badge: null,
    badgeColor: "",
    description: "Un carnet artisanal illustré de dessins d'ânes réalisés par des artistes locaux. Pages lignées sur papier recyclé, couverture cartonnée.",
    stock: true,
  },
  {
    id: 5,
    name: "Set de cartes postales (8 cartes)",
    category: "Livres & Cartes",
    price: CARTES_PRICE,
    image: artisanImg,
    badge: null,
    badgeColor: "",
    description: "8 cartes postales avec les portraits de nos 6 ânes et 2 vues du parc. Imprimées sur papier recyclé mat.",
    stock: true,
  },
  {
    id: 6,
    name: "Miel du Parc des Ânes",
    category: "Souvenirs",
    price: 9.00,
    image: artisanImg,
    badge: "Artisanal",
    badgeColor: "#a07840",
    description: "Un miel toutes fleurs récolté dans les ruches de notre partenaire apiculteur voisin. Pot de 250g, production limitée.",
    stock: true,
  },
  {
    id: 7,
    name: "Chapeau de paille Parc des Ânes",
    category: "Accessoires",
    price: 14.00,
    image: wickerImg,
    badge: "Nouveauté",
    badgeColor: "#5a6e8e",
    description: "Notre chapeau de paille estampillé 'Parc des Ânes' avec le logo brodé. La coiffe idéale pour vos visites sous le soleil !",
    stock: true,
  },
  {
    id: 8,
    name: "\"Mon ami l'âne\" – Livre jeunesse",
    category: "Livres & Cartes",
    price: 13.50,
    image: donkeyPortrait,
    badge: null,
    badgeColor: "",
    description: "Un beau livre illustré pour les enfants de 3 à 8 ans pour découvrir la vie des ânes à travers l'histoire de Fripouille.",
    stock: false,
  },
];

type CartItem = { product: typeof products[0]; qty: number };

export function Boutique() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [justAdded, setJustAdded] = useState<number | null>(null);

  const filtered = activeCategory === "Tout" ? products : products.filter(p => p.category === activeCategory);

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { product, qty: 1 }];
    });
    setJustAdded(product.id);
    setTimeout(() => setJustAdded(null), 1500);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter(i => i.product.id !== id));
  };

  const totalCartItems = cart.reduce((a, i) => a + i.qty, 0);
  const totalPrice = cart.reduce((a, i) => a + i.product.price * i.qty, 0);

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #fff9f0 0%, #f5ead8 100%)", borderBottom: "1.5px solid #e8d8bc" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div style={{ color: "#a07840", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Nos créations artisanales
          </div>
          <h1 style={{ color: "#3a2a0e", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
            La Boutique du Parc
          </h1>
          <p style={{ color: "#5a4020", fontSize: "1.05rem", lineHeight: "1.8" }}>
            Repartez avec un souvenir du Parc des Ânes ! Savons artisanaux au lait d'ânesse,
            peluches, livres, miel… tous nos produits sont fabriqués avec amour et respect de la nature.
          </p>
        </motion.div>
      </section>

      {/* Shop */}
      <section style={{ backgroundColor: "#f9f4ec" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Categories + Cart button */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 rounded-full text-sm transition-all duration-200"
                  style={
                    activeCategory === cat
                      ? { backgroundColor: "#4a7c59", color: "white" }
                      : { backgroundColor: "white", color: "#5a4020", border: "1.5px solid #e8d8bc" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "#4a7c59", color: "white" }}
            >
              <ShoppingCart size={16} />
              Panier
              {totalCartItems > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{ backgroundColor: "#c4703a", color: "white" }}
                >
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ backgroundColor: "white", border: "1.5px solid #e8d8bc", boxShadow: "0 2px 12px rgba(107,76,30,0.07)" }}
              >
                <div className="relative overflow-hidden" style={{ height: PRODUCT_IMAGE_HEIGHT }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <div
                      className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{ backgroundColor: product.badgeColor, color: "white" }}
                    >
                      {product.badge}
                    </div>
                  )}
                  {!product.stock && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                    >
                      <span className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: "white", color: "#5a4020" }}>
                        Rupture de stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 style={{ color: "#2e1e08", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.3rem", lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                  <span
                    className="inline-block self-start px-2 py-0.5 rounded-full text-xs mb-2"
                    style={{ backgroundColor: "#f0e8d8", color: "#8a6a40" }}
                  >
                    {product.category}
                  </span>
                  <p style={{ color: "#6a5030", fontSize: "0.82rem", lineHeight: "1.5", flex: 1, marginBottom: "0.75rem" }}>
                    {product.description.slice(0, DESCRIPTION_PREVIEW_LENGTH)}…
                  </p>
                  <div className="flex items-center justify-between">
                    <span style={{ color: "#3a2a0e", fontSize: "1.1rem", fontWeight: 700 }}>
                      {product.price.toFixed(2)}€
                    </span>
                    <button
                      onClick={() => product.stock && addToCart(product)}
                      disabled={!product.stock}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                      style={
                        !product.stock
                          ? { backgroundColor: "#e8e0d8", color: "#b8a888", cursor: "not-allowed" }
                          : justAdded === product.id
                          ? { backgroundColor: "#4a7c59", color: "white" }
                          : { backgroundColor: "#4a7c5918", color: "#4a7c59", border: "1.5px solid #4a7c5940" }
                      }
                    >
                      {justAdded === product.id ? (
                        <><Check size={12} /> Ajouté</>
                      ) : (
                        <><ShoppingCart size={12} /> Ajouter</>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice artisanal */}
      <section
        className="py-8 px-4 text-center"
        style={{ backgroundColor: "#eef5ec", borderTop: "1.5px solid #c8dfc0" }}
      >
        <p style={{ color: "#3a5a3a", fontSize: "0.9rem" }}>
          Tous nos produits sont fabriqués localement ou à la ferme. Les bénéfices soutiennent directement nos programmes pédagogiques et le bien-être de nos animaux.
        </p>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          style={{ backgroundColor: "rgba(20,12,4,0.5)", backdropFilter: "blur(3px)" }}
          onClick={() => setCartOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="h-full w-full max-w-sm flex flex-col"
            style={{ backgroundColor: "white", boxShadow: "-8px 0 32px rgba(0,0,0,0.15)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5" style={{ borderBottom: "1.5px solid #e8d8bc" }}>
              <h2 style={{ color: "#2e1e08", fontSize: "1.1rem", fontWeight: 700 }}>
                Mon Panier
              </h2>
              <button onClick={() => setCartOpen(false)} style={{ color: "#8a6a40" }}>
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
                <p style={{ color: "#8a6a40", textAlign: "center" }}>Votre panier est vide.<br />Découvrez nos produits artisanaux !</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-3 items-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="rounded-xl object-cover flex-shrink-0"
                        style={{ width: 64, height: 64 }}
                      />
                      <div className="flex-1">
                        <div style={{ color: "#2e1e08", fontSize: "0.88rem", fontWeight: 600 }}>
                          {item.product.name}
                        </div>
                        <div style={{ color: "#8a6a40", fontSize: "0.82rem" }}>
                          {item.qty} × {item.product.price.toFixed(2)}€
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} style={{ color: "#c4703a" }}>
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-5" style={{ borderTop: "1.5px solid #e8d8bc" }}>
                  <div className="flex justify-between mb-4">
                    <span style={{ color: "#5a4020", fontWeight: 600 }}>Total</span>
                    <span style={{ color: "#2e1e08", fontSize: "1.15rem", fontWeight: 700 }}>
                      {totalPrice.toFixed(2)}€
                    </span>
                  </div>
                  <button
                    className="w-full py-3 rounded-full font-medium text-sm transition-all hover:scale-105"
                    style={{ backgroundColor: "#4a7c59", color: "white" }}
                    onClick={() => alert("Merci pour votre commande !\nNotre boutique en ligne complète sera bientôt disponible. Vous pouvez également nous contacter directement pour passer commande.")}
                  >
                    Commander ({totalCartItems} article{totalCartItems > 1 ? "s" : ""})
                  </button>
                  <p className="text-center mt-3" style={{ color: "#a09070", fontSize: "0.75rem" }}>
                    Retrait sur place ou livraison sur demande
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
