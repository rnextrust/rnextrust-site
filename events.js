// ===== Events page filter =====
const filterPills = document.querySelectorAll('.filter-pill');
const eventCards = document.querySelectorAll('.event-card');
const eventsEmpty = document.getElementById('eventsEmpty');

filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    const filter = pill.dataset.filter;
    let visibleCount = 0;

    eventCards.forEach(card => {
      const status = card.dataset.status; // progress | upcoming | completed | sample
      const matches =
        filter === 'all' ||
        (filter === status) ||
        (filter === 'upcoming' && status === 'sample'); // sample card shown under "upcoming" too, since it represents that kind of entry

      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    eventsEmpty.style.display = visibleCount === 0 ? 'block' : 'none';
  });
});
