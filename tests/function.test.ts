describe('Function', function() {
    it('should support in typescript', function(){
        
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Aldi")).toBe("Hello Aldi");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Aldi");
    })

    it('should support default value', function (){
        function sayHello(name: string = "Guest"): string {
            return  `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Aldi")).toBe("Hello Aldi");
    });

    it('should support rest parameter', function(){
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values){
                total += value;
            }

            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15);
    });

    it('should support optional parameter', function(){
        function sayHello(firstName : string, lastname? : string): string {
            if(lastname){
                return `Hello ${firstName} ${lastname}`;
            } else {
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello("Aldi")).toBe("Hello Aldi");
        expect(sayHello("Zanuar", "Aldi")).toBe("Hello Zanuar Aldi");
    });

    it('should support function overloading', function(){
        
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if(typeof value === "string"){
                return value.toUpperCase();
            } else if (typeof value === "number"){
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe("Aldi")).toBe("ALDI");
    });

    it('should support function as parameter', function(){

        function sayHello(name: string, filter: (name: string) => string){
            return `Hello ${filter(name)}`;
        }

        function toUpper(name:string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Aldi", toUpper)).toBe("Hello ALDI");
    });

    it('should support anonymous function', function(){
        function sayHello(name: string, filter: (name: string) => string){
            return `Hello ${filter(name)}`;
        }

        expect(sayHello("Aldi", function (name:string): string { return name.toUpperCase()})).toBe("Hello ALDI")
    });
    
    it('should support arrow function', function(){
        function sayHello(name: string, filter: (name: string) => string){
            return `Hello ${filter(name)}`;
        }

        expect(sayHello("Aldi", (name:string): string => name.toUpperCase())).toBe("Hello ALDI")
    });

});