/*PreLoader funciton*/
function preLoaderJS() {
    setTimeout(function() {
        document.getElementsByClassName("PreLoaderContent")[0].classList.toggle("hide");
    }, 5000);
    document.getElementById("content").classList.toggle("hide");
}