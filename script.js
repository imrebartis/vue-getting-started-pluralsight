var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        history: ''
    },
    methods: {
        executeSearch: function() {
            this.history += 'Search button clicked. Query "' + this.query + '" was entered.\n';
        },
        buttonParentClick: function() {
            this.history += 'Search button parent clicked.\n';
        },
        buttonGrandparentClick: function() {
            this.history += 'Search button grandparent clicked.\n\n';
        }
    }
});      