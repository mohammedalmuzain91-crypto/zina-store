# ZinaStore – زينه ستور

Static website (HTML + CSS + JavaScript, no frameworks, no build step).

## Run locally
1. Open the folder in VS Code and open `index.html` with the Live Server extension, or
2. From this folder run `python -m http.server 8000` and open http://localhost:8000
   (double-clicking `index.html` also works).

## Edit products and prices
Everything lives in `js/products.js`:
- `price: null` shows "السعر عند الطلب". Write `price: 850` to show "850 ج.م".
- Change a product's `name`, or `category` (sneakers | rings | necklaces | watches).
- To add a product: put the photo in `images/` and copy one line in `PRODUCTS`.
- Phone and Facebook link are in `STORE` at the top of the same file.

## Publish online (free)
- **GitHub Pages:** upload the folder contents to a repository, then Settings > Pages > deploy from the main branch.
- **Netlify:** drag the whole folder onto https://app.netlify.com/drop
