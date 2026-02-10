
## Fix Step Indicator Centering

### Problem
Every step item has `flex-1`, which makes each item take equal width. The last step item has no connector line after it, so its `flex-1` space is empty — pushing all the circles and lines to the left.

### Solution
Change the last step item to NOT use `flex-1`. Only items with connector lines should stretch.

### Technical Change

**`src/components/StepIndicator.tsx`** (line 15):
- Change from: `className="flex items-center gap-1 flex-1"`
- Change to: conditionally apply `flex-1` only when `i < steps.length - 1`

This way the last circle takes only its natural width, and the preceding circles + lines distribute evenly, making the whole indicator visually centered.
