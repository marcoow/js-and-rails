var Application = (function() {

  var initializeReplacers = function() {
    $$('a[data-replaces]').each(function(replacingLink) {
      if (!replacingLink._initializedReplacer) {
        new Replacer(replacingLink, replacingLink.readAttribute('data-replaces'));
        replacingLink._initializedReplacer = true;
      }
    });
  };

  return {

    setupOnLoad: function() {
      initializeReplacers();
    },

    setupOnPageUpdate: function() {
      initializeReplacers();
    }

  }

})();

document.observe('dom:loaded', function() {
  Application.setupOnLoad();
  Ajax.Responders.register({
    onComplete: Application.setupOnPageUpdate
  });
});
