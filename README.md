# 📍 Location Address Finder - Frontend

Beautiful Next.js frontend for the Location Address Finder app with semantic caching.

## 🌟 Features

- 🗺️ **Current Location Detection** - Browser geolocation support
- ✍️ **Manual Address Input** - Type-ahead autocomplete
- 🔍 **Smart Autocomplete** - Maharashtra-focused suggestions
- 🗺️ **Interactive Map** - Leaflet with OpenStreetMap tiles
- 📋 **Address Expansion** - Structured address fields
- ⚡ **Cache Indicators** - Shows when results are cached

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Backend API running (see backend repository)

### Installation

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

### Configuration

Create `.env` file with:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

For production, use your Railway backend URL:
```env
NEXT_PUBLIC_API_URL=https://your-backend.up.railway.app
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
frontend-repo/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── LocationInput.tsx    # Location input with autocomplete
│   ├── AddressDisplay.tsx   # Structured address display
│   └── MapView.tsx          # Leaflet map component
├── types/
│   └── index.ts         # TypeScript interfaces
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── netlify.toml
```

## 🌐 Deploy to Netlify

### One-Click Deploy
1. Push this repo to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.up.railway.app
   ```
6. Deploy!

### Manual Deploy
```bash
npm run build
# Upload .next folder to Netlify
```

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `https://backend.up.railway.app` |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: Leaflet + OpenStreetMap
- **HTTP Client**: Axios

## 📝 API Integration

The frontend communicates with the backend API:

- `POST /api/geocode` - Geocode address
- `POST /api/reverse-geocode` - Reverse geocode
- `GET /api/autocomplete` - Address suggestions

## 🎨 Features in Detail

### Location Input Component
- Auto-detects browser location
- Manual input fallback
- Debounced autocomplete (500ms)
- Dropdown suggestions

### Address Display Component
- Structured address fields
- Coordinates display
- Cache source indicator

### Map View Component
- Interactive Leaflet map
- OpenStreetMap tiles
- Custom marker with popup
- Auto-centers on location

## 🐛 Troubleshooting

### Map not loading
- Check Leaflet CSS is loading
- Verify coordinates are valid
- Check browser console for errors

### Autocomplete not working
- Verify backend URL is correct
- Check Network tab in DevTools
- Ensure backend is running

### CORS errors
- Verify `NEXT_PUBLIC_API_URL` is set
- Backend must have CORS enabled
- Check backend logs

## 📄 License

MIT

## 🔗 Related

- Backend Repository: [location-address-backend](https://github.com/Saim-Azim/location-address-backend)
