import { Map as ImmutableMap } from 'immutable';

export const map = ImmutableMap({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

export const map2 = map
    .set(2, 'Benjamin')
    .set(4, 'Oliver');
