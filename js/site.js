(function () {
  'use strict';

  function closePanes(paper) {
    paper.querySelectorAll('.paper-pane').forEach(function (pane) {
      pane.hidden = true;
    });
    paper.querySelectorAll('.chip[aria-expanded]').forEach(function (chip) {
      chip.setAttribute('aria-expanded', 'false');
    });
  }

  function handleChipClick(event) {
    var chip = event.target.closest('.chip[data-target]');
    if (!chip) return;
    var paper = chip.closest('[data-paper]');
    if (!paper) return;

    var targetId = chip.getAttribute('data-target');
    var pane = paper.querySelector('#' + CSS.escape(targetId));
    if (!pane) return;

    var wasOpen = chip.getAttribute('aria-expanded') === 'true';
    closePanes(paper);
    if (!wasOpen) {
      pane.hidden = false;
      chip.setAttribute('aria-expanded', 'true');
    }
  }

  document.addEventListener('click', handleChipClick);
})();
