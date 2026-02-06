export interface Template {
  id: string;
  name: string;
  preview: string;
  type: "landscape" | "square" | "story";
  tokenCost: number;
  setId?: string;
}

export interface TemplateSet {
  id: string;
  name: string;
  templates: Template[];
}

export interface PigInfo {
  earNotch: string;
  breed: string;
  sire: string;
  dam: string;
  sex: "Boar" | "Gilt" | "Barrow" | "";
}

export interface GeneratedAsset {
  id: string;
  templateName: string;
  type: "landscape" | "square" | "story";
  url: string;
  downloadUrl: string;
}

export interface CreateFlowState {
  step: number;
  selectedTemplate: TemplateSet | null;
  pigImage: string | null;
  pigInfo: PigInfo;
  selectedVariations: string[];
  generatedAssets: GeneratedAsset[];
}
