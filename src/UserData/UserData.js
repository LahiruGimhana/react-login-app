class UserHandler {

    constructor() {
        this.userList = [
            {
                id: "dsdsds",
                name: { title: "Mrs", first: "gimhana", last: "dayananda" },
                location: { street: "8416", city: "Kurunegala", state: "Kırşehir" },
                picture: { medium: "https://randomuser.me/api/portraits/med/women/90.jpg" },
            },
            {
                id: "dsadasd",
                name: { title: "Mrs", first: "22222", last: "1111" },
                location: { street: "8416", city: "Kurunegala", state: "Kırşehir" },
                picture: { medium: "https://randomuser.me/api/portraits/med/women/90.jpg" },
            },
        ];
    }

    getUserById(id) {

        return this.userList.find(usr => {
            return usr.id === id;
        })

    }

    getAllUsers() {

        return new Promise((resolve, reject) => {

            fetch('https://react-getting-started-ae727-default-rtdb.firebaseio.com/user.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log('Success:', data);
                return resolve(data);
            }).catch((error) => {
                console.error('Error:', error);
                return reject(error);
            });

        })



    }

    addNewUser(user) {
        let tempUser = JSON.parse(JSON.stringify(user));
        tempUser.id = Date.now();
        this.userList.push(tempUser);
        return tempUser;
    }


}

export { UserHandler };

