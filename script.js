function whyNot() {
    alert("Yey thankyou, Love you❤.Then msg me 'Yes'")
} 
let n = document.querySelector('.btn-no')
n.addEventListener('mouseover', movebtn)

function movebtn() {
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;

    n.style.left = i + 'px';
    n.style.top = j + 'px';


}