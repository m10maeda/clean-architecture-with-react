import CircleName from './CircleName';

describe('不正な値で生成しようとするとエラーを投げる', () => {
  test.each`
    value | description
    ${''} | ${'空文字（`""`）'}
  `('$description', ({ value }) => {
    expect(() => {
      // eslint-disable-next-line no-new
      new CircleName(value);
    }).toThrowError();
  });
});

test('toString メソッドが期待した文字列を返す', () => {
  const value = 'Baseball';
  const name = new CircleName(value);

  expect(name.toString()).toBe(value);
});

describe('equals メソッドが正しく比較する', () => {
  test.each`
    a             | b             | expected
    ${'Baseball'} | ${'Baseball'} | ${true}
    ${'Baseball'} | ${'Football'} | ${false}
    ${'Football'} | ${'Baseball'} | ${false}
  `('$a equals $b is $expected', ({ a: _a, b: _b, expected }) => {
    const a = new CircleName(_a);
    const b = new CircleName(_b);

    expect(a.equals(b)).toBe(expected);
  });
});
