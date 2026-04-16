# MVJCE Space - Campus Events Management

A modern and effective web application for managing and viewing college events at MVJ College of Engineering, bengaluru.

## Features

- ✅ Create, update, and delete campus events
- ✅ Filter events by club, category, or date
- ✅ Highlight upcoming and ongoing events
- ✅ Responsive design (mobile & desktop)
- ✅ Beautiful, modern UI with smooth animations
- ✅ Data stored in browser localStorage

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- React 18
- Vite
- Lucide React (Icons)
- LocalStorage (Data persistence)

## Project Structure

```
mvjce-space/
├── src/
│   ├── components/
│   │   ├── EventCard.jsx
│   │   ├── EventList.jsx
│   │   ├── EventModal.jsx
│   │   └── FilterDrawer.jsx
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Usage

1. **Create Event**: Click "Create Event" button to add a new campus event
2. **Edit Event**: Click the edit icon on any event card
3. **Delete Event**: Click the delete icon on any event card
4. **Filter Events**: Click the filter icon to open the filter drawer
5. **View Status**: Upcoming and ongoing events are automatically highlighted

## Sample Data

The app comes pre-loaded with sample MVJCE events for demonstration.

---

Built with ❤️ for MVJ College of Engineering
