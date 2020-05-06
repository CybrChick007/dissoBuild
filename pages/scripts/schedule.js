let $ = function(id) {
  return document.getElementById(id);
};

//calender structure
let calendar = function(_id) {
  this._id = _id;
  this.wd = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  this.mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  let d = new Date();
  this.currMon = d.getMonth();
  this.currYr = d.getFullYear();
  this.currDay = d.getDate();

};

calendar.prototype.nxtmon = function() {
  if ( this.currMon == 11 ) {
    this.currMon = 0;
    this.currYr = this.currYr + 1;
  }
  else {
    this.currMon = this.currMon + 1;
  }
  this.showcurr();
};

calendar.prototype.prevmon = function() {
  if ( this.currMon == 0 ) {
    this.currMon = 11;
    this.currYr = this.currYr - 1;
  }
  else {
    this.currMon = this.currMon - 1;
  }
  this.showcurr();
};

calendar.prototype.showcurr = function() {
  this.displaymon(this.currYr, this.currMon);
};
calendar.prototype.displaymon = function(y, m) {
  
//hightlighing today's date
  let d = new Date()
  , firstdom = new Date(y, m, 1).getDay()
  , lastdom =  new Date(y, m+1, 0).getDate()
  , prevlastdom = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  let html = '<table>';
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.mon[m] + ' ' + y + '</td>';
  html += '</tr></thead>';
  html += '<tr class="days">';
  for(let i=0; i < this.wd.length;i++) {
    html += '<td>' + this.wd[i] + '</td>';
  }
  html += '</tr>';
  let i=1;
  do {
    let wd = new Date(y, m, i).getDay();
    if ( wd == 0 ) {
      html += '<tr>';
    }
    else if ( i == 1 ) {
      html += '<tr>';
      let k = prevlastdom - firstdom+1;
      for(let j=0; j < firstdom; j++) {
        html += '<td class="not-today">' + k + '</td>';
        k++;
      }
    }
    let chk = new Date();
    let chkY = chk.getFullYear();
    let chkM = chk.getMonth();
    if (chkY == this.currYr && chkM == this.currMon && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    if ( wd == 6 ) {
      html += '</tr>';
    }
    else if ( i == lastdom ) {
      let k=1;
      for(wd; wd < 6; wd++) {
        html += '<td class="not-today">' + k + '</td>';
        k++;
      }
    }

  i++;
  }while(i <= lastdom);
  html += '</table>';
  $(this._id).innerHTML = html;
};

  let cal = new calendar("calendar");
  cal.showcurr();
  $('btnNext').onclick = function() {
    cal.nxtmon();
  };
  $('btnPrev').onclick = function() {
    cal.prevmon();
  };
