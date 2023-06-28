const socket = io();
const btnOn1 = document.querySelector('.btn-success');
const btnOff1 = document.querySelector('.btn-danger');
const btnOn2 = document.querySelector('.btn-light');
const btnOff2 = document.querySelector('.btn-dark');

//hộp thoại cảnh báo
btnOn1.addEventListener('click',() => {
    if(confirm('Bạn muốn bật đèn?')==true){
        socket.emit('ledStatus1', 'on');
        console.log('Clicked ON');
        document.getElementById('led1').src = './img/ledON.png'
        // document.getElementById('btnled1').style.background = 'purple'

    }
  })
  
  btnOff1.addEventListener('click',() => {
    if(confirm('Bạn muốn tắt đèn?')==true){
        socket.emit('ledStatus1', 'off');
        console.log('Clicked OFF');
        document.getElementById('led1').src = './img/ledOFF.png'
        // document.getElementById('btnled1').style.background = 'violet'
    }
  })

  btnOn2.addEventListener('click',() => {
    if(confirm('Bạn muốn bật đèn?')==true){
        socket.emit('ledStatus2', 'on');
        console.log('Clicked ON');
        document.getElementById('led2').src = './img/ledON.png'
        //  document.getElementById('btnled2').style.background = 'red'
    }
  })
  
  btnOff2.addEventListener('click',() => {
    if(confirm('Bạn muốn tắt đèn?')==true){
        socket.emit('ledStatus2', 'off');
        console.log('Clicked OFF');
        document.getElementById('led2').src = './img/ledOFF.png'
        // document.getElementById('btnled2').style.background= red;

    }
  })
  

  //___________________________________________________________________
  // 
  socket.on('sensor-123', msg => {
    console.log(msg);
    handlingData(msg);
  });
  
  socket.on('led1Status', msg => {
    if (msg === 'on') {
       led1 = document.getElementById('led1').src = './img/ledON.png';
    }
    if (msg === 'off') {
        led1 = document.getElementById('led1').src = './img/ledOFF.png';
    }
    console.log(`led 1 ${msg}`);
  });
  
  socket.on('led2Status', msg => {
    if (msg === 'on') {
       led2 = document.getElementById('led2').src = './img/ledON.png';
  
    }
    if (msg === 'off') {
        led2 = document.getElementById('led2').src = './img/ledOFF.png';
    }
    console.log(`led 2 ${msg}`);
  });
  