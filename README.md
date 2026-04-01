# BiteBuddy Frontend

Static frontend for the BiteBuddy seafood ordering app.

## Live App

- Frontend: [https://bitebuddy-frontent.vercel.app](https://bitebuddy-frontent.vercel.app)
- Backend API: [https://bitebuddy-production.up.railway.app](https://bitebuddy-production.up.railway.app)

## Tech Stack

- HTML
- CSS
- JavaScript
- Vercel for hosting

## Project Structure

- `index.html` - login landing page
- `signin.html` - account creation page
- `menu.html` - menu browsing page
- `cart.html` - cart page
- `orders.html` - order management page
- `myorders.html` - customer order history page
- `profile.html` - customer profile page
- `app.js` - shared frontend helpers and API base URL
- `script.js` - login logic
- `catalog.js` - product data

## Branches

- `main` - production branch used by Vercel
- `development` - feature work and preview testing

## Local Run

Because this is a static site, you can run it with any simple local server.

Example options:

1. Open the folder in VS Code and run Live Server
2. Or serve it from any static server and open `index.html`

If you run locally, make sure the backend is available and CORS allows your local origin.

## Deployment

### Vercel

1. Import the GitHub repo into Vercel
2. Set `Framework Preset` to `Other`
3. Leave `Build Command` empty
4. Leave `Output Directory` empty
5. Set `main` as the production branch

Any push to `main` triggers a production deployment.

## Notes

- The frontend is configured to call the Railway backend over HTTPS
- `vercel.json` is included for static hosting configuration
- If API requests fail in production, first check backend CORS settings
