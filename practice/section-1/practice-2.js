'use strict';

function collectSameElements(collectionA, collectionB) {
  var vara=collectionA.join("")
  var varb=collectionB.join("")
  var result=new Array()
  for(var i=0;i<vara.length;i++){
    for(var j=0;j<varb.length;j++){
      if(varb[j].indexOf(vara[i])!=-1){
        result.push(vara[i])
      }
    }
  }
  return result;
}
