var count = 0;
document.querySelector("#Increase").addEventListener("click", () => {
    changeCount(1);
});
document.querySelector("#Decrease").addEventListener("click", () => {
    changeCount(-1);
});
document.querySelector("#IncreaseBy2").addEventListener("click", () => {
    changeCount(2);
});
document.querySelector("#IncreaseBy4").addEventListener("click", () => {
    changeCount(4);
});
document.querySelector("#IncreaseBy6").addEventListener("click", () => {
    changeCount(6);
});
changeCount = (number) => {
    count += number;
    document.querySelector("#count").textContent = count;
}