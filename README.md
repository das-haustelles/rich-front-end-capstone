# Das Haustelles Availability Calendar Microservice

Das Haustelles's Availability Calendar Microservice is the frontend component that allows users to view available dates for a specific hostel to be booked.

The component was built using React.js, Express/Node, MySQL (static data for development and demo purposes), and the microservice makes API queries to the `/api/hostels/:id` and `/hostels/:id/bookings` API.

There are a breadth of event handlers on the calendar that display dates of a speciic month for a given year, and available booking dates to the user. Additional features include ADD IN DROPDOWN GUEST SELECTION AND LARGE PARTY ACCOMDATATION.

The calendar component is optimized for page load time performance, achieving a score of 98 on Google's PageSpeed Insight Tool. This was done through minification and compression (brotli) of static files reducing payload sizes and script parse time.

### Availability Calendar Microservice main:<br />
<img src="https://cl.ly/d1c641691f6f/Image%202019-05-21%20at%208.26.41%20PM.png" alt="Order window defaults to buy state." width="300px" height="510px">
<br />

### Order type dropdown highlights and renders brand color on hover:<br />
<img src="https://cl.ly/019c70e16f87/Screen%20Recording%202019-05-21%20at%2008.30%20PM.gif" alt="Dropdown will show all four order types for buy/sell side and highlight upon hover.">
<br />

### Switching to sell orders changes rendering state:<br />
<img src="https://cl.ly/1861ce4de6e3/Screen%20Recording%202019-05-21%20at%2008.32%20PM.gif" alt="Hovering over Reviews Stars renders an animated Ratings Graphic.">
<br />

### Expiration dropdown allows users to choose expiry option per order:<br />
<img src="https://cl.ly/3dda5903c7d4/Screen%20Recording%202019-05-21%20at%2008.35%20PM.gif" alt="Dropdown options for Expiration field">
<br />

## About Das Haustelles

> Das Haustelles is a hostel focused booking platform. It is a project started in April 2019 meant to mimic the frontend behavior of other accomdation booking platforms. Upon completion of the frontend development, the team moved on to other individual projects.