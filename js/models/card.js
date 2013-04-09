Set.Card = Backbone.Model.extend({
  initialize: function(number, color, shading, shape) {
    this.set('number', number);
    this.set('color', color);
    this.set('shading', shading);
    this.set('shape', shape);
  },

  isSet: function(otherCard1, otherCard2) {
    var self = this;
    return _.reduce(Set.Card.FEATURES, function(memo, feature) {
      return memo &&
        (self.featureMatches(feature, otherCard1, otherCard2) ||
        self.featureAllDifferent(feature, otherCard1, otherCard2));
    }, true);
  },

  featureMatches: function(feature, otherCard1, otherCard2) {
    return this.get(feature) === otherCard1.get(feature) &&
           this.get(feature) === otherCard2.get(feature);
  },

  featureAllDifferent: function(feature, otherCard1, otherCard2) {
    return this.get(feature) !== otherCard1.get(feature) &&
      this.get(feature) !== otherCard2.get(feature) &&
      otherCard2.get(feature) !== otherCard1.get(feature);
  }
});

Set.Card.FEATURES = ['number', 'color', 'shading', 'shape'];
