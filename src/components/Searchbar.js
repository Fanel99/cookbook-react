import './Searchbar.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Searchbar() {
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"> </label>
        <input
          placeholder="Search..."
          type="text"
          id="search"
          required
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
