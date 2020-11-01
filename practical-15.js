document.querySelector(".dec").addEventListener("click", function(){
    var count = document.querySelector("span").innerHTML;
    count = count - 1;
    if(count < 0){
        count = 0;
    }
    document.querySelector("span").innerHTML = count;
});


document.querySelector(".inc").addEventListener("click", function(){
    var count2 = document.querySelector("span").innerHTML;
    var count3 = Number(count2);
    count3 = count3 + 1;
    document.querySelector("span").innerHTML = count3;
});