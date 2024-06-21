import {LinkList} from "./link.js";

function hashMap () {
    const buckets = [];
    const keyStorage = [];
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
          node.value = value;
        } else {
          linkList.append(value);
          keyStorage[hashCode].push(key);
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
          linkList.removeAt(linkIndex);
          keyStorage[hashCode].splice(linkIndex, 1);
          return keyExisits
        } else {
          return keyExisits;
        };
      }
     
      return {buckets, keyStorage, set, get, has, remove};
};

const mapOne = hashMap();
mapOne.set("poop", "dog");
mapOne.set("skillzz", "first");
mapOne.set("skill", "first");

console.log(mapOne.remove("skillzz"));
console.log(mapOne.keyStorage);