const usersTable = document.querySelector(".users-table");
const submitBtn = document.getElementById("submitBtn");
const loginSubmitBtn = document.getElementById("login-submitBtn");
const tbody = document.querySelector("tbody");
let btnWarning;

addButtons = (row) => {

    let buttons = document.createElement("div");
    let statusBtn = document.createElement("button");
    let delBtn = document.createElement("button");
    let editBtn = document.createElement("button");

    statusBtn.className = 'btn btn-warning';
    delBtn.className = 'btn btn-danger';
    editBtn.className = 'btn btn-info';

    statusBtn.innerText = 'התנתקות';
    delBtn.innerText = 'מחיקה';
    editBtn.innerText = 'עריכה';

    statusBtn.addEventListener('click', () => {
        row.cells[4].textContent === 'מחובר' && toggleStatus(row.cells[2].textContent);
    });

    delBtn.addEventListener('click', () => {
        users = users.filter((item) => {
            return item.email != row.cells[2].textContent;
        });
        removeRow(row);
    });

    buttons.appendChild(statusBtn);
    buttons.appendChild(delBtn);
    buttons.appendChild(editBtn);

    btnWarning = statusBtn;

    return buttons;
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const form = event.target.form;
    createUser(form['fname'].value, form['lname'].value, form['email'].value, form['password'].value);
    fillTable();
});
loginSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const form = event.target.form;
    loginUser(form['login-email'].value, form['login-password'].value);
    fillTable();
});