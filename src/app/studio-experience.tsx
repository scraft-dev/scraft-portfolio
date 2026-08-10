"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  ["01", "Webサイト制作", "会社やお店のことが、初めて見る人にもきちんと伝わるサイトをつくります。小さく始めたいご相談も歓迎です。"],
  ["02", "既存サイトの改善", "見づらい、スマートフォンで崩れる、問い合わせにつながらない。いまあるサイトを確認し、必要な部分から直します。"],
  ["03", "Webツール開発", "毎日の確認や繰り返し作業を、使いやすい小さな仕組みに。企画から公開後の改善まで一緒に進めます。"],
];

const process = [
  ["01", "相談", "メッセージで、困っていることや作りたいものを聞かせてください。まだ整理されていなくても大丈夫です。"],
  ["02", "提案", "必要な内容、費用、進め方を先にお伝えします。追加費用が出る場合も、作業前に確認します。"],
  ["03", "制作", "途中の状態を共有しながら形にします。完成してから初めて見る、という進め方にはしません。"],
  ["04", "公開・改善", "動作を確認して公開。その後に見つかった改善点も、優先順位をつけて育てていきます。"],
];

export default function StudioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".section-label, .service-heading, .service-list article, .works-heading, .featured-work, .small-works article, .process-heading, .process li, .contact > *",
    );

    targets.forEach((target, index) => {
      target.classList.add("reveal");
      if (index % 4) target.classList.add(`reveal-delay-${index % 4}`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <main id="content">
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="wordmark" href="#content" aria-label="S.Craft ホーム">S.Craft</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="メニューを開く"><span/><span/></button>
      <nav className={menuOpen ? "is-open" : ""} aria-label="メインメニュー">
        <a href="#content" onClick={() => setMenuOpen(false)}>About</a><a href="#services" onClick={() => setMenuOpen(false)}>Service</a><a href="#works" onClick={() => setMenuOpen(false)}>実績</a><a href="#contact" onClick={() => setMenuOpen(false)}>相談する</a>
      </nav>
    </header>

    <section className="hero">
      <div className="hero-title">
        <p className="eyebrow">Web design &amp; development / Japan</p>
        <h1><span>Webサイト制作</span><span>プロダクト開発</span></h1>
        <p className="craft-line" aria-label="企画、設計、制作、改善"><span>Plan <i/> Design <i/> Build <i/> Improve</span></p>
      </div>
      <aside className="hero-side" aria-label="S.Craftプロフィール">
        <p className="side-label">S.Craft</p>
        <p>日本を拠点に、Webサイトと小さなWebツールを制作しています。技術を見せるためではなく、使う人の迷いを減らすための制作を。</p>
        <dl><div><dt>Based in</dt><dd>Japan</dd></div><div><dt>Contact</dt><dd>Message / Email</dd></div></dl>
        <nav aria-label="外部リンク"><a href="https://github.com/scraft-dev" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.instagram.com/scraft_jp/" target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a href="https://www.threads.com/@scraft_jp" target="_blank" rel="noreferrer">Threads <span>↗</span></a></nav>
      </aside>
      <div className="hero-summary">
        <p className="hero-lead">目的を整理し、画面を設計し、動くところまで。企画、実装、公開後の改善をひとつの流れで進めます。まだ内容が固まっていないご相談も、メッセージから始められます。</p>
        <div className="hero-actions"><a className="primary-link" href="#contact">相談してみる <span>↗</span></a><a className="text-link" href="#works">制作実績を見る <span>↓</span></a></div>
      </div>
    </section>

    <section className="services" id="services">
      <div className="section-label light"><span>01</span> Services</div><div className="service-heading"><h2>提供サービス</h2><p>Webサイトの新規制作、既存サイトの改善、Webツールの開発。内容が決まっていない場合は、優先順位を整理するところから始めます。</p></div>
      <div className="service-list">{services.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="works" id="works">
      <div className="section-label"><span>02</span> Works</div><div className="works-heading"><h2>実績紹介</h2><p>制作したものと担当範囲を紹介します。</p></div>
      <article className="featured-work">
        <a className="work-visual" href="https://launch-check-five.vercel.app/" target="_blank" rel="noreferrer"><Image src="/launch-check-home.png" alt="Launch Checkの公開画面" width={1280} height={820} priority/></a>
        <div className="work-copy"><div className="work-index">01 / Product</div><h3>Launch Check</h3><p className="work-lead">公開前のWebサイトを、ひとつのURLから確認するツール。</p><p>リンク切れや表示上の問題など、見落としやすい項目をまとめて確認できるように設計しました。企画、画面設計、実装、公開後の修正までS.Craftで進めています。</p><dl><div><dt>担当</dt><dd>企画 / 設計 / UI / 開発</dd></div><div><dt>技術</dt><dd>Next.js / TypeScript / Vercel</dd></div><div><dt>状態</dt><dd>公開・改善中</dd></div></dl><a className="text-link" href="https://launch-check-five.vercel.app/" target="_blank" rel="noreferrer">サイトを開く <span>↗</span></a></div>
      </article>
      <div className="small-works"><article><span>02 / Studio</span><h3>S.Craft Portfolio</h3><p>このサイトも制作実績のひとつ。会社の考えと仕事が、飾らず伝わる構成を目指して更新を続けています。</p></article><article><span>03 / Ongoing</span><h3>Site improvement</h3><p>既存サイトの診断、スマートフォン表示の修正、情報の整理。小さな改善を積み重ねる仕事を進めています。</p></article></div>
    </section>

    <section className="process"><div className="section-label light"><span>03</span> Process</div><div className="process-heading"><h2>制作の流れ</h2><p>相談から公開後の改善まで。</p></div><ol>{process.map(([number,title,text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

    <section className="contact" id="contact"><p className="eyebrow">Contact</p><h2>ご相談は、<br/>メッセージから。</h2><p>サイトのURLと気になる点だけでも構いません。内容を確認して、次にできることをメッセージでお返しします。</p><a href="mailto:scraft.contact.jp@gmail.com">scraft.contact.jp@gmail.com <span>↗</span></a></section>
    <footer><a className="wordmark" href="#content">S.Craft</a><p>Web design &amp; development</p><span>© 2026 S.Craft</span></footer>
  </main>;
}
