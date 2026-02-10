import { PigInfo } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface StepPigInfoProps {
  pigInfo: PigInfo;
  onChange: (info: PigInfo) => void;
  onNext: () => void;
}



const StepPigInfo = ({ pigInfo, onChange, onNext }: StepPigInfoProps) => {
  const update = (field: keyof PigInfo, value: string) => {
    onChange({ ...pigInfo, [field]: value });
  };

  const isValid =
    pigInfo.earNotch.trim() &&
    pigInfo.breed.trim() &&
    pigInfo.sire.trim() &&
    pigInfo.dam.trim() &&
    pigInfo.sex;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-4 pb-6"
    >
      <h2 className="font-display text-xl font-bold mb-1">Pig Details</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Enter the information for your listing.
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="earNotch" className="text-sm font-medium">
            Ear Notch
          </Label>
          <Input
            id="earNotch"
            placeholder="e.g. 7-1"
            value={pigInfo.earNotch}
            onChange={(e) => update("earNotch", e.target.value)}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="breed" className="text-sm font-medium">
            Breed
          </Label>
          <Input
            id="breed"
            placeholder="e.g. Duroc"
            value={pigInfo.breed}
            onChange={(e) => update("breed", e.target.value)}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="sire" className="text-sm font-medium">
            Sire
          </Label>
          <Input
            id="sire"
            placeholder="Sire name or ID"
            value={pigInfo.sire}
            onChange={(e) => update("sire", e.target.value)}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="dam" className="text-sm font-medium">
            Dam
          </Label>
          <Input
            id="dam"
            placeholder="Dam name or ID"
            value={pigInfo.dam}
            onChange={(e) => update("dam", e.target.value)}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="sex" className="text-sm font-medium">
            Sex
          </Label>
          <Input
            id="sex"
            placeholder="e.g. Boar, Gilt, Barrow"
            value={pigInfo.sex}
            onChange={(e) => update("sex", e.target.value)}
            className="mt-1.5"
          />
        </div>
      </div>

      <Button
        className="w-full mt-6"
        disabled={!isValid}
        onClick={onNext}
      >
        Continue
      </Button>
    </motion.div>
  );
};

export default StepPigInfo;
