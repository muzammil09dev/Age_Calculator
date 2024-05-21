   
   function calculateAge() {
      
      const birthDate = parseInt(document.getElementById('date').value);
      const birthMonth = parseInt(document.getElementById('month').value) - 1;
      const birthYear = parseInt(document.getElementById('year').value);

     
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth(); // 0-based
      const currentYear = currentDate.getFullYear();

  
      let ageInYears = currentYear - birthYear;
      let ageInMonths = currentMonth - birthMonth;
      let ageInDays = currentDay - birthDate;
     
      if (ageInDays < 0) {
        ageInMonths--;
        const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
       ageInDays += daysInPrevMonth;
      }

      
      if (ageInMonths < 0) {
        ageInYears--;
        ageInMonths += 12;
      }

      
      document.getElementById('age').innerHTML = `
        <ul class="list-group mb-3">
          <li class="list-group-item active fw-bold" aria-current="true">Your Age Is:</li>
          <li class="list-group-item"><strong>Total:</strong> ${ageInYears} years</li>
          <li class="list-group-item"><strong>In Months:</strong> ${ageInMonths} months</li>
          <li class="list-group-item"><strong>In Days:</strong> ${ageInDays} days</li>
        </ul>
      `;
    }
