---
name: check-chatui-styles
description: Validate and maintain the shared @bioagent/chatui theme tokens, Tailwind mappings, and showcase styling boundary. Use when adding or changing colors, shadows, CSS variables, Tailwind configuration, shared component styles, or showcase styling under packages/chatui/packages/ui.
---

# Check ChatUI Styles

Keep `src/styles.css` as the component library's only source of owned color and shadow values.

## Workflow

1. Work from `packages/chatui/packages/ui`.
2. Run `corepack pnpm styles:check` before and after style changes.
3. Fix theme or Tailwind sources when validation fails; do not weaken the checker.
4. Run `corepack pnpm typecheck` and `corepack pnpm build` after validation passes.
5. Compare the component showcase with the original ChatUI showcase before replacing the original component.

## Rules

- Define owned theme variables only in `src/styles.css`.
- Component CSS and CSS Modules are allowed for component-specific structure, selectors, animation, and interaction.
- When a value belongs to the shared design system, consume its configured Tailwind utility with a class or `@apply` instead of redefining it in component CSS.
- Do not define theme variables or color literals in component CSS; shared theme values belong in `src/styles.css` and `tailwind.config.ts`.
- Prefix every owned variable with `--chatui-`.
- Name tokens by function, such as `brand-primary`, `text-muted`, `surface`, or `status-danger`.
- Make every custom Tailwind color and color-bearing theme value reference a token from `src/styles.css`.
- Do not use Tailwind's built-in palette utilities, including `text-gray-600`, `border-gray-200`, `bg-gray-100`, or any other numbered `gray`, `slate`, `zinc`, `neutral`, `stone`, or chromatic palette class.
- Do not recreate generic numbered palettes such as `gray-1` through `gray-7`. Add a functionally named token and Tailwind alias for the role being styled, then consume that semantic utility.
- Store each color once as HEX; use `#RRGGBBAA` when the design specifies fixed transparency.
- Map Tailwind colors directly with `var(--chatui-...)`; do not use RGB duplicates or `<alpha-value>`.
- Do not mutate colors with Tailwind opacity suffixes such as `bg-danger/20`; add a semantic fixed-alpha token instead.
- Do not put color literals in `tailwind.config.ts`.
- Do not reach into the prototype's `src/index.css` or `tailwind.config.ts`.
- Preserve public component names, props, states, and observable interaction during migration.
- High-fidelity prototype pages must import presentation components directly from `@bioagent/chatui`; do not reintroduce JSX implementations under the prototype host.
- Files retained under the prototype's `src/components/chat` and `src/components/common` are compatibility paths only and must remain pure re-exports of the same public component names.

## Adding a Color

1. Add one semantic HEX value to `src/styles.css`; include alpha in the HEX value when required.
2. Map it from `tailwind.config.ts` with `var(--chatui-...)` and a functional alias such as `primaryText`, `controlBorder`, or `surfaceMuted`.
3. Run `corepack pnpm styles:check`.
4. Verify all affected states in the component showcase.

The deterministic color and prototype-boundary checkers are bundled in this Skill's `scripts` directory and both run through `styles:check`.
