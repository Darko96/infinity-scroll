// Unsplash API
const count = 10;
const apiKey = "2UFf-DwuPaM3jJ201NSf_WzppGSFO2SJ0Raf2SD6DBs";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();
