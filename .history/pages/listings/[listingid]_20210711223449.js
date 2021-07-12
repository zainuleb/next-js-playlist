import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

export default function ListingDetail() {
  const router = useRouter();

  let { listingid } = router.query;

  console.log('Step1:', listingid);

  if (!listingid) {
    return <p>No Property Id</p>;
  }

  const property = getEventById(listingid);

  if (!property) {
    return <p>No Property</p>;
  }

  return (
    <div>
      <h1>Property Details Here</h1>
    </div>
  );
}
