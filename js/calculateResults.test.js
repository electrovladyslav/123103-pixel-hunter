import assert from 'assert';
import calculateResults from './calculateResults';

describe(`Points counting`, () => {
  let game1 = {
    lives: 0,
    stats: [
      `wrong`,
      `slow`,
      `fast`,
      `correct`,
      `wrong`,
      `unknown`,
      `slow`,
      `wrong`,
      `fast`,
      `wrong`
    ]
  };

  let game2 = {
    lives: 3,
    stats: [
      `correct`,
      `slow`,
      `slow`,
      `correct`,
      `correct`,
      `unknown`,
      `slow`,     // 50
      `correct`,  // 100
      `slow`,     // 50
      `correct`   // 100
    ]             // 850
  };
  it(`should add 100 points for each 'correct' answer`, () => {
    assert.equal(calculateResults(game1).correct.points, 500);
    assert.equal(calculateResults(game2).correct.points, 900);
  });

  it(`should add 50 points for each stored life in end of the game`, () => {
    assert.equal(calculateResults(game1).bonuses.lives.points, 0);
    assert.equal(calculateResults(game2).bonuses.lives.points, 150);
  });

  it(`should add 50 points for each 'fast' answer`, () => {
    assert.equal(calculateResults(game1).bonuses.fast.points, 100);
    assert.equal(calculateResults(game2).bonuses.fast.points, 0);
  });

  it(`should take off 50 points for each 'slow' answer`, () => {
    assert.equal(calculateResults(game1).bonuses.slow.points, -100);
    assert.equal(calculateResults(game2).bonuses.slow.points, -200);
  });

  it(`should sum up all points correctly`, () => {
    assert.equal(calculateResults(game1).totalPoints, 500);
    assert.equal(calculateResults(game2).totalPoints, 850);
  });
});

