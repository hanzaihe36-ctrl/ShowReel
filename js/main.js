/* ========================================
   通用 JavaScript 脚本
   零依赖，原生 ES6+
   ======================================== */

/**
 * 移动端汉堡菜单切换
 */
function initMobileMenu() {
    const toggleBtn = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggleBtn || !navLinks) return;

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // 点击导航链接后关闭菜单
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', (e) => {
        if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
        }
    });
}

/**
 * 技能进度条滚动动画
 */
function initSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');

    if (skillFills.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const targetWidth = fill.getAttribute('data-width');
                fill.style.width = targetWidth + '%';
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    skillFills.forEach(fill => observer.observe(fill));
}

/**
 * 页面加载时初始化
 */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSkillBars();
});
