
console.log('Weekend Salary Calculator');

let employees = [];
const monthlyCostTotal = document.getElementById('totalMonthlyCost');


function submitForm(event){
    event.preventDefault();
    console.log('submit Form');

    let firstName = document.querySelector('#firstNameInput').value;
    //console.log('first name', firstName);
    let lastName = document.querySelector('#lasttNameInput').value;
    //console.log('last name', lastName);
    let idNumber = document.querySelector('#idInput').value;
    //console.log('ID number', idNumber);
    let title = document.querySelector('#titleInput').value;
    //console.log('title', title);
    let salary = Number(document.querySelector('#salaryInput').value);
    //console.log('salary', salary);

    //console.log('Our values to log all in one log', firstName, lastName, idNumber, title, salary);

    let employeeTableUpdate = document.querySelector('#employeeTableData');
    employeeTableUpdate.innerHTML += `
    <tbody">
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${title}</td>
            <td>$${salary}</td>
            <td><button onClick="removeRow(event)">Delete</button></td>
        </tr>
    </tbody>
    `

    // Create employee object
    const employee = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        title: title,
        salary: salary
      };

    // Add employee to the list
    employees.push(employee);

    document.getElementById("employeeInfoForm").reset();
    // Calculate monthly costs and update the DOM
    calculateMonthlyCosts();

};
    //This somewhat works for now

    // let sum = 0;
    // let totalMonthlySum = 0;
    // let totalAnnualSalaries = [];
    // totalAnnualSalaries.push(salary);

    // for(let i = 0; i < totalAnnualSalaries.length; i++){
    //     sum += totalAnnualSalaries[i];
    //     console.log("Each Emp's Sal", sum);
    //     let monthlyCost = (sum / 12).toFixed(2);
    //     console.log("Each Emp's Sal", monthlyCost);
    //     //document.querySelector('#totalMonthlyCost').innerHTML = `$${monthlyCost}`;
    //     totalMonthlySum += monthlyCost;
    //     document.querySelector('#totalMonthlyCost').innerHTML = `$${totalMonthlySum}`;

    // };  

function calculateMonthlyCosts() {
    let totalMonthlyCosts = 0;
    employees.forEach(function(employee) {
        totalMonthlyCosts += employee.salary / 12;
    });
    //console.log('tot month cost var', totalMonthlyCosts);

    monthlyCostTotal.innerHTML = `Total Monthly Costs: $${totalMonthlyCosts.toFixed(2)}`;
    //Add red background color if total exceeds $20,000
    if (totalMonthlyCosts > 20000){
        document.getElementById("totalMonthlyCost").style.backgroundColor = "red";
    }
};
        
function removeRow(event){
    event.target.closest('tr').remove();
}

/*
## Stretch Mode

Once the employee is deleted, update the _Total Monthly 
Cost_ section on the page to reflect the employee's 
removal. _HINT:_ You will need to figure out which employee 
was removed, in order to subtract their salary from the total. 
This is tricky! 
*/

