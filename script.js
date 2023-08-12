const updateAdvice = (advice) => {
	const adviceId = document.querySelector('#advice-id');
	const adviceContent = document.querySelector('#advice');
	const adviceHeading = document.querySelector('#heading')

	adviceId.textContent = advice.slip.id;
	adviceContent.textContent = advice.slip.advice;
	adviceHeading.style.display = 'block'
};

const getData = async () => {
	try {
		const fetchData = await fetch(`https://api.adviceslip.com/advice`);

		const quoteData = await fetchData.json();

		console.log(quoteData);

    updateAdvice(quoteData)

	} catch (error) {
		console.error('Error fetching data', error);
	}
};

// const updateAdvice = (advice) => {
//   const adviceIdElement = document.getElementById('advice-id');
//   const adviceContentElement = document.getElementById('advice');

//   adviceIdElement.textContent = advice.slip.id;
//   adviceContentElement.textContent = advice.slip.advice;
// };

// const getData = async () => {
//   try {
//     const fetchData = await fetch(`https://api.adviceslip.com/advice`);
//     const quoteData = await fetchData.json();
    
//     updateAdvice(quoteData); // Update the displayed advice
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
