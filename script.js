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
        updateClick: function() {
            Vue.set(this.beers, 2, 'Ahool Pale Ale');
            // splice could be used here, too:
            // this.beers.splice(2, 1, 'bla')
        }
    }                
});    