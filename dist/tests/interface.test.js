describe('Interface', function () {
    it('should be able to create an interface', function () {
        const seller = {
            id: 1,
            name: 'Toko ABC',
            nib: "123456",
            npwp: "123456"
        };
        seller.name = "TOKO DURO";
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
        console.info(add(1, 2));
    });
    it('support indexable interface', function () {
        const names = ["Zanuar", "Aldi", "Syahputra"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            name: "Aldi",
            address: "Jombang"
        };
        expect(dictionary["name"]).toBe("Aldi");
        expect(dictionary["address"]).toBe("Jombang");
    });
    it('should support extend interface', function () {
        const employee = {
            id: "1",
            name: "Aldi",
            division: "TI"
        };
        const manager = {
            id: "2",
            name: "Zanuar",
            division: "TI",
            numberOfEmployees: 1
        };
        console.info(employee);
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Aldi",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Aldi"));
    });
    it('should support intersection types', function () {
        const domain = {
            name: "Aldi",
            id: "1"
        };
        console.info(domain);
    });
    it('Should support type assertions', function () {
        const person = {
            name: "Eko",
            age: 21
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
