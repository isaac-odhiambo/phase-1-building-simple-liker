// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// Select modal elements
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

// Show error modal function
function showError(message) {
    modalMessage.textContent = message;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 3000);
}

// Simulated server call
function mimicServerCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isRandomFailure = Math.random() < 0.2; // 20% chance of failure
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}

// Handle like button clicks
document.querySelectorAll('.like').forEach(item => {
    item.addEventListener('click', (event) => {
        const likeGlyph = item.querySelector('.like-glyph');

        if (likeGlyph.textContent === EMPTY_HEART) {
            // Invoke mimicServerCall when clicking empty heart
            mimicServerCall()
                .then(() => {
                    likeGlyph.textContent = FULL_HEART;
                    likeGlyph.classList.add('activated-heart'); // Make heart appear red
                })
                .catch((error) => {
                    showError(error); // Show error modal
                });
        } else {
            // Change back to empty heart when clicking full heart
            likeGlyph.textContent = EMPTY_HEART;
            likeGlyph.classList.remove('activated-heart'); // Remove red color
        }
    });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
