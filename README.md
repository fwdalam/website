<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MelodyStream Dashboard</title>

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- HEADER -->
    <header class="header">
        <button class="menu-btn" id="menuBtn" aria-label="Toggle sidebar">
            <!-- OPEN -->
            <svg class="icon open" viewBox="0 0 24 24">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
            </svg>

            <!-- CLOSE -->
            <svg class="icon close" viewBox="0 0 24 24">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
        </button>

        <h2>MELODYSTREAM</h2>

        <nav>
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Playlists</a>
            <a href="#">Artists</a>
            <button class="btn">Login</button>
            <button class="btn">Sign Up</button>
        </nav>
    </header>

    <!-- LAYOUT -->
    <div class="layout">

        <!-- SIDEBAR -->
        <aside class="sidebar closed" id="sidebar">
            <nav>
                <a href="#">Dashboard</a>
                <a href="#">Search</a>
                <a href="#">Browse</a>
                <a href="#">Favorites</a>
                <a href="#">Recents</a>
            </nav>
        </aside>

        <!-- MAIN -->
        <main class="main-content">

            <section class="featured-album">
                <p>FEATURED ALBUM</p>
                <h1>‘CELESTIAL HARMONIES’ BY AURORA</h1>
            </section>

            <h3 class="section-title">New Releases</h3>

            <!-- Audio Player -->

            <!-- Romantic Album -->
            <div class="album-scroll">
                <div class="album-card" data-folder="romantic">
                    <img src="album/Romantic.jpg" alt="">
                    <div class="play-btn">
                        <svg viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                    <h4>Romantic</h4>
                </div>
                <!-- Sad Album -->
                <div class="album-card" data-folder="sad">
                    <img src="album/sad-melancholic - Copy.jpg" alt="Sad">
                    <div class="play-btn">
                        <svg viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                    <h4>Sad</h4>
                </div>

                <!-- Happy Album -->
                <div class="album-card" data-folder="happy">
                    <img src="album/happy-cheerful.jpg" alt="Happy">
                    <div class="play-btn">
                        <svg viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                    <h4>Happy</h4>
                </div>

                <!-- Aggressive Album -->
                <div class="album-card" data-folder="aggressive">
                    <img src="album/angry-aggressive.jpg" alt="Aggressive">
                    <div class="play-btn">
                        <svg viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                    <h4>Aggressive</h4>
                </div>

                <!-- New Album Example: Chill -->
                <div class="album-card" data-folder="chill">
                    <img src="album/happy-cheerful.jpg" alt="chill">
                    <div class="play-btn">
                        <svg viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                    <h4>Chill</h4>
                </div>

                <!-- New Album Example: Party -->
                <div class="album-card" data-folder="party">
                    <img src="album/happy-cheerful.jpg" alt="Party">
                    <div class="play-btn">
                        <svg viewBox="0 0 24 24">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                    <h4>Party</h4>
                </div>
            </div>
            <!-- Songs will appear here -->
            <div id="song-list"></div>


        </main>
    </div>
    <audio id="audioPlayer" controls></audio>


    <footer class="footer">
        <p>© 2026 Fawad Alam | All Rights Reserved</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
