// Advice 
async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    document.getElementById("advice").textContent = data.slip.advice;
  } catch (err) {
    console.error(err);
    document.getElementById("advice").textContent = "Something went wrong ";
  }
}

//  Joke 
async function fetchJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await response.json();
    document.getElementById("joke-setup").textContent = data.setup;
    document.getElementById("joke-punchline").textContent = data.punchline;
  } catch (err) {
    console.error(err);
    document.getElementById("joke-setup").textContent = "Something went wrong ";
    document.getElementById("joke-punchline").textContent = "";
  }
}

// The Meal DB
async function fetchMeal() {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await response.json();
    const meal = data.meals[0];
    document.getElementById("meal-name").textContent = meal.strMeal;
    document.getElementById("meal-image").src = meal.strMealThumb;
    document.getElementById("meal-instructions").textContent =
      meal.strInstructions.slice(0, 200) + "...";
  } catch (err) {
    console.error(err);
    document.getElementById("meal-name").textContent = "Could not load meal 😅";
    document.getElementById("meal-image").src = "";
    document.getElementById("meal-instructions").textContent = "";
  }
}

// Call all of them at once
function updateContent() {
  fetchAdvice();
  fetchJoke();
  fetchMeal();
}

// Reload page
document.addEventListener("DOMContentLoaded", () => {
  updateContent();
  document.getElementById("refresh-btn").addEventListener("click", updateContent);
});
