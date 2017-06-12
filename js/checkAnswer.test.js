import assert from 'assert';
import checkAnswer from './checkAnswer';

describe(`Answer`, () => {
  it(`should be 'wrong', 'correct' answer`, () => { // , 'slow' or 'fast'
    assert(checkAnswer([`sss`], [`aaa`]), `wrong`);
    assert(checkAnswer([`sss`], [`sss`]), `correct`);
    assert(checkAnswer([`sss`, `aaa`], [`sss`, `aaa`]), `correct`);
  });
  it(`should give 'wrong' answer if even one answer is wrong`, () => {
    assert(checkAnswer([`sss`, `aaa`], [`bbb`, `aaa`]), `wrong`);
    assert(checkAnswer([`sss`, `aaa`], [`sss`, `bbb`]), `wrong`);
  });
});
