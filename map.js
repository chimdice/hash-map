import {LinkList} from "./link.js";

function listNode () {
    let value = null;
    let next = null;
    return {value, next}
};

function hashMap () {
    const buckets = [];
    const keyStorage = [];

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

        if (key in keyStorage[hashCode]) {
            
        };
        const linkList = buckets[hashCode]
      };
     
      return {buckets, hash};
};

const mapOne = hashMap()
console.log(typeof mapOne.buckets[0]);