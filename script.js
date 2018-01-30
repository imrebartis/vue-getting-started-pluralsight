var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        isRunning: false,
        history: ''
    },
    methods: {
        executeSearch: function() {
            this.isRunning = true;
            this.history += 'Search button clicked. Query "' + this.query + '" was entered.\n';
            //document.forms[0].submit();                        
        },
        buttonParentClick: function() {
            this.history += 'Search button parent clicked.\n';
        },
        buttonGrandparentClick: function() {
            this.history += 'Search button grandparent clicked.\n';
        }
    }
});      