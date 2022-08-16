function getscore(){
score=localStorage.getItem("score_key")
document.getElementById("score").innerHTML="score:"+score
}
function back(){
    window.location="activity_1.html"
}

