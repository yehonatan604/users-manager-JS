const addRow = (user) => {
    createUser(user.fname, user.lname, user.email, user.password);
    fillTable();
}

const removeRow = (row) => {
    row.parentNode.removeChild(row);
}

const fillTable = () => {
    resetTable();
    for (let user of users) {
        let row = usersTable.insertRow();
        for (const key in user) {
            let cell = row.insertCell();
            let text = document.createTextNode(key === 'isLogedIn' ? user.isLogedIn ? 'מחובר' : 'מנותק' : user[key]);
            cell.appendChild(text);
        }
        let cell = row.insertCell();
        const btns = addButtons(row);
        cell.appendChild(btns);
    }
}

const resetTable = () => {
    const rows = document.getElementsByTagName("tr");

    for (let i = rows.length - 1; i >= 1; i--) {
        removeRow(rows[i]);
    }
}