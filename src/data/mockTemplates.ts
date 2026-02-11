import { TemplateSet } from "@/types";

export const mockTemplateSets: TemplateSet[] = [];

export const mockFreeTemplateSets: TemplateSet[] = [
  {
    id: "ts-free-1",
    name: "Basic Auction Flyer",
    templates: [
      {
        id: "t-f1a",
        name: "Square",
        preview: "",
        type: "square",
        tokenCost: 0,
        setId: "ts-free-1",
      },
      {
        id: "t-f1b",
        name: "Story",
        preview: "",
        type: "story",
        tokenCost: 0,
        setId: "ts-free-1",
      },
    ],
  },
  {
    id: "ts-free-2",
    name: "Simple Lot Card",
    templates: [
      {
        id: "t-f2a",
        name: "Landscape",
        preview: "",
        type: "landscape",
        tokenCost: 0,
        setId: "ts-free-2",
      },
    ],
  },
];

export const mockSharedTemplateSets: (TemplateSet & { sharedBy: string })[] = [
  {
    id: "ts-shared-1",
    name: "Premium Genetics Showcase",
    sharedBy: "Johnson Farms",
    templates: [
      {
        id: "t-s1a",
        name: "Landscape",
        preview: "",
        type: "landscape",
        tokenCost: 1,
        setId: "ts-shared-1",
      },
      {
        id: "t-s1b",
        name: "Square",
        preview: "",
        type: "square",
        tokenCost: 1,
        setId: "ts-shared-1",
      },
    ],
  },
  {
    id: "ts-shared-2",
    name: "State Fair 2025",
    sharedBy: "Smith Show Pigs",
    templates: [
      {
        id: "t-s2a",
        name: "Story",
        preview: "",
        type: "story",
        tokenCost: 1,
        setId: "ts-shared-2",
      },
    ],
  },
];