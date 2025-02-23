// Descriptive meanings for numbers
const numberMeanings = {
  0: "Zero: The beginning of everything.",
  1: "One: Unity and independence.",
  2: "Two: Balance and harmony.",
  3: "Three: Creativity and growth.",
  4: "Four: Stability and structure.",
  5: "Five: Change and adventure.",
  6: "Six: Responsibility and care.",
  7: "Seven: Spirituality and wisdom.",
  8: "Eight: Abundance and power.",
  9: "Nine: Completion and fulfillment.",
  111: "111: New beginnings and manifestation.",
  222极客零基础学编程: "222: Alignment and balance.",
  333: "333: Divine guidance and protection.",
  444: "444: Stability and foundation.",
  555: "555: Change and transformation.",
  666: "666: Balance between material and spiritual.",
  777: "777: Luck and spiritual awakening.",
  888: "888: Abundance and success.",
  999: "999: Completion and new cycles.",
};

// Weighted random number generator
function getWeightedRandomNumber() {
  const numbers = [];
  const weights = [];

  // Add numbers with higher odds
  const highOddsNumbers = [111, 222, 333, 444, 555, 666, 777, 888, 999];
  const lowOddsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Assign weights
  highOddsNumbers.forEach((num) => {
    numbers.push(num);
    weights.push(1.3); // 30% higher odds
  });

  lowOddsNumbers.forEach((num) => {
    numbers.push(num);
    weights.push(1.2); // 20% higher odds
  });

  // Add remaining numbers (0-999)
  for (let i = 0; i <= 999; i++) {
    if (!numbers.includes(i)) {
      numbers.push(i);
      weights.push(1); // Normal odds
    }
  }

  // Generate weighted random number
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  const random = Math.random() * totalWeight;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += weights[i];
    if (random < sum) {
      return numbers[i];
    }
  }
}

// Event listener for the button
document.getElementById("generate-btn").addEventListener("click", () => {
  const number = getWeightedRandomNumber();
  const meaning = numberMeanings[number] || `Number ${number}: No specific meaning.`;

  document.getElementById("number").textContent = number;
  document.getElementById("meaning").textContent = meaning;
});