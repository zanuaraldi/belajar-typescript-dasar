"use strict";
describe('Optional Parameter', function () {
    it('should suppport null and undefinied', function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        sayHello("Aldi");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
