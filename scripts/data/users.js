let users = [
    {
        fname: 'Joe',
        lname: 'Moe',
        email: 'joe@email.com',
        password: 'Qwerty123!',
        isLogedIn: false
    },
    {
        fname: 'Bob',
        lname: 'Pop',
        email: 'bob@email.com',
        password: 'Qwerty123!',
        isLogedIn: false
    },
    {
        fname: 'Lin',
        lname: 'Jin',
        email: 'lin@email.com',
        password: 'Qwerty123!',
        isLogedIn: false
    },
];

const createUser = (fname, lname, email, password) => {
    users.push({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        isLogedIn: false
    });
}

const toggleStatus = (email) => {
    const user = users.find((item) => {
        return item.email == email;
    });
    user.isLogedIn = !user.isLogedIn;
    fillTable();
}

const loginUser = (email, password) => {
    const user = users.find((item) => {
        return item.email == email;
    });
    user.password === password ? toggleStatus(email) : alert('wrong password!');
}