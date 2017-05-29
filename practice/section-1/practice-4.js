'use strict';

function collectSameElements(collectionA, objectB) {
  var vstring=new String("");
  var result=new Array()
  for(var i=0;i<collectionA.length;i++){
    vstring+=collectionA[i]["key"]
  }
  for(var i=0;i<vstring.length;i++){
    if(objectB.value.indexOf(vstring.charAt(i))!=-1){
      result.push(vstring.charAt(i))
    }
  }
  return result;
}
