describe('Type Alias', function () {
    it('should support in typesript', function () {
        const category = {
            id: 1,
            name: "Handphone"
        };
        const product = {
            id: "1",
            name: "Realme 9 4G",
            price: 2000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
