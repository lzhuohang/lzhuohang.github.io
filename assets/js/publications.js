(() => {
  const section = document.querySelector('.publication-showcase');
  if (!section) return;
  const filters = section.querySelector('.publication-filters');
  const cards = [...section.querySelectorAll('.publication-card')];
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-topic]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.topic !== 'all' && !card.dataset.topics.split(',').includes(button.dataset.topic); });
    section.querySelector('[role="status"]').textContent = `${cards.filter(card => !card.hidden).length} publications shown.`;
  });
})();
