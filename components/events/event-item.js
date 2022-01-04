import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon"

import classes from './event-item.module.css';

export default function EventItem(props) {
const { title, image, date, location, id } = props;

const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    yeat: 'numeric'
});
const formatAddress = location.replace(', ', '\n')
const exploreLink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{readableDate}</time>
                    </div>
                    <div className={classes.address}>
                    <AddressIcon />
                        <address>{formatAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Expolre Event</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>                
            </div>
        </li>
    )
}