import assert from 'assert';
import decodeStats from './decodeStats';

describe(`Answer`, () => {
  it(`should convert '0' to 'wrong' `, () => {
    assert(decodeStats(`0`), [`wrong`]);
  });

  it(`should convert '1' to 'correct' `, () => {
    assert(decodeStats(`1`), [`correct`]);
  });

  it(`should convert '2' to 'fast' `, () => {
    assert(decodeStats(`2`), [`fast`]);
  });

  it(`should convert '3' to 'slow' `, () => {
    assert(decodeStats(`3`), [`slow`]);
  });

  it(`should convert '4' to 'unknown' `, () => {
    assert(decodeStats(`4`), [`unknown`]);
  });

  it(`should convert to mixed values `, () => {
    assert(decodeStats(`1234`), [`correct`, `fast`, `slow`, `unknown`]);
  });
});
