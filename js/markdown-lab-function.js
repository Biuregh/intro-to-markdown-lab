document.addEventListener("DOMContentLoaded", function() {
    const strLengthCal = (str) => {
            return str.length;
    };

    const textInput = document.getElementById("text-input");
    const outputP = document.getElementById("str-lenght");

    const updateOutput = () => {
        const strLength = strLengthCal(textInput.value);
        outputP.textContent = `Length: ${strLength}`; 
    };

    document.getElementById("calculate-btn").addEventListener("click", updateOutput);
});