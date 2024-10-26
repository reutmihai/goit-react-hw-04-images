import axios from "axios";
const API_KEY = "45884616-48de2ef17b1bd78226af0a3e8";
axios.defaults.baseURL = "https://pixabay.com/api/";

export async function getImages(searchQuery, page = 1, perPage = 12) {
  try {
    const response = await axios.get("", {
      params: {
        q: searchQuery,
        page: page,
        key: API_KEY,
        image_type: "photo",
        orientation: "horizontal",
        per_page: perPage,
      },
    });

    if (response.data.hits.length === 0) {
      return [];
    }

    const images = response.data.hits.map(
      ({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      })
    );

    return images;
  } catch (error) {
    console.log("Eroare in imgService:", error);
    throw error;
  }
}
