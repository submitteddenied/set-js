describe("Set.Deck", function() {
  describe("#draw", function() {
    it("returns an array with cards with a number, color, shade and shape", function() {
      var deck = new Set.Deck();
      var cards = deck.draw(1);

      expect(Set.FEATURES.number).toContain(cards[0].get('number'));
      expect(Set.FEATURES.color).toContain(cards[0].get('color'));
      expect(Set.FEATURES.shading).toContain(cards[0].get('shading'));
      expect(Set.FEATURES.shape).toContain(cards[0].get('shape'));
    });

    it("returns as many cards as you ask for, up to 81", function() {
      var deck = new Set.Deck();

      var cards = deck.draw(10);
      expect(_.size(cards)).toEqual(10);
    });

    it("cannot return more than 81 cards", function() {
      var deck = new Set.Deck();
      var cards = deck.draw(82);

      expect(_.size(cards)).toEqual(81);
    });

    it("never returns the same card twice", function() {
      var deck = new Set.Deck();
      var cards = deck.draw(81);

      var cardSet = _.reduce(cards, function(memo, card) {
        memo[card.toString()] = true;
        return memo;
      }, {});
      expect(_.size(cardSet)).toEqual(81);
    });
  });

  describe("#numberToFeatures", function() {
    it("takes a number and returns an object of features", function() {
      var deck = new Set.Deck();
      expect(deck.numberToFeatures(0)).toEqual({
        number: 1,
        color: 'red',
        shading: 'solid',
        shape: 'oval'
      });

      expect(deck.numberToFeatures(40)).toEqual({
        number: 2,
        color: 'green',
        shading: 'striped',
        shape: 'diamond'
      });
    });
  });
});
