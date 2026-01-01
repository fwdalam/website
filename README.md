
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Song Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <aside id="sidebar">
        <h2>Music Menu</h2>
        <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">My Playlist</a></li>
            <li><a href="#">Genres</a></li>
            <li><a href="#">Top Charts</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
        <button id="toggle-btn">Toggle Sidebar</button>
    </aside>

    <main id="main-content">
        <h1>My Songs</h1>
        <div class="song-list">
            <div class="song-item">
                <span>Song 1 - Artist A</span>
                <audio controls>
                    <source src="song1.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div class="song-item">
                <span>Song 2 - Artist B</span>
                <audio controls>
                    <source src="song2.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div class="song-item">
                <span>Song 3 - Artist C</span>
                <audio controls>
                    <source src="song3.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>
