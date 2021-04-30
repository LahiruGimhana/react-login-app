    [
        {
            id: 3,
            name: { title: "Mrs", first: "gimhana", last: "dayananda" },
            location: { street: "8416", city: "Kurunegala", state: "Kırşehir" },
            picture: { medium: "https://randomuser.me/api/portraits/med/women/90.jpg" },
        },
        {
            id: 4,
            name: { title: "Mrs", first: "gimhana", last: "dayananda" },
            location: { street: "8416", city: "Kurunegala", state: "Kırşehir" },
            picture: { medium: "https://randomuser.me/api/portraits/med/women/90.jpg" },
        },
    ]


    let person={
        id: 5,
        name: { title: "Mrs", first: "gimhana", last: "dayananda" },
        location: { street: "8416", city: "Kurunegala", state: "Kırşehir" },
        picture: { medium: "https://randomuser.me/api/portraits/med/women/90.jpg" },
    }


class DataSet{
     


    constructor(id,name, location){
        this.id=id;
        this.name=name;
        this.location=location;
    }

    get user(){
        return this.id;
    }

    set user(id, name, location){

    }

    
}

