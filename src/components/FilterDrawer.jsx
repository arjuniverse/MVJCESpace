import { X, Filter } from 'lucide-react';

const FilterDrawer = ({ isOpen, onClose, filters, onFilterChange, clubs, categories }) => {
  const handleFilterChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFilterChange({
      club: '',
      category: '',
      date: '',
    });
  };

  const hasActiveFilters = filters.club || filters.category || filters.date;

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`filter-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-title">
            <Filter size={20} />
            <h3>Filter Events</h3>
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          <div className="filter-group">
            <label htmlFor="filter-club">Filter by Club</label>
            <select
              id="filter-club"
              value={filters.club || ''}
              onChange={(e) => handleFilterChange('club', e.target.value)}
            >
              <option value="">All Clubs</option>
              {clubs.map(club => (
                <option key={club} value={club}>{club}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-category">Filter by Category</label>
            <select
              id="filter-category"
              value={filters.category || ''}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-date">Filter by Date</label>
            <select
              id="filter-date"
              value={filters.date || ''}
              onChange={(e) => handleFilterChange('date', e.target.value)}
            >
              <option value="">All Dates</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="thisWeek">This Week</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past Events</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button className="button clear-filters" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterDrawer;
