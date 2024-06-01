const Btn = document.querySelector(".search-bar");
const container = document.querySelector(".container");
const inpt = document.querySelector(".inpt-box");

Btn.addEventListener(
    'click',
    () => {
        // if(container.classList.contains("active")){
        //     container.classList.remove("active");
        // }else{
        //     container.classList.add('active');
        // }
        // inpt.focus();


        // sort-cut toggle method

        container.classList.toggle('active');
    }
)