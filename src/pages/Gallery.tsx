import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const exampleGraphics = [
  { id: 1, label: "Sale Lot – Landscape", type: "landscape" },
  { id: 2, label: "Champion Banner – Square", type: "square" },
  { id: 3, label: "Auction Promo – Story", type: "story" },
  { id: 4, label: "Grand Champion – Landscape", type: "landscape" },
  { id: 5, label: "Reserve Champion – Square", type: "square" },
  { id: 6, label: "Bred & Owned – Story", type: "story" },
  { id: 7, label: "Sale Catalog – Landscape", type: "landscape" },
  { id: 8, label: "Winner Spotlight – Square", type: "square" },
];

const aspectMap: Record<string, string> = {
  landscape: "aspect-video",
  square: "aspect-square",
  story: "aspect-[9/16]",
};

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
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
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-display text-xl font-bold">Example Gallery</h1>
        </motion.div>
      </header>

      <div className="px-4 pb-2">
        <p className="text-sm text-muted-foreground">
          See what's possible — here are some examples of graphics created with our templates.
        </p>
      </div>

      <div className="px-4 pb-8 flex-1">
        <div className="columns-2 gap-3 space-y-3 mt-4">
          {exampleGraphics.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid"
            >
              <div
                className={`${aspectMap[item.type]} rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden`}
              >
                <span className="text-xs text-muted-foreground font-medium px-3 text-center">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
