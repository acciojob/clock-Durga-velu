//your JS code here. If required.

let displayTime=document.getElementById("timer")

let currentDate=new Date()

setInterVal(
	function () {
		
	currentDate=new Date();
		displayTime.innerHTML=currentDate.toLocaleString();
	},1000)
