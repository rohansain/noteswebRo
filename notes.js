// let arr=[];
console.log("i am attached");

function show() {
    if (localStorage.getItem("notes") != null) {
        getarrstr = localStorage.getItem("notes");
        arr = JSON.parse(getarrstr);
        sett = "";
        console.log(arr);
        arr.forEach((element, index) => {
            sett +=`<tr>
            <td>${index + 1}</td>
            <td style="color:${element[2]}">${element[0]}</td>
            <td style="color:${element[3]}">${element[1]}</td>
            <td class="del_btn_change"><input type="button" id="del_btn" onclick="deleted(${index})" value="delete"></td>
            </tr>`
        });
        table_body = document.getElementById("notlist");

        table_body.innerHTML = sett


        //if we delete everything then it should be displayed so we use this function to check this specility make it comment and try to delete list element you see that last element delete but show
        if(localStorage.getItem("notes") == "[]"){
            table_body.innerHTML=null;
        }
    }
}

function adac() {
    // console.log("hello");
    let title = document.getElementById("title");
    let notes = document.getElementById("description");
    let title_color = document.getElementById("title_color");
    let notes_color = document.getElementById("notes_color");

    if (notes.value != "") {

        if (localStorage.getItem("notes") == null) {
            arr = [];
            arr.push([title.value, notes.value]);
            localStorage.setItem("notes", JSON.stringify(arr));
        }
        else {
            getarrstr = localStorage.getItem("notes");
            arr = JSON.parse(getarrstr);
            arr.push([title.value, notes.value,title_color.value,notes_color.value]);
            localStorage.setItem("notes", JSON.stringify(arr));
        }

        tbo = document.getElementById("notlist");
        // sett = "";
        let sett="";

        arr.forEach((element, index) => {
            sett +=`<tr>
            <td>${index + 1}</td>
            <td style="color:${element[2]}">${element[0]}</td>
            <td style="color:${element[3]}">${element[1]}</td>
            <td class="del_btn_change"><input type="button" id="del_btn"  onclick="deleted(${index})"  value="delete"></td>
            </tr>`
        });

        if(sett!=""){
            table_body.innerHTML = sett
        }
        console.log(table_body);
        // console.log(table_body.innerHTML);
        title.value = "";
        notes.value = "";
    }
}
let as = document.getElementById("addBtn");
as.addEventListener("click", adac);
show();
function deleted(index) {
    // console.log("i am here");
    getarrstr = localStorage.getItem("notes");

    arr = JSON.parse(getarrstr);
    console.log(arr);
    arr.splice(index, 1);
    console.log(arr);
    localStorage.setItem("notes", JSON.stringify(arr));
    adac();
    show();
    
    console.log("delete this", index);
}

    // let insertintbo;
    // let arrayforvalue=[];
    // function insert() {
        //     title = document.getElementById("title");
        //     desc = document.getElementById("description");
        //     arrayforvalue = [];
        //     arrayforvalue.push(title.value, desc.value);
//     localStorage.setItem("notes", JSON.stringify(arrayforvalue));
//     title.value = " ";
//     desc.value = " ";


//     let listfornotes = document.getElementsByClassName("notlist");
//     let gettr="";
//     arrayforvalue.forEach((element, index) => {
    //         gettr+= `<tr>
    //         <td>${index+1}</td>
    //         <td>${element}</td>
    //         <td>${element}</td>
    //         <td><input type="button" value="delete"></td>
    //         </tr>`
    //     });
//     // console.log(arrayforvalue);
//     console.log(gettr);
//     listfornotes.innerHTML = gettr;
// }

// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", insert);


//practise

//     if(tbo.innerHTML==null){
//    insertintbo=`<tr>
//         <td>1</td>
//         <td>${title.value}</td>
//         <td>${notes.value}</td>
//         <td><input type="button" value="delete"></td>
//         </tr>`
//     }
//     else{
//         insertintbo+=`<tr>
//         <td>1</td>
//         <td>${title.value}</td>
//         <td>${notes.value}</td>
//         <td><input type="button" value="delete"></td>
//         </tr>`
//     }
    // tbo.innerHTML=insertintbo;
    // title.value = "";
    // notes.value= "";
    // console.log(tbo);