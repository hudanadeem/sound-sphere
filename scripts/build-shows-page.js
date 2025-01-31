const shows = [
    {
      date: "Mon Sept 09 2024",
      venue: "Ronald Lane",
      location: "San Francisco, CA",
    },
    {
      date: "Tues Sept 17 2024",
      venue: "Pier 3 East",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Oct 12 2024",
      venue: "View Lounge",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Nov 16 2024",
      venue: "Hyatt Agency",
      location: "San Francisco, CA",
    },
    {
      date: "Fri Nov 29 2024",
      venue: "Moscow Center",
      location: "San Francisco, CA",
    },
    {
      date: "Wed Dec 18 2024",
      venue: "Press Club",
      location: "San Francisco, CA",
    },
  ];

  const listEl = document.getElementById("list");
  shows.forEach(displayShows);
  
  function displayShows(show){
      const showEl = document.createElement("div");
      showEl.className = "show";
  
      const dateEl = document.createElement("div");
      const dateTitle = document.createElement("h3");
      dateTitle.className = "show__date--title";
      dateTitle.textContent = "Date"
      dateEl.className = "show__date";
      dateEl.textContent = show.date;
      showEl.append(dateTitle);
      showEl.append(dateEl);
  
      const venueEl = document.createElement("div");
      const venueTitle = document.createElement("h3");
      venueTitle.className = "show__venue--title";
      venueTitle.textContent = "Venue"
      venueEl.className = "show__venue";
      venueEl.textContent = show.venue;
      showEl.append(venueTitle);
      showEl.append(venueEl);
  
      const locationEl = document.createElement("div");
      const locationTitle = document.createElement("h3");
      locationTitle.className = "show__location--title";
      locationTitle.textContent = "Location"
      locationEl.className = "show__location";
      locationEl.textContent = show.location;
      showEl.append(locationTitle);
      showEl.append(locationEl);

      const buyTicketEl = document.createElement("button");
      buyTicketEl.className = "show__button";
      buyTicketEl.textContent="Buy Tickets";
      showEl.append(buyTicketEl);
  
      listEl.append(showEl);
  
  }

//When the cursor hovers over a show item, the “hover state” style from the style guide will be 
//applied to that item. This can be achieved using a pseudo-class in Sass.

//Clicking on a show item will apply the “selected state” styling from the style guide to that 
// item. This can be achieved by applying a modifier class using JavaScript. The item will stay 
// selected until another item is clicked. Utilize your knowledge of JavaScript and Sass to 
// accomplish this.