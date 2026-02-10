import { GeneratedAsset } from "@/types";

// Mock previously generated assets, keyed by template set ID
export const mockGeneratedAssets: Record<string, GeneratedAsset[]> = {
  "ts-1": [
    { id: "a-1", templateName: "Spring Sale 2025 – Landscape", type: "landscape", url: "#", downloadUrl: "#" },
    { id: "a-2", templateName: "Spring Sale 2025 – Square", type: "square", url: "#", downloadUrl: "#" },
    { id: "a-3", templateName: "Spring Sale 2025 – Story", type: "story", url: "#", downloadUrl: "#" },
    { id: "a-4", templateName: "Spring Sale 2025 – Square", type: "square", url: "#", downloadUrl: "#" },
    { id: "a-5", templateName: "Spring Sale 2025 – Landscape", type: "landscape", url: "#", downloadUrl: "#" },
  ],
  "ts-2": [
    { id: "a-6", templateName: "County Fair Auction – Square", type: "square", url: "#", downloadUrl: "#" },
    { id: "a-7", templateName: "County Fair Auction – Square", type: "square", url: "#", downloadUrl: "#" },
  ],
  "ts-free-1": [
    { id: "a-8", templateName: "Basic Auction Flyer – Square", type: "square", url: "#", downloadUrl: "#" },
  ],
  "ts-free-2": [],
  "ts-shared-1": [
    { id: "a-9", templateName: "Premium Genetics – Landscape", type: "landscape", url: "#", downloadUrl: "#" },
    { id: "a-10", templateName: "Premium Genetics – Square", type: "square", url: "#", downloadUrl: "#" },
    { id: "a-11", templateName: "Premium Genetics – Landscape", type: "landscape", url: "#", downloadUrl: "#" },
  ],
  "ts-shared-2": [],
};
