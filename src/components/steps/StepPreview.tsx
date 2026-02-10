import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface StepPreviewProps {
  pigImage: string | null;
  onContinue: () => void;
}

const StepPreview = ({ pigImage, onContinue }: StepPreviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-4 pb-6"
    >
      <h2 className="font-display text-xl font-bold mb-1">Preview</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Here's a preview of what your graphic will look like.
      </p>

      <div className="rounded-xl border border-border bg-card overflow-hidden mb-6">
        {pigImage ? (
          <img
            src={pigImage}
            alt="Graphic preview"
            className="w-full object-contain max-h-96"
          />
        ) : (
          <div className="aspect-video bg-muted flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <Eye className="w-8 h-8" />
            <span className="text-sm">Graphic Preview</span>
          </div>
        )}
      </div>

      <Button className="w-full" onClick={onContinue}>
        Continue
      </Button>
    </motion.div>
  );
};

export default StepPreview;
