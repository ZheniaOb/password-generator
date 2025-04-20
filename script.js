const lengthInput = document.getElementById('length'),
      lengthValue = document.getElementById('length-value'),
      includeUppercase = document.getElementById('uppercase'),
      includeNumbers = document.getElementById('numbers'),
      generateBtn = document.getElementById('generate-btn');


lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", () => {
    const length = parseInt(lengthInput.value);
    const useUppercase = includeUppercase.checked;
    const useNumbers = includeNumbers.checked;
  

    let chars = "abcdefghijklmnopqrstuvwxyz";
  
    if (useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) chars += "0123456789";
  
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  
    alert("Your password is: " + password);
  });