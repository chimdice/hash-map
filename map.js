import {LinkList} from "./link.js";

function hashMap () {
    const buckets = [];
    const keyStorage = [];
    const keyValuePair = [];

    let numBuckets = 16;

    for (let i=0; i<numBuckets; i++) {
      buckets[i] = new LinkList();
      keyStorage[i] = [];
    };

    function hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i))%16;
        };
     
        return hashCode;
      };

      function indexKeyPair (key, value) {
        let idx;
        let count = 0
        keyValuePair.forEach((keyValue) => {
          if ((key === keyValue[0]) && (value === keyValue[1])) {
            idx = count;
          };

          count += 1
        });

        return idx;
      }
      
      function set (key, value) {
        const hashCode = hash(key);
        let keyExisits = false;
        let linkIndex;

        for (let i=0; i<keyStorage[hashCode].length; i++) {
          if (key === keyStorage[hashCode][i]) {
            keyExisits = true;
            linkIndex = i;
          };
        };

        const linkList = buckets[hashCode]

        if (keyExisits) {
          const node = linkList.at(linkIndex);
          
          const keyId = indexKeyPair(key, node.value);
          keyValuePair[keyId][1] = value;
          node.value = value;
        } else {
          linkList.append(value);
          keyStorage[hashCode].push(key);
          keyValuePair.push([key, value]);
        };
      };

      function get (key) {
        let keyExisits = false;
        const hashCode = hash(key);
        let linkIndex;

        for (let i=0; i<keyStorage[hashCode].length; i++) {
          if (key === keyStorage[hashCode][i]) {
            keyExisits = true;
            linkIndex = i;
          };
        };

        const linkList = buckets[hashCode]

        if (keyExisits) {
          const node = linkList.at(linkIndex);
          return node.value
        } else {
          return null;
        };

      };

      function has (key) {
        let keyExisits = false;
        const hashCode = hash(key);

        for (let i=0; i<keyStorage[hashCode].length; i++) {
          if (key === keyStorage[hashCode][i]) {
            keyExisits = true;
          };
        };

        return keyExisits
      };

      function remove (key) {
        let keyExisits = false;
        const hashCode = hash(key);
        let linkIndex;

        for (let i=0; i<keyStorage[hashCode].length; i++) {
          if (key === keyStorage[hashCode][i]) {
            keyExisits = true;
            linkIndex = i;
          };
        };

        const linkList = buckets[hashCode]

        if (keyExisits) {
          const value = linkList.at(linkIndex).value;
          linkList.removeAt(linkIndex);
          keyStorage[hashCode].splice(linkIndex, 1);

          const keyId = indexKeyPair(key, value);
          console.log([key, value]);
          keyValuePair.splice(keyId, 1);

          return keyExisits
        } else {
          return keyExisits;
        };
      };

      function length () {
        return keyValuePair.length;
      };

      function clears () {
        buckets = [];
        keyStorage = [];
        keyValuePair = [];

        for (let i=0; i<numBuckets; i++) {
          buckets[i] = new LinkList();
          keyStorage[i] = [];
        };
      };

      function keys () {
        const keys = [];

        keyValuePair.forEach((pair) => {
          keys.push(pair[0]);
        });

        return keys;
      };

      function values () {
        const values = [];

        keyValuePair.forEach((pair) => {
          values.push(pair[1]);
        });

        return values;
      };


     
      return {buckets, keyStorage, keyValuePair, set, get, has, remove, length, clears, keys, values};
};

const mapOne = hashMap();
mapOne.set("poop", "dog");
mapOne.set("skillzz", "first");
mapOne.set("skill", "firsth");
mapOne.set("poop", "cat");
console.log(mapOne.keys(), mapOne.values());