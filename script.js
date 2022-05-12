function RandomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}


let num1 = document.getElementById('num1');
let n1 = RandomNumberInterval(0, 10)
num1.innerHTML = `<b>${n1}`


let num2 = document.getElementById('num2');
let n2 = RandomNumberInterval(0, 10)
num2.innerHTML = `<b>${n2}`




function confere() {
    const r = document.getElementById('resultado')
    const rr = Number(r.value)
    if (n1 * n2 == rr) {
        res.innerHTML = "<b>Voce Acertou"
        res.style.color = "green"
    } else {
        res.innerHTML = "<b>Voce Errou"
        res.style.color = "yellow"
    }
}