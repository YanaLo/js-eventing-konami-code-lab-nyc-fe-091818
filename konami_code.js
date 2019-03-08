const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let tracker=0;

function onKeyDown(event){
const keycode = event.which
if(keycode===code[tracker]){
  tracker+=1
}else if (tracker===9){
  alert('You did it!!!')
}
else{
  tracker=0
}
if (tracker===9){
  alert('You did it!!!')
}
return tracker
}
// 1.figure out where in sequence they are
// console.log(event.which)
// 2.figure out if the key they pressed is right 
function init() {
  // Write your JavaScript code inside the init() function
  
  
  // document.body.addEventListener('keydown',onKeyDown)
  //       if (index === code.length - 1) {
  //       window.alert("YOU DID IT!");
  //       index = 0;
  //     }
    // your code here
  var index = 0;
  document.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length - 1) {
        window.alert("YOU DID IT!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }, false);
}
init()
