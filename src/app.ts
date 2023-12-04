const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyD2iPtl2gKXU8FDwKY8XPODslEQHkfIT_k';

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!
}

form.addEventListener('submit', searchAddressHandler);