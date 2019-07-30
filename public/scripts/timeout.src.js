(function() {
  if (window.GOVUKFrontend) {
    window.GOVUKFrontend.initAll();
  } else {
    console.error('Could not find window.GOVUKFrontend');
  }
})();
