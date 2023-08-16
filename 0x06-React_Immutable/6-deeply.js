import { Map } from 'immutable';

function mergeDeeplyRecursive(target, source) {
    return target.withMutations(map => {
        for (const key of source.keys()) {
            if (map.has(key) && Map.isMap(map.get(key)) && Map.isMap(source.get(key))) {
                map.set(key, mergeDeeplyRecursive(map.get(key), source.get(key)));
            } else {
                map.set(key, source.get(key));
            }
        }
    });
}

export function mergeDeeplyElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);
    
    const mergedMap = mergeDeeplyRecursive(map1, map2);
    return List(mergedMap.values());
}
