function trailing(input, pattern) {
	input = Array.from(input);

	let skipToEnd = false;
	return Array.from(
		pattern,
		item => {
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
	input = Array.from(input);

	return Array.from(
		pattern,
		item => {
			if (input.length === 0) {
				return '';
			}

			const output = item === '_' ? input.shift() : item;
			return output;
		})
		.join('');
}

module.exports = {
	normal,
	trailing,
};
