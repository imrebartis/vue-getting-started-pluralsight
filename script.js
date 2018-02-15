var growler = new Vue({
    el: '#growler',
    data: {
        results: [
            { name: 'Ahool Ale', ibu: '33 i.b.u.' },
            { name: 'Agogwe Ale', ibu: '28 i.b.u.' },
            { name: 'Aswang Ale', ibu: '31 i.b.u.' }
        ]
    },
    // filters are used for text conversions
    filters: {
        convertIBU: function(value) {
            if (!value) {
                return '';
            }
            value = value.toString();
            // Remove all periods:
            value = value.replace(/\./g, '');
            // Convert to upper case:
            return value.toUpperCase();
        }
    }                
});