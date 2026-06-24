// ============================== 
// TOTONOI LP 共通設定
// ==============================

// 予約ページURLをここに入れてください。
// 例："https://reserve.489ban.net/client/g-totonoi/0/plan/id/254951/stay"
const RESERVATION_URL = "https://reserve.489ban.net/client/g-totonoi/0/plan/id/254951/stay";

// 予約リンクを一括設定
const reserveLinks = document.querySelectorAll(".js-reserve-link");
reserveLinks.forEach((link) => {
  link.href = RESERVATION_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// ヘッダーのスクロール時スタイル
const header = document.querySelector(".site-header");
const floatingCta = document.querySelector(".floating-cta");

const updateScrollState = () => {
  const scrolled = window.scrollY > 80;
  header?.classList.toggle("is-scrolled", scrolled);
  floatingCta?.classList.toggle("is-visible", window.scrollY > 520);
};

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("load", updateScrollState);

// ページ内リンクのスムーススクロール補助
const internalLinks = document.querySelectorAll('a[href^="#"]:not(.js-reserve-link)');
internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    const headerHeight = header?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
