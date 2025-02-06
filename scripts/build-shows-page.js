import BandSiteApi from "./band-site-api.js";
const api_key = "66fc9040-cab8-417b-a0da-d3137846725a"
const api = new BandSiteApi(api_key);
const listEl = document.getElementById("list");


async function getShowsAndRender(){
  try{
    const shows = await api.getShows();
    listEl.innerHTML="";

    shows.forEach(displayShows);

  }catch(e){
      console.log(e);
  }
}
getShowsAndRender();


function displayShows(show){
    const showEl = document.createElement("div");
    showEl.className = "show";

    showEl.addEventListener("click", function () {
      document.querySelectorAll(".show").forEach((el) => el.classList.remove("selected"));

      showEl.classList.add("selected");
  });

    const dateEl = document.createElement("div");
    const dateTitle = document.createElement("h3");
    dateTitle.className = "show__date--title";
    dateTitle.textContent = "Date"
    dateEl.className = "show__date";
    const date = new Date(show.date)
    dateEl.textContent = `${date.toDateString()}`;
    showEl.append(dateTitle);
    showEl.append(dateEl);

    const venueEl = document.createElement("div");
    const venueTitle = document.createElement("h3");
    venueTitle.className = "show__venue--title";
    venueTitle.textContent = "Venue"
    venueEl.className = "show__venue";
    venueEl.textContent = show.place;
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