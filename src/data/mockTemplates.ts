import { TemplateSet } from "@/types";

export const mockTemplateSets: TemplateSet[] = [
  {
    id: "ts-1",
    name: "Spring Sale 2025",
    templates: [
      {
        id: "t-1a",
        name: "Landscape",
        preview: "",
        type: "landscape",
        tokenCost: 1,
        setId: "ts-1",
      },
      {
        id: "t-1b",
        name: "Square",
        preview: "",
        type: "square",
        tokenCost: 1,
        setId: "ts-1",
      },
      {
        id: "t-1c",
        name: "Story",
        preview: "",
        type: "story",
        tokenCost: 1,
        setId: "ts-1",
      },
    ],
  },
  {
    id: "ts-2",
    name: "County Fair Auction",
    templates: [
      {
        id: "t-2a",
        name: "Square Post",
        preview: "",
        type: "square",
        tokenCost: 1,
        setId: "ts-2",
      },
    ],
  },
];
