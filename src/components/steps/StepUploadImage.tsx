import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Upload, RotateCcw, Check } from "lucide-react";
import { motion } from "framer-motion";
import Cropper, { Area } from "react-easy-crop";

interface StepUploadImageProps {
  pigImage: string | null;
  onImageSet: (dataUrl: string) => void;
  onNext: () => void;
  aspectRatio?: number;
  aspectLabel?: string;
}

async function getCroppedImg(imageSrc: string, crop: Area): Promise<string> {
  const image = new Image();
  image.src = imageSrc;
  await new Promise((resolve) => {
    image.onload = resolve;
  });

  const canvas = document.createElement("canvas");
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );
  return canvas.toDataURL("image/jpeg", 0.92);
}

const StepUploadImage = ({
  pigImage,
  onImageSet,
  onNext,
  aspectRatio = 1,
  aspectLabel = "Square",
}: StepUploadImageProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [rawImage, setRawImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setRawImage(reader.result);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
      }
    };
    reader.readAsDataURL(file);
  };

  const onCropComplete = useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleConfirmCrop = async () => {
    if (!rawImage || !croppedAreaPixels) return;
    const cropped = await getCroppedImg(rawImage, croppedAreaPixels);
    onImageSet(cropped);
    setRawImage(null);
  };

  const handleReplace = () => {
    onImageSet("");
    setRawImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="px-4 pb-6">
      <h2 className="font-display text-xl font-bold mb-1">Upload Photo</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Add a photo of the pig and crop it to fit the {aspectLabel.toLowerCase()} template.
      </p>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFile}
      />

      {/* State 1: No image at all */}
      {!rawImage && !pigImage && (
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
          <Button onClick={() => fileRef.current?.click()} className="gap-2">
            <Upload className="w-4 h-4" />
            Upload
          </Button>
        </motion.div>
      )}

      {/* State 2: Cropping */}
      {rawImage && !pigImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div
            className="relative rounded-xl overflow-hidden border border-border bg-muted"
            style={{ aspectRatio: String(aspectRatio), maxHeight: "60vh" }}
          >
            <Cropper
              image={rawImage}
              crop={crop}
              zoom={zoom}
              aspect={aspectRatio}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              style={{
                containerStyle: { borderRadius: "0.75rem" },
              }}
            />
          </div>
          <div className="flex items-center gap-3 px-1">
            <span className="text-xs text-muted-foreground whitespace-nowrap">Zoom</span>
            <input
              type="range"
              min={1}
              max={3}
              step={0.05}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="flex-1 accent-primary"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Pinch or use the slider to zoom · Drag to reposition
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 gap-2"
              onClick={handleReplace}
            >
              <RotateCcw className="w-4 h-4" />
              Replace
            </Button>
            <Button className="flex-1 gap-2" onClick={handleConfirmCrop}>
              <Check className="w-4 h-4" />
              Crop & Continue
            </Button>
          </div>
        </motion.div>
      )}

      {/* State 3: Cropped preview */}
      {pigImage && !rawImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div
            className="relative rounded-xl overflow-hidden border border-border bg-muted"
            style={{ aspectRatio: String(aspectRatio) }}
          >
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
              onClick={handleReplace}
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
