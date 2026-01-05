document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Matcha Niko', img: 'matcha.jpg', price: 100000 },
            { id: 2, name: 'Kopi Kenangan', img: 'coffee.jpg', price: 150000 },
            { id: 3, name: 'Kopi Susu', img: 'matcha.jpg', price: 200000 },
            { id: 4, name: 'Teh Tarik', img: 'matcha.jpg', price: 120000 },
            { id: 5, name: 'Cappucino', img: 'matcha.jpg', price: 180000 },
        ],
    }))


    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            this.items.push(newItem);
            this.quantity++;
            this.total += newItem.price;
            console.log(this.total);
        },
    });
});


//konversi ke rupiah 
function rupiah(Number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(Number);
}