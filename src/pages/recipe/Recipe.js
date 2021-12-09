import './Recipe.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find the recipe');
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error} </p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title} </h2>
          <p> Takes {recipe.cookingTime} to cook </p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing} </li>
            ))}
          </ul>
          <p className="method">{recipe.method} </p>
        </>
      )}
    </div>
  );
}
