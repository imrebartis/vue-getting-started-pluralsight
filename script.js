var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Ahool Ale',
            'Hyote Chocolate Stout',
            'Tikibalang Barley Wine',
            'Pope Lick Porter'
        ],
        newBeerName: '',
        count: 4// This property exists to test the fact that the push function returns the new length
    },
    methods: {
        pushClick: function() {
            if (this.newBeerName != '') {
            this.count = this.beers.push(this.newBeerName);
            this.newBeerName = '';
            console.log(this.count)
            }
        },
        popClick: function() {
            var popped = this.beers.pop();
            console.log('Popped:');
            console.log(popped);
        }
    }                
});        