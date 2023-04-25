const commentInputField = document.getElementById("commentInputField") 
const submitButton = document.getElementById("submitButton") 
const posttitle=document.getElementById("posttitle")

async function submitComment() {
 const inputFieldData = commentInputField.value;
 const post_id = posttitle.getAttribute("postIDforComment")
 console.log(inputFieldData)
 const result = await fetch("/api/comments",{
    method:"POST",
    body:JSON.stringify({
        post_id,
        comment: inputFieldData,
    }),
    headers: { "Content-type": "application/json" },
 }).catch((error) => {
    console.error("Fetch error:", error);
  });

  if (result.ok) {
    document.location.reload();
  } else {
    alert("Failed to create comment!");
  }

}

submitButton.addEventListener("click", submitComment);