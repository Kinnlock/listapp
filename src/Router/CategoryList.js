// CategoryList.js
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Sport' },
  { id: 2, name: 'Musique' },
  { id: 3, name: 'Voyage' },
  // Ajoutez d'autres catégories selon vos besoins
];

function CategoryList() {
  return (
    <div>
      <h1>Liste des catégories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
