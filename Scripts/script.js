const crackBtn = document.getElementById('crackBtn');
const fortuneDisplay = document.getElementById('fortuneDisplay');
const darkToggle = document.getElementById('darkToggle');

async function fetchFortune() {
  fortuneDisplay.textContent = '🔄 Cracking your cookie...';

  try {
  const response = await axios.get('https://zenquotes.io/api/random');
   //console.log(response.data); 
const quote = response.data.content;
const author = response.data.author;
    fortuneDisplay.textContent = `"${quote}" — ${author}`;
  } catch (error) {
    console.error('Error fetching fortune:', error);
    fortuneDisplay.textContent = '⚠️ Something went wrong. Try again!';
  }
}

crackBtn.addEventListener('click', fetchFortune);

darkToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', darkToggle.checked);
});