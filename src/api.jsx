

// const ACCESS_KEY = ""; // Встав свій ключ сюди
// const BASE_URL = "https://api.unsplash.com/search/photos";

// export async function fetchImages(query, page = 1) {
//   try {
//     const response = await fetch(
//       `${BASE_URL}?query=${query}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     throw error;
//   }
// }
