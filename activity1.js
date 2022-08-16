var s=0
function updatescore(){
    s=s+1;
    document.getElementById("score").innerHTML="score-"+s
}
function savescore(){
    localStorage.setItem("score_key",s)
}
function nextpage(){
    window.location="activity_2.html"
}