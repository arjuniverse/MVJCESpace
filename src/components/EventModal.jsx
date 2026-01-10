import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

const EventModal = ({ isOpen, onClose, onSave, event = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    club: '',
    date: '',
    time: '',
    venue: '',
    category: 'Technical',
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || '',
        description: event.description || '',
        club: event.club || '',
        date: event.date || '',
        time: event.time || '',
        venue: event.venue || '',
        category: event.category || 'Technical',
      });
    } else {
      setFormData({
        title: '',
        description: '',
        club: '',
        date: '',
        time: '',
        venue: '',
        category: 'Technical',
      });
    }
  }, [event, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time || !formData.venue) {
      alert('Please fill in all required fields (Title, Date, Time, Venue)');
      return;
    }
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  const categories = ['Technical', 'Cultural', 'Workshop', 'Competition', 'Sports', 'Lecture'];
  const clubs = [
    'IEEE Student Branch',
    'Cultural Club',
    'Computer Science Club',
    'Entrepreneurship Cell',
    'Sports Committee',
    'Cloud Computing Club',
    'Robotics Club',
    'Music Club',
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{event ? 'Edit Event' : 'Create New Event'}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label htmlFor="title">Event Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              rows="4"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="club">Club/Organizer *</label>
              <select
                id="club"
                name="club"
                value={formData.club}
                onChange={handleChange}
                required
              >
                <option value="">Select a club</option>
                {clubs.map(club => (
                  <option key={club} value={club}>{club}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="venue">Venue *</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Enter venue location"
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="button secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="button primary">
              {event ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
