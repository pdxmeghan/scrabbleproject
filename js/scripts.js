var scrabble = function(letter) {
	var newLetter = letter.toString();
	var letterSplit = newLetter.toLowerCase().split("");
	var newArray = [];
	var stupidArray = [];
	var total = 0;
	var values = [["a", 1], ["b", 3], ["c", 3], ["d", 2], ["e", 1], ["f", 4], ["g", 2], ["h", 4], ["i", 1], ["j", 8], ["k", 5], ["l", 1], ["m", 3], ["n", 1], ["o", 1], ["p", 3], ["q", 10], ["r", 1], ["s", 1], ["t", 1], ["u", 1], ["v", 4], ["w", 4], ["x", 8], ["y", 4], ["z", 10]];
	

	for (var i=0; i < letterSplit.length; i++) {
		for (var j=0; j < values.length; j++) {
			if (values[j][0] === letterSplit[i]) {
				total += values[j][1];
				break;
			}
		} 
	}
	var total = total.toString();
	return total;
}

