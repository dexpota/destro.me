(() => {
  const currentOrigin = window.location.origin;

  document.querySelectorAll('a[href]').forEach(link => {
    let destination;
    try {
      destination = new URL(link.href, document.baseURI);
    } catch {
      return;
    }

    if (!['http:', 'https:'].includes(destination.protocol) || destination.origin === currentOrigin) return;

    link.target = '_blank';
    link.relList.add('noopener', 'noreferrer');
  });
})();
