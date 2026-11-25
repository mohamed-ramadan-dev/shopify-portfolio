document.querySelectorAll('[data-walkthrough]').forEach((walkthrough) => {
  const steps = [...walkthrough.querySelectorAll('.walkthrough-steps > li')];
  const controls = walkthrough.querySelector('.walkthrough-controls');
  const progress = walkthrough.querySelector('.walkthrough-progress');
  const segments = [...progress.children];
  const previous = controls.querySelector('[data-prev]');
  const next = controls.querySelector('[data-next]');
  const count = controls.querySelector('[data-count]');
  let active = 0;

  function showStep(index) {
    active = (index + steps.length) % steps.length;
    steps.forEach((step, stepIndex) => {
      step.hidden = stepIndex !== active;
    });
    segments.forEach((segment, stepIndex) => {
      segment.classList.toggle('reached', stepIndex <= active);
    });
    const title = steps[active].querySelector('strong').textContent;
    count.textContent = 'Step ' + (active + 1) + ' of ' + steps.length + ' · ' + title;
  }

  previous.addEventListener('click', () => showStep(active - 1));
  next.addEventListener('click', () => showStep(active + 1));
  showStep(active);
  controls.hidden = false;
  progress.hidden = false;
});
