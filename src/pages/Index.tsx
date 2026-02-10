import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Image, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { mockTemplateSets } from "@/data/mockTemplates";

const Index = () => {
  const navigate = useNavigate();

  const totalTemplates = mockTemplateSets.reduce(
    (sum, s) => sum + s.templates.length,
    0
  );

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <h1 className="font-display text-2xl font-bold">LotGraphics</h1>
            </div>
            <ThemeToggle />
          </div>
          <p className="text-sm text-muted-foreground">
            Generate social media graphics for your auction listings in seconds.
          </p>
        </motion.div>
      </header>

      {/* CTA */}
      <div className="px-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Button
            onClick={() => navigate("/create")}
            className="w-full h-14 text-base font-semibold gap-2 rounded-xl"
          >
            <Plus className="w-5 h-5" />
            Create New Graphic
          </Button>
        </motion.div>
      </div>

      {/* Quick stats */}
      <div className="px-4 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-2xl font-display font-bold text-primary">
              {mockTemplateSets.length}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Template Set{mockTemplateSets.length !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-2xl font-display font-bold text-accent">
              {totalTemplates}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Total Variations
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent templates */}
      <div className="px-4 flex-1">
        <h2 className="font-display text-base font-semibold mb-3 flex items-center gap-2">
          <Image className="w-4 h-4 text-muted-foreground" />
          Your Templates
        </h2>

        <div className="space-y-3">
          {mockTemplateSets.map((set, i) => (
            <motion.button
              key={set.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
              onClick={() => navigate("/create")}
              className="w-full bg-card border border-border rounded-xl p-4 text-left active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Image className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{set.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {set.templates.length} variation{set.templates.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bottom padding for mobile */}
      <div className="h-8" />
    </div>
  );
};

export default Index;
