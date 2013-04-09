Set.Deck = Backbone.Model.extend({
  initialize: function() {
    this.sequence = _.shuffle(_.range(81));
  },

  draw: function(count) {
    var result = [],
        self = this;
    if(count === undefined) {
      count = 1;
    }

    if(count > this.sequence.length) {
      count = this.sequence.length;
    }

    _.times(count, function() {
      result.push(new Set.Card(self.numberToFeatures(self.sequence.shift())));
    });

    return result;
  },

  numberToFeatures: function(number) {
    var numberAsString = number.toString(3);
    while(numberAsString.length < 4) {
      numberAsString = "0" + numberAsString;
    }

    var result = _.reduce(numberAsString, function(memo, valueIndex, featureIndex) {
      var feature = _.keys(Set.FEATURES)[featureIndex];
      memo[feature] = Set.FEATURES[feature][valueIndex];

      return memo;
    }, {});

    return result;
  }
});
