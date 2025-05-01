describe('Loop', function(){
    it('should support for loop', function(){

        const name: string[] = ["Zanuar", "Aldi", "Syahputra"];
        for (let i = 0; i < name.length; i++){
            console.info(name[i]);
        }

        for (const nama of name) {
            console.info(nama);
        }

        for (const index in name) {
            console.info(name[index]);
        }
    })

    it('should support while loop', function(){
        
        let counter: number = 0;

        while(counter < 10){
            console.info(counter);
            counter++;
        }
    })

    it('should support do while loop', function(){

        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while(counter < 10);
    })
});