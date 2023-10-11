const form = document.querySelector('form');

// // This usecase will give you empty
// // const height = parseInt(document.querySelector('#Height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Clicked');

  const height = parseInt(document.querySelector('#Height').value);
  const weight = parseInt(document.querySelector('#Weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight`;
  } else {
    // Calculate the result if both height and weight are valid
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    result.innerHTML = `Your BMI is: ${bmi}`;
  }
});
