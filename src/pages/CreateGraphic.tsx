import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateFlowState, TemplateSet, PigInfo, GeneratedAsset } from "@/types";
import StepIndicator from "@/components/StepIndicator";
import StepSelectTemplate from "@/components/steps/StepSelectTemplate";
import StepUploadImage from "@/components/steps/StepUploadImage";
import StepPigInfo from "@/components/steps/StepPigInfo";
import StepVariations from "@/components/steps/StepVariations";
import StepResults from "@/components/steps/StepResults";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const stepLabels = ["Template", "Photo", "Details", "Variations", "Done"];

const initialPigInfo: PigInfo = {
  earNotch: "",
  breed: "",
  sire: "",
  dam: "",
  sex: "",
};

const CreateGraphic = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedSet, setSelectedSet] = useState<TemplateSet | null>(null);
  const [pigImage, setPigImage] = useState<string | null>(null);
  const [pigInfo, setPigInfo] = useState<PigInfo>(initialPigInfo);
  const [selectedVariations, setSelectedVariations] = useState<string[]>([]);
  const [generatedAssets, setGeneratedAssets] = useState<GeneratedAsset[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSelectTemplate = (set: TemplateSet) => {
    setSelectedSet(set);
    // Auto-select all variations
    setSelectedVariations(set.templates.map((t) => t.id));
    setStep(1);
  };

  const handleImageSet = (dataUrl: string) => {
    setPigImage(dataUrl || null);
  };

  const toggleVariation = (id: string) => {
    setSelectedVariations((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const handleGenerate = async () => {
    if (!selectedSet) return;
    setIsGenerating(true);

    // Simulate generation delay
    await new Promise((r) => setTimeout(r, 1800));

    const assets: GeneratedAsset[] = selectedSet.templates
      .filter((t) => selectedVariations.includes(t.id))
      .map((t) => ({
        id: `asset-${t.id}`,
        templateName: `${selectedSet.name} – ${t.name}`,
        type: t.type,
        url: "#",
        downloadUrl: "#",
      }));

    setGeneratedAssets(assets);
    setIsGenerating(false);
    setStep(4);
  };

  const handleNewGraphic = () => {
    setStep(0);
    setSelectedSet(null);
    setPigImage(null);
    setPigInfo(initialPigInfo);
    setSelectedVariations([]);
    setGeneratedAssets([]);
  };

  const canGoBack = step > 0 && step < 4;

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-elevated sticky top-0 z-10">
        {canGoBack ? (
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 -ml-2"
            onClick={() => setStep((s) => s - 1)}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        ) : (
          <div />
        )}
        <h1 className="font-display text-base font-bold">
          {step === 4 ? "Complete" : "New Graphic"}
        </h1>
        <div className="flex items-center gap-1 -mr-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Step indicator */}
      <StepIndicator steps={stepLabels} currentStep={step} />

      {/* Generating overlay */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4"
          >
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            <p className="font-display font-semibold text-lg">Generating your graphics…</p>
            <p className="text-sm text-muted-foreground">This usually takes a few seconds</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step content */}
      <div className="flex-1 pt-2">
        {step === 0 && <StepSelectTemplate onSelect={handleSelectTemplate} />}
        {step === 1 && (
          <StepUploadImage
            pigImage={pigImage}
            onImageSet={handleImageSet}
            onNext={() => setStep(2)}
            aspectRatio={
              selectedSet
                ? { landscape: 16 / 9, square: 1, story: 9 / 16 }[selectedSet.templates[0]?.type] ?? 1
                : 1
            }
            aspectLabel={
              selectedSet
                ? { landscape: "Landscape", square: "Square", story: "Story" }[selectedSet.templates[0]?.type] ?? "Square"
                : "Square"
            }
          />
        )}
        {step === 2 && (
          <StepPigInfo
            pigInfo={pigInfo}
            onChange={setPigInfo}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && selectedSet && (
          <StepVariations
            templateSet={selectedSet}
            selectedIds={selectedVariations}
            onToggle={toggleVariation}
            onGenerate={handleGenerate}
          />
        )}
        {step === 4 && (
          <StepResults
            assets={generatedAssets}
            onNewGraphic={handleNewGraphic}
          />
        )}
      </div>
    </div>
  );
};

export default CreateGraphic;
