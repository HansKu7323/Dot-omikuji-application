const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
  const arr = ['大吉','中吉','小吉','凶'];
  const n = Math.floor(Math.random() * arr.length);
  btn.textContent = arr[n];


  // switch(n){
  //   case 0:
  //     btn.textContent = '大吉';
  //     break;
  //   case 1:
  //     btn.textContent = '吉';
  //     break;
  //   case 2:
  //     btn.textContent = '凶';
  //     break;
  // }

});