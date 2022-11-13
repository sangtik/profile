// const image1 = document.querySelector(".image1");
// const image2 = document.querySelector(".image2");
// const image3 = document.querySelector(".image3");
// const image4 = document.querySelector(".image4");
// const image5 = document.querySelector(".image5");
// const image6 = document.querySelector(".image6");

const items = document.querySelectorAll("section article img");

const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for(let el of items){
    el.addEventListener("click", e =>{
        // console.log(e.currentTarget);

        let imgSrc = e.currentTarget.getAttribute("src");
        // console.log(imgSrc);

        aside.querySelector("img").setAttribute("src", imgSrc);
        aside.classList.add("on");
    });
}

close.addEventListener("click", (e)=>{
    aside.classList.remove("on");
});

// image1.addEventListener("click", (e)=>{
//     console.log("크앙1");
// });
// image2.addEventListener("click", (e)=>{
//     console.log("크앙2");
// });
// image3.addEventListener("click", (e)=>{
//     console.log("크앙3");
// });
// image4.addEventListener("click", (e)=>{
//     console.log("크앙4");
// });
// image5.addEventListener("click", (e)=>{
//     console.log("크앙5");
// });
// image6.addEventListener("click", (e)=>{
//     console.log("크앙6");
// });