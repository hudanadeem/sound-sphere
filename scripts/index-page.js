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

  const actionContainer = document.createElement("div");
  actionContainer.className = "comment__actions";

  //delete
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "comment__delete";

  deleteBtn.addEventListener("click", async () => {
      await api.deleteComment(comment.id);
      window.location.reload();
  });

  //like
  const likeBtnContainer = document.createElement("div"); 
  likeBtnContainer.className = "comment__like-container";

  const likeBtn = document.createElement("button");
  likeBtn.className = "comment__like";

  const likeCount = document.createElement("span"); 
  likeCount.className = "comment__like-count";
  likeCount.textContent = comment.likes; 

  likeBtnContainer.append(likeBtn, likeCount);

  likeBtn.addEventListener("click", async () => {
    const updatedComment = await api.likeComment(comment.id);

    if (updatedComment) {
        likeCount.textContent = updatedComment.likes; 
    }
  });

  actionContainer.append(deleteBtn, likeBtnContainer)
  containerEl.append(headerEl,contentEl,actionContainer);
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
    await api.postComments(newComment);
    
    getCommentsAndRender()

    nameInput.value = "";
    commentInput.value = "";
});


