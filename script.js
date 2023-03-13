var date = new Date();
var time = date.getTime();
function addTime(time, mins){
     time.setMinutes(time.getMinutes()+ mins)
     return date
}
console.log(addTime(time,30))