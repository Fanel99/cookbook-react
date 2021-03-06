import './Home.css';
import { useEffect, useState } from 'react';
import RecipeList from '../../components/RecipeList';
import { projectFirestore } from '../../firebase/config';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const firestore = projectFirestore.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      },
    );
    return () => firestore();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error} </p>}
      {isPending && <p className="loading">{isPending} </p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
