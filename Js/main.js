var x_input= document.getElementById('x_input');
var y_input= document.getElementById('y_input');
var imageRemovedFlag;
var pointSize = 20;
let fileInput = document.getElementById('imageinput');
particlesJS.load('particles-js', 'Js/particlesjs-config.json');



$("#canvas").click(function(e){
    getPosition(e); 
});



function getPosition(){
    var rect = canvas.getBoundingClientRect();
    var x = x_input.value;
    var y = y_input.value;
       
    drawCoordinates(x,y);
}

function drawCoordinates(x,y){	
     var ctx = document.getElementById("canvas").getContext("2d");
     ctx.fillStyle = "#ff2626"; 

   ctx.beginPath();
   ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
   ctx.fill();
}

/*     function previewFile(input){
        var file = $("input[type=file]").get(0).files[0];
 
        if(file){
            var reader = new FileReader();
 
            reader.onload = function(){
                $("#canvas").css("background-image",`url(${reader.result})`);
            }
            reader.readAsDataURL(file);
        }
    } */

function removeCanvas(){
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        $("#canvas").css("display","none");
        imageRemovedFlag = true;
        $("#alt_img_to_drag").css("display","block");
        $("#logo-img").css("display","block");

        x_input.value = '';
        y_input.value = '';
        
}


function getFile() {
    fileInput.click();
    console.log('clickedd')
  }

/* fileInput.addEventListener('change', function(ev) { 
   if(ev.target.files) {
      let file = ev.target.files[0];
      var reader  = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        $("#canvas").css("display","block");
        $("#alt_img_to_drag").css("display","none");
        $("#logo-img").css("display","none");
          var image = new Image();
          image.src = e.target.result;
          image.onload = function(ev) {
             var canvas = document.getElementById('canvas');
             canvas.width = image.width;
             canvas.height = image.height;
             console.log("width=" + canvas.width + " height=" + canvas.height)
             var ctx = canvas.getContext('2d');
             ctx.drawImage(image,0,0);
            
         }
      }


   }
}); */






