var growler = new Vue({
                el: '#growler',
                data: {
                    beers: [
                        { name: 'Ahool Ale', price: 2.80 },
                        { name: 'Agogwe Ale', price: 2.38 },
                        { name: 'Aswang Ale', price: 3.05 },
                        { name: "Buru's Barley Wine", price: 2.95 },
                        { name: 'Hyote Chocolate Stout', price: 4.68 },
                        { name: 'Igopogo Pilsner', price: 3.40 },
                        { name: 'Jackalobe Lager', price: 2.49 },
                        { name: 'Mahamba Barley Wine', price: 4.89 },
                        { name: 'Megalodon Pale Ale', price: 3.76 },
                        { name: 'Pope Lick Porter', price: 3.52 },
                        { name: 'Chocolate Pukwudgie Stout', price: 4.17 },
                        { name: 'Sharlie Pilsner', price: 2.92 },
                        { name: 'Sigbin Stout', price: 2.49 },
                        { name: 'Snallygaster Pale Ale', price: 3.64 },
                        { name: 'Tikibalang Barley Wine', price: 4.21 },
                        { name: 'Pale Popobawa Ale', price: 4.34 },
                        { name: 'North Adjule Lager', price: 3.84 }
                    ],
                    shoppingCart: [],
                    subTotal: 0.00
                },
                watch: {
                    subTotal: function(latest, original) {
                        this.calculateSalesTax();
                    }
                },
                // detecting changes in the length of an array:
                created: function() {
                    this.updateSubTotal();
                    this.$watch('shoppingCart.length', function(latest, original) {
                            console.log('Was:');
                            console.log(original);
                            console.log('---');
                            console.log('Now:');
                            console.log(latest);
                        
                        growler.updateSubTotal();
                    });
                },
                methods: {
                    updateSubTotal: function() {
                        var length = this.shoppingCart.length;
                        var t = 0;
                        for (var i=0; i<length; i++) {
                            t += this.shoppingCart[i].price;
                        }
                        this.subTotal = t;
                    },
                    calculateSalesTax: function() {
                        var taxRate = 0.07;             // Apply 7% sales tax.
                        var grandTotal = (this.subTotal * taxRate) + this.subTotal;
                        console.log(grandTotal);
                    },
                    buy: function(beer) {
                        this.shoppingCart.push(beer);
                    }
                }
            });  