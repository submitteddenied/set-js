Set.Card = Backbone.Model.extend({
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
  },

  toString: function() {
    var self = this;
    return _.reduce(Set.Card.FEATURES, function(result, feature) {
      return result + self.get(feature);
    }, "");
  }
});

Set.Card.FEATURES = _.keys(Set.FEATURES);
