const SUPABASE_URL = 'https://rgjgonabtsbaljvvbolx.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnamdvbmFidHNiYWxqdnZib2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MzI0NDEsImV4cCI6MTk4NDEwODQ0MX0.HeAaKRZ1xnZqK_sYxZHbVkw-xqmxk25eYNFoF6EEZRE';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchMovies() {
    const response = await client.from('movies').select('*');

    return response.data;
}

export async function fetchPlaces() {
    const response = await client.from('places').select('*');

    return response.data;
}

export async function fetchCars() {
    const response = await client.from('cars').select('*');

    return response.data;
}

export async function fetchAnimals() {
    const response = await client.from('animals').select('*');

    return response.data;
}
