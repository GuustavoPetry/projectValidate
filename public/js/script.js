function renderThankYouPage() {
    // Obtém os valores dos campos do formulário
    let email = document.getElementsByName('email')[0]?.value.trim();
    let question1 = document.getElementsByName('question1')[0]?.value.trim();
    let question2 = document.getElementsByName('question2')[0]?.value.trim();
    let question3 = document.getElementsByName('question3')[0]?.value.trim();
    let question4 = document.getElementsByName('question4')[0]?.value.trim();
    let question5 = document.getElementsByName('question5')[0]?.value.trim();
    let question6 = document.getElementsByName('question6')[0]?.value.trim();
    let question7 = document.getElementsByName('question7')[0]?.value.trim();

    // Verifica se todos os campos estão preenchidos
    if (email && question1 && question2 && question3 && question4 && question5 && question6 && question7) {
        window.location.href = 'thank_you.html';
    } else {
        window.location.href = 'error.html';
    }
}
