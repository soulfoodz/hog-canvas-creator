import { TemplateSet } from "@/types";
import { mockTemplateSets } from "@/data/mockTemplates";
import { motion } from "framer-motion";
import { Image, Layers } from "lucide-react";

interface StepSelectTemplateProps {
  onSelect: (templateSet: TemplateSet) => void;
}

const typeLabel: Record<string, string> = {
  landscape: "Landscape",
  square: "Square",
  story: "Story",
};

const StepSelectTemplate = ({ onSelect }: StepSelectTemplateProps) => {
  return (
    <div className="px-4 pb-6">
      <h2 className="font-display text-xl font-bold mb-1">Choose a Template</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Select a template set to start building your graphic.
      </p>

      <div className="space-y-3">
        {mockTemplateSets.map((set, i) => (
          <motion.button
            key={set.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => onSelect(set)}
            className="w-full bg-card border border-border rounded-xl p-4 text-left active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Image className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-base leading-tight">
                  {set.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <Layers className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {set.templates.length} variation{set.templates.length > 1 ? "s" : ""} ·{" "}
                    {set.templates.map((t) => typeLabel[t.type]).join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default StepSelectTemplate;
