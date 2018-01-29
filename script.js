var growler = new Vue({
  el: '#growler',
  data: {
      query: ''
  },
  methods: {
      executeSearch: function(event) {
          alert('Query: "' + this.query +  '" Button:"' + event.target.innerText + '"');                        
      }
  }                
});     