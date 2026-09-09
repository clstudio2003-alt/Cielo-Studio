<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Cielo Studio | Barber Chino</title>  
    <!-- Google Fonts -->  
    <link rel="preconnect" href="https://fonts.googleapis.com">  
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>  
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">  
      
    <style>  
        /* --- Color Palette & Variables --- */  
        :root {  
            --bg-color: #0f1419;  
            --card-bg: #182026;  
            --accent-gold: #c5a059;  
            --accent-blue: #4a6b82;  
            --text-light: #f4f6f8;  
            --text-muted: #9ba8b3;  
            --border-color: #27343f;  
        }  
  
        * {  
            box-sizing: border-box;  
            margin: 0;  
            padding: 0;  
            font-family: 'Montserrat', sans-serif;  
        }  
  
        body {  
            background-color: var(--bg-color);  
            color: var(--text-light);  
            line-height: 1.6;  
            overflow-x: hidden;  
        }  
  
        h1, h2, h3, .logo-text {  
            font-family: 'Cinzel', serif;  
            letter-spacing: 1.5px;  
        }  
  
        a {  
            color: inherit;  
            text-decoration: none;  
        }  
  
        /* --- Buttons --- */  
        .btn {  
            display: inline-block;  
            background-color: var(--accent-gold);  
            color: #0f1419;  
            padding: 0.85rem 1.8rem;  
            font-weight: 700;  
            text-transform: uppercase;  
            font-size: 0.9rem;  
            letter-spacing: 1px;  
            border-radius: 2px;  
            border: 1px solid var(--accent-gold);  
            cursor: pointer;  
            transition: all 0.3s ease;  
        }  
  
        .btn:hover {  
            background-color: transparent;  
            color: var(--accent-gold);  
            transform: translateY(-2px);  
        }  
  
        /* --- Header & Navigation --- */  
        header {  
            display: flex;  
            justify-content: space-between;  
            align-items: center;  
            padding: 1.2rem 6%;  
            background-color: rgba(15, 20, 25, 0.95);  
            position: sticky;  
            top: 0;  
            z-index: 1000;  
            border-bottom: 1px solid var(--border-color);  
            backdrop-filter: blur(10px);  
        }  
  
        .brand-container {  
            display: flex;  
            align-items: center;  
            gap: 12px;  
        }  
  
        .brand-container img {  
            height: 45px;  
            width: auto;  
            border-radius: 50%;  
        }  
  
        .logo-text {  
            font-size: 1.3rem;  
            font-weight: 700;  
            color: var(--text-light);  
        }  
  
        .logo-text span {  
            color: var(--accent-gold);  
            display: block;  
            font-size: 0.65rem;  
            letter-spacing: 3px;  
        }  
  
        nav ul {  
            display: flex;  
            list-style: none;  
            gap: 2rem;  
        }  
  
        nav a {  
            font-size: 0.9rem;  
            font-weight: 500;  
            text-transform: uppercase;  
            letter-spacing: 1px;  
            transition: color 0.3s;  
        }  
  
        nav a:hover {  
            color: var(--accent-gold);  
        }  
  
        /* --- Hero Section --- */  
        .hero {  
            min-height: 85vh;  
            display: flex;  
            flex-direction: column;  
            justify-content: center;  
            align-items: center;  
            text-align: center;  
            padding: 4rem 1rem;  
            position: relative;  
            background: linear-gradient(rgba(15, 20, 25, 0.85), rgba(15, 20, 25, 0.92)),   
                        url('studio-photo.jpg') center/cover no-repeat;  
        }  
  
        .hero-badge {  
            border: 1px solid var(--accent-gold);  
            color: var(--accent-gold);  
            padding: 0.4rem 1.2rem;  
            font-size: 0.8rem;  
            letter-spacing: 2px;  
            text-transform: uppercase;  
            margin-bottom: 1.5rem;  
        }  
  
        .hero h1 {  
            font-size: 3.5rem;  
            margin-bottom: 1rem;  
            color: var(--text-light);  
            max-width: 900px;  
        }  
  
        .hero p {  
            font-size: 1.2rem;  
            color: var(--text-muted);  
            max-width: 600px;  
            margin-bottom: 2rem;  
        }  
  
        /* --- Notice Banner --- */  
        .notice-banner {  
            background-color: var(--card-bg);  
            border-y: 1px solid var(--border-color);  
            padding: 1rem 5%;  
            text-align: center;  
            color: var(--accent-gold);  
            font-weight: 600;  
            font-size: 0.95rem;  
            letter-spacing: 1px;  
        }  
  
        /* --- Section Header Layout --- */  
        .section-header {  
            text-align: center;  
            margin-bottom: 3.5rem;  
        }  
  
        .section-title {  
            font-size: 2.2rem;  
            color: var(--text-light);  
            position: relative;  
            display: inline-block;  
            padding-bottom: 10px;  
        }  
  
        .section-title::after {  
            content: '';  
            position: absolute;  
            bottom: 0;  
            left: 50%;  
            transform: translateX(-50%);  
            width: 60px;  
            height: 2px;  
            background-color: var(--accent-gold);  
        }  
  
        /* --- About Section --- */  
        .about-container {  
            padding: 6rem 6%;  
            max-width: 1200px;  
            margin: 0 auto;  
            display: grid;  
            grid-template-columns: 1fr 1.2fr;  
            gap: 4rem;  
            align-items: center;  
        }  
  
        .about-img-wrap {  
            position: relative;  
        }  
  
        .about-img-wrap img {  
            width: 100%;  
            border-radius: 4px;  
            border: 1px solid var(--border-color);  
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);  
        }  
  
        .about-content h2 {  
            font-size: 2rem;  
            color: var(--accent-gold);  
            margin-bottom: 1.5rem;  
        }  
  
        .about-content p {  
            color: var(--text-muted);  
            margin-bottom: 1.2rem;  
            font-size: 1.05rem;  
        }  
  
        .about-highlights {  
            display: flex;  
            gap: 1.5rem;  
            margin-top: 2rem;  
            border-top: 1px solid var(--border-color);  
            padding-top: 1.5rem;  
        }  
  
        .highlight-item {  
            flex: 1;  
        }  
  
        .highlight-item h4 {  
            color: var(--text-light);  
            font-size: 1.1rem;  
            margin-bottom: 0.3rem;  
        }  
  
        /* --- Services Section --- */  
        .services-section {  
            background-color: var(--card-bg);  
            padding: 6rem 6%;  
            border-y: 1px solid var(--border-color);  
        }  
  
        .services-grid {  
            max-width: 1100px;  
            margin: 0 auto;  
            display: grid;  
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));  
            gap: 2rem;  
        }  
  
        .service-card {  
            background-color: var(--bg-color);  
            padding: 2rem;  
            border-radius: 4px;  
            border: 1px solid var(--border-color);  
            display: flex;  
            justify-content: space-between;  
            align-items: center;  
            transition: border-color 0.3s ease;  
        }  
  
        .service-card:hover {  
            border-color: var(--accent-gold);  
        }  
  
        .service-name {  
            font-size: 1.15rem;  
            font-weight: 600;  
            color: var(--text-light);  
        }  
  
        .service-price {  
            font-size: 1.3rem;  
            font-weight: 700;  
            color: var(--accent-gold);  
            font-family: 'Cinzel', serif;  
        }  
  
        /* --- Gallery Section --- */  
        .gallery-section {  
            padding: 6rem 6%;  
            max-width: 1300px;  
            margin: 0 auto;  
        }  
  
        .gallery-grid {  
            display: grid;  
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  
            gap: 1.5rem;  
        }  
  
        .gallery-item {  
            position: relative;  
            overflow: hidden;  
            border-radius: 4px;  
            aspect-ratio: 4/5;  
            border: 1px solid var(--border-color);  
        }  
  
        .gallery-item img {  
            width: 100%;  
            height: 100%;  
            object-fit: cover;  
            transition: transform 0.5s ease;  
        }  
  
        .gallery-item:hover img {  
            transform: scale(1.05);  
        }  
  
        /* --- Studio Showcase Section --- */  
        .studio-section {  
            background-color: var(--card-bg);  
            padding: 5rem 6%;  
            text-align: center;  
            border-y: 1px solid var(--border-color);  
        }  
  
        .studio-container {  
            max-width: 900px;  
            margin: 0 auto;  
        }  
  
        .studio-img {  
            width: 100%;  
            max-height: 500px;  
            object-fit: cover;  
            border-radius: 4px;  
            border: 1px solid var(--border-color);  
            margin-top: 2rem;  
        }  
  
        /* --- Info & Contact Section --- */  
        .info-section {  
            padding: 6rem 6%;  
            max-width: 1200px;  
            margin: 0 auto;  
            display: grid;  
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  
            gap: 3rem;  
        }  
  
        .info-card {  
            background-color: var(--card-bg);  
            padding: 2.5rem;  
            border-radius: 4px;  
            border: 1px solid var(--border-color);  
        }  
  
        .info-card h3 {  
            color: var(--accent-gold);  
            font-size: 1.3rem;  
            margin-bottom: 1.5rem;  
        }  
  
        .hours-list {  
            list-style: none;  
        }  
  
        .hours-list li {  
            display: flex;  
            justify-content: space-between;  
            padding: 0.5rem 0;  
            border-bottom: 1px solid rgba(255,255,255,0.05);  
            color: var(--text-muted);  
        }  
  
        .hours-list li.closed {  
            color: #e74c3c;  
        }  
  
        .contact-details p {  
            color: var(--text-muted);  
            margin-bottom: 1rem;  
        }  
  
        .contact-details strong {  
            color: var(--text-light);  
        }  
  
        .parking-note {  
            margin-top: 1.5rem;  
            padding: 1rem;  
            background-color: rgba(197, 160, 89, 0.1);  
            border-left: 3px solid var(--accent-gold);  
            font-size: 0.9rem;  
            color: var(--text-light);  
        }  
  
        /* --- Footer --- */  
        footer {  
            background-color: #080b0e;  
            text-align: center;  
            padding: 3rem 2rem;  
            border-top: 1px solid var(--border-color);  
        }  
  
        .social-link {  
            display: inline-block;  
            margin-bottom: 1.5rem;  
            color: var(--accent-gold);  
            font-weight: 600;  
            letter-spacing: 1px;  
            transition: color 0.3s;  
        }  
  
        .social-link:hover {  
            color: var(--text-light);  
        }  
  
        footer p {  
            color: var(--text-muted);  
            font-size: 0.85rem;  
        }  
  
        /* --- Responsive Styles --- */  
        @media (max-width: 900px) {  
            .about-container {  
                grid-template-columns: 1fr;  
            }  
            .hero h1 {  
                font-size: 2.5rem;  
            }  
            nav ul {  
                display: none; /* Can be turned into a hamburger menu */  
            }  
        }  
    </style>  
