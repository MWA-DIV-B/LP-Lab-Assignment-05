<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Event Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <!-- Header content goes here -->
  </header>

  <section id="home">
    <!-- Home section content goes here -->
    <h1>Welcome to <%= request.getAttribute("eventName") %></h1>
  </section>

  <!-- Rest of the webpage content goes here -->

  <script src="script.js"></script>
</body>
</html>
