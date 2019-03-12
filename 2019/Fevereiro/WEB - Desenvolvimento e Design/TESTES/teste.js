function albertEinstein(){

          if(document.getElementById("albertEinstein").style.visibility=="visible"){

                    document.getElementById("albertEinstein").style.visibility="hidden";

          }
          else {
                    document.getElementById("albertEinstein").style.visibility="visible";
                    document.getElementById("albertEinstein").style.zIndex="1";
          }
}

function closeAll(){

          if(document.getElementById("albertEinstein").style.visibility=="visible"){

                    document.getElementById("albertEinstein").style.visibility="hidden";
                    document.getElementById("alessandroVolta").style.visibility="hidden";
                    document.getElementById("alfredWegener").style.visibility="hidden";
                    document.getElementById("antoineLavoisier").style.visibility="hidden";
                    document.getElementById("andreMarie").style.visibility="hidden";
                    document.getElementById("carlLinne").style.visibility="hidden";
                    document.getElementById("charlesDarwin").style.visibility="hidden";
                    document.getElementById("galileuGalilei").style.visibility="hidden";
                    document.getElementById("gregorMendel").style.visibility="hidden";
          }
}



function maximize(){

          if(document.getElementByClassName("maximizeButton").style.width=="60%",
          document.getElementById('albertEinstein').getElementByClassName("iframe").style.visibility=="visible"){

                    document.getElementById('albertEinstein').getElementByClassName("iframe").width="100%";
                    document.getElementById('albertEinstein').getElementByClassName("iframe").height="100%";
          }
}
