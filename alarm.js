function alarm(jamAlert){

      var jamAlert = jamAlert.split(':');

      var Now = new Date().getHours() + ':' + new Date().getMinutes();

      var dtNow = Now.split(':');
      console.log(dtNow);

      setAlarm = (parseInt(jamAlert[0]) - parseInt(dtNow[0]))*60 + (parseInt(jamAlert[1]) - parseInt(dtNow[1])) % 60;

      console.log(`alarm set for ${setAlarm} from now`);
}
alarm('14:26');

//UPDATE COMPARE JAM DAN MENIT
function alarm(jamAlert){

      var jamAlert = jamAlert.split(':');

      var Now = new Date().getHours() + ':' + new Date().getMinutes();

      var dtNow = Now.split(':');
      console.log(dtNow);

      var setAlarm = (parseInt(jamAlert[0]) - parseInt(dtNow[0]))*60 + (parseInt(jamAlert[1]) - parseInt(dtNow[1])) % 60;

      setHours = setAlarm / 60;
      setMinutes = setAlarm % 60;

      console.log(`alarm set for ${setHours} hours and ${setMinutes} minutes from now`);
}
alarm('14:31');
