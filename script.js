var growler = new Vue({
  el: "#growler",
  data: {
    appName: '<a href="/">Growler</a>',
    appStyle: {
      fontFamily: 'Helvetica',
      backgroundColor: '#BADA55',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    accentColor: {
      color: '#FF6A00'
    },
    paragraphs: {
      fontFamily: 'Verdana',
      margin: 0
    }
  }
});
