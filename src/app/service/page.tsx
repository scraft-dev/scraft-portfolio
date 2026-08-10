import Link from "next/link";
import styles from "./service.module.css";

const checks = [
  "スマホで文字や画像が崩れている",
  "最初の画面でサービス内容が伝わりにくい",
  "問い合わせ先や予約ボタンを見つけにくい",
];

export default function ServicePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>S.CRAFT</Link>
        <a href="mailto:scraft.contact.jp@gmail.com?subject=サイト改善の相談">相談する</a>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>TOP PAGE IMPROVEMENT / 3 CLIENT PILOT</p>
        <h1>スマホで、<br /><em>問い合わせを逃さない。</em></h1>
        <p className={styles.lead}>既存サイトのトップページを、見やすく、伝わりやすく、問い合わせしやすい状態へ。診断だけで終わらず、対応可能な範囲は実際に修正します。</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="mailto:scraft.contact.jp@gmail.com?subject=サイト改善の相談&body=サイトURL：%0D%0A使用サービス：%0D%0A困っていること：">サイトを相談する →</a>
          <span>電話不要・メッセージで完結</span>
        </div>
      </section>

      <section className={styles.problems}>
        <p className={styles.label}>こんな状態を整えます</p>
        <div className={styles.problemGrid}>{checks.map((item, index) => <article key={item}><b>0{index + 1}</b><p>{item}</p></article>)}</div>
      </section>

      <section className={styles.beforeAfter}>
        <div>
          <p className={styles.label}>改善イメージ</p>
          <h2>全部を作り直さず、<br />迷う場所を減らす。</h2>
          <p>派手な装飾より、最初の画面・スマホ表示・問い合わせ導線を優先します。変更理由と修正前後の画像もお渡しします。</p>
        </div>
        <div className={styles.comparison}>
          <article className={styles.before}><span>BEFORE</span><i /><i /><i /><button>お問い合わせ</button></article>
          <b>→</b>
          <article className={styles.after}><span>AFTER</span><strong>何を頼めるか、<br />すぐ分かる。</strong><p>必要な情報を読みやすく整理</p><button>相談してみる</button></article>
        </div>
      </section>

      <section className={styles.package}>
        <div><p className={styles.label}>検証期間・先着3件</p><h2>トップページ改善パック</h2><p className={styles.price}>¥19,800 <small>税込</small></p></div>
        <ul>
          <li>トップページ1ページ</li><li>スマホ表示の崩れ・はみ出し修正</li><li>最初の見出しと情報構成の整理</li><li>問い合わせボタン・導線の改善</li><li>修正前後の画像と変更点一覧</li><li>軽微な修正1回・5営業日以内</li>
        </ul>
      </section>

      <section className={styles.boundary}>
        <h2>できることを、曖昧にしません。</h2>
        <div><article><h3>対応環境</h3><p>HTML/CSS、Next.js、STUDIO。WordPressはサイトを確認後、安全に対応できる場合のみ承ります。</p></article><article><h3>含まれないもの</h3><p>新規サイト制作、複数ページ、決済・予約機能、ロゴや写真制作、SEO順位・売上・問い合わせ数の保証。</p></article><article><h3>安全な進め方</h3><p>作業前に範囲を文章で確認。招待機能と最小権限を使い、追加料金が必要な作業は承諾なしに進めません。</p></article></div>
      </section>

      <section className={styles.flow}>
        <p className={styles.label}>進め方</p><h2>電話なし、4ステップ。</h2>
        <ol><li><b>1</b><span>URLと困りごとを送る</span></li><li><b>2</b><span>対応範囲・納期を確認</span></li><li><b>3</b><span>安全に修正・確認</span></li><li><b>4</b><span>変更点と画像を納品</span></li></ol>
      </section>

      <section className={styles.cta}><p>まず、対応できるサイトか確認します。</p><h2>サイトURLと、困っていることを<br />メッセージで教えてください。</h2><a href="mailto:scraft.contact.jp@gmail.com?subject=サイト改善の相談&body=サイトURL：%0D%0A使用サービス：%0D%0A困っていること：">無料で対応可否を確認する →</a></section>
      <footer className={styles.footer}><span>S.CRAFT / JAPAN</span><span>※売上や問い合わせ増加を保証するサービスではありません。</span></footer>
    </main>
  );
}
