
let ulang=true;

//while(ulang){
//	let a= prompt(
//	'Hi, Selamat Datang. Siapa Nama Kamu :)'
//	);
//	ulang = confirm(
//		'Masukan Lagi ?'
//	);
//	alert("SELAMAT DATANG"+a);
//}
function opensidebar() {

		document.getElementById("menubar").style.transform = "translateX(0px)";
	  	document.getElementById("menubar").style.transition= "0.3s";
	
	  
	}
function closesidebar() {

		document.getElementById("menubar").style.transform = "translateX(-175px)";
	  	document.getElementById("menubar").style.transition= "0.3s";
	
	  
	}

