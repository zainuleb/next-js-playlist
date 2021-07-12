import classes from './property.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icons';
import ArrowIcon from '../icons/arrow-icon';

export default function Property(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const exploreLink = `/listings/${id}`;

  //  const formattedAddress = location.replace(',', '/n');

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Details</span>
            <span className={classes.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
