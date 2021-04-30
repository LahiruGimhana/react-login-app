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
        return this.userList;
    }

    addNewUser(user) {
        let tempUser = JSON.parse(JSON.stringify(user));
        tempUser.id = Date.now();
        this.userList.push(tempUser);
        return tempUser;
    }


}

export { UserHandler };

