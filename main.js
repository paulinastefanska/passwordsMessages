const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "password", "hey"];
const messages = ["Have a nice day!", "Have a great day!", "ho!"];

input.addEventListener('input', (e) => {
  div.textContent = '';
  const text = e.target.value;
  passwords.forEach((password, index) => {
    if (password === text) {
      div.textContent = messages[index];
      e.target.value = '';
    }
  });
});

input.addEventListener('focus', (e) => {
 e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
 e.target.classList.remove('active');
})
