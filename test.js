import test from 'ava';
import mask from '.';

let phonesTrailingMask = {
	'9': '+7 (9',
	'90': '+7 (90',
	'903': '+7 (903) ',
	'9032': '+7 (903) 2',
	'90321': '+7 (903) 21',
	'903210': '+7 (903) 210-',
	'9032109': '+7 (903) 210-9',
	'90321098': '+7 (903) 210-98-',
	'903210987': '+7 (903) 210-98-7',
	'9032109876': '+7 (903) 210-98-76',
	'': '+7 (',
};

const phones = {
	'': '',
	'9': '+7 (9',
	'90': '+7 (90',
	'903': '+7 (903',
	'9032': '+7 (903) 2',
	'90321': '+7 (903) 21',
	'903210': '+7 (903) 210',
	'9032109': '+7 (903) 210-9',
	'90321098': '+7 (903) 210-98',
	'903210987': '+7 (903) 210-98-7',
	'9032109876': '+7 (903) 210-98-76',
};

const pattern = '+7 (___) ___-__-__';

test('должно работать с опережающей маской', t => {
	Object.keys(phonesTrailingMask).forEach(input => {
		const output = mask(input, { trailingMask: true, pattern });
		const expect = phonesTrailingMask[input];
		t.is(
			output,
			expect,
			`передали '${input}'. оджидаем '${expect}' а получили '${output}'`
		);
	});
});

test('должно работать без опережающей маски', t => {
	Object.keys(phones).forEach(input => {
		const output = mask(input, { trailingMask: false, pattern });
		const expect = phones[input];

		t.is(
			output,
			expect,
			`передали '${input}'. оджидаем '${expect}' а получили '${output}'`
		);
	});
});

test('должно обрезать если введено больше чем в маске', t => {
	const input = '123456789';
	let output;

	output = mask(input, { trailingMask: false, pattern: '__' });
	t.is(
		'12',
		output,
	);

	output = mask(input, { trailingMask: false, pattern: '____lololo_' });
	t.is(
		'1234lololo5',
		output,
	);

	output = mask(input, { trailingMask: false, pattern: '__=__-_' });
	t.is(
		'12=34-5',
		output,
	);
});
