import assert from 'assert';
import encodeStats from './encodeStats';

describe(`Answer`, () => {
  it(`should convert 'wrong' to '0'`, () => {
    assert(encodeStats({
      lives: 3,
      stats: [`wrong`]
    }), `30`);
  });

  it(`should convert 'correct' to '1'`, () => {
    assert(encodeStats({
      lives: 3,
      stats: [`correct`]
    }), `31`);
  });

  it(`should convert 'fast' to '2'`, () => {
    assert(encodeStats({
      lives: 3,
      stats: [`fast`]
    }), `32`);
  });

  it(`should convert 'slow' to '3'`, () => {
    assert(encodeStats({
      lives: 3,
      stats: [`slow`]
    }), `33`);
  });

  it(`should convert 'unknown' to '4'`, () => {
    assert(encodeStats({
      lives: 3,
      stats: [`unknown`]
    }), `34`);
  });

});
