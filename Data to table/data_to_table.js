const addRow = document.getElementById('addRow');
const searchBtn = document.getElementById('search');
const tbody = document.querySelector('table tbody');

addRow.addEventListener('click',()=>{

    

    // fatching name/ getting inputs
    let name = document.getElementById('name').value;
    let ageInpt = document.getElementById('age').value;
    let countryName = document.getElementById('country').value;

    if(name ==="" || age === "" || countryName === ""){
        alert("Please fill all the details");
        return;
    }

    // new row created
    let tr = document.createElement('tr');

    // creating table data
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    // adding data in column
    td1.innerHTML = name;
    td2.innerHTML =ageInpt;
    td3.innerHTML = countryName;

    // adding column in row
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // adding row in body
    tbody.appendChild(tr);

    // clearing inputs
    document.getElementById('name').value ="";
    document.getElementById('age').value ="";
    document.getElementById('country').value ="";
    
})

searchBtn.addEventListener('click',()=>{

})
