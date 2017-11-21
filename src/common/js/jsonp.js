import originJSONP from 'jsonp'
export  default  function jsonp(url,data,option) {
url +=(url.indexOf('?'<0?'?':'&'+param(data)))

  //  jsonp 返回promise，它里有两个参数，一个是resolve，一个是reject。
  return new Promise((resolve,reject)=>{
    //调用originJSONP
    originJSONP(url,option,(err,data)=>{
      if(!err){
        resolve(data)
      } else{
        reject(err)
      }
    })
  })
}

function param(data){
  let  url =""
  for (var k in data){
    let  value = data[k] !== undefined?data[k]:""
    url +=`&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1):''
}
