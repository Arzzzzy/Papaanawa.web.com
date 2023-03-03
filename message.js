// Check if the user has already seen the popup
if (!localStorage.getItem('popupShown')) {
    // If not, show the popup and set the flag
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    localStorage.setItem('popupShown', true);
  }
  
  // Add event listener to the close button
  var closeButton = document.getElementById('close');
  closeButton.addEventListener('click', function() {
    // Hide the popup and remove it from the DOM
    popup.style.display = 'none';
    popup.parentNode.removeChild(popup);
  });
  
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function showMessage() {
  alert("This feature is not yet ready.");
}
// Code to display the pop-up when the page loads
window.onload = function() {
    document.getElementById('popup').style.display = 'block';
  }
  // Code to close the pop-up when the close button is clicked
  document.getElementById('close').onclick = function() {
    document.getElementById('popup').style.display = 'none';
  }

function showmessage2() {
    alert("Login first");
  }