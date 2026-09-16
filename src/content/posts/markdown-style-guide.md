---
title: Markdown 스타일 가이드
description: oopslab 블로그에서 사용하는 Markdown 요소와 Atom One 코드 하이라이트를 확인합니다.
publishedAt: 2026-08-29
---

이 글은 본문 타이포그래피와 Markdown 요소를 한 번에 검증하기 위한 예시입니다. 글 제목이 1단계 제목이므로 본문은 2단계부터 시작합니다.

## 2단계 제목

일반 문단입니다. **굵은 글씨**, _기울임 글씨_, ~~취소선~~, `inline code`, [내부 링크](/), [외부 링크](https://astro.build)를 함께 확인합니다.

긴 문장에서도 줄 간격과 글줄 길이가 편안해야 합니다. 한국어와 English가 섞일 때 Geist와 SUIT의 크기, 굵기, baseline도 자연스럽게 이어져야 합니다.

### 3단계 제목

3단계 제목 아래의 본문입니다.

#### 4단계 제목

4단계 제목 아래의 본문입니다.

##### 5단계 제목

5단계 제목 아래의 본문입니다.

###### 6단계 제목

6단계 제목 아래의 본문입니다.

---

## 목록

### 순서 없는 목록

- 첫 번째 항목
- 두 번째 항목
  - 중첩된 항목
  - **강조된 항목**과 `code`
- 세 번째 항목

### 순서 있는 목록

1. 문제를 관찰합니다.
2. 가장 작은 해결책을 만듭니다.
3. 결과를 검증합니다.

### 할 일 목록

- [x] Astro 설정
- [x] Atom One 코드 하이라이트 적용
- [ ] 다음 글 작성

## 인용문

### 한 문단

> 좋은 도구는 글보다 앞에 나서지 않습니다. 이어지는 문장도 같은 문단 안에서 자연스럽게 흐릅니다.

### 여러 문단

> 좋은 도구는 글보다 앞에 나서지 않습니다.
>
> 여러 문단으로 이어지는 인용문도 본문과 명확히 구분되어야 합니다.

## 표

<table>
  <caption>Flexoki semantic color token</caption>
  <thead>
    <tr>
      <th scope="col">Token</th>
      <th scope="col">Light</th>
      <th scope="col">Dark</th>
      <th scope="col">용도</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bg</code></td>
      <td>Paper</td>
      <td>Black</td>
      <td>페이지 배경</td>
    </tr>
    <tr>
      <td><code>tx</code></td>
      <td>Base 900</td>
      <td>Base 150</td>
      <td>기본 글자</td>
    </tr>
    <tr>
      <td><code>tx-2</code></td>
      <td>Base 600</td>
      <td>Base 500</td>
      <td>보조 글자</td>
    </tr>
    <tr>
      <td><code>ui</code></td>
      <td>Base 200</td>
      <td>Base 850</td>
      <td>경계선</td>
    </tr>
  </tbody>
</table>

## 코드

Inline code는 `const answer = 42`처럼 문장 안에서 사용합니다.

```ts
interface Experiment {
  name: string;
  successful: boolean;
}

const experiments: Experiment[] = [{ name: "Astro blog", successful: true }];

export const successful = experiments.filter(({ successful }) => successful);
```

```astro
---
const title = "oopslab";
---

<h1>{title}</h1>
```

```css
:root {
  --background: var(--flexoki-paper);
  --foreground: var(--flexoki-900);
}
```

```bash
pnpm check
pnpm build
```

```json
{
  "theme": "atom-one",
  "mode": "system"
}
```

```diff
- theme: "flexoki"
+ theme: "atom-one"
```

## 이미지

<figure>
  <img
    src="/images/markdown-sample.svg"
    alt="Flexoki의 여덟 가지 강조색 견본"
    width="960"
    height="480"
    loading="lazy"
    decoding="async"
  >
  <figcaption>Flexoki의 여덟 가지 강조색</figcaption>
</figure>

## 링크와 긴 문자열

긴 URL과 식별자는 작은 화면에서 레이아웃을 깨지 않아야 합니다:
`https://blog.oopslab.cc/posts/an-intentionally-long-path-for-overflow-testing/`

## 각주

Flexoki는 글을 읽기 위한 색상 체계입니다.[^flexoki]

[^flexoki]: 자세한 내용은 [Flexoki 공식 문서](https://stephango.com/flexoki)에서 확인할 수 있습니다.

## HTML 요소

<dl>
  <dt>SSG</dt>
  <dd>빌드 시점에 HTML을 생성하는 방식입니다.</dd>
  <dt>GEO</dt>
  <dd>생성형 검색 엔진이 콘텐츠를 이해하고 인용하기 쉽게 구성하는 방식입니다.</dd>
</dl>

<details>
  <summary>접을 수 있는 상세 내용</summary>
  <p>브라우저의 기본 disclosure interaction을 사용합니다.</p>
</details>

<abbr title="Static Site Generation">SSG</abbr>와 <mark>강조 표시</mark>, 짧은 인용인 <q>좋은 글은 오래 남습니다</q>를 확인합니다.

키보드 입력은 <kbd>⌘</kbd> + <kbd>K</kbd>처럼 표시합니다. H<sub>2</sub>O와 x<sup>2</sup>도 본문 흐름을 깨지 않아야 합니다.
