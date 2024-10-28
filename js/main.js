
function showSection(section) {
    closeNav();
    document.getElementById("mealContainer").style.display = "none";
    document.getElementById("searchContainer").style.display = "none";
    document.getElementById("categoryContainer").style.display = "none";
    document.getElementById("areaContainer").style.display = "none";
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("loader").style.display = "none";

    if (section === 'search') {
        document.getElementById("searchContainer").style.display = "block";
    } else if (section === 'categories') {
        loadCategories();
        document.getElementById("categoryContainer").style.display = "block";
    } else if (section === 'area') {
        fetchArea();
        document.getElementById("areaContainer").style.display = "block";
    } else if (section === 'ingredients') {
        fetchIngredients();
        document.getElementById("ingredientContainer").style.display = "block";
    } else if (section === 'contact') {
        document.getElementById("contactForm").style.display = "block";
    }
}


async function fetchIngredients() {
    document.getElementById("loader").style.display = "block";
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    const ingredients = data.meals ? data.meals : [];

    const ingredientContainer = document.getElementById("ingredientContainer");
    ingredientContainer.innerHTML = ''; // Clear existing content

    ingredients.forEach(ingredient => {
        const ingredientCard = document.createElement('div');
        ingredientCard.classList.add('meal-card');
        ingredientCard.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${ingredient.strIngredient}">
            <div class="overlay"><span>${ingredient.strIngredient}</span></div>
        `;
        ingredientContainer.appendChild(ingredientCard);
    });
    document.getElementById("loader").style.display = "none";
}
