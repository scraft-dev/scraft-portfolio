import type { Metadata } from "next";
import "./globals.css";

const organizationData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "S.Craft",
  description:
    "Webサイト制作、既存サイトの改善、Webプロダクト開発を行う制作スタジオです。",
  areaServed: "JP",
  email: "scraft.contact.jp@gmail.com",
  sameAs: [
    "https://github.com/scraft-dev",
    "https://www.instagram.com/scraft_jp/",
    "https://www.threads.com/@scraft_jp",
  ],
};

export const metadata: Metadata = {
  title: "S.Craft｜Webサイト制作・Webプロダクト開発",
  description:
    "S.Craftは日本を拠点に、Webサイト制作、既存サイトの改善、Webプロダクト開発を行っています。企画から設計、実装、公開後の改善まで対応します。",
  applicationName: "S.Craft",
  authors: [{ name: "S.Craft" }],
  creator: "S.Craft",
  publisher: "S.Craft",
  keywords: [
    "S.Craft",
    "Webサイト制作",
    "ホームページ制作",
    "Webサイト改善",
    "Webプロダクト開発",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "S.Craft｜Webサイト制作・Webプロダクト開発",
    description:
      "目的を整理し、画面を設計し、動くところまで。WebサイトとWebプロダクトを企画から改善まで一緒につくります。",
    siteName: "S.Craft",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "S.Craft｜Webサイト制作・Webプロダクト開発",
    description:
      "WebサイトとWebプロダクトを、企画から設計・実装・改善まで。",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#content">
          本文へ移動
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </body>
    </html>
  );
}
