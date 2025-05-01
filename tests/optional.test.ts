describe('Optional Parameter', function(){
    it('should suppport null and undefinied', function(){

        function sayHello(name? : string | null){
            if(name){
                console.info(`Hello ${name}`);
            }else{
                console.info('Hello');
            }
        }

        sayHello("Aldi");
        const name : string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});