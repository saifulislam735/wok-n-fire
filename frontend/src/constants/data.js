import images from './images';

const wines = [
  {
    title: 'Fried Chicken Drumsticksa',
    price: '£5.45',
    tags: 'Chicken',
  },
  {
    title: 'Fried Chicken Wings',
    price: '£5.45',
    tags: 'Chicken',
  },
  {
    title: 'Cheesy Chips',
    price: '£3.95',
    tags: 'Chips',
  },
  {
    title: 'Original Corn Dog',
    price: '£4.50',
    tags: 'Corn dog',
  },
  {
    title: 'Potato & Mozarella Corn Dog',
    price: '£4.95',
    tags: 'Corn Dog',
  },
];

const cocktails = [
  {
    title: 'Egg Noodles with Veg & Egg Mix',
    price: '£5.45',
    tags: 'Noodles',
  },
  {
    title: "Chicken Katsu",
    price: '£2.95',
    tags: 'Chicken',
  },
  {
    title: 'Prawn',
    price: '£2.95',
    tags: 'Seafood',
  },
  {
    title: 'Mixed Seafood',
    price: '£2.95',
    tags: 'Seafood',
  },
  {
    title: 'Extra toppings',
    price: 'from £0.60',
    tags: 'Toppings',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
