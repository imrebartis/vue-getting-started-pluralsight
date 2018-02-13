var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Pope Lick Porter',
            'Hyote Chocolate Stout',
            'Ahool Ale',
            'Tikibalang Barley Wine'
        ],
        removed: []
    },
    methods: {
        removeClick: function() {
            this.removed = this.beers.splice(1, 2);
        },
        // adding back the items removed with removeClick:
        replaceClick: function() {
            try {                            
                for (var i=0; i<this.removed.length; i++) {
                    // we're adding beers after the first item of the array; 
                    // since we don't want to remove items, the second param is 0;
                    // this.removed[i] adds the name of the item
                    this.beers.splice(1, 0, this.removed[i]);
                }
            } catch (ex) {
                console.log(ex);
            }
        }
    }                
});