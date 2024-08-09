/**
 *
 * Detect if the given two JSON-like objects are equal.
 *
 * [DO NOT USE] JSON.parse or JSON.stringify
 *
 * deepEquals({ name: 'ken', age: 33 }, { name: 'ken', age: 33 }); // true
 *
 * deepEquals({ name: 'ken', work: { company: 'vanilla coding', since: 2017 } }, { name: 'ken', work: { company: 'vanilla coding', since: 2017 } }); // true
 *
 */

export default function deepEquals(original, target) {
  function comparePlainObj(obj1, obj2) {
    for (const key in obj1) {
      const isObject = typeof obj1[key] === "object";
      if (isObject) {
        isObject = typeof obj2[key] === "object";
        if (!isObject) {
          return false;
        }

        if (!comparePlainObj(obj1[key], obj2[key])) {
          return false;
        }
      } else {
        const isSameKey = obj1[key] === obj2[key];
        if (!isSameKey) {
          return false;
        }
      }
    }

    return true;
  }

  return comparePlainObj(original, target) && comparePlainObj(target, original);
}
