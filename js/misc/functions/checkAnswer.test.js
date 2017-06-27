import assert from 'assert';
import checkAnswer from './checkAnswer';

describe(`Answer`, () => {
  it(`should be 'wrong', 'correct', 'slow' or 'fast' answers`, () => {
    assert(checkAnswer([`sss`], [`aaa`], 30), `wrong`);
    assert(checkAnswer([`sss`], [`sss`], 15), `correct`);
    assert(checkAnswer([`sss`, `aaa`], [`sss`, `aaa`], 25), `fast`);
    assert(checkAnswer([`sss`, `aaa`], [`sss`, `aaa`], 5), `slow`);
  });
  it(`should give 'wrong' answer if even one answer is wrong`, () => {
    assert(checkAnswer([`sss`, `aaa`], [`bbb`, `aaa`]), `wrong`);
    assert(checkAnswer([`sss`, `aaa`], [`sss`, `bbb`]), `wrong`);
  });
});
