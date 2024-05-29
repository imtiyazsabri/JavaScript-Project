const input = document.getElementById("inpt")
const btn = document.getElementById("btn")
const img = document.getElementById("img")

// console.log(input, btn, img);

btn.addEventListener(
    "click",
    () => {
        const val = input.value;
        if(val === ""){
            alert("Please enter valid URL");
        }else{
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`
            input.value = "";
        }
    }
)
