# Das Haustelles Availability Calendar Microservice

Das Haustelles's Availability Calendar Microservice is the frontend component that allows users to view available dates for a specific hostel to be booked.

The component was built using React.js, Express/Node, MySQL (static data for development and demo purposes), and the microservice makes API queries to the `/api/hostels/:id` and `/hostels/:id/bookings` API.

There are a breadth of event handlers on the calendar that display dates of a specific month for a given year, and available booking dates to the user. Additional features include selection of number of guests for a booking and details for large party bookings.

The calendar component is optimized for page load time performance, achieving a score of 98 on Google's PageSpeed Insight Tool. This was done through minification and compression (brotli) of static files reducing payload sizes and script parse time.

### Availability Calendar Microservice main:<br />
<img src="https://das-haustelles-hostel-world.s3-us-west-1.amazonaws.com/Calendar.png" width="300px" height="510px">
<br />

## About Das Haustelles

> Das Haustelles is a hostel focused booking platform. It is a project started in April 2019 meant to mimic the frontend behavior of other accomdation booking platforms. Upon completion of the frontend development, the team moved on to other individual projects.