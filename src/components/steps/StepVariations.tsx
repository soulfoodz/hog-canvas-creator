import { Template, TemplateSet } from "@/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Coins, RectangleHorizontal, Square, Smartphone } from "lucide-react";

interface StepVariationsProps {
  templateSet: TemplateSet;
  selectedIds: string[];
  onToggle: (id: string) => void;
  onGenerate: () => void;
}

const typeIcon: Record<string, React.ReactNode> = {
  landscape: <RectangleHorizontal className="w-5 h-5" />,
  square: <Square className="w-5 h-5" />,
  story: <Smartphone className="w-5 h-5" />,
};

const StepVariations = ({
  templateSet,
  selectedIds,
  onToggle,
  onGenerate,
}: StepVariationsProps) => {
  const totalCost = templateSet.templates
    .filter((t) => selectedIds.includes(t.id))
    .reduce((sum, t) => sum + t.tokenCost, 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-4 pb-6"
    >
      <h2 className="font-display text-xl font-bold mb-1">Select Variations</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Choose which sizes to generate. Each uses 1 token.
      </p>

      <div className="space-y-3 mb-6">
        {templateSet.templates.map((t) => {
          const selected = selectedIds.includes(t.id);
          return (
            <button
              key={t.id}
              onClick={() => onToggle(t.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${
                selected
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                  selected
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/30"
                }`}
              >
                {selected && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
              </div>
              <div className="text-muted-foreground">{typeIcon[t.type]}</div>
              <div className="flex-1 text-left">
                <span className="text-sm font-medium">{t.name}</span>
                <span className="text-xs text-muted-foreground ml-2 capitalize">
                  ({t.type})
                </span>
              </div>
              <span className="text-xs font-medium text-token-badge">
                {t.tokenCost} token
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between p-3 rounded-lg bg-secondary mb-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Coins className="w-4 h-4 text-token-badge" />
          Total Cost
        </div>
        <span className="text-sm font-bold text-token-badge">
          {totalCost} token{totalCost !== 1 ? "s" : ""}
        </span>
      </div>

      <Button
        className="w-full"
        disabled={selectedIds.length === 0}
        onClick={onGenerate}
      >
        Generate {selectedIds.length} Graphic{selectedIds.length !== 1 ? "s" : ""}
      </Button>
    </motion.div>
  );
};

export default StepVariations;
