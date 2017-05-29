'use strict';

function collectSameElements(collectionA, objectB) {
  var vara=collectionA.join()
  var result=new Array()
  for(var i=0;i<vara.length;i++){
    if(objectB.value.indexOf(vara[i])!=-1){
      result.push(vara[i])
    }
  }
  return result;
}
