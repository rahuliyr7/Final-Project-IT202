document.addEventListener('DOMContentLoaded', () => {
    // These variables are accessible inside the loadSettings function
    const hOne = document.getElementById("testHeadOne");
    const checkOutBtn = document.getElementById('testTestCheckOutBtn');
    const checkOutGoBtn = document.getElementById("goToCheckoutBtn");
    const backToIndexBtn = document.getElementById("backButton");

    function loadSettings() {
        // 2. Fetch data from the server's API endpoint
        fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            // 3. Update the DOM with the fetched data
            const userV = data.version; 
            
            // This logic is kept inside loadSettings because 'userV' is available here.
            if (hOne) {
                // Update the text content of the h1 element
                hOne.textContent = 'Checkout Version: ' + userV;
            }
        })
        .catch(error => console.error("Error loading settings:", error));
    }

    // 4. Event Handling
    
    // The "Go to checkout" button handler (id="goToCheckoutBtn") - simple redirect.
    if(checkOutGoBtn) {
        checkOutGoBtn.addEventListener('click', () => {
            // Simple redirect to /checkout
            window.location.href = '/checkout';
        });
    }

    // The "checkout" button handler (id="testTestCheckOutBtn") - sets the local storage flag (the "counter").
    if(checkOutBtn) {
        checkOutBtn.addEventListener('click', () => {
            // Set a flag in localStorage when the "checkout" button is pressed
            localStorage.setItem('checkoutBtnPressed', 'true');
            console.log("Checkout button pressed, state saved."); 
        });
    }
    
    // The "Back" button handler (on checkout.html)
    if (backToIndexBtn) {
        backToIndexBtn.addEventListener('click', () => {
            // Redirects to index.html
            window.location.href = '/'; 
        });
    }
    
    // --- CONDITIONAL LOGIC using localStorage on checkout.html ---
    
    // Check if the flag exists
    const wasCheckoutPressed = localStorage.getItem('checkoutBtnPressed') === 'true';

    // Conditionally call loadSettings ONLY if the flag is present AND the h1 element exists
    // (i.e., we are on checkout.html)
    if (wasCheckoutPressed && hOne) {
        // 1. Load the settings and update the header
        loadSettings();
        
        // 2. Clear the flag immediately after use to reset the counter/state
        localStorage.removeItem('checkoutBtnPressed');
        console.log("Header updated, state cleared for next visit.");
    }
});