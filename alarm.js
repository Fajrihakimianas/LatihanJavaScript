function alarm(jamAlert){

      var jamAlert = jamAlert.split(':');

      var Now = new Date().getHours() + ':' + new Date().getMinutes();

      var dtNow = Now.split(':');
      console.log(dtNow);

      setAlarm = (parseInt(jamAlert[0]) - parseInt(dtNow[0])) + (parseInt(jamAlert[1]) - parseInt(dtNow[1])) % 60;

      console.log(`alarm set for ${setAlarm} minutes from now`);
}
alarm('13:22');