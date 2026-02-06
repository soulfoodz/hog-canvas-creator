import { GeneratedAsset } from "@/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ExternalLink, Flag, Plus, RectangleHorizontal, Square, Smartphone } from "lucide-react";
import { toast } from "sonner";

interface StepResultsProps {
  assets: GeneratedAsset[];
  onNewGraphic: () => void;
}

const typeIcon: Record<string, React.ReactNode> = {
  landscape: <RectangleHorizontal className="w-4 h-4" />,
  square: <Square className="w-4 h-4" />,
  story: <Smartphone className="w-4 h-4" />,
};

const typeAspect: Record<string, string> = {
  landscape: "aspect-[16/9]",
  square: "aspect-square",
  story: "aspect-[9/16]",
};

const StepResults = ({ assets, onNewGraphic }: StepResultsProps) => {
  const handleReport = () => {
    toast.success("Issue reported. We'll look into it!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-4 pb-6"
    >
      <div className="text-center mb-6">
        <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
          <Download className="w-6 h-6 text-success" />
        </div>
        <h2 className="font-display text-xl font-bold">Your Graphics Are Ready!</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {assets.length} graphic{assets.length !== 1 ? "s" : ""} generated successfully
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {assets.map((asset, i) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div
              className={`${typeAspect[asset.type]} max-h-48 bg-muted flex items-center justify-center`}
            >
              <div className="text-center text-muted-foreground">
                <div className="mx-auto mb-1">{typeIcon[asset.type]}</div>
                <span className="text-xs">{asset.templateName} Preview</span>
              </div>
            </div>
            <div className="p-3 flex items-center gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{asset.templateName}</p>
                <p className="text-xs text-muted-foreground capitalize">{asset.type}</p>
              </div>
              <Button variant="outline" size="sm" className="gap-1.5 shrink-0">
                <Download className="w-3.5 h-3.5" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 shrink-0">
                <ExternalLink className="w-3.5 h-3.5" />
                Link
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1 gap-2"
          onClick={handleReport}
        >
          <Flag className="w-4 h-4" />
          Report Issue
        </Button>
        <Button className="flex-1 gap-2" onClick={onNewGraphic}>
          <Plus className="w-4 h-4" />
          New Graphic
        </Button>
      </div>
    </motion.div>
  );
};

export default StepResults;
