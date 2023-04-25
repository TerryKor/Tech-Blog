const titleData = document.getElementById("titleData");
const contentData = document.getElementById("contentData");

const updateButton = document.getElementById("updateButton");
const deleteButton = document.getElementById("deleteButton");

async function updatePost() {
  const title = titleData.value;
  const content = contentData.value;
  const id = window.location.pathname.split("/")[2];
  if (title && content) {
      const result = await fetch(`/api/posts/${id}`, {
          method: "PUT",
          body: JSON.stringify({ title, content }),
          headers: { "Content-Type": "application/json" },
        });
        if (result.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to update the post");
        }
    } else {
        alert("Please add some title or content");
    }
}

async function deletePost() {
    const id = window.location.pathname.split("/")[2];
  const result = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (result.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to delete Post");
  }
}

updateButton.addEventListener("click", updatePost);
deleteButton.addEventListener("click", deletePost);
