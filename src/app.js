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
            // check wether there is the same item in the cart
            const cartItem = this.items.find(item => item.id === newItem.id);

            // IF FALSE, ADD NEW ITEM
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                // IF ITEM EXISTS, CHECK WETHER THE ITEMS IS THE SAME WITH THE ONE IN CART
                this.items = this.items.map(item => {
                    // IF ITEM IS DIFFERENT, RETURN THE ITEM AS IS
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // IF ITEM IS THE SAME, UPDATE THE QUANTITY AND TOTAL PRICE
                        item.quantity++;
                        item.total = item.quantity * item.price;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove(id) {
            // find the item id to be removed
            const cartItem = this.items.find(item => item.id === id);

            //IF ITEM MORE THAN1, DECREASE QUANTITY
            if (cartItem.quantity > 1) {
                this.items = this.items.map(item => {
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.quantity * item.price;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                //IF ITEM ONLY 1, REMOVE IT FROM THE CART
                this.items = this.items.filter(item => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
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