import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center gap-1 px-4 py-3 mx-auto w-full max-w-md">
      {steps.map((label, i) => {
        const isComplete = i < currentStep;
        const isActive = i === currentStep;
        return (
          <div key={i} className="flex items-center gap-1 flex-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors ${
                isComplete
                  ? "step-indicator-complete"
                  : isActive
                  ? "step-indicator-active"
                  : "step-indicator-inactive"
              }`}
            >
              {isComplete ? <Check className="w-3.5 h-3.5" /> : i + 1}
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 rounded transition-colors ${
                  isComplete ? "bg-success" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
