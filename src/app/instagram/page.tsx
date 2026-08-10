import Image from "next/image";
import type { Metadata } from "next";
import styles from "./instagram.module.css";
import "./editorial.css";

export const metadata: Metadata = {
  title: "S.Craft Social Assets",
  robots: { index: false, follow: false },
};

const cards = {
  "1": {
    number: "01 / SITE CHECK",
    title: <>スマホで、<br /><em>損していない？</em></>,
    copy: "最初の画面で、何のサービスか・誰向けか・問い合わせ先が分かるか確認します。",
    tag: "S.CRAFT / WEB IMPROVEMENT",
    tone: "blue",
  },
  "2": {
    number: "02 / BEFORE → AFTER",
    title: <>全部変えずに、<br /><em>迷う場所を減らす。</em></>,
    copy: "スマホ表示・最初の見出し・問い合わせ導線。まずはこの3つを整えます。",
    tag: "SMALL CHANGE / CLEAR RESULT",
    tone: "lime",
  },
  "3": {
    number: "03 / OPEN FOR 3 PROJECTS",
    title: <>トップページ改善<br /><em>19,800円</em></>,
    copy: "トップページ1枚・5営業日・修正1回。電話なし、メッセージで進められます。",
    tag: "PILOT PRICE / TAX INCLUDED",
    tone: "orange",
  },
} as const;

export default async function InstagramAsset({ searchParams }: { searchParams: Promise<{ slide?: string }> }) {
  const { slide = "1" } = await searchParams;
  if (slide === "real") {
    return (
      <main className={`${styles.realCard} editorial-card`}>
        <header><b>S.Craft</b><span>制作記録　01</span></header>
        <section className={`${styles.realIntro} editorial-intro`}>
          <p>Launch Check</p>
          <h1>公開ボタンを押す前に、<br />もう一度だけ確かめたい。</h1>
          <p className={`${styles.realLead} editorial-lead`}>リンクは切れていないか。スマホで崩れていないか。<br />あちこち開いて確認する手間から、このツールは始まりました。</p>
        </section>
        <section className={`${styles.productShot} editorial-shot`}>
          <Image src="/launch-check-home.png" alt="Launch Checkの実際の画面" width={1280} height={820} priority />
        </section>
        <section className={`${styles.realFooter} editorial-footer`}>
          <p>URLをひとつ。公開前の確認を、ひとつの場所に。</p>
          <span>launch-check-five.vercel.app</span>
        </section>
      </main>
    );
  }
  const item = cards[slide as keyof typeof cards] ?? cards["1"];
  return (
    <main className={`${styles.card} ${styles[item.tone]}`}>
      <header><span>S.CRAFT</span><span>{item.number}</span></header>
      <div className={styles.signal}><i>WEB</i><i>SMARTPHONE</i><i>CONTACT</i></div>
      <section><p>小さな事業のWebサイトを、見やすく、伝わりやすく。</p><h1>{item.title}</h1><p className={styles.copy}>{item.copy}</p></section>
      <footer><span>{item.tag}</span><b>↗</b></footer>
    </main>
  );
}
