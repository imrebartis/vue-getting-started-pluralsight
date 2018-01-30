var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        history: ''
    },
    methods: {
        evaluateKey: function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);                        
            this.history += 'key clicked: "' + e.key + '" (' + code + ')\n';
        },
        executeSearch: function(e) {
            if (this.query) {
                this.history += 'Search button clicked. Query "' + this.query + '" was entered.\n';
                //document.forms[0].submit();
            }
        },
        clearHistory: function() {
            this.history = '';
        }
    }
});        