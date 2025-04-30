const contacts = [];

  function updateDisplay() {
    document.getElementById("contacts").textContent = contacts.join(' ');
  }

  function addName() {
    const input = document.getElementById("nameInput");
    const name = input.value.trim();
    if (name === '') return;
	
	//Remove first element
    if (contacts.length >= 7) {
      contacts.shift(); 
    }

	//Add new name to end
    contacts.push(name); 
    input.value = ''; //Clear input
    updateDisplay();
  }
	
	//Remove last element
  function removeName() {
    contacts.pop(); 
    updateDisplay();
  }

	//Initial display
  updateDisplay(); 