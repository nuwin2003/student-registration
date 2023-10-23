let btnClear = document.getElementById('btnClear');
let btnRegister = document.getElementById('btnRegister');
let form = document.getElementById('student-form');
let btnHome = document.getElementById('btnHome');

//Clear form
btnClear.addEventListener("click", e =>{
    form.reset();
});

//Go to home page
btnHome.addEventListener("click", e =>{
    window.location.href = "index.html";
});

//Register Student
btnRegister.addEventListener('click',e =>{
    const confirmation = window.confirm("Do you want to Register this Student?");
    if(confirmation){
        console.log('Register Button clicked');
        
        let name = document.getElementById('studentName').value;
        let emailAddress = document.getElementById('emailAddress').value;
        let age = document.getElementById('studentAge').value;
        let address = document.getElementById('studentAddress').value;
        let contactNumber = document.getElementById('studentContact').value;
        let dateOfBirth = document.getElementById('studentDOB').value;
        let guardianName = document.getElementById('guardianName').value;
        let guardianAddress = document.getElementById('guardianAddress').value;
        let guardianContact = document.getElementById('guardianContact').value;
        let image = document.getElementById('imageInput').files[0];

        
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
            image : image
        };

        let studentJSON = JSON.stringify(student);
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch("http://localhost:8080/studentRegistration",{
            method: 'POST' ,
            headers : myHeaders,
            body : studentJSON
        });
        alert(`Student Registration Successful!`);
        window.location.reload();
    }
});