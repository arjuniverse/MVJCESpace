import EventCard from './EventCard';

const EventList = ({ events, onEdit, onDelete }) => {
  const now = new Date();

  const getEventStatus = (event) => {
    const eventDateTime = new Date(`${event.date}T${event.time}`);
    const eventEndTime = new Date(eventDateTime);
    eventEndTime.setHours(eventEndTime.getHours() + 3); // Assume 3 hour events

    const isUpcoming = eventDateTime > now;
    const isOngoing = eventDateTime <= now && eventEndTime >= now;

    return { isUpcoming, isOngoing };
  };

  if (events.length === 0) {
    return (
      <div className="empty-state">
        <p>No events found. Create your first event!</p>
      </div>
    );
  }

  // Sort events: ongoing first, then upcoming, then past
  const sortedEvents = [...events].sort((a, b) => {
    const statusA = getEventStatus(a);
    const statusB = getEventStatus(b);
    
    if (statusA.isOngoing && !statusB.isOngoing) return -1;
    if (!statusA.isOngoing && statusB.isOngoing) return 1;
    if (statusA.isUpcoming && !statusB.isUpcoming) return -1;
    if (!statusA.isUpcoming && statusB.isUpcoming) return 1;
    
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA - dateB;
  });

  return (
    <div className="event-list">
      {sortedEvents.map(event => {
        const { isUpcoming, isOngoing } = getEventStatus(event);
        return (
          <EventCard
            key={event.id}
            event={event}
            onEdit={onEdit}
            onDelete={onDelete}
            isUpcoming={isUpcoming}
            isOngoing={isOngoing}
          />
        );
      })}
    </div>
  );
};

export default EventList;
