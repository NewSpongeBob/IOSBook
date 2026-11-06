const currentFile = location.pathname.split('/').pop();
document.querySelectorAll('.toc a.item').forEach((link) => {
  const target = link.getAttribute('href')?.split('/').pop();
  if (target && target === currentFile) link.classList.add('active');
});
const search = document.getElementById('q');
if (search) {
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    document.querySelectorAll('.toc a.item, .toc a.part').forEach((link) => {
      link.hidden = Boolean(query) && !link.textContent.toLowerCase().includes(query);
    });
  });
}
const toggle = document.getElementById('nav-toggle');
document.querySelectorAll('.toc a').forEach((link) => {
  link.addEventListener('click', () => { if (toggle) toggle.checked = false; });
});
