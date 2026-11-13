/**
 * GitHub Pages(정적 호스팅)용 설정.
 * - 빌드 결과는 out/ 폴더에 정적 HTML로 생성됨
 * - NEXT_PUBLIC_BASE_PATH: 저장소 이름이 <username>.github.io 이면 "" (빈 값),
 *   그 외 저장소(예: my_blog)면 "/my_blog". GitHub Actions 워크플로우가 자동으로 설정함.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Avoid missing vendor chunk / resolution issues with next-themes in App Router */
  transpilePackages: ["next-themes"],
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
