# Portfolio & Blog

Next.js 14(App Router), Tailwind CSS 기반의 한 페이지짜리 개인 사이트입니다. 한·영 라우트(`/ko`, `/en`)와 다크 모드를 지원하고, 메인 페이지에서 CV와 포트폴리오로 연결됩니다.

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) — 루트 `/`는 `app/page.tsx`가 기본 로케일 `/ko`로 리다이렉트합니다.

## 환경 변수

| 변수 | 설명 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 배포 도메인(예: `https://username.vercel.app`). OG URL·`metadataBase`에 사용됩니다. 로컬에서는 생략 가능합니다. |
| `NEXT_PUBLIC_BASE_PATH` | GitHub Pages 하위 경로(예: `/my_blog`). `<username>.github.io` 저장소면 비워 둡니다. 배포 워크플로우가 자동으로 설정합니다. |

## CV · 포트폴리오 연결

메인 페이지에는 **CV 보기**, **포트폴리오 보기** 버튼 두 개만 있습니다. 링크는 `data/site.ts`에서 바꿉니다.

- PDF로 올릴 경우: `public/cv.pdf`, `public/portfolio.pdf`에 파일을 넣습니다(기본값).
- 외부 링크(노션, 구글 드라이브 등)라면 `cvUrl`, `portfolioUrl`을 `https://...` 주소로 바꿉니다.

## 개인 정보·문구 수정

- **이름, 소개, 이메일, GitHub**: `data/site.ts`
- **버튼 등 UI 문구(한/영)**: `lib/i18n.ts`

## 배포 (GitHub Pages)

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드(`out/`)하고 GitHub Pages에 배포합니다.

- 최초 1회: 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정합니다.
- 저장소 이름이 `<username>.github.io`면 `https://<username>.github.io/`, 그 외 이름이면 `https://<username>.github.io/<저장소이름>/`에 게시됩니다.
- 로컬에서 정적 빌드 확인: `npm run build` → `out/` 폴더 생성.

## 폴더 구조

- `app/` — 라우트·레이아웃(App Router)
- `components/` — 헤더·푸터·히어로 등 UI
- `data/` — 사이트 설정(이름, 소개, CV·포트폴리오 링크)
- `lib/` — 문구(i18n), SEO, 경로, 로케일
- `public/` — 정적 자산(cv.pdf, portfolio.pdf 등)

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint |
