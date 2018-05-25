function date_time(id)
{
В  В  В  В  date = new Date;
В  В  В  В  year = date.getFullYear();
В  В  В  В  month = date.getMonth();
В  В  В  В  months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
В  В  В  В  d = date.getDate();
В  В  В  В  day = date.getDay();
В  В  В  В  days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
В  В  В  В  h = date.getHours();
В  В  В  В  if(h<10)
В  В  В  В  {
В  В  В  В  В  В  В  В  h = "0"+h;
В  В  В  В  }
В  В  В  В  m = date.getMinutes();
В  В  В  В  if(m<10)
В  В  В  В  {
В  В  В  В  В  В  В  В  m = "0"+m;
В  В  В  В  }
В  В  В  В  s = date.getSeconds();
В  В  В  В  if(s<10)
В  В  В  В  {
В  В  В  В  В  В  В  В  s = "0"+s;
В  В  В  В  }
В  В  В  В  result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
В  В  В  В  document.getElementById(id).innerHTML = result;
В  В  В  В  setTimeout('date_time("'+id+'");','1000');
В  В  В  В  return true;
}