import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, RectangleHorizontal, Square, Smartphone, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { mockTemplateSets, mockFreeTemplateSets, mockSharedTemplateSets } from "@/data/mockTemplates";
import { mockGeneratedAssets } from "@/data/mockAssets";
import { TemplateSet, GeneratedAsset } from "@/types";

const allSets: TemplateSet[] = [
  ...mockTemplateSets,
  ...mockFreeTemplateSets,
  ...mockSharedTemplateSets,
];

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

const TemplateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const templateSet = allSets.find((s) => s.id === id);
  const assets = mockGeneratedAssets[id ?? ""] ?? [];

  if (!templateSet) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center max-w-lg mx-auto px-4">
        <p className="text-muted-foreground mb-4">Template not found</p>
        <Button variant="outline" onClick={() => navigate("/")}>Go Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface-elevated sticky top-0 z-10">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 -ml-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <h1 className="font-display text-base font-bold flex-1 truncate">
          {templateSet.name}
        </h1>
        <Button
          size="sm"
          className="gap-1.5 shrink-0"
          onClick={() => navigate("/create")}
        >
          <Plus className="w-4 h-4" />
          New
        </Button>
      </header>

      <div className="px-4 pt-4 pb-2">
        <p className="text-sm text-muted-foreground">
          {assets.length} graphic{assets.length !== 1 ? "s" : ""} generated
        </p>
      </div>

      {/* Assets grid */}
      {assets.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center px-4 gap-4">
          <p className="text-muted-foreground text-sm text-center">
            No graphics generated yet with this template.
          </p>
          <Button onClick={() => navigate("/create")} className="gap-2">
            <Plus className="w-4 h-4" />
            Create Your First
          </Button>
        </div>
      ) : (
        <div className="px-4 pb-8 grid grid-cols-2 gap-3">
          {assets.map((asset, i) => (
            <AssetCard key={asset.id} asset={asset} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

const AssetCard = ({ asset, index }: { asset: GeneratedAsset; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="bg-card border border-border rounded-xl overflow-hidden"
  >
    <div
      className={`${typeAspect[asset.type]} max-h-40 bg-muted flex items-center justify-center`}
    >
      <div className="text-center text-muted-foreground">
        <div className="mx-auto mb-1">{typeIcon[asset.type]}</div>
        <span className="text-[10px]">{asset.type}</span>
      </div>
    </div>
    <div className="p-2">
      <p className="text-xs font-medium truncate mb-1.5">{asset.templateName}</p>
      <div className="flex gap-1.5">
        <Button variant="outline" size="sm" className="h-7 text-xs gap-1 flex-1 px-2">
          <Download className="w-3 h-3" />
          Save
        </Button>
        <Button variant="outline" size="sm" className="h-7 text-xs gap-1 flex-1 px-2">
          <ExternalLink className="w-3 h-3" />
          Link
        </Button>
      </div>
    </div>
  </motion.div>
);

export default TemplateDetail;
