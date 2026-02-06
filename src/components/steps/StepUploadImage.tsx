import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Upload, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

interface StepUploadImageProps {
  pigImage: string | null;
  onImageSet: (dataUrl: string) => void;
  onNext: () => void;
}

const StepUploadImage = ({ pigImage, onImageSet, onNext }: StepUploadImageProps) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onImageSet(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="px-4 pb-6">
      <h2 className="font-display text-xl font-bold mb-1">Upload Photo</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Add a photo of the pig for your listing graphic.
      </p>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFile}
      />

      {!pigImage ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
            <Camera className="w-7 h-7 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Take a photo or upload from your gallery
          </p>
          <div className="flex gap-3">
            <Button
              onClick={() => fileRef.current?.click()}
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="relative rounded-xl overflow-hidden border border-border aspect-[4/3] bg-muted">
            <img
              src={pigImage}
              alt="Pig photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 gap-2"
              onClick={() => {
                onImageSet("");
                if (fileRef.current) fileRef.current.value = "";
              }}
            >
              <RotateCcw className="w-4 h-4" />
              Replace
            </Button>
            <Button className="flex-1" onClick={onNext}>
              Continue
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StepUploadImage;
