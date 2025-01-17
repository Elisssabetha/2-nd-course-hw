function guessNumber() {
    const number = Math.floor(Math.random() * 100) + 1;
    let useranswer;

    while (number !== useranswer) {
        useranswer = prompt('Попробуйте угадать число от 1 до 100')

        // Действие принажатии отмены
        if (useranswer === null) {
            alert('Игра завершена.');
            break;
        }

        useranswer = Number(useranswer);

        if (isNaN(useranswer)) {
            alert('Введено не число')
        }  else {
            if (number === useranswer) {
                alert(`Верно! Загаданное число - ${number}`)
            } else {
            useranswer < number ? alert('Загаданное число больше') : alert('Загаданное число меньше');
            }
        }
    }
}

