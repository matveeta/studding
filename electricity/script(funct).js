

function Calculate () {
	
	var lastMeter = document.getElementById('lastMeter')
		,newMeter = document.getElementById('newMeter')
		,rate = {
	      '0-100' 	: 1.60
			,'100-500' 	: 1.56
			,'500-700' 	: 1.52
		}
		,sum = document.getElementById('sum')
		,result = document.getElementById('result')
		,used = newMeter.value - lastMeter.value
		,price
		;



	console.log('Последние показания счетчика? кВт', lastMeter.value);

	console.log('Показания счетчика?', newMeter.value);

	if (newMeter.value<100) {
		price = 1.60;
		sum.value = (newMeter.value - lastMeter.value)*rate['0-100'];
		console.log('Тариф 0.60 грн, к оплате: ', sum.value);

	} else if(newMeter>=100 && newMeter<500){
		price = 1.56;
		sum.value = (newMeter.value - lastMeter.value)*rate['100-500'];
		console.log('Тариф 0.56 грн, к оплате: ', sum.value);

	} else {
		price = 1.52;
		sum.value = (newMeter.value - lastMeter.value)*rate['100-500'];
		console.log('Тариф 0.52 грн, к оплате: ', sum.value);
	} 

	result.innerHTML = " Використано "+ used + " кВт. "+" Тариф  "+ price + " грн.  " +'<br>'+ " До сплати: " + Math.round(sum.value) + "грн";

};

