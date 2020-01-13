var show = new Vue ({
    el: '#Vuekello',
    data: {
        showT: true,
        msg: 'viesti'
    },
    template: '<div class="pulse">{{msg}}</div>'

})

show.msg = 'Hello!'