showtask();
let addtaskinput=document.getElementById("addtaskinput");
let addtaskbtn=document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click",function(){
    addtaskinputval=addtaskinput.value;
    if(addtaskinputval.trim()!=0){

        let webtask=localStorage.getItem("localtask");
        if(webtask == null){
            taskObj=[];
        }
        else{
            taskObj=JSON.parse(webtask);
        }
        taskObj.push(addtaskinputval)
        localStorage.setItem("localtask",JSON.stringify(taskObj));
        addtaskinput.value="";
    }
    showtask();
})

function showtask(){
    let webtask=localStorage.getItem("localtask");
    if(webtask == null){
        taskObj=[];
    }
    else{
        taskObj=JSON.parse(webtask);
    }
    let html="";
    let addedtasklist =document.getElementById("addedtasklist");
    taskObj.forEach((item,index) =>{
        html += `<tr>

                    <th scope="row">${index+1}</th>
                    <td>${item}</td>
                    <td><button type="button" onclick="edittask(${index})" class="text-primary "><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                 </tr>`;

    });
    addedtasklist.innerHTML = html;


}
//edit task
function edittask(index){
    let saveindex=document.getElementById("saveindex");
    //let addtaskbtn=document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value=index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    addtaskinput.value=taskObj[index];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";

}
//save 
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click",function(){
    let addtaskbtn=document.getElementById("addtaskbtn");
    let webtask=localStorage.getItem("localtask");
    let taskObj =JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = addtaskinput.value;
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";

    localStorage.setItem("localtask",JSON.stringify(taskObj));
    addtaskinput.value="";
    showtask();

})
//delete item
function deleteitem(index){
    let webtask=localStorage.getItem("localtask");
    let taskObj =JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
}

//deleteall
let deleteallbtn=document.getElementById("deleteallbtn");

deleteallbtn.addEventListener("click",function(){
    let savetaskbtn = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask=localStorage.getItem("localtask");
    let taskObj =JSON.parse(webtask);
    if(webtask == null){
        taskObj=[];
    }
    else{
        taskObj=JSON.parse(webtask);
        taskObj=[];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    addtaskinput.value="";
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
})
