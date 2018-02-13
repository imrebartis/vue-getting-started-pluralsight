var growler = new Vue({
    el: '#growler',
    data: {
        pageCount: 12
    },
    methods: {
        search: function(pageNumber) {
            alert('Loading page number: ' + pageNumber);
        }
    }
});        
