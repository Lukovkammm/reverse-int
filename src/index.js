module.exports = function reverse (n) {
	if (n < 0) {
		// let minus = n.toString().split('').shift();
		let a = n.toString().split('').reverse();
		a.pop();
		// a.unshift(minus);
		
		return +a.join('');
	} else {
		return +n.toString().split('').reverse().join('');
	}

}
