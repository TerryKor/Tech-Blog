const titleField = document.getElementById("titleField");
const contentField = document.getElementById("contentField");
const createPostButton = document.getElementById("createPostButton");

async function createPost() {
  if (titleField.value && contentField.value) {
    const title = titleField.value;
    const content = contentField.value;
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-type": "application/json" },
    }).catch((error) => {
      console.error("Fetch error:", error);
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create post!");
    }
  }
}

createPostButton.addEventListener("click", createPost);
