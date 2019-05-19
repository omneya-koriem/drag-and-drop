function allowDrop(event){
    event.preventDefault();
    /*if(event.target.getAttribute("draggable") == "true"){
        event.dataTransfer.dropEffect = "none";
    } else {
        event.dataTransfer.dropEffect = "all";
    };*/
};
function drag(event){
    event.dataTransfer.setData("text", event.target.id);    
    //console.log(event.target.id)
};
function dropElement(event, element){
    event.preventDefault();
    var text = event.dataTransfer.getData("text");
    element.querySelector(".dropElementsHere").appendChild(document.getElementById(text));
    /*
    if(target.id == "firstSection" ){
        document.getElementsByClassName('dropElementsHere')[0].appendChild(document.getElementById(text));    
    } else if(target.id =="secondSection") {
        document.getElementsByClassName('dropElementsHere')[1].appendChild(document.getElementById(text));    
    } else if(target.id == "thirdSection"){
        document.getElementsByClassName('dropElementsHere')[2].appendChild(document.getElementById(text));    
    }*/
    //console.log(event.target.getAttribute("id"))
    //event.target.appendChild(document.getElementById(text));
   // document.getElementsByClassName('dropElementsHere')[1].appendChild(document.getElementById(text));
    //console.log(text);
    //console.log(event.target);
    //console.log(document.getElementById(text));
}