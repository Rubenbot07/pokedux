
export const getPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results; // Devuelve los datos directamente
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
        throw error; // Lanza el error para manejarlo en el componente
    }
};