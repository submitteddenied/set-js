describe("Set.Card", function() {
  describe("FEATURES", function() {
    it("stores the features that each card has", function() {
      expect(Set.Card.FEATURES).toEqual(['number', 'color', 'shading', 'shape']);
    });
  });

  describe("#isSet", function() {
    var features;
    var c1, c2, c3;
    beforeEach(function() {
      features = Set.Card.FEATURES;
      Set.Card.FEATURES = ['feature'];
      c1 = new Set.Card();
      c2 = new Set.Card();
      c3 = new Set.Card();
    });

    afterEach(function() {
      Set.Card.FEATURES = features;
    });

    describe("when they are a set", function() {
      it("returns true if all features are the same", function() {
        c1.set('feature', 'a');
        c2.set('feature', 'a');
        c3.set('feature', 'a');

        expect(c1.isSet(c2, c3)).toBeTruthy();
      });

      it("returns true if all features are different", function() {
        c1.set('feature', 'a');
        c2.set('feature', 'b');
        c3.set('feature', 'c');

        expect(c1.isSet(c2, c3)).toBeTruthy();
      });

      it("works for many features", function() {
        Set.Card.FEATURES = features;
        c1.set({number: 1, color: 'red', shading: 'solid', shape: 'oval'});
        c2.set({number: 2, color: 'red', shading: 'striped', shape: 'oval'});
        c3.set({number: 3, color: 'red', shading: 'hollow', shape: 'oval'});

        expect(c1.isSet(c2, c3)).toBeTruthy();
      });
    });

    describe("when they are not a set", function() {
      it("returns false when two out of three match", function() {
        c1.set('feature', 'a');
        c2.set('feature', 'a');
        c3.set('feature', 'c');

        expect(c1.isSet(c2, c3)).toBeFalsy();
      });

      it("works for many features", function() {
        Set.Card.FEATURES = features;
        c1.set({number: 1, color: 'red', shading: 'solid', shape: 'oval'});
        c2.set({number: 2, color: 'red', shading: 'striped', shape: 'oval'});
        c3.set({number: 2, color: 'red', shading: 'hollow', shape: 'oval'});

        expect(c1.featureMatches('number', c2, c3)).toBeFalsy();
        expect(c1.featureAllDifferent('number', c2, c3)).toBeFalsy();
        expect(c1.isSet(c2, c3)).toBeFalsy();
      });
    });
  });
});
