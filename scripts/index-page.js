import BandSiteApi from "./band-site-api.js";
const api_key = "66fc9040-cab8-417b-a0da-d3137846725a"
const api = new BandSiteApi(api_key);

const listEl = document.getElementById("list");

async function getCommentsAndRender(){
  try{
    const comments = await api.getComments();
    listEl.innerHTML="";

    comments.forEach(displayComments);

  }catch(e){
      console.log(e);
  }
}

getCommentsAndRender();


function displayComments(comment){
  const commentEl = document.createElement("div");
  commentEl.className = "comment";

  const imgEl = document.createElement("div");
  imgEl.className = "comment__pfp";
  commentEl.append(imgEl);

  const containerEl = document.createElement("div");
  containerEl.className = "comment__box";

  const headerEl = document.createElement("div");
  headerEl.className = "comment__header";

  //name
  const nameEl = document.createElement("div");
  nameEl.className = "comment__name";
  nameEl.textContent = comment.name;

  //date
  const dateEl = document.createElement("div");
  dateEl.className = "comment__date";
  const date = new Date(comment.timestamp)
  dateEl.textContent = `${date.toLocaleDateString()}`;   

  headerEl.append(nameEl, dateEl);


  //comment
  const contentEl = document.createElement("div");
  contentEl.className = "comment__content";
  contentEl.textContent = comment.comment;
  
  containerEl.append(headerEl,contentEl);
  commentEl.append(containerEl);

  listEl.prepend(commentEl);
}

const form = document.getElementById("form");


form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const nameInput = e.target.name;
    const commentInput = e.target.comment;

    let error = false;

    nameInput.classList.remove("form__error");
    commentInput.classList.remove("form__error");

    if (nameInput.value.trim() === "") {
        nameInput.classList.add("form__error");
        error = true;
    }
    if (commentInput.value.trim() === "") {
        commentInput.classList.add("form__error");
        error = true;
    }

    if (error) {
      return;
    }

    const newComment = {
      name: e.target.name.value,
      comment: e.target.comment.value,
    };
    const postComments = await api.postComments(newComment);
    // console.log(postComments);
    
    getCommentsAndRender()

    nameInput.value = "";
    commentInput.value = "";
});


