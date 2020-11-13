const triarr = (arr) => {
    let l;
    let k;
    for(let i=0; i<arr.length;i++){
      l=i
      for(let j= i-1; j>=0; j--){
        k = 0
        if (arr[l]<arr[j]){
          k= arr[l]
          arr[l] =arr[j]
          arr[j] = k
          l--
        }
      }
    }
    console.log(arr)
  }
  triarr([100,3,0,1,12,15,9,7,4,5])