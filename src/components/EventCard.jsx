import { Calendar, Clock, MapPin, Building2, Edit, Trash2 } from 'lucide-react';

const EventCard = ({ event, onEdit, onDelete, isUpcoming, isOngoing }) => {
  const eventDateTime = new Date(`${event.date}T${event.time}`);
  const now = new Date();
  const statusClass = isOngoing ? 'ongoing' : isUpcoming ? 'upcoming' : '';

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${event.title}"?`)) {
      onDelete(event.id);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Technical: 'bg-blue-100 text-blue-800',
      Cultural: 'bg-purple-100 text-purple-800',
      Workshop: 'bg-green-100 text-green-800',
      Competition: 'bg-red-100 text-red-800',
      Sports: 'bg-orange-100 text-orange-800',
      Lecture: 'bg-indigo-100 text-indigo-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className={`event-card ${statusClass}`}>
      <div className="event-card-header">
        <div className="event-card-title-section">
          <h3 className="event-card-title">{event.title}</h3>
          <span className={`category-badge ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        <div className="event-card-actions">
          <button
            className="icon-button"
            onClick={() => onEdit(event)}
            aria-label="Edit event"
          >
            <Edit size={18} />
          </button>
          <button
            className="icon-button delete-button"
            onClick={handleDelete}
            aria-label="Delete event"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      
      <p className="event-card-description">{event.description}</p>
      
      <div className="event-card-details">
        <div className="event-detail-item">
          <Building2 size={16} />
          <span>{event.club}</span>
        </div>
        <div className="event-detail-item">
          <Calendar size={16} />
          <span>{new Date(event.date).toLocaleDateString('en-IN', { 
            weekday: 'short', 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}</span>
        </div>
        <div className="event-detail-item">
          <Clock size={16} />
          <span>{event.time}</span>
        </div>
        <div className="event-detail-item">
          <MapPin size={16} />
          <span>{event.venue}</span>
        </div>
      </div>

      {isOngoing && <div className="event-badge ongoing-badge">Ongoing</div>}
      {isUpcoming && !isOngoing && <div className="event-badge upcoming-badge">Upcoming</div>}
    </div>
  );
};

export default EventCard;
