import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse

URL = "https://inamigosfoundation.org.in/gallery"
DOWNLOAD_DIR = "../../frontend/public/images/gallery"

os.makedirs(DOWNLOAD_DIR, exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0"}

# Fetch page
response = requests.get(URL, headers=headers)
response.raise_for_status()

soup = BeautifulSoup(response.text, "html.parser")

# Extract image URLs
image_urls = set()

for a in soup.select("a.gal_link"):
    href = a.get("href")

    if href and href.startswith("http"):
        image_urls.add(href)

print(f"Found {len(image_urls)} images")

# Download images
for idx, img_url in enumerate(image_urls, start=1):
    try:
        ext = os.path.splitext(urlparse(img_url).path)[1]

        if not ext:
            ext = ".jpg"

        filename = f"image_{idx}{ext}"
        filepath = os.path.join(DOWNLOAD_DIR, filename)

        print(f"Downloading {filename}")

        img_data = requests.get(img_url, headers=headers).content

        with open(filepath, "wb") as f:
            f.write(img_data)

    except Exception as e:
        print(f"Failed: {img_url}")
        print(e)

print("Done")
