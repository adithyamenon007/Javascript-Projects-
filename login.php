<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="th.css" />
        <link href="https://css.gg/arrow-right-r.css" rel="stylesheet" />
    <title>HMS | Login Page</title>
</head>
<body>
    <div class="form-box">
        <div class="form-heading">
            <h2>Log-in</h2>
        </div>
        <form action="index.php">
            <div class="form-section">
                <label for="username">Enter Username:</label>
                <input type="text" name="username" id="username">
            </div>
            <div class="form-section">
                <label for="username">Enter Password:</label>
                <input type="text" name="username" id="username">
            </div>
            <button type="submit" class="btn btn-outline-primary">Login</button>
        </form>
        <div class="form-bottom-info">
            <p>Don't have an account? <a href="signup.php">Register Here!</a></p>
        </div>
    </div>
</body>
</html>