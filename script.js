let inpVal=document.getElementById("inputVal");
let root=document.getElementById("root");
let  globalIndex;

// localStorage.clear();

readData();
function addData(){

    let arr= getCrudData();
    if(inpVal.value===""){
        alert("Please Enter Name")

    }else{

    if(arr===null){
        let data=[inpVal.value];
        setCrudData(data);
    }else{
        arr.push(inpVal.value);
        setCrudData(arr);
    }
    
    readData();
    inpVal.value="";
}
}


function readData(){
    let arr=getCrudData();
    let html="";
    let sno=1;
    for (let k in arr){

        html+= '<tr>';
        html+= '<td class="fw-bold">'+ sno + '</td>';
        html+= '<td class="fw-bold">'+arr[k]+ '</td>';
        html+=  '<td><Button class="btn btn-primary" onclick="editData(' + k + ' )">Edit</Button></td>';
        html+=  '<td><Button class="btn btn-primary" onclick="deleteData(' + k  + ' )">Delete</Button></td>';
        html+= '</tr>';
        sno++;
    }

root.innerHTML=html;
inpVal.value="";
inpVal.focus();

}


function editData(index){
    let arr=getCrudData();
    inpVal.value=arr[index]
    setCrudData(arr);
    let add=document.getElementById("add").style.display="none";
    let update=document.getElementById("update").style.display="inline-block";

    globalIndex=index;
}

function updateData(index){
    let arr=getCrudData();
    arr[globalIndex]=inpVal.value;

    let add=document.getElementById("add").style.display="inline-block";
    let update=document.getElementById("update").style.display="none";
    setCrudData(arr);
    readData();
    inpVal.value="";
}

function deleteData(index){

    let arr=getCrudData();
    arr.splice(index,1);
    setCrudData(arr);
    
    readData();

   
}


function getCrudData(){
    let arr=JSON.parse(localStorage.getItem("crud"));
    return arr;
}


function setCrudData(arr){
    localStorage.setItem("crud",JSON.stringify(arr));

}

