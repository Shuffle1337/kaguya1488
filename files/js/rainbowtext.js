var base_color="#ffbad2"
var color1="#fc8cb3"
var color2="#f95d94"
var flashspeed=120
var flashingletters=2
var flashingletters2=2
var flashpause=0
var n=0
var color_text=""
message=document.getElementById("text").innerHTML;
if (document.all||document.getElementById){
    color_text='<div align="center"><font color="'+base_color+'" size="3">';
    for (m=0; m<message.length; m++) color_text+='<span id="neonlight'+m+'">'+message.charAt(m)+'</span>'
    color_text+='</font></div>'
    document.getElementById("text").innerHTML = color_text
}
else document.getElementById("text").innerHTML = message


function crossref(number){
    var crossobj=document.all? eval("document.all.neonlight"+number) :
    document.getElementById("neonlight"+number)
    return crossobj
}

function neon(){
    if (n==0){
     for (m=0;m<message.length;m++)
     crossref(m).style.color=base_color
     }
    crossref(n).style.color=color1
    if (n>flashingletters-1) { crossref(n-flashingletters).style.color=color2 }
    if (n>(flashingletters+flashingletters2)-1) {
    crossref(n-flashingletters-flashingletters2).style.color=base_color }
    if (n<message.length-1) { n++ }
    else {
     n=0
     clearInterval(flashing)
     setTimeout("start_color()",flashpause)
     return
     }
}
function start_color(){
    if (document.all||document.getElementById)
    flashing=setInterval("neon()",flashspeed)
}
start_color()
