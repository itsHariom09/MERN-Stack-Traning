const URL = "https://api.thecatapi.com/v1/images/search";
const img = document.getElementById("myImg");
const btn = document.getElementById("btn");
const downloadBtn = document.getElementById("downloadBtn");
const msg = document.getElementById("msg");

let currentImageUrl = ""; // Store the URL of the image

const getPhoto = async () => {
  try {
    btn.textContent = "Loading...";
    btn.disabled = true;
    downloadBtn.style.display = "none";
    msg.textContent = "Fetching image...";

    const res = await fetch(URL);
    const data = await res.json();

    if (data.length > 0 && data[0].url) {
      currentImageUrl = data[0].url;
      img.src = currentImageUrl;
      img.style.display = "block";
      downloadBtn.disabled = false;
      downloadBtn.style.display = "flex";
      msg.textContent = ""; // Clear message
    } else {
      throw new Error("No image found");
    }
  } catch (err) {
    console.error("Image fetch failed:", err);
    msg.textContent = "⚠️ Failed to fetch image. Please try again.";
    img.style.display = "none";
    downloadBtn.style.display = "none";
  } finally {
    btn.textContent = "GET IMAGE";
    btn.disabled = false;
  }
};

btn.addEventListener("click", getPhoto);

downloadBtn.addEventListener("click", () => {
  if (!currentImageUrl || img.style.display === "none" || downloadBtn.style.display === "none" ) {
    msg.textContent = "❗ No image to download!";
    // Optional: make it stand out
    msg.style.color = "#ff4d4d";
    return;
  }

  const a = document.createElement("a");
  a.href = currentImageUrl;
  a.download = "random-image.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

