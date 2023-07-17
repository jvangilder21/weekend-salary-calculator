console.log('Weekend Salary Calculator');


function submitForm(event){
    event.preventDefault();
    console.log('submit Form');

    let firstName = document.querySelector('#firstNameInput').value;
    console.log('first name', firstName);// this is not necessary if we use the dual log below noted for our note convenience
    let lastName = document.querySelector('#lasttNameInput').value;
    console.log('last name', lastName);// this is not necessary if we use the dual log below noted for our note convenience
    let idNumber = document.querySelector('#idInput').value;
    console.log('ID number', idNumber);// this is not necessary if we use the dual log below noted for our note convenience
    let title = document.querySelector('#titleInput').value;
    console.log('title', title);// this is not necessary if we use the dual log below noted for our note convenience
    let salary = document.querySelector('#salaryInput').value;
    console.log('salary', salary);// this is not necessary if we use the dual log below noted for our note convenience

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
}


function removeRow(event){
    event.target.closest('tr').remove();
}
/*





## Assignment

A 'Submit' button should collect the form information, store the information 
to calculate monthly costs, append information to the DOM and clear the input
 fields. Using the stored information, calculate monthly costs and append this 
 to the to DOM. If the total monthly cost exceeds $20,000, add a red background 
 color to the total monthly cost.

Create a delete button that removes an employee from the DOM. For Base mode,
 it does **not** need to remove that Employee's salary from the reported total.

*/