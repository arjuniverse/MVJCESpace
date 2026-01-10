import { useState, useEffect, useMemo } from 'react';
import { Plus, Filter, Calendar as CalendarIcon } from 'lucide-react';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import FilterDrawer from './components/FilterDrawer';
import { getEvents, addEvent, updateEvent, deleteEvent } from './utils/localStorage';

function App() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filters, setFilters] = useState({
    club: '',
    category: '',
    date: '',
  });

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const clubs = useMemo(() => {
    const uniqueClubs = [...new Set(events.map(e => e.club))];
    return uniqueClubs.sort();
  }, [events]);

  const categories = useMemo(() => {
    return ['Technical', 'Cultural', 'Workshop', 'Competition', 'Sports', 'Lecture'];
  }, []);

  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    if (filters.club) {
      filtered = filtered.filter(e => e.club === filters.club);
    }

    if (filters.category) {
      filtered = filtered.filter(e => e.category === filters.category);
    }

    if (filters.date) {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const nextWeek = new Date(today);
      nextWeek.setDate(nextWeek.getDate() + 7);

      filtered = filtered.filter(e => {
        const eventDate = new Date(e.date);
        
        switch (filters.date) {
          case 'today':
            return eventDate.toDateString() === today.toDateString();
          case 'tomorrow':
            return eventDate.toDateString() === tomorrow.toDateString();
          case 'thisWeek':
            return eventDate >= today && eventDate <= nextWeek;
          case 'upcoming':
            return eventDate >= today;
          case 'past':
            return eventDate < today;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [events, filters]);

  const handleCreateEvent = () => {
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (eventData) => {
    if (selectedEvent) {
      updateEvent(selectedEvent.id, eventData);
    } else {
      addEvent(eventData);
    }
    setEvents(getEvents());
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (id) => {
    deleteEvent(id);
    setEvents(getEvents());
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const hasActiveFilters = filters.club || filters.category || filters.date;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <CalendarIcon size={32} className="logo-icon" />
            <div>
              <h1 className="app-title">MVJCE Space</h1>
              <p className="app-subtitle">Campus Events Management</p>
            </div>
          </div>
          <div className="header-actions">
            <button
              className="button icon-button filter-button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open filters"
            >
              <Filter size={20} />
              {hasActiveFilters && <span className="filter-badge">●</span>}
            </button>
            <button className="button primary create-button" onClick={handleCreateEvent}>
              <Plus size={20} />
              <span>Create Event</span>
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="page-header">
            <h2 className="page-title">
              {hasActiveFilters ? 'Filtered Events' : 'All Campus Events'}
            </h2>
            <p className="event-count">{filteredEvents.length} event(s) found</p>
          </div>

          <EventList
            events={filteredEvents}
            onEdit={handleEditEvent}
            onDelete={handleDeleteEvent}
          />
        </div>
      </main>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        onSave={handleSaveEvent}
        event={selectedEvent}
      />

      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        clubs={clubs}
        categories={categories}
      />
    </div>
  );
}

export default App;
