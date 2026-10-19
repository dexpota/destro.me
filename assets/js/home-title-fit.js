(() => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const fitText = (title, tile) => {
    title.style.removeProperty('font-size');
    const style = getComputedStyle(title);
    const tileStyle = getComputedStyle(tile);
    const lines = title.innerText.split(/\n/).filter(Boolean);
    const baseSize = parseFloat(style.fontSize);
    const size = 192;
    const lineHeight = parseFloat(style.lineHeight) / baseSize;
    const width = title.clientWidth;
    const height = tile.clientHeight - parseFloat(tileStyle.paddingTop) - parseFloat(tileStyle.paddingBottom);
    context.font = `${style.fontWeight} ${size}px ${style.fontFamily}`;
    const widestLine = Math.max(...lines.map(line => context.measureText(line).width));
    const fitByWidth = size * width / widestLine;
    const fitByHeight = height * 0.9 / (lines.length * lineHeight);
    title.style.fontSize = `${Math.min(size, fitByWidth, fitByHeight)}px`;
  };

  const targets = document.querySelectorAll('[data-fit-text], [data-fit-title]');
  const observer = new ResizeObserver(entries => {
    entries.forEach(({ target }) => {
      const title = target.querySelector('[data-fit-text], [data-fit-title]');
      if (title) fitText(title, target);
    });
  });

  targets.forEach(title => {
    const tile = title.closest('.index-tile');
    if (!tile) return;
    observer.observe(tile);
    fitText(title, tile);
  });
  document.fonts.ready.then(() => targets.forEach(title => {
    const tile = title.closest('.index-tile');
    if (tile) fitText(title, tile);
  }));
})();
