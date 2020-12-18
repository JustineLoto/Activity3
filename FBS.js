var n = prompt("Please enter desired range of the fibonacci sequece to generate:", " "); 
var sn1 = 0;
var sn2 = 1;
document.write("<b>Desired number range of fibonacci sequence to generate is: ",n, "<br>");
document.write("<b>The fibonacci series : ");
document.write(" ", sn1, " ");
document.write(" ", sn2, " ");
var i,sn3;
for(i=2; i<n; i++)
{
sn3=sn1+sn2;
document.write("",sn3," ");
sn1=sn2;
sn2=sn3;
}