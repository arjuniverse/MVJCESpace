# MVJCE Space - Campus Events Management
 
A modern, interactive, and highly efficient web application designed for managing, organizing, and viewing college events at MVJ College of Engineering. The platform aims to simplify event coordination for students, faculty, clubs, and organizers by providing a centralized digital space where users can explore upcoming events, register for activities, receive real-time updates, and manage participation seamlessly. The application should feature a clean, professional, and visually engaging interface inspired by modern productivity platforms, with smooth animations, responsive layouts, and user-friendly navigation. It should support multiple event categories such as technical fests, workshops, hackathons, cultural events, seminars, sports activities, and Model United Nations conferences, allowing students to easily browse schedules, venues, timings, speakers, and event details. Organizers and administrators should have access to dedicated dashboards for creating events, managing registrations, tracking attendance, posting announcements, uploading posters, and generating reports. Additional features may include event reminders, notification systems, QR-based entry management, participant certificates, leaderboard sections, and analytics dashboards for monitoring engagement and participation statistics. The application should be optimized for both desktop and mobile devices, ensuring a smooth and accessible experience for all users while promoting better communication, increased student involvement, and efficient event management within the college campus ecosystem.


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
