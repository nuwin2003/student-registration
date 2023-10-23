let tblView = document.getElementById("tblView");
let btnHome = document.getElementById("btnHome");
let tblStudentInfo = document.getElementById("tblStudentInfo");
let tblImage = document.getElementById("tblImage");
let btnRemove = document.getElementById("btnRemove");
let btnUpdate = document.getElementById("btnUpdate");
let alertRemoved = document.getElementById("alertRemoved");
let btnConfirmRemove = document.getElementById("btnConfirmRemove");
let btnConfirmUpdate = document.getElementById("btnConfirmUpdate");
let modelConfirmRemove = document.getElementById("confirmRemove");
let modelConfirmUpdate = document.getElementById("confirmUpdate");
let btnCloseRemove = document.getElementById("btnCloseRemove");
let btnCloseUpdate = document.getElementById("btnCloseUpdate");
let btnCrossRemove = document.getElementById("btnCrossRemove");
let btnCrossUpdate = document.getElementById("btnCrossUpdate");
let btnSearch = document.getElementById("btnSearch");
let searchName = document.getElementById("studentSearch");
let btnRefresh = document.getElementById("btnRefresh");

//Load Student Records
fetch("http://localhost:8080/studentRegistration/getAllStudents")
.then(response => response.json())
.then(res => {
    let tblBody = `<tr>
                        <th> Student Id </td>
                        <th> Student Name </th>
                        <th> Email Address </th>
                        <th> Age </th>
                        <th> Address </th>
                        <th> Contact Number </th>
                        <th> Date of Birth </th>
                        <th> Guardian Name </th>
                    </tr>`
    
    res.forEach(element => {
        tblBody += `<tr data-id="${element.id}">
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.emailAddress}</td>
                        <td>${element.age}</td>
                        <td>${element.address}</td>
                        <td>${element.contactNumber}</td>
                        <td>${element.dateOfBirth}</td>
                        <td>${element.guardianName}</td>
                    <tr>`
    });
    tblView.innerHTML = tblBody;
});

let id = undefined;

//Event Listener to table rows
tblView.addEventListener('click', e =>{
    const tableRows = document.querySelectorAll('#tblView tr');
    console.log(tableRows);
    tableRows.forEach(row =>{
        row.addEventListener('click', event =>{
            id = row.getAttribute('data-id');
            console.log(id);
            if(id != undefined){
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                fetch(`http://localhost:8080/studentRegistration/${id}`,requestOptions)
                .then(response => response.json())
                .then(data =>{
                    console.log(data);

                    let tblBody = `
                                     <tr>
                                        <th>Student Id : ${data.id}</th>
                                    </tr>
                                    <tr>
                                        <th><input type="text" name="emailAddress" id="emailAddress" class="nameHeader" value ="${data.name}"></th>
                                    </tr>
                                    <tr>
                                        <th>Email <input type="text" name="studentName" id="studentName" value = "${data.emailAddress}"></th>
                                    </tr>
                                    <tr>
                                        <td>From <input type="text" name="studentAddress" id="studentAddress" value = "${data.address}"></th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="studentAge" id="studentAge" value = "${data.age}"> Years Old</th>
                                    </tr>
                                    <tr>
                                        <td>Mobile <input type="text" name="studentContact" id="studentContact" value = "${data.contactNumber}"></th>
                                    </tr>
                                    <tr>
                                        <td>Birth day <input type="date" name="studentDOB" id="studentDOB" value = "${data.dateOfBirth}"></th>
                                    </tr>
                                    <tr>
                                        <th>Guardian Info</th>
                                    </tr>
                                    <tr>
                                        <td>Name <input type="text" name="guardianName" id="guardianName" value = "${data.guardianName}"></th>
                                    </tr>
                                    <tr>
                                        <td>Address <input type="text" name="guardianAddress" id="guardianAddress" value = "${data.guardianAddress}"></th>
                                    </tr>
                                    <tr>
                                        <td>Mobile <input type="text" name="guardianContact" id="guardianContact" value = "${data.guardianContact}"></th>
                                    </tr>`

                    tblStudentInfo.innerHTML = tblBody;
                    btnRemove.style.display = "block";
                    btnUpdate.style.display = "block";
                })
                .catch(error => alert('error', error));
            }
        })
    })
});

//Search Student
btnSearch.addEventListener('click',e =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers : myHeaders,
        redirect: 'follow'
    };
    let tblSearchBody = `<tr>
                        <th> Student Id </td>
                        <th> Student Name </th>
                        <th> Email Address </th>
                        <th> Age </th>
                        <th> Address </th>
                        <th> Contact Number </th>
                        <th> Date of Birth </th>
                        <th> Guardian Name </th>
                    </tr>`

    fetch(`http://localhost:8080/studentRegistration/student/${searchName.value}`, requestOptions)
    .then(response => response.json())
    .then(res => {
        console.log(res);
        res.forEach((element) => {
            tblSearchBody += `<tr data-id="${element.id}">
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.emailAddress}</td>
                    <td>${element.age}</td>
                    <td>${element.address}</td>
                    <td>${element.contactNumber}</td>
                    <td>${element.dateOfBirth}</td>
                    <td>${element.guardianName}</td>
                </tr>`
        });
        tblView.innerHTML = tblSearchBody;       
    })
    .catch((error) => alert("error", error));
});

//Remove Student
btnRemove.addEventListener('click',e =>{
    if(id != undefined){
        modelConfirmRemove.style.display = "block";
        btnConfirmRemove.addEventListener('click', e=>{
            fetch(`http://localhost:8080/studentRegistration/${id}`,{
                method : 'DELETE',
            })
            window.location.reload();
        });
        btnCloseRemove.addEventListener('click', e=>{
            modelConfirmRemove.style.display = "none";
        }); 
        btnCrossRemove.addEventListener('click',e =>{
            modelConfirmRemove.style.display = "none";
        });
    }
});

//Update Student
btnUpdate.addEventListener('click', e=>{
    if(id != undefined){
        modelConfirmUpdate.style.display = "block";
        btnConfirmUpdate.addEventListener('click', e=>{
            let name = document.getElementById('studentName').value;
            let emailAddress = document.getElementById('emailAddress').value;
            let age = document.getElementById('studentAge').value;
            let address = document.getElementById('studentAddress').value;
            let contactNumber = document.getElementById('studentContact').value;
            let dateOfBirth = document.getElementById('studentDOB').value;
            let guardianName = document.getElementById('guardianName').value;
            let guardianAddress = document.getElementById('guardianAddress').value;
            let guardianContact = document.getElementById('guardianContact').value;

            let student = {
                name : name,
                emailAddress : emailAddress,
                age : age,
                address : address,
                contactNumber : contactNumber,
                dateOfBirth : dateOfBirth,
                guardianName : guardianName,
                guardianAddress : guardianAddress,
                guardianContact : guardianContact,
            };
            let studentJSON = JSON.stringify(student);
            console.log(studentJSON);
            fetch(`http://localhost:8080/studentRegistration/student/${id}`,{
                method : 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : studentJSON
            })
            window.location.reload();
        });
        btnCloseUpdate.addEventListener('click', e=>{
            modelConfirmUpdate.style.display = "none";
        }); 
        btnCrossUpdate.addEventListener('click',e =>{
            modelConfirmUpdate.style.display = "none";
        });
    }
})
//Go to home page
btnHome.addEventListener('click', e=>{
    window.location.href = "index.html";
});
//Reload the page
btnRefresh.addEventListener('click',e =>{
    window.location.reload();
});