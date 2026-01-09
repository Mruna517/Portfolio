export function pinGlassButton() {
    const target = document.querySelector('.about-right');
    const btn = document.getElementById('glass-button-container');
    if (!target || !btn) return;

    const r = target.getBoundingClientRect();
    btn.style.top  = r.top + window.scrollY + 'px';
    btn.style.left = r.right + window.scrollX - btn.offsetWidth + 'px';
}
