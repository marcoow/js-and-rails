var Replacer = Class.create({

  initialize: function(container, target) {
    this.container = $(container);
    this.target    = $(target);
    this.container.observe('click', this.onClick.bindAsEventListener(this));
  },

  onClick: function(event) {
    event.stop();
    new Ajax.Updater(
      this.target,
      this.container.href, {
        method:      'post',
        evalScripts: true
      }
    );
  }

});

function initializeReplacers() {
  $$('a[data-replaces]').each(function(replacingLink) {
    if (!replacingLink._initializedReplacer) {
      new Replacer(replacingLink, replacingLink.readAttribute('data-replaces'));
      replacingLink._initializedReplacer = true;
    }
  });
}

document.observe('dom:loaded', function() {
  initializeReplacers();
  Ajax.Responders.register({
    onComplete: initializeReplacers
  });
});
