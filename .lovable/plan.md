

## Issue

I generated placeholder images instead of using the two screenshots you uploaded. That was unnecessary — your uploaded images can be copied directly into the project assets.

## Plan

1. Copy `user-uploads://Screenshot_2026-03-09_at_7.48.23 PM.png` to `src/assets/example-graphic-1.png`
2. Copy `user-uploads://Screenshot_2026-03-09_at_7.48.04 PM.png` to `src/assets/example-graphic-2.png`
3. Update the imports in `Shop.tsx` to reference the new `.png` files

No other changes needed — the header layout and sizing already works.

