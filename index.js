document.addEventListener('DOMContentLoaded', (event) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Número escolhido:", randomNumber);  // Log para depuração

    const resultElement = document.getElementById('result');
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');

    guessButton.addEventListener('click', () => {
        const userInput = guessInput.value;
        console.log("Valor digitado:", userInput);  
        
        const userGuess = parseInt(userInput, 10);
        
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultElement.textContent = "Por favor, insira um número entre 1 e 100.";
        } else {
            console.log("Número digitado:", userGuess);  

            if (userGuess === randomNumber) {
                resultElement.textContent = "Parabéns! Você adivinhou o número!";
            } else if (userGuess < randomNumber) {
                resultElement.textContent = "O número escolhido é maior. Tente novamente!";
            } else {
                resultElement.textContent = "O número escolhido é menor. Tente novamente!";
            }
        }
        
        guessInput.value = '';
    });
});
