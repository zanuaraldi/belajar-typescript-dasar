import { sayHello } from "../src/say-hello";

describe('sayHello', function (){
    it('Should return hello aldi', function(){
        expect(sayHello('Aldi')).toBe('Hello Aldi');
    });
});