</head>  
<body>  
  
    <!-- Header / Navigation -->  
    <header>  
        <div class="brand-container">  
            <!-- Replace logo.png with your logo filename -->  
            <img src="logo.png" alt="Cielo Studio Logo">  
            <div class="logo-text">  
                CIELO STUDIO  
                <span>BARBER CHINO</span>  
            </div>  
        </div>  
        <nav>  
            <ul>  
                <li><a href="#about">About</a></li>  
                <li><a href="#services">Services</a></li>  
                <li><a href="#portfolio">Work</a></li>  
                <li><a href="#studio">Studio</a></li>  
                <li><a href="#location">Hours & Location</a></li>  
            </ul>  
        </nav>  
        <a href="https://booksy.com/en-us/dl/show-business/1112349" target="_blank" class="btn">Book Now</a>  
    </header>  
  
    <!-- Hero Section -->  
    <section class="hero">  
        <div class="hero-badge">Chicago, IL</div>  
        <h1>APPOINTMENTS ONLY</h1>  
        <p>Book directly via Booksy or contact me directly to reserve your session.</p>  
        <a href="https://booksy.com/en-us/dl/show-business/1112349" target="_blank" class="btn">Book via Booksy</a>  
    </section>  
  
    <!-- Notice Banner -->  
    <div class="notice-banner">  
        📍 2724 N Lincoln Ave, Chicago, IL 6014 • Appointments Only • Book Directly via Booksy  
    </div>  
  
    <!-- About Section -->  
    <section class="about-container" id="about">  
        <div class="about-img-wrap">  
            <!-- Replace profile.jpg with your photo filename -->  
            <img src="profile.jpg" alt="Barber Chino">  
        </div>  
        <div class="about-content">  
            <h2>MEET BARBER CHINO</h2>  
            <p>I am a licensed barber based in Chicago with over 6 years of professional experience. Whether you're looking for a precise modern cut, masterful fades, creative taper designs, or skilled shear work, I specialize in crafting any style to fit you perfectly.</p>  
            <p>Beyond the clippers, I'm a passionate fan of music, sports, shows, and movies. For me, barbering is not just about cutting hair—it's about the entire experience. The great conversation and meaningful bonds I make with people in my chair are what truly drive me to grow and perfect my craft.</p>  
              
            <div class="about-highlights">  
                <div class="highlight-item">  
                    <h4>6+ Years</h4>  
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Licensed Experience</p>  
                </div>  
                <div class="highlight-item">  
                    <h4>Master Craftsman</h4>  
                    <p style="font-size: 0.85rem; color: var(--text-muted);">Fades, Shears & Designs</p>  
                </div>  
            </div>  
        </div>  
    </section>  
  
    <!-- Services Section -->  
    <section class="services-section" id="services">  
        <div class="section-header">  
            <h2 class="section-title">SERVICES & PRICING</h2>  
        </div>  
        <div class="services-grid">  
            <div class="service-card">  
                <div class="service-name">Haircut</div>  
                <div class="service-price">$55</div>  
            </div>  
            <div class="service-card">  
                <div class="service-name">Beard & Haircut</div>  
                <div class="service-price">$55</div>  
            </div>  
            <div class="service-card">  
                <div class="service-name">Taper / Fade with Design</div>  
                <div class="service-price">$55</div>  
            </div>  
            <div class="service-card">  
                <div class="service-name">Kids Skin Fade</div>  
                <div class="service-price">$35</div>  
            </div>  
            <div class="service-card">  
                <div class="service-name">Kids Haircut (No Fade / Razor)</div>  
                <div class="service-price">$30</div>  
            </div>  
            <div class="service-card">  
                <div class="service-name">Beard Shaping</div>  
                <div class="service-price">$25</div>  
            </div>  
            <div class="service-card">  
                <div class="service-name">Line Up</div>  
                <div class="service-price">$25</div>  
            </div>  
            <div class="service-card">  
                <div class="service-name">House Calls</div>  
                <div class="service-price">$80+</div>  
            </div>  
        </div>  
        <div style="text-align: center; margin-top: 3rem;">  
            <a href="https://booksy.com/en-us/dl/show-business/1112349" target="_blank" class="btn">Schedule Appointment</a>  
        </div>  
    </section>  
  
    <!-- Portfolio Section -->  
    <section class="gallery-section" id="portfolio">  
        <div class="section-header">  
            <h2 class="section-title">WORK PORTFOLIO</h2>  
        </div>  
        <div class="gallery-grid">  
            <!-- Save your cut images into the same folder as work1.jpg, work2.jpg, etc. -->  
            <div class="gallery-item"><img src="work1.jpg" alt="Haircut Work by Barber Chino"></div>  
            <div class="gallery-item"><img src="work2.jpg" alt="Haircut Work by Barber Chino"></div>  
            <div class="gallery-item"><img src="work3.jpg" alt="Haircut Work by Barber Chino"></div>  
            <div class="gallery-item"><img src="work4.jpg" alt="Haircut Work by Barber Chino"></div>  
            <div class="gallery-item"><img src="work5.jpg" alt="Haircut Work by Barber Chino"></div>  
            <div class="gallery-item"><img src="work6.jpg" alt="Haircut Work by Barber Chino"></div>  
            <div class="gallery-item"><img src="work7.jpg" alt="Haircut Work by Barber Chino"></div>  
            <div class="gallery-item"><img src="work8.jpg" alt="Haircut Work by Barber Chino"></div>  
        </div>  
    </section>  
  
    <!-- Studio Showcase Section -->  
    <section class="studio-section" id="studio">  
        <div class="section-header">  
            <h2 class="section-title">THE STUDIO</h2>  
        </div>  
        <div class="studio-container">  
            <p style="color: var(--text-muted);">A private, premium barbering experience designed for comfort and precision.</p>  
            <!-- Replace studio.jpg with your studio image filename -->  
            <img src="studio.jpg" alt="Cielo Studio Interior" class="studio-img">  
        </div>  
    </section>  
  
    <!-- Location & Contact Section -->  
    <section class="info-section" id="location">  
        <div class="info-card">  
            <h3>BUSINESS HOURS</h3>  
            <ul class="hours-list">  
                <li><span>Monday</span> <span>10:00 AM - 7:00 PM</span></li>  
                <li><span>Tuesday</span> <span>10:00 AM - 7:00 PM</span></li>  
                <li><span>Wednesday</span> <span>10:00 AM - 7:00 PM</span></li>  
                <li class="closed"><span>Thursday</span> <span>CLOSED</span></li>  
                <li><span>Friday</span> <span>9:00 AM - 7:00 PM</span></li>  
                <li><span>Saturday</span> <span>9:00 AM - 5:00 PM</span></li>  
                <li class="closed"><span>Sunday</span> <span>CLOSED</span></li>  
            </ul>  
        </div>  
  
        <div class="info-card">  
            <h3>LOCATION & BOOKING</h3>  
            <div class="contact-details">  
                <p><strong>Address:</strong><br>2724 N Lincoln Ave<br>Chicago, IL 6014</p>  
                <p><strong>Phone / Direct Contact:</strong><br><a href="tel:8723039076" style="color: var(--accent-gold);">872-303-9076</a></p>  
                <p><strong>Appointments:</strong><br>Appointments only. Book directly through Booksy or call/text.</p>  
            </div>  
              
            <div class="parking-note">  
                🚗 <strong>Parking Info:</strong> Public paid street parking is available directly out front.  
            </div>  
        </div>  
    </section>  
  
    <!-- Footer -->  
    <footer>  
        <div>  
            <a href="https://www.instagram.com/chino.theartist?stkn=MWlrem03eXhwN2NmYQ%3D%3D&utm_source=qr" target="_blank" class="social-link">  
                📸 Follow @chino.theartist on Instagram  
            </a>  
        </div>  
        <p>&copy; 2026 Cielo Studio. Created for Barber Chino. All rights reserved.</p>  
    </footer>  
  
</body>  
</html>  
