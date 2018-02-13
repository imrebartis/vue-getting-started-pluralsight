var growler = new Vue({
    el: '#growler',
    data: {
        abv: [
            9.7,
            12.2,
            5.7,
            11.1,
            2.9
        ]
    },
    methods: {

        numericallySortClick: function() {
            this.abv.sort(function(v1, v2) {
                return v1 - v2; // ascending order
            });
        }
    }                
});        