'use strict';

function collectSameElements(collectionA, collectionB) {
  // join可以有参数，该参数会作为分割符出现在链接字符串中
  var vara=collectionA.join("")
  var varb=collectionB.join("")
  var result=new Array();
  for(var i=0;i<vara.length;i++){
    if(varb.indexOf(vara[i])!=-1){
      result.push(vara[i])
    }
  }
  return result;
}
