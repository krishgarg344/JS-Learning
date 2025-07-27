const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const review = document.querySelector('#review')

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
        review.innerHTML = 'Sorry !! No conclusions drawn'
    } else if (weight === ''|| weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
        review.innerHTML = 'Sorry !! No conclusions drawn'
    } else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.6){
            review.innerHTML = "You are under weight !!"
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            review.innerHTML = "You are normal :)"
        } else{
            review.innerHTML = "You are overweight :("
        }
    }
});

review.style.backgroundColor = "grey";
review.style.padding = '12px';
review.style.borderRadius = '15px';