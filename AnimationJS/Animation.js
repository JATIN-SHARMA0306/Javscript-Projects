
    console.log("Script is running");
    let button=document.getElementById("btn");
    button.addEventListener("click",move);
    function move()
    {
    let train=document.getElementById("train1");
    let car=document.getElementById("car");
    let input=parseInt(document.getElementById("input").value);
    input=input/10;
    console.log(input);
    let posleft=20;
    let posleftcar=1260;
    var id=setInterval(animation,5);
    function animation()
    {
        if(posleft>=1400)
        clearInterval(id);
        else{
            posleft=posleft+input;
            posleftcar=posleftcar-input;
            train.style.left=posleft+"px";
            car.style.left=posleftcar+"px";
        }
    }
    }
