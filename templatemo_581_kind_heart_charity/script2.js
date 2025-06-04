 const priceButtons = document.querySelectorAll('#priceButtons button');
  const selectedAmountInput = document.getElementById('selectedAmount');
  const customAmountInput = document.getElementById('customAmount');

  priceButtons.forEach(button => {
    button.addEventListener('click', () => {
      priceButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const amount = button.getAttribute('data-amount');

      if (amount === 'custom') {
        customAmountInput.style.display = 'block';
        selectedAmountInput.value = '';
      } else {
        customAmountInput.style.display = 'none';
        selectedAmountInput.value = amount;
        customAmountInput.value = '';
      }
    });
  });

  // When user types in custom amount, update hidden input
  customAmountInput.addEventListener('input', () => {
    selectedAmountInput.value = customAmountInput.value;
  });
  const amount = parseInt(document.getElementById('selectedAmount').value, 10);
if (!amount || amount < 100) {
  alert("Please select or enter a valid amount (min ₦100).");
  return;
}