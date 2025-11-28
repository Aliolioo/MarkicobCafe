document.addEventListener('alpine:init', () => {
        Alpine.data('products', () => ({
            items: [
                { id: 1, name: 'Matcha Niko', img:'matcha.jpg', price: 100000 },
                { id: 2, name: 'Kopi Kenangan', img:'coffee.jpg', price: 150000 },
                { id: 3, name: 'Kopi Susu', img:'coffee.jpg', price: 200000 },
                { id: 4, name: 'Teh Tarik', img:'4.jpg', price: 120000 },
                { id: 5, name: 'Cappucino', img:'5.jpg', price: 180000 },
            ],
        }))
    })
    