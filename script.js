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
            // removing the 3 beers starting at index 1
            // i.e. everything except Pope Lick Porter
            var removed = this.beers.splice(1, 3);
            console.log(removed);
        }
    }                
});     