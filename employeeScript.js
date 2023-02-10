const submitButton = document.getElementById('employeeFormSubmit');
const theFather = document.getElementById('theFather');


function getInfo(e) {
    e.preventDefault();

    let emp = new Details()
    emp.createEmployee();
    emp.createDetails();

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<h2>Employee</h2><br>
        <p>First Name: ${emp.fname}</p><br>
        <p>Last Name: ${emp.lname}</p><br>
        <p>Age: ${emp.age}</p><br>
        <p>Address: ${emp.address}</p><br>
        <p>City: ${emp.city}</p><br>
        <p>Zip Code: ${emp.zip}</p><br>
        <p>State: ${emp.state}</p><br>
        <p>Country: ${emp.country}</p><br>
        <p>Job Title: ${emp.title}</p><br>
        <p>Department: ${emp.dept}</p><br>
        <p>Salary: ${emp.salary}</p><br>
        <p>Years of Experience: ${emp.years}</p><br>
        `;

    
    theFather.append(newDiv);


    /*
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const jtitle = document.getElementById('title').value;
    const dept = document.getElementById('dept').value;
    const salary = document.getElementById('salary').value;
    const years = document.getElementById('years').value;
    let emp = new Details(fname, lname, age, address, city, zip, state, country, jtitle, dept, salary, years);
    */
}

class Employee {
    constructor() {
        this.fname = document.getElementById('fname').value;
        this.lname = document.getElementById('lname').value;
        this.age = document.getElementById('age').value;
        this.address = document.getElementById('address').value;
        this.city = document.getElementById('city').value;
        this.zip = document.getElementById('zip').value;
        this.state = document.getElementById('state').value;
        this.country = document.getElementById('country').value;
    }

    createEmployee() {
        console.log(`Name: ${this.fname} ${this.lname}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address}, ${this.zip}, ${this.state}, ${this.country}`);
    }

}

class Details extends Employee {
    constructor(fname, lname, age, address, city, zip, state, country, title, dept, salary, years) {
        super(fname, lname, age, address, city, zip, state, country);
        this.title = document.getElementById('title').value;
        this.dept = document.getElementById('dept').value;
        this.salary = document.getElementById('salary').value;
        this.years = document.getElementById('years');
    }

    createDetails() {
        console.log(`${this.fname} works in ${this.dept} and earns ${this.salary} after ${this.years} years of experience.`)
        let array_1 = [];
        array_1.push(this.fname, this.lname, this.age, this.address, this.city, this.zip, this.state, this.country, this.title, this.dept, this.salary, this.years);
    }

}

submitButton.addEventListener('click', getInfo);