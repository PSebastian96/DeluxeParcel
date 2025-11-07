document.getElementById('submit-quote').addEventListener('click', () => {
    
    const brandName = document.getElementById('brand-name').value;
    const productType = document.getElementById('product-type').value;
    const numSKU = parseInt(document.getElementById('num-sku').value, 10) || 0;
    const numPallets = parseInt(document.getElementById('num-pall').value, 10) || 0;
    const numOrders = parseInt(document.getElementById('num-orders').value, 10) || 0;
  
    
    function validForm() {
      if (!brandName || productType === 'Product Type' || numSKU <= 0 || numPallets <= 0 || numOrders <= 0) {
        alert('Please fill out all fields with valid values.');
        return false;
      }
      return true;
    }
  
    // Stop execution if form is invalid
    if (!validForm()) return;
  
    // Pricing data for each product type
    const pricing = {
      '1': { sku: 3, pallet: 10, order: 1 }, // Clothing
      '2': { sku: 1, pallet: 5, order: 1 },  // Food
      '3': { sku: 2, pallet: 12, order: 1 }, // Stationary
      '4': { sku: 1, pallet: 15, order: 2 }, // Alcohol
      '5': { sku: 1, pallet: 14, order: 1 }, // Pets
      '6': { sku: 1, pallet: 11, order: 1 }, // Household
      '7': { sku: 1, pallet: 18, order: 1 }, // Tech
    };
  
    // Calculate the total price
    let totalPrice = 0;
    if (pricing[productType]) {
      const { sku, pallet, order } = pricing[productType];
      totalPrice = (sku * numSKU) + (pallet * numPallets) + (order * numOrders);
    } else {
      alert('Invalid product type selected.');
      return;
    }
  
    // Display the quote
    const quoteDisplay = document.getElementById('quote-display');
    quoteDisplay.innerHTML = `
      <div class="alert alert-success">
        <h4>Quote for ${brandName}</h4>
        <p>Estimated Price: <strong>£${totalPrice}</strong> per month.</p>
      </div>
    `;
});

// Modal close event listener to reset the form
const modal = document.getElementById('quote-form');
modal.addEventListener('hidden.bs.modal', function () {
    const form = modal.querySelector('form');
    form.reset(); // Reset all form fields when the modal is closed
    const quoteDisplay = document.getElementById('quote-display');
    quoteDisplay.innerHTML = ''; // Clear the quote display
});