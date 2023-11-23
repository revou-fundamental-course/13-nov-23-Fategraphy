function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var country = document.getElementById("Country").value;
  var message = document.getElementById("Message").value;

  if (
    fname.trim() === "" ||
    lname.trim() === "" ||
    country.trim() === "" ||
    message.trim() === ""
  ) {
    alert("Please fill out all fields");
  } else {
    alert(
      "Form submitted successfully!\nFirst Name: " +
        fname +
        "\nLast Name: " +
        lname +
        "\nCountry: " +
        country +
        "\nMessage: " +
        message
    );
    document.getElementById("myform").reset(); // Reset the form after submission (optional)
  }
}

function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
