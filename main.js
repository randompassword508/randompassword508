       const passwordInput = document.getElementById('password');
        const copyBtn = document.querySelector('.copy-btn');
        const generateBtn = document.getElementById('generate');
        const checkboxes = document.querySelectorAll('.input');
        
        let password = '';
        
        generateBtn.addEventListener('click', generatePassword);
        copyBtn.addEventListener('click', copyPassword);
        
        function generatePassword() {
          const uppercase = document.getElementById('uppercase').checked;
          const lowercase = document.getElementById('lowercase').checked;
          const special = document.getElementById('special').checked;
          const numbers = document.getElementById('numbers').checked;
        
          const characters = [];
          if (uppercase) characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
          if (lowercase) characters.push(...'abcdefghijklmnopqrstuvwxyz');
          if (special) characters.push(...'!@#$%^&*()_+~`|}{[]:;?><,./-=');
          if (numbers) characters.push(...'0123456789');
        
          if (characters.length === 0) {
            alert('Please select at least one character type.');
            return;
          }
        
          password = '';
          for (let i = 0; i < 12; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
          }
        
          passwordInput.value = password;
        }
        
        function copyPassword() {
          navigator.clipboard.writeText(passwordInput.value);
          alert('Password copied to clipboard!');
        } 
        
