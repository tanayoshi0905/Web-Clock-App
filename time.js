const youbi = ["日", "月", "火", "水", "木", "金", "土"];
function time(){
    var date = new Date();
    document.getElementById('hour').textContent = date.getHours().toString().padStart(2, 0);
    document.getElementById('minute').textContent = date.getMinutes().toString().padStart(2, 0);
    var second = date.getSeconds()
    document.getElementById('second').textContent = second.toString().padStart(2, 0);
    var coron = document.getElementsByClassName('corons');
    if(second % 2 == 0){
        for(var i=0; i<coron.length; i++){
            coron[i].style.visibility = 'hidden';
        }
    }else{
        for(var i=0; i<coron.length; i++){
            coron[i].style.visibility = 'visible';
        }
    }
    document.getElementById('year').textContent = date.getFullYear();
    document.getElementById('month').textContent = date.getMonth() + 1;
    document.getElementById('day').textContent = date.getDate();
    document.getElementById('youbi').textContent = youbi[date.getDay()];
}

setInterval(time, 10);