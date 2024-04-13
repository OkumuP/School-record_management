document.addEventListener('DOMContentLoaded', function() {
    const recordsContainer = document.getElementById('records-container');
    const addRecordBtn = document.getElementById('add-record-btn');
    const recordForm = document.getElementById('record-form');
    const nameInput = document.getElementById('name-input');
    const gradeInput = document.getElementById('grade-input');
    const saveRecordBtn = document.getElementById('save-record-btn');
    const cancelRecordBtn = document.getElementById('cancel-record-btn');
  
    addRecordBtn.addEventListener('click', function() {
      recordForm.style.display = 'block';
    });
  
    cancelRecordBtn.addEventListener('click', function() {
      recordForm.style.display = 'none';
      clearForm();
    });
  
    function clearForm() {
      nameInput.value = '';
      gradeInput.value = '';
    }
  
    saveRecordBtn.addEventListener('click', function() {
      const name = nameInput.value.trim();
      const grade = gradeInput.value.trim();
  
      if (name === '' || grade === '') {
        alert('Please fill in all fields');
        return;
      }
  
      const record = document.createElement('div');
      record.classList.add('record');
      record.innerHTML = `<strong>Name:</strong> ${name}, <strong>Grade:</strong> ${grade}`;
      recordsContainer.appendChild(record);
  
      recordForm.style.display = 'none';
      clearForm();
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const toggleMenuBtn = document.querySelector('.toggle-menu');
    const navbarRight = document.querySelector('.navbar-right');
  
    toggleMenuBtn.addEventListener('click', function() {
      navbarRight.classList.toggle('show');
    });
  });
   