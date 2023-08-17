import { fromJs } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappobject = fromJs(object);

  return mappobject.getIn(array, undefined);
}
