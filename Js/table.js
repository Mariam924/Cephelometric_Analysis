/* const baseURL = 'https://cephalometric.herokuapp.com' */
/* let patients = [] */

$("#searchKey").on("input",() => { 
    searchKey = $("#searchKey").val();
    getData()
})

function getData() {
    
    axios({
        method: 'get',
        url: `${baseURL}/user`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        params: { id:$("#searchKey").val() }
    }).then(function (response) {
        console.log(response);
        const { message, users } = response.data
        if (message == "Done") {
            patients = users
        
        showData()}
    }).catch(function (error) {
        console.log(error);
    });
}

/* function showData() {
    let cartonna = ``
    
    for (let index = 0; index < patients.length; index++) {
        cartonna += `  <tr class='mt-5' onclick='getDataResult(${patients[index].identifier})'>
          <td><img class='profile-pic' src=${patients [index].cephalometricPic}></td>
           <td>${patients [index].identifier}</td>
           <td>${patients [index].age}</td>
           <td>${patients [index].gender}</td>
           <td>${patients [index].comments}</td>
           <td>${createDate(patients [index].createdAt)}</td>

           <td> <button onclick='deleteItem(${patients[index].identifier})' class="btn btn-danger">Delete</button></td>
           <td><button onclick='updateItem(${patients[index].identifier})' class="btn btn-success" id="update-btn-repo">Update</button></td>     
           </td>
          
       </tr>`

    }
    document.getElementById('tbody').innerHTML = cartonna
} */


/* function showData() {
    let cartonna = ``
    
    for (let index = 0; index < 5; index++) {
        cartonna += `  <tr class='mt-5'>
          <td><img class='profile-pic'></td>
           <td>55555</td>
           <td>21</td>
           <td>female</td>
           <td>nnn</td>
           <td>12/15/2014</td>

           <td> <button onclick='deleteItem()' class="btn btn-danger">Delete</button></td>
           <td><button onclick='updateItem()' class="btn btn-success" id="update-btn-repo">Update</button></td>     
           </td>
          
       </tr>`

    }
    document.getElementById('tbody').innerHTML = cartonna;
} */

function deleteItem(id){

    axios({
        method: 'delete',
        url: `${baseURL}/user/${id}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        if (message == "Done") {
            alert("Deleted successfully")
            getData()
        } else {
            alert("Fail to Delete your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
}

function updateItem(id){
    localStorage.setItem("patientID" ,id)  
    window.location.replace("http://127.0.0.1:5501/upload.html");
    $('.btn_send_to_tracking').addClass('d-none').removeClass('d-block');
    console.log(document.getElementById('btn_send_to_tracking')); 
}

function createDate(dd){
    const date = new Date(dd);

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`;
console.log(currentDate); 
return  currentDate
}

showData();
/* getData(); */


/* function getDataResult(id){
    localStorage.setItem("patientID" ,id)  
    window.location.replace("http://127.0.0.1:5501/result.html");   
} */
