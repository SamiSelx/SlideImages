let btnNext = document.querySelector(".btn-next")
let btnPrev = document.querySelector(".btn-previous")
let images = [...document.querySelectorAll(".images img")]
let numbers = document.querySelector(".numbers")
console.log(numbers)
for(let i=0;i<images.length;i++){
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(i+1))
    numbers.appendChild(span)
}
document.querySelectorAll(".numbers span")[0].classList.add("active")
// function* genImg(){
//     yield* images;
// }
// let gen = genImg()

// btnNext.addEventListener("click",function(){
//     let imgObjNext = gen.next()
//     if(imgObjNext.value.classList.contains("active") && imgObjNext.value === images[0]){
//         imgObjNext = gen.next()
//     }
//     if(!imgObjNext.done){
//         images.forEach((img)=>{
//             img.classList.remove("active")
//         })
//         imgObjNext.value.classList.add("active")
//     }
//     if(imgObjNext.value === images[images.length-1]){
//         btnNext.classList.add("disable")
//     }
//     
// })

btnNext.addEventListener("click",()=>{
    let index = indexofImagActive(images);
    if(images[images.length - 1].classList.contains("active")){
        // return false;
        index = -1;
    }
    
    images.forEach((img,i)=>{
        img.classList.remove("active")
        document.querySelectorAll(".numbers span")[i].classList.remove("active")
    })
    images[index + 1 ].classList.add("active")
    document.querySelectorAll(".numbers span")[index + 1].classList.add("active")
    // if(!images[0].classList.contains("active")){
    //     btnPrev.classList.remove("disable")
    // }
    // if(images[images.length - 1].classList.contains("active")){
    //     btnNext.classList.add("disable") 
    // }
})

btnPrev.addEventListener("click",()=>{
    let index = indexofImagActive(images)
    if(images[0].classList.contains("active")){
        // return false;
        index = images.length;
    }
    
    images.forEach((img,i)=>{
        img.classList.remove("active")
        document.querySelectorAll(".numbers span")[i].classList.remove("active")
    })
    
    images[index - 1 ].classList.add("active")
    document.querySelectorAll(".numbers span")[index - 1].classList.add("active")

    // if(!images[images.length-1].classList.contains("active")){
    //     btnNext.classList.remove("disable")
    // }
    // if(images[0].classList.contains("active")){
    //     btnPrev.classList.add("disable")
    // }
})

function indexofImagActive(images){
    for(let i=0;i<images.length;i++){
        if(images[i].classList.contains("active")){
            return i;
        }
    }
}
