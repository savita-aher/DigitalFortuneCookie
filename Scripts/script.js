const crackBtn = document.getElementById('crackBtn');
const fortuneDisplay = document.getElementById('fortuneDisplay');
const darkToggle = document.getElementById('darkToggle');

async function fetchFortune() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    fortuneDisplay.textContent = `"${data.slip.advice}" `;
    
  } catch (error) {
    console.error('Fetch error:', error);
    fortuneDisplay.textContent = ' Something went wrong. Try again!';
  }
}

crackBtn.addEventListener('click', fetchFortune);

darkToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', darkToggle.checked);
});