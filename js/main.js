let a=parseInt(prompt("Enter a value"));
let b;
for(i=1;a!=0;i++){
    b=a%10;
    a=Math.floor(a/10);
    document.write(b);
}
