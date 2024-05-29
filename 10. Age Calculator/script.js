const input = document.querySelector(".date-dob-input")
const btn = document.querySelector(".calculate-btn")
const result = document.querySelector(".age-result")

btn.addEventListener(
    "click",
    () => {
        if(input.value === ""){
            alert("Please Enter Your Date of Berth");
        }else{
            const dob = new Date(input.value);
            const dob_year = dob.getFullYear();

            const now = new Date();
            const year = now.getFullYear();

            const age = year - dob_year;

            console.log(age);

            result.innerText = `Your age is:${age}`;
        }
    }
)