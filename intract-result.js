const a = document.querySelector('form')

a.addEventListener("submit", function (e) {
    e.preventDefault();
    const h = parseInt(document.querySelector("#height").value);
    const w = parseInt(document.querySelector("#weight").value);
    const r = document.querySelector("#result")
    if ( h === '' || h< 0 || isNaN(h)) {
        r.innerHTML= `This is the height value ${h}`
    } else if ( w === '' || w< 0 || isNaN(w)) {
        r.innerHTML= `This is the weight  value ${w}`
    } else {
        const bmi = (w / ((h * h) / 100000)).toFixed("00")
        r.innerHTML=`<span> ${bmi}</span>`
    }

}) 