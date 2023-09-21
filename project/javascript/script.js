//alert("loading");
function addNewWEField(){
    //console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    //console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}
function generateCV(){
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;
    document.getElementById("nameT2").innerHTML=namefield;
    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedfield").value;
    let aqs = document.getElementsByClassName("aqfield");
    let str = "";
    for (let q of aqs) {
        str=str+'<li> ${q.value} </li>';
    }
    document.getElementsByClassName("aqT").innerHTML = str;
}