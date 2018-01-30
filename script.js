var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        history: ''
    },
    methods: {
        executeSearch: function() {
            this.history += 'Search button clicked.\n';
        },
        parentClick: function() {
            this.history += 'Search button parent clicked.\n';
        },
        grandparentClick: function() {
            this.history += 'Search button grandparent clicked.\n\n';
        },
        clearHistory: function() {
            this.history = '';
        }
    }
});        