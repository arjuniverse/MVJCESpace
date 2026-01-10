const STORAGE_KEY = 'mvjce_events';

// Get all events from localStorage
export const getEvents = () => {
  const events = localStorage.getItem(STORAGE_KEY);
  if (!events) {
    // Initialize with sample data if no events exist
    const sampleEvents = getSampleEvents();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEvents));
    return sampleEvents;
  }
  return JSON.parse(events);
};

// Save events to localStorage
export const saveEvents = (events) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};

// Add a new event
export const addEvent = (event) => {
  const events = getEvents();
  const newEvent = {
    id: Date.now().toString(),
    ...event,
    createdAt: new Date().toISOString(),
  };
  events.push(newEvent);
  saveEvents(events);
  return newEvent;
};

// Update an existing event
export const updateEvent = (id, updatedEvent) => {
  const events = getEvents();
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...updatedEvent };
    saveEvents(events);
    return events[index];
  }
  return null;
};

// Delete an event
export const deleteEvent = (id) => {
  const events = getEvents();
  const filtered = events.filter(e => e.id !== id);
  saveEvents(filtered);
  return filtered;
};

// Sample MVJCE events data
const getSampleEvents = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  return [
    {
      id: '1',
      title: 'Tech Fest 2024 - Innovation Summit',
      description: 'Annual technical festival showcasing innovative projects, coding competitions, and tech talks by industry experts.',
      club: 'IEEE Student Branch',
      date: tomorrow.toISOString().split('T')[0],
      time: '10:00',
      venue: 'Main Auditorium',
      category: 'Technical',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '2',
      title: 'Cultural Night - Harmony 2024',
      description: 'An evening of music, dance, and cultural performances by students. Food stalls and games included!',
      club: 'Cultural Club',
      date: nextWeek.toISOString().split('T')[0],
      time: '18:00',
      venue: 'Open Air Theatre',
      category: 'Cultural',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '3',
      title: 'Workshop on AI & Machine Learning',
      description: 'Hands-on workshop covering Python basics, scikit-learn, and building your first ML model.',
      club: 'Computer Science Club',
      date: today.toISOString().split('T')[0],
      time: '14:00',
      venue: 'Lab 301',
      category: 'Workshop',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '4',
      title: 'Startup Pitch Competition',
      description: 'Students pitch their startup ideas to a panel of judges. Winners get mentorship and seed funding opportunities.',
      club: 'Entrepreneurship Cell',
      date: nextWeek.toISOString().split('T')[0],
      time: '11:00',
      venue: 'Seminar Hall',
      category: 'Competition',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '5',
      title: 'Sports Day - Inter-Department Tournament',
      description: 'Football, cricket, basketball, and athletics competitions. All departments welcome!',
      club: 'Sports Committee',
      date: tomorrow.toISOString().split('T')[0],
      time: '08:00',
      venue: 'College Grounds',
      category: 'Sports',
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '6',
      title: 'Guest Lecture: Future of Cloud Computing',
      description: 'Industry expert from AWS will discuss cloud technologies, career opportunities, and trends.',
      club: 'Cloud Computing Club',
      date: today.toISOString().split('T')[0],
      time: '15:30',
      venue: 'LT-2',
      category: 'Lecture',
      createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];
};
