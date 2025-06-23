import React, { useRef, useEffect } from 'react';
import './Category.css';

const Category = () => {
  const categories = [
    { id: 'family-meals', name: 'Family Meals', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'individual-meals', name: 'Individual Meals', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'chips', name: 'Chips', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'loaded-fries', name: 'Loaded Fries', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'wing-and-tender-deals', name: 'Wing & Tender Deals', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'chicken-blaze-deals', name: 'Chicken Blaze Deals', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'glaze-bucket', name: 'Glaze Bucket', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'burgers', name: 'Burgers', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'rice', name: 'Rice', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'corn-dog', name: 'Corn Dog', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'drinks', name: 'Drinks', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
    { id: 'flavour-board', name: 'Flavour Board', image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0; // Set scroll to start (leftmost) on load
    }
  }, []);

  const handleCategoryClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="category-container" aria-label="Menu Category Navigation">
      <h2 className="category-title">Menu Categories</h2>
      <div className="category-scroll-container">
        <button
          className="scroll-arrow scroll-arrow-left"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24" fill="var(--color-golden)" width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <div className="category-scroll" ref={scrollRef}>
          {categories.map((category) => (
            <button
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.id)}
              aria-label={`Navigate to ${category.name} menu section`}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt=""
                  className="category-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="category-overlay"></div>
              </div>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
        <button
          className="scroll-arrow scroll-arrow-right"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24" fill="var(--color-golden)" width="24" height="24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Category;