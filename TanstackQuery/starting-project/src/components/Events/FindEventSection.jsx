import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';
import { useState } from 'react';
import LoadingIndicator from '../UI/LoadingIndicator';
export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', {search: searchTerm}],
    queryFn: ({ signal }) => fetchEvents({signal, searchTerm}),
    enabled: searchTerm !== ''
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  let content = <p>Please enter a search term</p>;

  if(isPending) {
    content = <LoadingIndicator />;
  }

  if(isError) {
    content = <ErrorBlock title = "An error has occurred" message = {error.info?.message || "Failed to fetch events."} />;
  }

  if(data){
    content = <ul className='events-list'>
      {data.map((event) => (
        <li key={event.id}>
          <EventItem event={event} />
        </li>
      ))}
    </ul>
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
      <p>Please enter a search term and to find events.</p>
    </section>
  );
}
