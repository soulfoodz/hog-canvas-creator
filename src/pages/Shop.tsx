import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Coins, Image, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

type Tab = "templates" | "tokens";

const templatePackages = [
  {
    id: "tp-1",
    name: "Single Template",
    description: "Purchase one premium template",
    price: "$2.99",
    items: 1,
  },
  {
    id: "tp-2",
    name: "Starter Pack",
    description: "3 premium templates",
    price: "$6.99",
    items: 3,
    popular: true,
  },
  {
    id: "tp-3",
    name: "Pro Bundle",
    description: "10 premium templates",
    price: "$17.99",
    items: 10,
  },
];

const tokenPackages = [
  {
    id: "cp-1",
    name: "Starter",
    description: "2 Graphics",
    price: "$4.99",
    tokens: 10,
  },
  {
    id: "cp-2",
    name: "Breeder",
    description: "11 Graphics",
    price: "$11.99",
    tokens: 30,
    popular: true,
    freeGraphics: 1,
    costPerGraphic: "$9",
  },
  {
    id: "cp-3",
    name: "Pro",
    description: "23 Graphics",
    price: "$24.99",
    tokens: 75,
    freeGraphics: 3,
    costPerGraphic: "$8.70",
  },
  {
    id: "cp-4",
    name: "Elite",
    description: "48 Graphics",
    price: "$39.99",
    tokens: 150,
    freeGraphics: 8,
    costPerGraphic: "$8.33",
    badge: "Best Value",
  },
];

const Shop = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("templates");
  const [hasDesigner, setHasDesigner] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 shrink-0"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-display text-xl font-bold">Shop</h1>
          <div className="ml-auto flex items-center gap-1.5 bg-accent/10 text-accent rounded-full px-3 py-1.5 text-sm font-semibold">
            <Coins className="w-4 h-4" />
            <span>10</span>
          </div>
        </motion.div>
      </header>

      {/* Gallery CTA */}
      <div className="px-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Button
            className="w-full h-12 rounded-xl font-bold text-base gap-2 bg-gradient-to-r from-accent to-primary shadow-lg shadow-primary/25"
            onClick={() => navigate("/gallery")}
          >
            <Image className="w-5 h-5" />
            View Example Gallery
          </Button>
        </motion.div>
      </div>

      {/* Toggle */}
      <div className="px-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-muted rounded-xl p-1 flex"
        >
          <button
            onClick={() => setActiveTab("templates")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "templates"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground"
            }`}
          >
            <Image className="w-4 h-4" />
            Templates
          </button>
          <button
            onClick={() => setActiveTab("tokens")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "tokens"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground"
            }`}
          >
            <Coins className="w-4 h-4" />
            Tokens
          </button>
        </motion.div>
      </div>

      {/* Packages */}
      <div className="px-4 flex-1">
        {activeTab === "templates" && (
          <motion.div
            key="templates"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="bg-muted/50 border border-border rounded-xl p-4 mb-4">
              <h3 className="font-semibold text-sm mb-1.5">Custom Branded Templates</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Work with our design team to create a custom, branded template tailored to your farm. Each template set includes your logo, colors, and branding applied across multiple formats.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 mb-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-semibold text-sm">I have an in-house designer</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Provide your own designs and save 40% on all template packages.
                </p>
              </div>
              <Switch
                checked={hasDesigner}
                onCheckedChange={setHasDesigner}
              />
            </div>

            {templatePackages.map((pkg) => {
              const basePrice = parseFloat(pkg.price.replace("$", ""));
              const finalPrice = hasDesigner ? (basePrice * 0.6).toFixed(2) : basePrice.toFixed(2);
              return (
              <div
                key={pkg.id}
                className={`relative bg-card border rounded-xl p-4 ${
                  pkg.popular ? "border-primary" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-2.5 left-4 bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">{pkg.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {pkg.description}
                    </p>
                  </div>
                  <Button size="sm" className="rounded-lg font-semibold">
                    ${finalPrice}
                  </Button>
                </div>
              </div>
              );
            })}
          </motion.div>
        )}

        {activeTab === "tokens" && (
          <motion.div
            key="tokens"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="text-center mb-3">
              <h2 className="font-display text-xl font-bold mb-1">Create Professional Stock Show Graphics in Seconds</h2>
              <p className="text-sm text-muted-foreground">Promote your lots. Celebrate winners. Build your brand.</p>
            </div>
            {tokenPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-card border rounded-xl p-4 ${
                  pkg.popular ? "border-primary shadow-sm shadow-primary/10" : pkg.badge ? "border-accent shadow-sm shadow-accent/10" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-2.5 left-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full">
                    ⭐ Most Popular
                  </span>
                )}
                {pkg.badge && (
                  <span className="absolute -top-2.5 left-4 bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full">
                    🏆 {pkg.badge}
                  </span>
                )}
                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-display font-bold text-base">{pkg.name}</h3>
                      {pkg.costPerGraphic && (
                        <span className="text-sm font-semibold text-accent">{pkg.costPerGraphic}<span className="text-xs font-normal text-muted-foreground">/graphic</span></span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {pkg.description}
                    </p>
                    {pkg.freeGraphics ? (
                      <p className="text-xs text-primary font-semibold mt-1">
                        🎁 +{pkg.freeGraphics} FREE Graphic{pkg.freeGraphics > 1 ? "s" : ""}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground font-medium mt-1">
                        ✨ Try it out
                      </p>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="rounded-lg font-semibold shrink-0 ml-3">
                    {pkg.price}
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="h-8" />
    </div>
  );
};

export default Shop;
