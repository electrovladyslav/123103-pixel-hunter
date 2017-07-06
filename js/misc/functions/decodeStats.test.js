import assert from 'assert';
import decodeStats from './decodeStats';

describe(`Stats decode`, () => {
  it(`should convert '0' to 'wrong' `, () => {
    assert(decodeStats(`30`), {
      lives: 3,
      stats: [`wrong`]
    });
  });

  it(`should convert '1' to 'correct' `, () => {
    assert(decodeStats(`31`), {
      lives: 3,
      stats: [`correct`]
    });
  });

  it(`should convert '2' to 'fast' `, () => {
    assert(decodeStats(`32`), {
      lives: 3,
      stats: [`fast`]
    });
  });

  it(`should convert '3' to 'slow' `, () => {
    assert(decodeStats(`23`), {
      lives: 2,
      stats: [`slow`]
    });
  });

  it(`should convert '4' to 'unknown' `, () => {
    assert(decodeStats(`14`), {
      lives: 1,
      stats: [`unknown`]
    });
  });

  it(`should convert to mixed values `, () => {
    assert(decodeStats(`01234`), {
      lives: 0,
      stats: [`correct`, `fast`, `slow`, `unknown`]
    });
  });
});
