import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Coins, Image, Check } from "lucide-react";
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
    name: "10 Tokens",
    description: "Get started with a small pack",
    price: "$4.99",
    tokens: 10,
  },
  {
    id: "cp-2",
    name: "30 Tokens",
    description: "Most popular choice",
    price: "$11.99",
    tokens: 30,
    popular: true,
  },
  {
    id: "cp-3",
    name: "75 Tokens",
    description: "Best value for power users",
    price: "$24.99",
    tokens: 75,
  },
  {
    id: "cp-4",
    name: "150 Tokens",
    description: "Go all in",
    price: "$39.99",
    tokens: 150,
  },
];

const Shop = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("templates");

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
            <p className="text-sm text-muted-foreground mb-4">
              Unlock premium templates to elevate your auction graphics.
            </p>
            {templatePackages.map((pkg) => (
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
                    {pkg.price}
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "tokens" && (
          <motion.div
            key="tokens"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Tokens are used to generate graphics from your templates.
            </p>
            {tokenPackages.map((pkg) => (
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
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Coins className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{pkg.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {pkg.description}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" className="rounded-lg font-semibold">
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
