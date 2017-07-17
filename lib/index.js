function trailing(input, pattern) {
	input = input.split('');

	let skipToEnd = false;
	return Array.prototype.map
		.call(pattern, item => {
			if (skipToEnd === true) {
				return '';
			}

			if (item === '_') {
				const inp = input.shift();
				if (inp === undefined) {
					skipToEnd = true;
					return '';
				}

				return inp;
			}

			return item;
		})
		.join('');
}

function normal(input, pattern) {
	input = input.split('');

	return Array.prototype.map
		.call(pattern, item => {
			if (input.length === 0) {
				return '';
			}

			let output = item === '_' ? input.shift() : item;

			return output;
		})
		.join('');

	return output;
}

module.exports = {
	normal,
	trailing,
};
