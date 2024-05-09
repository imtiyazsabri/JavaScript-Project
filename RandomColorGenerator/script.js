
const generateColor = () => {
    const colorNumber = Math.floor(Math.random() * 11777215);
    const colorCode = "#" + colorNumber.toString(16);
    document.body.style.backgroundColor = colorCode;

    document.getElementById("color-code").innerText = colorCode;

    navigator.clipboard.writeText = colorCode;
}

// event call

document.getElementById("btn").addEventListener(
    "click",
    generateColor
)

// initial call
generateColor();