var easteregg = 0;
const audio = new Audio("songs/guitar.wav");
function enableegg(){
  easteregg = easteregg + 1;
}

function d0ugl4s(){
    console.log("┏━━┓")
    console.log("┗┓┓┣━┳┳┳━┓")
    console.log("┏┻┛┃╋┃┃┃╋┃")
    console.log("┗━━┻━┻━╋┓┃")
    console.log("╋╋╋╋╋╋╋┗━┛")
    console.log("Veja meus outros projetos acessando: https://github.com/doug1043")
}

var today = new Date();
var possibleEmoji = [
      '💻',
      '📡',
      '💾',
      '🛠'
    ];

if (today.getMonth() === 9 && [31, 30, 29, 28].indexOf(today.getDate()) !== -1) {
  possibleEmoji = [
    '👻',
    '🎃',
    '🧟‍♀️'
  ];
}

if (today.getMonth() === 11 && [21, 22, 23, 24, 25, 26].indexOf(today.getDate()) !== -1) {
  possibleEmoji = [
    '❄️',
    '🎅',
    '🎁'
  ];
}

document.body.addEventListener('click', function (event) {
 if(easteregg == 10){
    audio.play();
    easteregg = easteregg + 1;
 } 
 if (easteregg >= 10){
   var randomNumber = Math.round(Math.random() * possibleEmoji.length);

  var span = document.createElement('span'); 
  span.textContent = possibleEmoji[randomNumber];
  span.className= 'emoji click-emoji';
  span.title="d0ugl4s();"
  
  span.style.left = event.clientX + 'px';
 
  span.style.top = event.clientY + 'px'; 
  
  span.style.position = 'fixed';
  document.body.appendChild(span); 
 } 
                            
});