// fetch('https://randomuser.me/api/')
//     .then(res => {
//         if(res.ok){
//             res.json().then(data => console.log(data));
//         } else {
//             console.log("ERREUR ! ");
//         }
//     })

const convertButton = document.getElementById('convert');

convertButton.addEventListener('click', (e) => {
	e.preventDefault();

	const result = document.getElementById('res');
	let amount = document.getElementById('amount').value;
	const source = document.getElementById('src');
	let srcSelected = source.options[source.selectedIndex].text;
	const target = document.getElementById('tar');
	let tarSelected = target.options[target.selectedIndex].text;
	let newAmount;

	var test = JSON.stringify(srcSelected);
	var test1 = JSON.stringify(tarSelected);

	let url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${srcSelected}&to=${tarSelected}&amount=${amount}`;
	
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '811ec6b431msh0cb84499e2a3dd8p148a2ejsn52fffb91b272',
			'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
		}
	};

	if (amount != "") {
		fetch(url, options)
		.then(response => response.json())
		.then(value => {
		newAmount = value.result;
		result.innerHTML = `<h3>Voici le résultat de la conversion : ${newAmount}</h3>`;
	})
	.catch(err => console.warn(err));
	}


});
