import { Employee, Manager } from '../src/employee';
import { Person } from '../src/person';
import { Seller } from '../src/seller';

describe('Interface', function () {
    it ('should be able to create an interface', function () {
        const seller: Seller = {
            id: 1,
            name: 'Toko ABC',
            nib: "123456",
            npwp: "123456"
        }

        seller.name = "TOKO DURO";

        console.info(seller);
    });

    it('should support function interface', function() {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }
        expect(add(2,2)).toBe(4);
        console.info(add(1,2));
    });

    it('support indexable interface', function(){
        
        interface StringArray{
            [index: number]: string
        }

        const names: StringArray = ["Zanuar", "Aldi", "Syahputra"];
        console.info(names);
    });

    it('should support indexable interface for non number index', function(){
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            name: "Aldi",
            address: "Jombang"
        };

        expect(dictionary["name"]).toBe("Aldi");
        expect(dictionary["address"]).toBe("Jombang");
    });

    it('should support extend interface', function(){
         const employee: Employee = {
            id: "1",
            name: "Aldi",
            division: "TI"
         }

         const manager: Manager = {
            id: "2",
            name: "Zanuar",
            division: "TI",
            numberOfEmployees: 1
         }

         console.info(employee);
         console.info(manager);
    });

    it('should support function in interface', function(){
        const person: Person = {
            name: "Aldi",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Aldi"));
    });

    it('should support intersection types', function(){
        interface HasName {
            name: string
        }

        interface HasId {
            id: String
        }

        type Domain  = HasId & HasName;

        const domain: Domain = {
            name: "Aldi",
            id: "1"
        }

        console.info(domain);
    });

    it('Should support type assertions', function(){
        const person: any = {
            name: "Eko",
            age: 21
        }

        const person2: Person = person as Person;

        console.info(person2);
    });
});