function lonelyinteger(a) {
    let x = 0
    for(let i=0;i<a.length;i++){
        x^=a[i]
      }
      return x
    }
  console.log(lonelyinteger([1,1,2,2,3,3,4,5,5,6,6]))