document.addEventListener('DOMContentLoaded', function () {
  const options = document.querySelectorAll('.option');
  const elseMessage = document.querySelector('.else');
  const returnMessage = document.querySelector('.return');

  options.forEach(option => {
    option.addEventListener('click', () => {
      const isSelected = option.classList.toggle('selected');
      const checkmark = option.querySelector('.checkmark');
      if (isSelected) {
        checkmark.classList.add('selected');
        option.classList.add('highlighted'); // Add class to highlight container
      } else {
        checkmark.classList.remove('selected');
        option.classList.remove('highlighted'); // Remove class to remove highlight
      }

      // Show the messages if at least one option is selected
      const selectedOptions = document.querySelectorAll('.option.selected');
      if (selectedOptions.length > 0) {
        elseMessage.style.display = 'block';
        returnMessage.style.display = 'block';
      } else {
        elseMessage.style.display = 'none';
        returnMessage.style.display = 'none';
      }
    });
  });

  const finishButton = document.querySelector('.finish-button');
  finishButton.addEventListener('click', () => {
    const selectedOptions = document.querySelectorAll('.option.selected');
    if (selectedOptions.length > 0) {
      // You can add your desired action here when the finish button is clicked
    } else {
      // You can add your desired action here if no options are selected
    }
  });
});
