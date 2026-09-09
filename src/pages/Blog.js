 import React, { useEffect, useState } from 'react';

const AnimatedBlog = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const particles = document.querySelectorAll('.particle');
      
      particles.forEach((particle, index) => {
        const speed = 0.5 + (index * 0.1);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      title: "Nouvelair",
      description: "Design and development of a web application for monitoring carbon emissions and fuel consumption.",
      icon: "🚀",
      images: Array.from({ length: 27 }, (_, i) => ({
        src: `images/${i + 1}.png`,
        alt: `Nouvelair Screenshot ${i + 1}`,
        desc: `Screenshot ${i + 1} of Nouvelair's interface`
      }))
    },
    {
      title: "Cybershield",
      description: "Our advanced cybersecurity solution, designed to protect digital assets with encryption and threat detection technologies.",
      icon: "🔒",
      images: Array.from({ length: 8 }, (_, i) => ({
        src: `images/cybershield/${i + 1}.png`,
        alt: `Cybershield Screenshot ${i + 1}`,
        desc: `Screenshot ${i + 1} of Cybershield's interface`
      }))
    },
    {
      title: "Skin Care",
      description: "Personalized skincare platform using AI to recommend routines and products tailored to individual needs.",
      icon: "🌟",
      images: Array.from({ length: 4 }, (_, i) => ({
        src: `images/skincare/${i + 1}.png`,
        alt: `Skin Care Screenshot ${i + 1}`,
        desc: `Screenshot ${i + 1} of Skin Care's interface`
      }))
    },
    {
      title: "Scrapping Tool ",
      description: "A powerful data extraction tool designed to efficiently collect and analyze web data for businesses and researchers.",
      icon: "📊",
      video: "/images/Tunipa.mp4"
    },
    {
      title: "Power BI Dashboard",
      description: "Interactive data-driven visualizations to empower businesses with actionable insights.",
      icon: "📈",
      images: Array.from({ length: 4 }, (_, i) => ({
        src: `images/powerbi/${i + 1}.png`,
        alt: `Power BI Dashboard Screenshot ${i + 1}`,
        desc: `Screenshot ${i + 1} of Power BI Dashboard's interface`
      }))
    },
    
    {
      title: "Rent Car",
      description: "User-friendly car rental platform offering a wide range of vehicles with a focus on convenience and accessibility.",
      icon: "🚗",
      images: Array.from({ length: 7 }, (_, i) => ({
        src: `images/rentcar/${i + 1}.png`,
        alt: `Rent Car Screenshot ${i + 1}`,
        desc: `Screenshot ${i + 1} of Rent Car's interface`
      }))
    },
    {
      title: "Alamine App",
      description: "Plateforme vente produits.",
      icon: "🛠️",
      video: "/images/amine.mp4"
    },
    {
       title: "Fruit Mobile Market",
  description:
    "Innovative app connecting users to fresh produce from local markets, making grocery shopping quick and convenient.",
  icon: "🍎",
  images: Array.from({ length: 11 }, (_, i) => ({
    src: `images/fruitmarket/${i + 1}.png`,
    alt: `Fruit Mobile Market Screenshot ${i + 1}`,
    desc: `Screenshot ${i + 1} of Fruit Mobile Market's interface`,
    className: "w-96 h-96 object-contain rounded-xl shadow-lg" // Bigger images
      }))
    },
    {
      title: "Clubs",
      description: "Clubs et activités — maîtrise et présentation de projets importants.",
      icon: "🎓",
      images: [
        {
          src: "images/nuit dinfo.png",
          alt: "Nuit Dinfo club image",
          desc: "Nuit Dinfo"
        },
        {
          src: "images/info.png",
          alt: "Info club image",
          desc: "Info"
        },
        {
          src: "images/infi.png",
          alt: "Infi club image",
          desc: "Infi"
        },
        {
          src: "images/inf.png",
          alt: "Inf club image",
          desc: "Inf"
        },
        {
          src: "images/if.png",
          alt: "If club image",
          desc: "If"
        },
        {
          src: "images/nuit.png",
          alt: "Nuit club image",
          desc: "Nuit"
        }
      ]
    },
    {
      title: "Applet Certificate",
      description: "Diplômes et certificats professionnels.",
      icon: "🏆",
      images: [
        {
          src: "images/1.1.png",
          alt: "Applet Certificate 1.1",
          desc: "Applet Certificate 1.1"
        },
        {
          src: "images/2.1.png",
          alt: "Applet Certificate 2.1",
          desc: "Applet Certificate 2.1"
        },
        {
          src: "images/3.1.png",
          alt: "Applet Certificate 3.1",
          desc: "Applet Certificate 3.1"
        },
        {
          src: "images/4.1.png",
          alt: "Applet Certificate 4.1",
          desc: "Applet Certificate 4.1"
        },
        {
          src: "images/5.1.png",
          alt: "Applet Certificate 5.1",
          desc: "Applet Certificate 5.1"
        },
        {
          src: "images/6.1.png",
          alt: "Applet Certificate 6.1",
          desc: "Applet Certificate 6.1"
        }
      ]
    }
  ];

  const BlogCard = ({ post, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(() => {
      if (post.title === 'Fruit Mobile Market') {
        return Math.max(0, Math.min(10, post.images.length - 1));
      }
      return 0;
    });

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? post.images.length - 1 : prevIndex - 1
      );
    };

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === post.images.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div 
          className="blog-card"
          style={{ 
            animationDelay: `${index * 100}ms`,
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="card-header text-center">
            <div className="card-icon">{post.icon}</div>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-description">{post.description}</p>
          </div>
          
          {post.video ? (
            <div className="carousel">
              <div className="carousel-inner">
                <video
                  src={post.video}
                  controls
                  loop
                  muted
                  className="video-placeholder"
                />
              </div>
            </div>
          ) : (
            <div className="carousel">
              <div className="carousel-inner">
                <img 
                  src={post.images[currentImageIndex].src || 'images/placeholder.png'} 
                  alt={post.images[currentImageIndex].alt} 
                  className="image-placeholder"
                  onError={(e) => {
                    console.error(`Failed to load image: ${post.images[currentImageIndex].src}`);
                    e.target.src = 'images/placeholder.png';
                  }}
                />
                <p className="image-description">{post.images[currentImageIndex].desc}</p>
                <button className="carousel-arrow carousel-arrow-left" onClick={handlePrevImage}>
                  ←
                </button>
                <button className="carousel-arrow carousel-arrow-right" onClick={handleNextImage}>
                  →
                </button>
              </div>
            </div>
          )}
          
          <div className="progress-bar-custom"></div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <style jsx>{`
        body {
          background: linear-gradient(135deg, #ffffff, #ffffff);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          overflow-x: hidden;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(147, 197, 253, 0.4); }
          50% { box-shadow: 0 0 30px rgba(147, 197, 253, 0.7); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50  px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        .main-header {
          text-align: center;
          padding: 60px 0;
          position: relative;
        }

        .main-title {
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(45deg, #070707ff, #232427ff, #695a87ff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
          margin-bottom: 20px;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(135deg, #93c5fd 0%, #bfdbfe 100%);
          margin: 20px auto;
          border-radius: 10px;
          animation: pulse 2s ease-in-out infinite;
        }

        .lead-text {
          color: rgba(28, 26, 26, 0.9);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .blog-card {
          background: rgba(255, 255, 255, 0.97);
          border-radius: 25px;
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: slideInUp 0.6s ease-out forwards;
        }

        .blog-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: rotate(45deg);
          transition: all 0.6s;
          opacity: 0;
        }

        .blog-card:hover::before {
          animation: shimmer 1.5s ease-in-out;
          opacity: 1;
        }

        .blog-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          animation: glow 2s ease-in-out infinite;
        }

        .card-header {
          padding: 25px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          position: relative;
          border-radius: 25px 25px 0 0;
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .card-icon {
          transform: scale(1.2) rotate(10deg);
          animation: float 2s ease-in-out infinite;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }

        .blog-card:hover .card-title {
          background: linear-gradient(135deg, #93c5fd 0%, #bfdbfe 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card-description {
          color: #4b5e7e;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .carousel {
          padding: 20px;
          position: relative;
        }

        .carousel-inner {
          position: relative;
          text-align: center;
          min-height: 260px;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .carousel-arrow:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .carousel-arrow-left {
          left: 10px;
        }

        .carousel-arrow-right {
          right: 10px;
        }

        .image-placeholder,
        .video-placeholder {
          height: 200px;
          width: 100%;
          max-width: 400px;
          border-radius: 15px;
          object-fit: cover;
          display: block;
          margin: 0 auto;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .image-placeholder:hover,
        .video-placeholder:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .image-description {
          font-size: 0.8rem;
          color: #4b5e7e;
          text-align: center;
          margin-top: 10px;
          line-height: 1.4;
        }

        .progress-bar-custom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(135deg, #93c5fd 0%, #bfdbfe 100%);
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0 0 25px 25px;
        }

        .blog-card:hover .progress-bar-custom {
          width: 100%;
        }

        .floating-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          width: 10px;
          height: 10px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          width: 15px;
          height: 15px;
          top: 20%;
          left: 80%;
          animation-delay: 2s;
        }

        .particle:nth-child(3) {
          width: 8px;
          height: 8px;
          top: 80%;
          left: 20%;
          animation-delay: 4s;
        }

        .particle:nth-child(4) {
          width: 12px;
          height: 12px;
          top: 60%;
          left: 90%;
          animation-delay: 1s;
        }

        .footer {
          text-align: center;
          padding: 50px 0;
          margin-top: 50px;
        }

        .footer-text {
          color: rgba(11, 11, 11, 0.9);
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        .loading-dots {
          display: inline-block;
        }

        .loading-dots span {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(11, 10, 10, 0.8);
          margin: 0 3px;
          animation: bounce 1.4s ease-in-out infinite both;
        }

        .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
        .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
        .loading-dots span:nth-child(3) { animation-delay: 0s; }

        .main-container {
          background: linear-gradient(135deg, #d2cbcbff 0%, #93c5fd 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .col-lg-4, .col-md-6 {
          padding: 0 15px;
        }

        @media (min-width: 992px) {
          .col-lg-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
        }

        @media (min-width: 768px) {
          .col-md-6 { flex: 0 0 50%; max-width: 50%; }
        }

        @media (max-width: 767px) {
          .col-lg-4, .col-md-6 { flex: 0 0 100%; max-width: 100%; }
          .main-title { font-size: 2.5rem; }
        }

        .mb-4 {
          margin-bottom: 1.5rem;
        }

        .text-center {
          text-align: center;
        }
      `}</style>

      <div className="main-container">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="main-header">
          <div className="container">
            <h1 className="main-title">My Blog</h1>
            <div className="title-underline"></div>
            <p className="lead-text">
              Discover our innovative projects through previews, updates, and exclusive insights.
              Each project tells a unique story of innovation and creativity.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </div>
        </div>

        <div className="footer">
          <p className="footer-text">Explore more projects</p>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBlog;