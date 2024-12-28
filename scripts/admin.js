window.onload=()=>{
    getData()
}
import { baseUrl } from "./baseUrl";
let form=document.getElementById("form")
form.addEventListener("submit",function(){
    let title=form.title.value;
    let author =form.author.value;
    let categroy=form.select.value;
    let fiction= form.fic.value
    let comedy= form.com.value
   let technical= form.tech.value
   let correctCategroy={
    fiction,
    comedy,
    technical,
   }
   console.log(title,author,categroy,correctCategroy)

});
function getData(){
fetch(`${baseUrl}/books`)
   method:"POST"
   headers:{"application/content"}
}

body.JSON.strinfigy(`${baseUrl}/books`)
    try{
        let data=res().JSON(`${baseUrl}/books`)
        alert("Added Successfully......!")
      displayData(data)
    }
    catch(err){
        alert("Something went wrong")
    }


function displayData(arr){
    arr.map((el,i)=>{
    let form=document.getElementById("cont");
    let card=document.createElement("div");
    let title=document.createElement("h3");
    title.textContent=`Title:${el.title}`;
    let author=document.createElement("h3");
    author.textContent=`author:${el.author}`;
    let categroy=document.createElement("h3");
    categroy.textContent=`categroy:${el.categroy}`;
    let isAvailable= document.createElement("h3");
    isAvailable.textContent=`isAvailable:${el.isAvailable}`;
    let isVerified=document.createElement("h3");
    isVerified.textContent=`  isVerified:${el. isVerified}`;
    let borrowedDays=document.createElement("h3");
    borrowedDays.textContent=`  borrowedDays:${el.borrowedDays}`;
    let img=document.createElement("img");
    img.textContent=`img:${el.src="https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"}`
    card.append(title,author,categroy, isAvailable,isVerified, borrowedDays,img)
    contppend(card)
})
}
