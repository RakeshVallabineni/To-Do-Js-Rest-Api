function func(){
  return new Promise((resolve,reject)=>{
  console.log('ticket 1');
  resolve();
  })
}

function  func1(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
 console.log('ticket 2');
 resolve();
  },4000)
  })
}

 function func2(){
  let b=async ()=>{
  let a= new Promise((resolve,reject)=>{
    console.log('gets butter');
    resolve()
   })
  
  let b= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('gets cold drinks');
    resolve()
   },3000)
  })
  Promise.all([await a,await b]);
  

   }
   return b();

}

 function func3(){
  return new Promise((resolve,reject)=>{
    console.log('ticket 4');
    resolve();
  })
}


async function fun(){
    await func();
    await func1();
    await func2();
    await func3();
  
}

fun()