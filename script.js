document.addEventListener('DOMContentLoaded', function () {
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const userMessage = userInput.value.trim();
            if (userMessage !== '') {
                displayMessage('user', userMessage);
                userInput.value = '';
                setTimeout(function () {
                    // Simulate chatbot response
                    const botMessage = 'Here is some information about ' + userMessage + '.';
                    displayMessage('bot', botMessage);
                }, 500);
            }
        }
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender);
        messageElement.textContent = message;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
});
