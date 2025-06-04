const form = document.getElementById('donation-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const amount = parseInt(document.getElementById('amount').value);

    if (!amount || amount < 100) {
      alert("Please enter a valid amount (minimum GHS100).");
      return;
    }

    let handler = PaystackPop.setup({
      key: 'pk_live_393f403b1c34ccc9dba79f7581f899c53982cb04', // Replace with your actual Paystack public key
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      currency: 'GHS',
      ref: 'DON-' + Math.floor((Math.random() * 1000000000) + 1), // unique reference
      callback: function(response) {
        alert('Payment complete! Reference: ' + response.reference);
        // Optionally send the response to your server
      },
      onClose: function() {
        alert('Transaction was cancelled.');
      }
    });

    handler.openIframe();
  });