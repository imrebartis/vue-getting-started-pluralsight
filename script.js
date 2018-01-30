var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        history: '',
        showContextMenu: false,
        top: '0px',
        left: '0px'
    },
    methods: {
        onBlockClick: function(e) {
            this.history += 'Mouse was pressed down!\n';
            var button = 'Unknown';
            if (e.button === 0) {
                button = 'Left';
            } else if (e.button === 1) {
                button = 'Middle';
            } else if (e.button === 2) {
                button = 'Right';
                this.showContextMenu = true;
                this.top = e.y + 'px';
                this.left = e.x + 'px';
                console.log(e);
            }          
            this.history += button + ' button was pressed down.\n---\n\n';
        },
        clearHistory: function() {
            this.history = '';
        },
        closeContextMenu: function() {
            this.showContextMenu = false;                        
        },
        onCopyClick: function() {
            alert('copy something');
            this.closeContextMenu();
        },
        onPasteClick: function() {
            alert('paste something');
            this.closeContextMenu();                        
        }
    }
});        