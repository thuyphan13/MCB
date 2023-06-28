const myNodeList = document.querySelectorAll('p');

const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: [],
    datasets: [
        {
            type: 'line',
            label: 'Temp',
            data: [],
            backgroundColor: '#EE5C42',
            borderColor: '#EE5C42',
        },
        {
            type: 'line',
            label: 'Hum',
            data: [],
            backgroundColor: '#53868B',
            borderColor: '#53868B',
        },
        {
            type: 'line',
            label: 'Light',
            data: [],
            backgroundColor: '#2E8B57',
            borderColor: '#2E8B57',
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Data Update Realtime',
            },
        },
    },
};

// function autoLed(x){
//     if( x >900){
//         socket.emit('ledStatus1', 'on');
//         document.getElementById('led1').src = './img/ledON.png'
//     }
//     else{
//         socket.emit('ledStatus1', 'off');
//         document.getElementById('led1').src = './img/ledOFF.png'
//     }
// }


Chart.defaults.color = '#000';
const sensorsChart = new Chart(ctx, config);
const handlingData = arr => {
  const dataSS = arr.map(data => Number(data));
 
  data.datasets[0].data.push(dataSS[0]);
  data.datasets[0].data.length === 13 && data.datasets[0].data.shift();
  data.datasets[1].data.push(dataSS[1]);
  data.datasets[1].data.length === 13 && data.datasets[1].data.shift();
  data.datasets[2].data.push(dataSS[2]);
  data.datasets[2].data.length === 13 && data.datasets[2].data.shift();
  myNodeList[0].textContent = dataSS[0];
  myNodeList[1].textContent = dataSS[1];
  myNodeList[2].textContent = dataSS[2];

  document.getElementById("randomNhietDo").innerHTML = dataSS[0]
  document.getElementById("randomDoAm").innerHTML = dataSS[1]
  document.getElementById("randomAnhSang").innerHTML = dataSS[2]

  fsRandomNhietDo(dataSS[0])
  fsRandomDoAm(dataSS[1])
  fsRandomAnhSang(dataSS[2])
//   autoLed(dataSS[2])

   
  const day = new Date();
  let time = `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
  data.labels.push(time);
  data.labels.length === 13 && data.labels.shift();
  sensorsChart.update();
};


//Start :  changeColor

function fsRandomNhietDo(x){  
    if(x<20){
      document.getElementById('nhietDo').style.background='#f8897f';
    }else if(x<40){
      document.getElementById('nhietDo').style.background='#ff5040';
    }else if(x<60){
      document.getElementById('nhietDo').style.background='#dc3309';
    }else if(x<80){
      document.getElementById('nhietDo').style.background='#e73323';
    }else {
      document.getElementById('nhietDo').style.background='#701600';
    }
}
function fsRandomDoAm(y){
    if(y<20){
        document.getElementById('doAm').style.background = '#53aefe'
    } else if(y<40){
        document.getElementById('doAm').style.background = '#337dfc'
    } else if(y<60){
        document.getElementById('doAm').style.background = '#2578f5'
    } else if(y<80){
        document.getElementById('doAm').style.background = '#1d6be8'
    } else if(y<100){
        document.getElementById('doAm').style.background = '#021e8f'
    }	
}
function fsRandomAnhSang(z){
    if(z<100){
        document.getElementById('anhSang').style.background = '#f8f84f'
    } else if(z<500){
        document.getElementById('anhSang').style.background = '#ffff00'
    } else if(z<600){
        document.getElementById('anhSang').style.background = '#efe143'
    } else if(z<800){
        document.getElementById('anhSang').style.background = '#e5da0a'
    } else if(z<1000){
        document.getElementById('anhSang').style.background = '#c99b04'
    }	
}

// End: changeColor
