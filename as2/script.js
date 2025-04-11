// script.js

document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const driverForm = document.getElementById('driverForm');
  
    // Handle student form submission
    if (studentForm) {
      studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        const destination = document.getElementById('destination').value;
        const time = document.getElementById('time').value;
  
        // Optional: Handle form data (send to backend or local storage)
        console.log('Student:', { name, destination, time });
  
        const toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();
  
        studentForm.reset();
      });
    }
  
    // Handle driver form submission
    if (driverForm) {
      driverForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('driverName').value;
        const autoNumber = document.getElementById('autoNumber').value;
        const location = document.getElementById('location').value;
        const availability = document.getElementById('availability').value;
  
        // Optional: Handle form data (send to backend or local storage)
        console.log('Driver:', { name, autoNumber, location, availability });
  
        const toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();
  
        driverForm.reset();
      });
    }
  });