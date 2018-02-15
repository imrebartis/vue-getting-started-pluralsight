var growler = new Vue({
    el: '#growler',
    data: {
        canConnect: false
    },
    computed: {
        isOnline: {
            get: function () {
                return this.canConnect ? 'Yes' : 'No';                            
            },
            set: function(newValue) {
                console.log('was: ' + this.canConnect + ' now:' + newValue);
                this.canConnect = newValue;
            }
        }
    },
    created: function() {
        axios.get('https://www.ecofic.com')
            .then(function (res) {
                growler.canConnect = true;
            })
            .catch(function (err) {
                growler.canConnect = false;
            })
        ;
    }
});        