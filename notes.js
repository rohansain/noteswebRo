
show();//to display items when page loaded first time
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

        table_body.innerHTML = sett;


        //if we delete everything then it should be displayed so we use this function to check this specility make it comment and try to delete list element you see that last element delete but show
        if(localStorage.getItem("notes") == "[]"){
            table_body.innerHTML=null;
        }
    }
}

function adac() {
    let title = document.getElementById("title");
    let notes = document.getElementById("description");
    let title_color = document.getElementById("title_color");
    let notes_color = document.getElementById("notes_color");

    if (notes.value != "") {

        if (localStorage.getItem("notes") == null) {
            arr = [];
            arr.push([title.value, notes.value,title_color.value,notes_color.value]);
            localStorage.setItem("notes", JSON.stringify(arr));
        }
        else {
            getarrstr = localStorage.getItem("notes");
            arr = JSON.parse(getarrstr);
            arr.push([title.value, notes.value,title_color.value,notes_color.value]);
            localStorage.setItem("notes", JSON.stringify(arr));
        }
        title.value = "";
        notes.value = "";
        show();
    }
}

let as = document.getElementById("addBtn");
as.addEventListener("click", adac);
function deleted(index) {
    getarrstr = localStorage.getItem("notes");

    arr = JSON.parse(getarrstr);
    // console.log(arr);
    arr.splice(index, 1);
    // console.log(arr);
    localStorage.setItem("notes", JSON.stringify(arr));
    // adac();
    show();
    
    console.log("delete this", index);
}

    
