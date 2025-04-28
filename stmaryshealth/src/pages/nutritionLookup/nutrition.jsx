import { useState } from 'react';
import { fetchNutritionData } from '../../api/nutrition';

function Nutrition() {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter a food item');
      setNutritionData(null);
      return;
    }

    try {
      const data = await fetchNutritionData(query);
      setNutritionData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setNutritionData(null);
    }
  };

  return (
    <div>
      <h2>Nutrition Lookup</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="e.g., 1 apple"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {nutritionData && nutritionData.length > 0 && (
        <div>
          <h3>Results:</h3>
          <ul>
            {nutritionData.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong>: {item.fat_total_g}g fat, <br />{item.carbohydrates_total_g}g carbs, <br />{item.fat_saturated_g}g saturated fat,<br />{item.sugar_g}g sugar
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nutrition;
