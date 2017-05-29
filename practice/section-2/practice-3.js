'use strict';

function countSameElements(collection) {
  var vara=collection.join("")
  var vara1=new String("")
  var result=new Array()
  if(vara.search(/[0-9]{2}/)!=-1){
    vara=vara.replace(/[0-9]{2}/,"A")
  }
  for(var i=0;i<vara.length;i++){
    if(vara.charAt(i).search('^[a-z0-9A-Z]+$')!=-1){
      var count=0
      if(vara.charAt(i).search('^[0-9A-Z]')!=-1){
        if(vara.charAt(i)==='A'){
          count=10
        }
        else{
          count=parseInt(vara.charAt(i))
        }
        for(var j=1;j<count;j++){
          vara1+=vara.charAt(i-2)
        }
      }
      else{
        vara1+=vara.charAt(i)
      }
    }
  }
  for(var i=0;i<vara1.length;i++) {
    var flag = 0
    var arr = new Object()
    if (result.length === 0) {
      arr['name'] = vara1.charAt(i)
      arr['summary'] = 1
      result.push(arr)
    }
    else {
      for (var j = 0; j < result.length; j++) {
        if (result[j]['name'] === vara1.charAt(i)) {
          result[j]['summary']++
          flag = 1
        }
      }
      if (flag === 0) {
        arr['name'] = vara1.charAt(i)
        arr['summary'] = 1
        result.push(arr)
      }
    }
  }
  return result;
}
