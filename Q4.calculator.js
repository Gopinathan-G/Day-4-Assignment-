
function all(value1) {
   
     var a1 = parseInt(document.getElementById("n1").value);
     var a2 = parseInt(document.getElementById("n2").value);
     var a3;
    switch(value1)
    {
     case '+' : a3=a1+a2; break;     
     case '-' : a3=a1-a2; break;
     case '*' : a3=a1*a2; break;
     case '/' : a3=a1/a2; break;
     case '%' : a3=a1%a2; break;
     case '^' : a3=a1^a2; break;
    }
    document.getElementById("ans").value=a3;
    return;
}