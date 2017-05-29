'use strict';

function countSameElements(collection) {
  var vara=collection.join("")
  var result=new Array()
  for(var i=0;i<vara.length;i++) {
    var flag = 0
    var arr = new Object()
    if (result.length === 0) {
      arr['key'] = vara.charAt(i)
      arr['count'] = 1
      result.push(arr)
    }
    else {
      for (var j = 0; j < result.length; j++) {
        if (result[j]['key'] === vara.charAt(i)) {
          result[j]['count']++
          flag = 1
        }
      }
      if (flag === 0) {
        arr['key'] = vara.charAt(i)
        arr['count'] = 1
        result.push(arr)
      }
    }
  }
  return result;
}
