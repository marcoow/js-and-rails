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
