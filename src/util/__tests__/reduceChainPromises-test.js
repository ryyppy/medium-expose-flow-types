// @flow

import reduceChainPromises from '../reduceChainPromises';

describe('reduceChainPromises', () => {
  it('should reduce and chain promises properly', () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];

    return reduceChainPromises(promises)
      .then(result => {
        expect(result).toBe(3);
      });
  });
});
