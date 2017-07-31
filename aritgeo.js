const aritGeo=(arr)=>{
  if(arr.length>0){
    if(arr.length>2){
      let ap=arr[1]-arr[0],
          gp=arr[1]/arr[0],
          checkAp=true,
          checkGp=true;
      for(let i=0; i<arr.length-1; i++){
        if(typeof(arr[i])==="number"){
          if(arr[i+1]-arr[i] !==ap){
            checkAp=false;
          }
          if(arr[i+1]/arr[i] !==gp){
            checkGp=false
          }
        }else{
          return "Array should contain numbers only"
        }
      }
      if(checkAp===true){
        return "Arithmetic"
      }else if(checkGp===true){
        return "Geometric"
      }else{
        return -1
      }
    }else{
      return "Array should contain more than two elements"
    }
  }else{
   return 0 
  }
}
module.exports =aritGeo