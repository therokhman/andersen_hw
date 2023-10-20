function getPersons(name, age) {
    const person1 = {
        name,
        age
    };

    const person2 = Object.assign({}, {
        name,
        age
    });

    const person3 = {
        ...person2
    }

    const person4 = {
        ...{
            name,
            age
        }
    };

    const person5 = new Object();
    person4.name = name;
    person4.age = age;

    function createPerson(name, age) {
        return {
            name,
            age
        };
    }
    const person6 = createPerson(name, age);

    function PersonConstructor(name, age) {
        this.name = name;
        this.age = age;
    }
    const person7 = new PersonConstructor(name, age);

    class PersonClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const person8 = new PersonClass(name, age);

    const person9 = JSON.parse(`{
        "name": "${name}",
        "age": ${age}
    }`);

    const person10 = JSON.parse(JSON.stringify({
        name,
        age
    }));

    return [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10];
}
