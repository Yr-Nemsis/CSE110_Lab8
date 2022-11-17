// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('858-539-3527 is a valid phone number', () => {
    expect(functions.isPhoneNumber('858-539-3527')).toBe(true);
});

test('858539-3527 is a valid phone number', () => {
    expect(functions.isPhoneNumber('858539-3527')).toBe(true);
});

test('8585393527 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('8585393527')).toBe(false);
});

test('8-585393527 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('8-585393527')).toBe(false);
});

test('buwu@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('buwu@ucsd.edu')).toBe(true);
});

test('yrnemesiswu@gmail.com is a valid email', () => {
    expect(functions.isEmail('yrnemesiswu@gmail.com')).toBe(true);
});

test('?yrnemesiswu@gmail.com is not a valid email', () => {
    expect(functions.isEmail('?yrnemesiswu@gmail.com')).toBe(false);
});

test('yrnemesiswu@gmail.?com is not a valid email', () => {
    expect(functions.isEmail('yrnemesiswu@gmail.ccom')).toBe(false);
});

test('abcdefg123 is a valid password', () => {
    expect(functions.isStrongPassword('abcdefg123')).toBe(true);
});

test('a23__abc is a valid password', () => {
    expect(functions.isStrongPassword('a23__abc')).toBe(true);
});

test('12a is a not valid password', () => {
    expect(functions.isStrongPassword('12a')).toBe(false);
});

test('12a__________123____aaa is a not valid password', () => {
    expect(functions.isStrongPassword('12a__________123____aaa')).toBe(false);
});

test('8/25/1973 is a valid date', () => {
    expect(functions.isDate('8/25/1973')).toBe(true);
});

test('4/15/1966 is a valid date', () => {
    expect(functions.isDate('4/15/1966')).toBe(true);
});

test('114/15/1966 is not a valid date', () => {
    expect(functions.isDate('114/15/1966')).toBe(false);
});

test('415/1966 is not a valid date', () => {
    expect(functions.isDate('415/1966')).toBe(false);
});

test('#ffffff is a valid hex code for css or html', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('#ff0000 is a valid hex code for css or html', () => {
    expect(functions.isHexColor('#ff0000')).toBe(true);
});

test('ff0000? is not a valid hex code for css or html', () => {
    expect(functions.isHexColor('ff0000?')).toBe(false);
});

test('#ff00000 is not a valid hex code for css or html', () => {
    expect(functions.isHexColor('#ff00000')).toBe(false);
});


