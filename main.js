var x=[];
function submit(){
    var a=document.getElementById("i1").value; 
    var b=document.getElementById("i2").value;
    var c=document.getElementById("i3").value;
    var d=document.getElementById("i4").value;
    x.push(a);
    x.push(b);
    x.push(c);
    x.push(d);
    console.log(x);
    document.getElementById("empty").innerHTML= x;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="inline-block";
}
function sort1(){
    x.sort();
    console.log(x);
    document.getElementById("empty").innerHTML= x;
}