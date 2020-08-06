// When the user scrolls down 80px from the top of the document, resize the header's padding and the header1's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) 
  {
    document.getElementById("header").style.padding = "20px 10px";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.flexDirection = "row";
    document.getElementById("header2").style.textAlign = "center";
    document.getElementById("header").style.top = "0";
    document.getElementById("header1").style.fontSize = "20px";
    document.getElementById("header2").style.fontSize = "20px";
  } 
  else 
  {
    document.getElementById("header").style.padding = "20px 10px";
    document.getElementById("header").style.position = "relative";
    document.getElementById("header").style.flexDirection = "column";
    document.getElementById("header2").style.textAlign = "left";
    document.getElementById("header1").style.fontSize = "25px";
    document.getElementById("header2").style.fontSize = "40px";
  }
}