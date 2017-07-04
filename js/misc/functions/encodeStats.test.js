import assert from 'assert';
import encodeStats from './encodeStats';

describe(`Answer`, () => {
  it(`should convert 'wrong' to '0'`, () => {
    assert(encodeStats([`wrong`]), `0`);
  });

  it(`should convert 'correct' to '1'`, () => {
    assert(encodeStats([`correct`]), `1`);
  });

  it(`should convert 'fast' to '2'`, () => {
    assert(encodeStats([`fast`]), `2`);
  });

  it(`should convert 'slow' to '3'`, () => {
    assert(encodeStats([`slow`]), `3`);
  });

  it(`should convert 'unknown' to '4'`, () => {
    assert(encodeStats([`unknown`]), `4`);
  });

});
