function likePost() {
  document.getElementById("feedback").textContent = "Köszönjük, hogy tetszett!";
}

function dislikePost() {
  document.getElementById("feedback").textContent = "Sajnáljuk, hogy nem tetszett.";
}

function submitComment() {
  const comment = document.getElementById("comment").value;
  if (comment.trim()) {
    const li = document.createElement("li");
    li.textContent = comment;
    document.getElementById("commentList").appendChild(li);
    document.getElementById("comment").value = "";
  }
}
