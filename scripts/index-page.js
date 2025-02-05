const comments = [
  {
    name: "Isaac Tadesse",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: new Date("10/20/2023"),
  },
  {
    name: "Christina Cabrera",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: new Date("02/28/2024"),
  },
  {
    name: "Victor Pinto",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: new Date("08/14/2024"),
  },
];

comments.forEach(comment => {
  comment.date = comment.date.toLocaleDateString(); 
});

const listEl = document.getElementById("list");
comments.forEach(displayComments);

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
  dateEl.textContent = comment.date;

  headerEl.append(nameEl, dateEl);


  //comment
  const contentEl = document.createElement("div");
  contentEl.className = "comment__content";
  contentEl.textContent = comment.comment;
  
  containerEl.append(headerEl,contentEl);
  commentEl.append(containerEl);

  listEl.append(commentEl);
}



const form = document.getElementById("form");


form.addEventListener("submit",(e)=>{
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

    const item = {
        name: e.target.name.value,
        comment: e.target.comment.value,
        date: new Date().toLocaleDateString(),
    };

    comments.unshift(item);
    listEl.replaceChildren();
    comments.forEach(displayComments);

    nameInput.value = "";
    commentInput.value = "";
});

