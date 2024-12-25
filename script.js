const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently.",
    "I’m learning to play the guitar in my free time.",
    "I have a pet cat named Whiskers.",
    "I can solve a Rubik's Cube in under two minutes!",
    "I enjoy stargazing and know many constellations by heart."
];

const factDisplay = document.getElementById('fact');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
});
