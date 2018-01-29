var growler = new Vue({
  el: '#growler',
  data: {
      query: ''
  },
  methods: {
      executeSearch: function(v, e) {
          var msg = 'Value: ' + v + '\n' +
              'Query: ' + this.query + '\n' +
              'Button: ' + e.target.innerText
          ;
          alert(msg);
      }                    
  }                
});        