const backgroundChanger = document.getElementById("backgroundChanger");
backgroundChanger.addEventListener("click",()=>{
    // window.document.body.style.background="black"
    const inner = document.createElement("div")
inner.setAttribute("class","inner")

inner.innerHTML = "<p>hello</p>"

outer.append(inner)


})
// const backgroundChangerr = document.getElementById("backgroundChangerr");
// backgroundChangerr.addEventListener("click",()=>{
//     window.document.body.style.background="white"
// })

//today code
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
console.log(userName)

//input event
submitBtn.addEventListener("click",(e)=>{
    const userName = document.getElementById("userName").value
    e.preventDefault();
    output.innerHTML=userName
})