describe("scrabble", function() {
	it("will return the value of a letter inputted by the user", function() {
		scrabble("c").should.equal("3");
	});
	it("will return the value of multiple letters inputted by the user", function() {
		scrabble("cat").should.equal("5");
	});
});