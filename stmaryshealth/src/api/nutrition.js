export const fetchNutritionData = async (query) => {
    const apiKey = 'S8mzwML0TcCFXBFZLvlhpw==IvnRSvTSZWWkKNh7'; // 👈 Hardcoded key
  
    const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(query)}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch nutrition data');
    }
  
    const data = await response.json();
    return data;
  };
  