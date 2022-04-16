var numSquares=6;
var colors=genrateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var message=document.querySelector("#message");
var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="Easy"){
            numSquares=3;
        }
        else{
            numSquares=6;
        }
        reset();
    });
}

function reset(){
    resetButton.textContent="New Colors";
    message.textContent="";
    colors=genrateRandomColors(numSquares);
    pickedColor=pickColor();
    resetButton.textContent="New Colors"
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
    message.textContent=""; 
}
/*easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=genrateRandomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors=genrateRandomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
    }
});*/

resetButton.addEventListener("click",function(){
    reset();
   /* resetButton.textContent="New Colors";
    message.textContent="";
    colors=genrateRandomColors(numSquares);
    pickedColor=pickColor();
    resetButton.textContent="New Colors"
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
    message.textContent="";*/
});

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            resetButton.textContent="Play Again?";
            message.textContent="CORRECT!";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor="#232323";
            message.textContent="TRY AGAIN";
        }
    });
}

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genrateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return("rgb("+r+", "+g+", "+b+")");
}