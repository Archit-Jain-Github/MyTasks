function getAndUpdate(){
    console.log("Updating List...");
    t = getElementById('work_task_title').value;
    d = getElementById('work_task_description').value;
    if (localStorage.getItem("itemsJson" == null)) {
        itemJsonArray = [];
        itemJsonArray.push([t, d]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse('itemJsonArrayStr');
        itemJsonArray.push([t, d]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}

function update(){
    if (localStorage.getItem("itemsJson") == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse('itemJsonArrayStr');
    }
    //Populate the table
    let bodytwo = document.getElementById("bodytwo");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${Element[0]}</td>
            <td>${Element[1]}</td>
            <td><button type="button" class="btn btn-sm btn-danger" onClick=deleted(${index})>Delete</button></td>
        </tr>
        `
    });
    bodytwo.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse('itemJsonArrayStr');
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}