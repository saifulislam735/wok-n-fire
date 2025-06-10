import React from 'react';
import './Category.css'
const Category = () => {

    const categories = [
        { id: 'fries-and-chips', name: 'Fries And Chips', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
        { id: 'corn-dog', name: 'Corn Dog', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
        { id: 'drinks', name: 'Drinks', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
        { id: 'stir-fry', name: 'Stir Fry', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
        { id: 'curry', name: 'Curry', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
        { id: 'meal-deal', name: 'Meal Deal', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
        { id: 'sauces', name: 'Sauces', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    ];

    const handleCategoryClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="category-container">
            <h2 className="category-title">Main Categories To Select From</h2>
            <div className="category-row">
                {categories.map(category => (
                    <div
                        key={category.id}
                        className="category-card"
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="category-image"
                            loading="lazy"
                        />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Category;