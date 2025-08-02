fetch('https://dummyjson.com/users')
  .then(res => {
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  })
  .then(data => {
    const num = 5; 
    const container = document.querySelector('.main');

    data.users.slice(0, num).forEach(user => {
      const idCard = document.createElement('div');
      idCard.classList.add('id-card');

      idCard.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="top">
          <path fill="#0099ff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,160C672,139,768,149,864,165.3C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <img class="photo" src="${user.image}" alt="Photo of ${user.firstName} ${user.lastName}" />

        <div class="name">
          <h2>${user.firstName} ${user.lastName}, ${user.age}</h2>
        </div>

        <h2 class="title">${user.company.title}</h2>

        <h2 class="phone-num">${user.phone}</h2>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="bottom">
          <path fill="#0099ff" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,101.3C672,85,768,107,864,112C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      `;

      container.appendChild(idCard);
    });
  })
  .catch(err => {
    console.error('Error:', err);
    document.querySelector('.main').innerHTML = `
      <p style="color: red; font-size: 1rem; grid-column: span 3;">
        Failed to load user data. Please check your connection.
      </p>`;
  });