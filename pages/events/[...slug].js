import { useRouter } from "next/router"
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilteredEventsPage () {

    const router = useRouter();
    const filterData = router.query.slug;

    if(!filterData) {
        return <p className="center">Loading....</p>
    }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear = +filterYear;
    const numMonth = filterMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
                <>
                    <ErrorAlert>
                        <p>Invalid filter. Please adjust your values.</p>
                    </ErrorAlert>
                    <div className="center">
                        <Button link="/events">Show All Events</Button>
                    </div>
                </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
                <>
                    <ErrorAlert>
                        <p>No events found for the chosen filter!</p>
                    </ErrorAlert>
                    <div className="center">
                        <Button link="/events">Show All Events</Button>
                    </div>
                </>
            )
    }

    const date = new Date(numYear, numMonth -1)

    return (
        <div>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents} />
        </div>
    )
}