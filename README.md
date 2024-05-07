1> Post page: avtno is not working, it should validate whether avtno is exits or not
2> validdate the state
 
Medical change to Text Area


http://localhost:3000/blog/indian
http://localhost:3000/blog/indian-navy-agniveer-(mr)-02/2024

Tentative date
max is not available in DB
remove net category vacancy from model

// Define your base styles here

// For smaller screens (e.g., smartphones)
@media only screen and (max-width: 600px) {
  // Adjust styles for smaller screens here
  .container {
    width: 100%; // Make the container full width
    padding: 10px; // Add some padding for better readability
  }
  
  .menu {
    display: none; // Hide the menu on smaller screens
  }

  .content {
    width: 100%; // Make the content full width
    margin-top: 20px; // Add some space between the content and the edge of the screen
  }
}

// For larger screens (e.g., desktops)
@media only screen and (min-width: 601px) {
  // Adjust styles for larger screens here
  .container {
    width: 80%; // Make the container 80% of the viewport width
    margin: 0 auto; // Center the container horizontally
  }

  .menu {
    display: block; // Show the menu on larger screens
  }

  .content {
    width: 60%; // Make the content 60% of the container width
    float: left; // Float the content to the left
    margin-right: 20px; // Add some space between the content and the menu
  }

  .sidebar {
    width: 30%; // Make the sidebar 30% of the container width
    float: right; // Float the sidebar to the right
  }
}
