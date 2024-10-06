async function greetingName(firstname, lastname) {
    await new Promise(resolve => setTimeout(resolve, 2000)); 
        document.getElementById('message').textContent = `Привіт, ${firstname} ${lastname}`;
    }

    document.getElementById('greetingForm').addEventListener('submit', function(event){
        event.preventDefault();
        const firstNameInput = document.getElementById('firstNameInput').value;
        const lastNameInput = document.getElementById('lastNameInput').value;
        if(firstNameInput, lastNameInput){
            greetingName(firstNameInput, lastNameInput);
        } else {
            document.getElementById('message').textContent = "Будь ласка введіть імя";
        }
    });