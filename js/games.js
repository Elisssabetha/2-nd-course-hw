const guessNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  let useranswer;

  while (number !== useranswer) {
    useranswer = prompt("Попробуйте угадать число от 1 до 100");

    // Действие принажатии отмены
    if (useranswer === null) {
      alert("Игра завершена.");
      break;
    }

    useranswer = Number(useranswer);

    if (isNaN(useranswer)) {
      alert("Введено не число");
    } else {
      if (number === useranswer) {
        alert(`Верно! Загаданное число - ${number}`);
      } else {
        useranswer < number
          ? alert("Загаданное число больше")
          : alert("Загаданное число меньше");
      }
    }
  }
};

const getTask = () => {
  const operations = ["+", "-", "*", "/"];

  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1, num2, result;

  // разные рандомные числа для операций, чтобы задачи оставались простыми

  switch (operation) {
    case "+":
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      result = num1 + num2;
      break;

    case "-":
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      result = num1 - num2;
      break;

    case "*":
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      result = num1 * num2;
      break;

    case "/":
      num2 = Math.floor(Math.random() * 10) + 1;
      num1 = num2 * (Math.floor(Math.random() * 10) + 1);
      result = num1 / num2;
      break;
  }

  let task = `${num1} ${operation} ${num2}`;

  return [task, result];
};

const arithmeticTasks = () => {
  let correctAnswers = 0;
  let totalTasks = 0;

  while (true) {
    const [task, result] = getTask();

    while (true) {
      useranswer = prompt(task);

      if (useranswer === null) {
        alert(
          `Игра завершена. Правильных ответов: ${correctAnswers} (из ${totalTasks}).`
        );
        return;
      }

      useranswer = Number(useranswer);

      if (isNaN(useranswer)) {
        alert("Введено не число. Попробуйте еще раз.");
        continue;
      }

      useranswer === result
        ? (alert("Верно"), correctAnswers++)
        : alert(`Неверено. ${task} = ${result}`);

      totalTasks++;
      break;
    }
  }
};
