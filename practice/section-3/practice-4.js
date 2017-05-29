'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var vara=collectionA.join("")
  var vara1=new String("")
  var result=new Array()
  for(var i=0;i<vara.length;i++){
    if("-"===vara.charAt(i)){
      for(var j=1;j<parseInt(vara.charAt(i+1));j++){
        vara1+=vara.charAt(i-1)
      }
      i=i+1
    }
    else{
      vara1+=vara.charAt(i)
    }
  }
  for(var i=0;i<vara1.length;i++) {
    var flag = 0
    var arr = new Object()
    if (result.length === 0) {
      arr['key'] = vara1.charAt(i)
      arr['count'] = 1
      result.push(arr)
    }
    else {
      for (var j = 0; j < result.length; j++) {
        if (result[j]['key'] === vara1.charAt(i)) {
          result[j]['count']++
          flag = 1
        }
      }
      if (flag === 0) {
        arr['key'] = vara1.charAt(i)
        arr['count'] = 1
        result.push(arr)
      }
    }
  }
  collectionA = result
  for(var i=0;i<objectB.value.length;i++){
    for(var j=0;j<collectionA.length;j++){
      if(collectionA[j]['key']===objectB.value[i]){
        collectionA[j]['count']=collectionA[j]['count']-parseInt(collectionA[j]['count']/3)
      }
    }
  }
  return collectionA
}
