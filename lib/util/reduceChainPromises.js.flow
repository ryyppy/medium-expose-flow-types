// @flow

import { reduce } from 'ramda';

export default function reduceChainPromises(promises: Promise<*>[]): Promise<*> {
  return reduce((ret, next) => {
    return ret.then(value => next);
  }, Promise.resolve())(promises);
}
