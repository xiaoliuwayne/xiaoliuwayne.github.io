

let myImg = document.querySelector('img');
myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/firefox_logo2017.png'){
		myImg.setAttribute('src','images/phoenix.png');
	}else{
		myImg.setAttribute('src','images/firefox_logo2017.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('请输入你的名字: ');
	if(!myName || myName === null){
		setUserName()
	}else{
		localStorage.setItem('name',myName);
		myHeading.textContent = 'Mozilla 酷毙了：' + myName;	
	}
}

//init
if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了：' + storedName;
}

myButton.onclick = function(){
	setUserName();
}

