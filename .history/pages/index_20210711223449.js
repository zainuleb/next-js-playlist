import { getRentListings } from '../dummy-data';
import PropertyList from '../components/listings/property-list';

export default function HomePage() {
  const propertiesForRent = getRentListings();

  return (
    <div>
      <h1>R-Estate Web App</h1>
      <div>
        <PropertyList properties={propertiesForRent} />
      </div>
    </div>
  );
}
