# Design System Specification: The Indulgent Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Velvet Gallery"**
This design system rejects the clinical flatness of standard e-commerce. Instead, it treats every luxury treat as a piece of art within a high-end editorial spread. We are moving away from "utilitarian grids" toward an immersive, sensorial experience. 

The visual language is defined by **Tonal Depth** and **Intentional Asymmetry**. By overlapping high-fidelity photography with elegant, oversized serif typography, we create a "heavenly" layout that feels both youthful and aspirational. This is not a delivery app; it is a curated invitation to indulgence.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the "Deep Chocolate" foundation, using light and shadow to guide the eye rather than rigid lines.

### Palette Roles
- **Primary (`#ffb77e`):** The "Caramel Glow." Used for high-intent actions and brand moments.
- **Secondary (`#78dc77`):** The "M-Pesa Trust." Reserved strictly for payment contexts and success states to provide instant regional recognition.
- **Tertiary (`#e9c349`):** The "Gold Leaf." Used sparingly for "Limited Edition" tags or premium highlights.
- **Surface (`#220e02`):** The "Deep Cacao" base. All experiences begin here.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or card definition. Boundaries must be defined solely through background color shifts or subtle tonal transitions. 
- A card should not have a stroke; it should be a `surface-container-high` block sitting on a `surface` background.
- Section breaks are achieved using a `surface-container-low` background transition.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of ganache and cream. 
- **Level 1 (Base):** `surface` (#220e02)
- **Level 2 (In-page Sections):** `surface-container-low` (#2c1606)
- **Level 3 (Interactive Cards):** `surface-container-highest` (#492f1c)

### The "Glass & Gold" Rule
For floating navigation bars or "Add to Cart" sticky modals, use **Glassmorphism**.
- **Color:** `surface-variant` (#492f1c) at 70% opacity.
- **Effect:** `backdrop-filter: blur(20px)`.
- **Accent:** Use a subtle gradient transition from `primary` to `primary-container` on CTAs to give them a "dipped in caramel" three-dimensional soul.

---

## 3. Typography
We pair a traditional high-contrast serif with a modern, breathable sans-serif to bridge the gap between "Premium" and "Youthful."

- **Display & Headlines (Noto Serif):** Use these for product names and emotional hooks. The large scale (`display-lg` at 3.5rem) should feel intentional—allow headings to break across lines or overlap with imagery for a high-fashion editorial look.
- **Body & Labels (Plus Jakarta Sans):** A clean, geometric sans-serif that ensures legibility on mobile devices. Use `body-lg` (1rem) for product descriptions to maintain an airy, premium feel.
- **Hierarchy Hint:** Always pair a `display-sm` headline with a `label-md` uppercase sub-header (e.g., "SEASONAL SPECIAL" in caramel gold above the product title).

---

## 4. Elevation & Depth
Depth in this system is organic, mimicking ambient studio lighting rather than digital shadows.

### The Layering Principle
Avoid shadows on nested elements. To lift a card from a section, simply move up one tier in the surface tokens (e.g., `surface-container` placed on `surface-container-low`). 

### Ambient Shadows
When an element must float (e.g., a "Quick View" modal):
- **Shadow Color:** `#1c0900` (A deep chocolate tint, never pure black).
- **Blur:** 24px - 40px for a soft, diffused "heavenly" lift.
- **Opacity:** 6% - 10%.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a **Ghost Border**:
- **Token:** `outline-variant` (#544438) at **15% opacity**. This creates a hint of an edge without breaking the "No-Line" rule.

---

## 5. Components

### Buttons (The "Caramel Pour")
- **Primary:** Rounded-full (`9999px`), `primary` background with `on-primary` text. Use a subtle inner-glow gradient to simulate volume.
- **Secondary:** Transparent background with a `Ghost Border`.
- **States:** On press, transition from `primary` to `primary-container` (#d07c30) to simulate the darkening of heated sugar.

### Cards (The "Indulgence Frames")
- **Radius:** `xl` (1.5rem) for a friendly, modern feel.
- **Interaction:** No dividers. Separate the "Product Name" from the "Price" using vertical white space (Scale `4` - 1.4rem).
- **Photography:** Images should bleed to the top and sides of the card, using a soft bottom fade into the card's surface color.

### Chips & Tags
- **Selection Chips:** Use `surface-container-highest` with `on-surface` text. When selected, switch to `primary` with `on-primary`.
- **M-Pesa Context:** Payment chips use `secondary-container` (#00761f) to signal a secure transaction zone.

### Input Fields
- **Styling:** Use `surface-container-lowest` for the field background. No bottom line; only a `Ghost Border` on focus using the `primary` token.
- **Labeling:** Use `label-md` floating above the field in `on-surface-variant`.

---

## 6. Do's and Don'ts

### Do
- **DO** use generous whitespace. High-end brands aren't afraid of "empty" space.
- **DO** overlap elements. Let a cookie image slightly break the boundary of its container to create a 3D effect.
- **DO** use the Spacing Scale religiously. Consistent gaps (e.g., always `3.5rem` between sections) create a rhythmic, professional feel.

### Don't
- **DON'T** use 100% white (#FFFFFF). It is too harsh. Always use the Cream text (`on-surface` / #ffdcc5) for a warm, candle-lit glow.
- **DON'T** use standard "Drop Shadows." They look cheap. Use Tonal Layering first.
- **DON'T** use sharp corners. Everything in this system should feel as soft and approachable as the treats themselves (minimum radius `0.5rem`).