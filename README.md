# oopslab blog

[blog.oopslab.cc](https://blog.oopslab.cc)의 Astro 기반 정적 블로그입니다. Markdown으로 글을 작성하며 production client JavaScript 없이 빌드됩니다.

## Development

```bash
pnpm install
pnpm dev
pnpm format:check
pnpm check
pnpm build
```

Production은 system color scheme을 따릅니다. Local development에서만 query로 theme을 고정할 수 있습니다.

```text
?theme=light
?theme=dark
?theme=system
```

## Writing

`src/content/posts`에 Markdown 파일을 추가합니다. 파일명이 URL slug가 됩니다.

```yaml
---
title: 글 제목
description: 검색 결과와 홈에 표시할 설명
lang: ko # ko | en, default: ko
publishedAt: 2026-08-29
updatedAt: 2026-08-30 # optional
draft: false # default: false
---
```

글 URL은 `/posts/<slug>/`입니다. 공개 글은 발행일 역순으로 정렬되며 글 하단에서 이전·다음 글로 연결됩니다.

## Design system

| Concern                            | Source of truth                                                   |
| ---------------------------------- | ----------------------------------------------------------------- |
| Brand primitives                   | `src/styles/oops.css`                                             |
| Reading palette                    | [Flexoki](https://stephango.com/flexoki)                          |
| Semantic colors · prose rhythm     | `src/styles/global.css`                                           |
| Spacing · typography · breakpoints | Tailwind CSS defaults                                             |
| Prose type scale                   | Tailwind Typography                                               |
| Syntax colors                      | official Atom One Light / One Dark 기반 `src/themes/atom-one.mjs` |

- Text: Geist + SUIT Variable
- Code: Geist Mono
- Content width: Tailwind `max-w-prose`
- Layout/type units: `rem`; prose-relative ratios: `em`
- Rhythm grid: `0.25rem`
- Code background: Oops Paper / Flexoki 950

Design references: [Vercel Geist](https://vercel.com/geist/typography), [GitHub Primer](https://primer.style/), [Radix Themes](https://www.radix-ui.com/themes/docs/theme/spacing).

## SEO and accessibility

Canonical URL, sitemap, robots directives, Open Graph, Twitter cards, JSON-LD, per-post language metadata와 semantic Markdown 처리를 build에 포함합니다.

## Third-party notices

요약은 [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md), license 전문은 `licenses/`, 배포용 고지문은 `/third-party-notices.txt`에 있습니다.
