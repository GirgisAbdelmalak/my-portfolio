const data = document.getElementById("data");
document.getElementById("menuBtn").addEventListener("click", function () {
    if(data.classList.contains("move-down")){
        data.classList.remove("move-down")
        data.classList.add("move-up")
    }
    else{
        data.classList.remove("move-up")
        data.classList.add("move-down")
    }
});

document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Create a temporary link
    const link = document.createElement('a');
    link.href = 'Assets/Gerges_CV.pdf';
    link.download = 'Gerges CV.pdf'; // Optional: set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

var userName = 'irgis Kelliny'
var nameElement = document.querySelector("h1")
var counter = 0
setInterval(()=>{
    if(counter<userName.length){
        nameElement.innerHTML += userName[counter]
        counter++
    }
},200)

