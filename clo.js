var clock = new Vue({
    el: '#clock',
    data: {
        today: 'Today is ',
        day: '',
        time: '',
        date: '',
        wnText: 'Week number ',
        weekNum:'',
        button: {
      text: 'Change Language'
    },
    lang: true
    },
    
    methods: {
      toggleLang: function() {
        clock.lang = !clock.lang;
        if(clock.button.text === 'Language') {
          clock.today = clock.lang ? 'Today is ' : 'Tänään on ',
          clock.wnText = clock.lang ? 'Week number ' : 'Viikkonumero ',
          clock.button.text = clock.lang ? 'Chage Language' : ' Vaihda Kieli';
        }
        else
        clock.today = clock.lang ? 'Tänään on ' :'Today is ',
          clock.wnText = clock.lang ? 'Viikkonumero ' : 'Week number ',
        clock.button.text = clock.lang ? 'Vaihda Kieli' : 'Change Language';
        
      }
    }
});

var weekFi = ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'];
var weekEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var weekDe = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];



var weekAmount = function(){
    return new Date().getWeek();
}
// Palauttaa ISO-viikon päivämäärän.
Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Tämän viikon torstai päättää vuoden.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
}
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    if(clock.button.text === 'Change Language') {
      clock.day = weekEn[cd.getDay()];
    }
    else {
      clock.day = weekFi[cd.getDay()];
    }

    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getDate(), 2) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getFullYear(), 4);
     clock.weekNum =  zeroPadding(weekAmount());
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

/* var app = new Vue({
    el: '#app',
    data: {
      todos: [
        { text: 'Sample Item 1' },
        { text: 'Sample Item 2' },
        { text: 'Sample Item 3' }
      ],
      button: {
        text: 'Hide'
      },
      seen: true
    },
    methods: {
      addItem: function() {
        let item = document.getElementById("list-input").value;
        let error = document.getElementById("error");
        if (item == "") {
          error.style.display = "block";
        } else {
          app.todos.push({ text: item });
          error.style.display = "none";
        }
      },
      toggleSeen: function() {
        app.seen = !app.seen;
        app.button.text = app.seen ? 'Hide' : 'Show';
      }
    }
  }); */