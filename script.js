var growler = new Vue({
  el: '#growler',
  data: {
      query: ''
  },
  methods: {
      executeSearch: function(v, e) {
          var s = JSON.stringify(v);
          var msg = 'Value: ' + s + '\n' +
              'Query: ' + this.query + '\n' +
              'Button: ' + e.target.innerText
          ;
          alert(msg);
      }                    
  }                
});    