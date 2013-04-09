Set.CardView = Backbone.View.extend({
  tagName: "div",
  className: "card",
  template: _.template(Set.Templates.Card),

  render: function() {
    this.$el.html(this.template(this.card.attributes));
    return this;
  }
});
