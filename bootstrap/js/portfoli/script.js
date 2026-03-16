function toggleSidebar(){
let sidebar=document.getElementById("sidebar");
sidebar.classList.toggle("close");
}

function openTab(tabName){

let tabs=document.getElementsByClassName("tab");

for(let i=0;i<tabs.length;i++){
tabs[i].style.display="none";
}

document.getElementById(tabName).style.display="block";
}