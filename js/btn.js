var img = document.getElementById("slide-img");
for(var i = 0; i<=10; i++){
    var btns = document.querySelectorAll(".myButton");
    btns[i].addEventListener("click", function(){
        var text = this.innerHTML;
        player(text);
        
    })
}

function player(text){
  if(text === "Bangladesh"){
    img.src = "images/bangladesh.jpg";
  }else if(text === "Japan"){
    img.src = "images/japan.jpg";
  }else if(text === "Chaina"){
    img.src = "images/china.jpg";
  }else if(text === "Australia"){
    img.src = "images/austrelia.jpg";
  }else if(text === "Spain"){
    img.src = "images/spain.jpg";
  }else if(text === "Canada"){
    img.src = "images/canada.jpg";
  }else if(text === "Italy"){
    img.src = "images/italy.jpg";
  }else if(text === "South Korea"){
    img.src = "images/korea.jpg";
  }else if(text === "Pakistan"){
    img.src = "images/pakisthan.jpg";
  }else if(text === "Nepal"){
    img.src = "images/nepal.jpg";
  }
}



$(document).ready(function() {
 
    $("#btn-id").owlCarousel({
      slideSpeed : 100,
      paginationSpeed : 900,
      autoPlay : true,
      responsive: true,
      items : 6,
      itemsDesktop : [1199,6],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsMobile : [479,1]
    });
   
  });