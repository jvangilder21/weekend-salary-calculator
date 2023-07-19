console.log('Weekend Salary Calculator');


function submitForm(event){
    event.preventDefault();
    console.log('submit Form');

    let firstName = document.querySelector('#firstNameInput').value;
    console.log('first name', firstName);
    let lastName = document.querySelector('#lasttNameInput').value;
    console.log('last name', lastName);
    let idNumber = document.querySelector('#idInput').value;
    console.log('ID number', idNumber);
    let title = document.querySelector('#titleInput').value;
    console.log('title', title);
    let salary = document.querySelector('#salaryInput').value;
    console.log('salary', salary);

    console.log('Our values to log all in one log', firstName, lastName, idNumber, title, salary);

    let employeeTableUpdate = document.querySelector('#employeeTableData');
    employeeTableUpdate.innerHTML += `
    <tbody">
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button onClick="removeRow(event)">Delete</button></td>
        </tr>
    </tbody>
    `
    document.getElementById("employeeInfoForm").reset();

    // let sum = 0;
    // let totalAnnualSalaries = [];
    // totalAnnualSalaries.push(salary);

    // for(let i = 0; i < totalAnnualSalaries.length; i++){
    //     sum += totalAnnualSalaries[i];
    // };
    // console.log('our sal sum', totalAnnualSalaries);

    let monthlyCost = salary / 12;
    console.log(monthlyCost);
    // let totalMonthlyCost = document.querySelector('#totalMonthlyCost').value;
    // totalMonthlyCost += monthlyCost;
    // totalMonthlyCost.innerHTML = `
    // <h2>$${totalMonthlyCost}</h2>
    // `

}


function removeRow(event){
    event.target.closest('tr').remove();
}

/*


## Assignment

 Using the stored information, 
 calculate monthly costs and append this to the to DOM. 
 If the total monthly cost exceeds $20,000, add a red background 
 color to the total monthly cost.

*/