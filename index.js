function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (element) {
      result.push(callback(element));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
    myEach(collection.slice(startIdx), function (element) {
      acc = callback(acc, element);
    });
    return acc;
  }
  
  function myFind(collection, predicate) {
    let result;
    myEach(collection, function (element) {
      if (predicate(element) && result === undefined) {
        result = element;
      }
    });
    return result;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (element) {
      if (predicate(element)) {
        result.push(element);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    let count = 0;
    myEach(collection, function () {
      count++;
    });
    return count;
  }
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  function myKeys(object) {
    const keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  function myValues(object) {
    const values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  