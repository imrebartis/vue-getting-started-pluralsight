var growler = new Vue({
  el: '#growler',
  data: {
      query: ''
  },
  methods: {
      executeSearch: function() {
          alert('Searching for: "' + this.query + '"');
      }
  }                
});     