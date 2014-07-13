describe("scrabble", function() {
	it("will return the value of a letter inputted by the user", function() {
		scrabble("c").should.equal("3");
	});
});