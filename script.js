let password = 7777
let pass
let attempts = 10

alert("манба ниго кун кода 10 марта ногри зани дасту панжета мишканам")

while (pass !== password) {
    pass = +prompt('кода зан')

    if (pass === password) {
        alert('гузар братиш')
    } else {
        alert('осталось' + attempts + ' ' + 'бохаваршав кам монсас')
    }

    attempts -= 1

    if (attempts === 0) {
        alert('дор дастата ')

        break
    }


}