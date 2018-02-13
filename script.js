var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Pope Lick Porter',
            'Hyote Chocolate Stout',
            'Ahool Ale',
            'Tikibalang Barley Wine'
        ],
        newBeerName: ''
    },
    methods: {
        spliceClick: function() {
            // remove everything starting with the item at index 3
            // here Tikibalang Barley Wine (the only one that gets removed)
            var removed = this.beers.splice(3);
            console.log(removed);
        }
    }                
});  