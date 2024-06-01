const boxes = document.querySelectorAll(".box");

console.log(boxes);

const removePrev = () => {
    boxes.forEach(
        (box) => {
            box.classList.remove('active');
        }
    )
}

boxes.forEach(
    (box) => {
        box.addEventListener(
            'click',
            () => {
                removePrev();
                box.classList.add('active');
            }
        )
    }
)