import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "S.Craft Field Notes｜制作の理由と記録",
  description:
    "S.CraftがWebサイトやプロダクトをつくる理由、制作中の判断、公開後の改善を記録した別案ポートフォリオ。",
};

const decisions = [
  ["困っていたこと", "公開前の確認項目が散らばり、見落としが起きやすい"],
  ["最初に決めたこと", "URLを入れるだけで始められること。専門用語を減らすこと"],
  [
    "公開後に直したこと",
    "スキャン失敗の原因表示、URLの重複処理、スマホでの読みやすさ",
  ],
];

const revisionLog = [
  ["08.10", "Heroの言葉とプロフィールの重複を整理"],
  ["08.10", "Contactの見出しを短く変更"],
  ["08.10", "スマホで見出しが改行される問題を修正"],
];

export default function FieldNotesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          S.Craft
        </Link>
        <p>Field notes / 2026</p>
        <nav aria-label="ページ内メニュー">
          <a href="#launch-check">Launch Check</a>
          <a href="#log">Build log</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <p className={styles.kicker}>Web design and product development</p>
        <h1>
          つくる前に
          <br />
          迷う場所を見つける
        </h1>
        <div className={styles.heroNote}>
          <p>
            S.Craftは、Webサイトと小さなWebプロダクトをつくっています。
            見た目を整えるだけでなく、どこで迷うか、何が伝わっていないかを先に見ます。
          </p>
          <p className={styles.marginNote}>Based in Japan / S.Craft</p>
        </div>
        <a className={styles.scrollCue} href="#launch-check">
          最初の実例を見る <span>↓</span>
        </a>
      </section>

      <section className={styles.caseStudy} id="launch-check">
        <div className={styles.caseIntro}>
          <p className={styles.label}>In progress — Launch Check</p>
          <h2>
            公開前の確認を
            <br />
            ひとつの画面に
          </h2>
          <p>
            リンク、表示、エラーを別々に確認していた作業を、URLひとつから始められる形にまとめています。
            完成品として飾るのではなく、公開しながら直しているプロダクトです。
          </p>
          <a
            href="https://launch-check-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Launch Checkを開く ↗
          </a>
        </div>

        <a
          className={styles.productShot}
          href="https://launch-check-five.vercel.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Launch Checkを開く"
        >
          <span className={styles.browserLine}>
            launch-check-five.vercel.app
          </span>
          <Image
            src="/launch-check-home.png"
            alt="Launch Checkの公開画面"
            width={1280}
            height={820}
            priority
          />
        </a>

        <div className={styles.decisionList}>
          {decisions.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className={styles.beforeAfter}>
          <div>
            <p>Before</p>
            <strong>
              ブラウザ、リンク、表示を
              <br />
              別々に確認する
            </strong>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <p>After</p>
            <strong>
              URLを入れて
              <br />
              結果をひとつにまとめる
            </strong>
          </div>
        </div>
      </section>

      <section className={styles.buildLog} id="log">
        <div className={styles.logHeading}>
          <p className={styles.label}>This site is also a work</p>
          <h2>
            公開してから
            <br />
            見えたこと
          </h2>
        </div>
        <div className={styles.logBody}>
          <p className={styles.logLead}>
            このポートフォリオも、一度で完成したものではありません。
            実際の画面を見ながら、言葉と余白を少しずつ直しています。
          </p>
          <ol>
            {revisionLog.map(([date, text]) => (
              <li key={`${date}-${text}`}>
                <time>{date}</time>
                <span>{text}</span>
              </li>
            ))}
          </ol>
          <blockquote>
            「きれいに見える」より、
            <br />
            誰が何をしているかが残る方へ。
          </blockquote>
        </div>
      </section>

      <section className={styles.scope}>
        <p className={styles.label}>What I work on</p>
        <p>新しいWebサイト</p>
        <p>今あるサイトの改善</p>
        <p>小さなWebツール</p>
        <aside>
          内容が決まっていない場合は、作るものを決めるところから相談できます。
        </aside>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.label}>Contact</p>
        <h2>気になっていることから</h2>
        <a href="mailto:scraft.contact.jp@gmail.com">
          scraft.contact.jp@gmail.com <span>↗</span>
        </a>
      </section>

      <footer className={styles.footer}>
        <Link href="/">現在のサイトへ戻る</Link>
        <span>© 2026 S.Craft</span>
      </footer>
    </main>
  );
}
