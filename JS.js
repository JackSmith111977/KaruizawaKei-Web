
/*setting background size*/
var background = document.getElementById("background");
background.style.width = window.innerWidth + "px";
background.style.height = document.documentElement.clientHeight + "px";
console.log(document.documentElement.clientHeight);
/*setting container size*/
var container = document.getElementsByClassName("container")[0];
container.style.width = window.innerWidth + "px";
/*setting blog web button jump*/
var cbutton = document.getElementsByClassName("cButton")[0];
cbutton.addEventListener("click",function(){
    window.location.href = "blogWriting.html";
})

/*textinput*/
function textsubmit(){
    const textinput = document.getElementById("textinput").value;
    fetch("/upload",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            textinput:textinput
        })
    })
    .then(response => response.text())
    .then(message =>alert(message))
    .catch(error => console.error("上传失败:",error));
}
var textsubmitbutton = document.getElementById("textsubmit");
textsubmitbutton.addEventListener("click",textsubmit);