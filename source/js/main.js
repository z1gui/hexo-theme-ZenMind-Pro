/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.home__data`, {origin: 'top', delay: 400})
sr.reveal(`.home__img`, {origin: 'bottom', delay: 600})
sr.reveal(`.home__footer`, {origin: 'bottom', delay: 800})

// 目录高亮竖线效果
function updateTocActiveLine() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link._activeDot) {
            link._activeDot.remove();
            link._activeDot = null;
        }
    });
    // 找到当前激活的目录项
    let activeLink = null;
    let minDistance = Infinity;
    const headerOffset = 100;
    document.querySelectorAll('.post-md h1, .post-md h2, .post-md h3, .post-md h4, .post-md h5, .post-md h6').forEach((heading, idx) => {
        const rect = heading.getBoundingClientRect();
        const distance = Math.abs(rect.top - headerOffset);
        if (distance < minDistance) {
            minDistance = distance;
            activeLink = tocLinks[idx];
        }
    });
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
window.addEventListener('scroll', updateTocActiveLine);
document.addEventListener('DOMContentLoaded', updateTocActiveLine);

// 目录按钮显示/隐藏功能
function toggleToc() {
    const toc = document.querySelector('.post-toc');
    if (!toc) return;
    toc.classList.toggle('hidden');
}
const tocToggleBtn = document.getElementById('tocToggleBtn');
if (tocToggleBtn) {
    tocToggleBtn.addEventListener('click', toggleToc);
}
