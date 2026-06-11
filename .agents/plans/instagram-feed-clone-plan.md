# Instagram Feed Clone Plan

## Goal

Build a frontend-only, high-fidelity Instagram desktop main feed clone using Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui where useful, and lucide-react icons.

No backend, authentication, Instagram assets, or copyrighted logos will be used.

## File Structure

Follow the project course structure:

`/app`
Contains routes, route-level layouts, and application logic.

`/app/lib`
Contains reusable utilities, mock data, and shared TypeScript types.

`/app/ui`
Contains all UI components, including feed-specific components and shadcn/ui primitives.

`/public`
Contains static assets if needed. Prefer remote placeholder images or CSS gradients for this implementation.

Config files
Do not modify root config files unless required by shadcn initialization.

## Planned Files

`app/feed/page.tsx`
Main feed route. Composes Sidebar, feed column, RightSidebar, and MessagesFloatingButton.

`app/lib/instagram-feed-data.ts`
Hardcoded mock data arrays for stories, posts, suggestions, messages, and current user.

`app/lib/instagram-feed-types.ts`
Shared TypeScript types for Story, Post, Suggestion, MessagePreview, and UserProfile.

`app/lib/utils.ts`
Utility helper required by shadcn/ui, including `cn()`.

`app/ui/shared/sidebar.tsx`
Fixed dark left sidebar with collapsed icon-first layout and expanded labels on larger screens.

`app/ui/feed/stories-bar.tsx`
Horizontal stories container.

`app/ui/feed/story-bubble.tsx`
Circular gradient story avatar with username label.

`app/ui/feed/feed-post.tsx`
Post header, image area, action row, likes, caption, and metadata.

`app/ui/feed/right-sidebar.tsx`
Current user summary, suggestions, footer links, and copyright text.

`app/ui/messages/messages-floating-button.tsx`
Client component controlling floating Messages pill and popup open state.

`app/ui/messages/messages-panel.tsx`
Compact messages popup with header, scrollable previews, close/expand icons, and compose button.

`app/ui/messages/avatar-stack.tsx`
Overlapping avatar stack used in the floating messages pill.

`app/ui/shared/button.tsx`
shadcn/ui Button primitive.

`app/ui/shared/avatar.tsx`
shadcn/ui Avatar primitive.

`app/ui/shared/scroll-area.tsx`
shadcn/ui ScrollArea primitive.

`app/ui/shared/separator.tsx`
shadcn/ui Separator primitive.

`app/ui/shared/tooltip.tsx`
shadcn/ui Tooltip primitive.

## Dependencies

Install lucide-react:

```bash
pnpm add lucide-react
```

Initialize shadcn/ui if not already initialized:

```bash
pnpm dlx shadcn@latest init
```

Add useful shadcn/ui primitives:

```bash
pnpm dlx shadcn@latest add button avatar scroll-area separator tooltip
```

If using npm instead:

```bash
npm install lucide-react
npx shadcn@latest init
npx shadcn@latest add button avatar scroll-area separator tooltip
```

## Layout Plan

Desktop:
- Fixed left sidebar.
- Centered feed column.
- Right sidebar visible on large screens.
- Floating Messages pill bottom-right.

Medium screens:
- Hide right sidebar.
- Keep feed centered.
- Sidebar remains compact.

Small screens:
- Use compact sidebar or bottom-safe spacing.
- Hide right sidebar.
- Prevent horizontal overflow.

## Component Behavior

Sidebar:
- Dark fixed vertical rail.
- Active Home state.
- Icons from lucide-react.
- Labels visible on wider screens.
- Includes profile avatar, More, and Also from Meta.

StoriesBar:
- Uses mock story data.
- Gradient ring around avatars.
- Username under each avatar.
- Horizontal overflow safe.

FeedPost:
- Uses mock post data.
- Header with avatar, username, location, timestamp, verified indicator, and menu.
- Large portrait/square placeholder image.
- Like, comment, share, and bookmark actions.
- Likes count and caption.

RightSidebar:
- Current user summary with Switch link.
- Suggested for you section.
- Follow links.
- Instagram-like footer links and copyright.

MessagesFloatingButton:
- Rounded dark pill.
- Paper-plane icon.
- Messages text.
- AvatarStack on the right.
- Opens MessagesPanel on click.

MessagesPanel:
- Compact dark popup above the pill.
- Header with Messages, expand icon, and close icon.
- Scrollable message previews.
- Floating compose button.

## Styling Direction

- Background: near-black, close to `#000` or `#05080b`.
- Panels: `#1f2329` / `#262a31` style dark surfaces.
- Text: white, muted gray, blue accent.
- Borders: subtle dark gray.
- Instagram-like story gradient using pink, purple, orange, and yellow.
- No copyrighted assets or official Instagram logo.

## Verification

Run:

```bash
pnpm lint
pnpm build
pnpm dev
```

Confirm:
- `/feed` renders successfully.
- No TypeScript errors.
- No horizontal overflow.
- Messages popup opens and closes.
- Desktop, medium, and small breakpoints remain usable.
