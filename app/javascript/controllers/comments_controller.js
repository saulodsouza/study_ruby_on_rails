import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Hello Stimulus");
  }

  toggleForm(event) {
    event.preventDefault();
    event.stopPropagation();
    const formId = event.params["form"];
    const commentBodyId = event.params["body"];
    const editButtonId = event.params["edit"];

    const form = document.getElementById(formId);
    const commentBody = document.getElementById(commentBodyId);
    const editButton = document.getElementById(editButtonId);

    form.classList.toggle("d-none");
    form.classList.toggle("mt-5");
    commentBody.classList.toggle("d-none");
    this.toggleEditButton(editButton);
  }

  toggleEditButton(editButton) {
    if (editButton.innerText == "Edit") {
      editButton.innerText = "Cancel";
    } else {
      editButton.innerText = "Edit";
    }
    this.toggleEditButtonClass(editButton);
  }

  toggleEditButtonClass(editButton) {
    editButton.classList.toggle("btn-secondary");
    editButton.classList.toggle("btn-warning");
  }
}
