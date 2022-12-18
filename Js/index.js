const baseURL = 'https://cephalometric.herokuapp.com'
let patients = []
const patientID = localStorage.getItem('patientID')

$("#btn_send_to_tracking").click(() => {
    const data = {
        identifier: $("#patient_identifier").val(),
        gender: displayRadioValue(),
        age: $("#input_age").val(),
        comments:$("#comment").val(),
       /*  analysis_type:$("#select_trace_type").val(), */
        image: document.getElementById('imageinput').files[0]
        
    }
    console.log(data);
    axios({
        method: 'post',
        url: `${baseURL}/user`,
        data:data,
        headers: { 'Content-Type': 'multipart/form-data; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        console.log(message);
        if (message == "Done") {
            alert("added success");
            window.location.replace("http://127.0.0.1:5501/Repository.html#");
            //getData()
        } else {
            alert("Fail to add patient")
        }
    }).catch(function (error) {
        console.log(error);
    });
   
})


function displayRadioValue() {
    var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        console.log(ele[i].value);
                return ele[i].value
    }}


 function getData() {
        
        axios({
            method: 'get',
            url: `${baseURL}/user`,
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
           
        }).then(function (response) {
            console.log(response);
            const { message, users } = response.data
            patients = users
            
            //showData()
        }).catch(function (error) {
            console.log(error);
        });
    }



    
    function getpatient() {
        axios({
            method: 'get',
            url: `${baseURL}/user/info/${localStorage.getItem('patientID')}`,
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        }).then(function (response) {
            const { message, user } = response.data
            
            console.log(user);
            $('#patient_identifier').val(user.identifier);
            $('#input_age').val(user.age);
            $('#comment').val(user.comments);
           
        }).catch(function (error) {
            console.log(error);
        });
    }

    
    if(localStorage.getItem('patientID')){
        getpatient()
    }
   
    
    $("#btn_update_record").click(() => {
        console.log('clicked');
        const data = {
        identifier: $("#patient_identifier").val(),
        
        age: $("#input_age").val(),
        comments:$("#comment").val(),
        }
        axios({
            method: "put",
            url: `${baseURL}/user/${patientID}`,
            data:data,
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    
        }).then((response) => {
            const { message } = response.data;
            console.log(response);
            if (message == 'Done') {
               localStorage.removeItem('patientID')
                window.location.replace("http://127.0.0.1:5501/Repository.html#");
            } else {
                alert("In-valid data")
            }
        }).catch((err) => {
            console.log({ message: "Catch error", err });
        })
    })


    $('#update-btn-repo').click(function(){
        console.log('update-btn-repo clicked')
        $('#btn_update_record').css('display','block');
        $('#btn_send_to_tracking').css('display','none'); 
    })


