

## Remove Custom Templates + Add Empty State Ad

### Changes

1. **`src/data/mockTemplates.ts`** -- Empty the `mockTemplateSets` array while keeping `mockFreeTemplateSets` and `mockSharedTemplateSets` unchanged.

2. **`src/pages/Index.tsx`** -- Replace the custom templates list with an empty state ad card:
   - Headline: "Get a Custom Template Made for You"
   - Short description about the custom template design service
   - "Find Out More" button with ArrowRight icon, navigating to `/shop`
   - Styled with existing `bg-card border border-border rounded-xl p-4` pattern
   - Remove the DropdownMenu/MoreVertical logic for custom templates since there are none

3. **`src/components/steps/StepSelectTemplate.tsx`** -- Same empty state ad card for the custom templates section when the array is empty, keeping Free and Shared sections as-is.

### Technical Details

**mockTemplates.ts:**
```typescript
export const mockTemplateSets: TemplateSet[] = [];
```

**Index.tsx custom templates section** -- conditional render:
- If `mockTemplateSets.length === 0`: show a motion-animated card with Sparkles icon, ad copy, and a button/link row with "Find Out More" + ArrowRight arrow linking to `/shop`
- Otherwise: render existing template list (future-proofed for when real templates exist)

**StepSelectTemplate.tsx** -- same conditional pattern for the "Your Custom Templates" section.

