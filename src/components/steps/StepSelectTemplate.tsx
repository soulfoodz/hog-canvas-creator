import { TemplateSet } from "@/types";
import { mockTemplateSets, mockFreeTemplateSets, mockSharedTemplateSets } from "@/data/mockTemplates";
import { motion } from "framer-motion";
import { Image, Gift, Users, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StepSelectTemplateProps {
  onSelect: (templateSet: TemplateSet) => void;
}

const StepSelectTemplate = ({ onSelect }: StepSelectTemplateProps) => {
  const navigate = useNavigate();

  return (
    <div className="px-4 pb-6">
      <h2 className="font-display text-xl font-bold mb-1">Choose a Template</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Select a template set to start building your graphic.
      </p>

      {/* Your Custom Templates */}
      <h3 className="font-display text-base font-semibold mb-3 flex items-center gap-2">
        <Image className="w-4 h-4 text-muted-foreground" />
        Your Custom Templates
      </h3>
      {mockTemplateSets.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 via-card to-primary/5 p-6"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-8 translate-x-8" />
          <div className="relative">
            <h3 className="font-display font-bold text-base mb-1">Get a Custom Template Made for You</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Work with our design team to create branded templates tailored to your operation.
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
            >
              Find Out More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-3">
          {mockTemplateSets.map((set, i) => (
            <motion.button
              key={set.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => onSelect(set)}
              className="w-full bg-card border border-border rounded-xl p-4 text-left active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Image className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm">{set.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {set.templates.length} variation{set.templates.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      {/* Free Templates */}
      {mockFreeTemplateSets.length > 0 && (
        <>
          <h3 className="font-display text-base font-semibold mt-6 mb-3 flex items-center gap-2">
            <Gift className="w-4 h-4 text-muted-foreground" />
            Free Templates
          </h3>
          <div className="space-y-3">
            {mockFreeTemplateSets.map((set, i) => (
              <motion.button
                key={set.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                onClick={() => onSelect(set)}
                className="w-full bg-card border border-border rounded-xl p-4 text-left active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Gift className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm">{set.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {set.templates.length} variation{set.templates.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </>
      )}

      {/* Shared with You */}
      {mockSharedTemplateSets.length > 0 && (
        <>
          <h3 className="font-display text-base font-semibold mt-6 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            Shared with You
          </h3>
          <div className="space-y-3">
            {mockSharedTemplateSets.map((set, i) => (
              <motion.button
                key={set.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                onClick={() => onSelect(set)}
                className="w-full bg-card border border-border rounded-xl p-4 text-left active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm">{set.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      Shared by {set.sharedBy}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {set.templates.length} variation{set.templates.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StepSelectTemplate;
