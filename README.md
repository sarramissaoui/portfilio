#  - Portfolio

A clean, modern React portfolio website built with a component-based architecture and JSON data management.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **JSON Data Management**: Easy to update content by modifying JSON files
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized React components and efficient rendering

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with CSS variables
- **JSON** - Data management

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with theme toggle
│   ├── Hero.js            # Hero section for homepage
│   ├── Features.js        # Skills/features showcase
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js           # Homepage
│   ├── Education.js      # Education and certifications
│   ├── Experience.js     # Work experience
│   ├── Projects.js       # Portfolio projects
│   ├── Contact.js        # Contact information and skills
│   └── Blog.js           # Blog section
├── data/
│   ├── personal.json     # Personal information and features
│   ├── education.json    # Education and certifications data
│   ├── experience.json   # Work experience data
│   ├── projects.json     # Projects data
│   └── skills.json       # Skills and technologies
├── styles/
│   └── index.css         # Main stylesheet
└── App.js                # Main app component
```

## 🎯 Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MalakGrami/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your images**
   - Place your profile image in `public/images/malak.png`
   - Add company logos in `public/images/` folder
   - Update image paths in JSON files accordingly

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Visit `http://localhost:3000`

## 📝 Customization

### Updating Content

All content is managed through JSON files in the `src/data/` directory:

#### Personal Information (`src/data/personal.json`)
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your Tagline",
  "contact": {
    "email": "your.email@example.com",
    "phone": "+1234567890",
    // ... other contact info
  },
  "features": [
    // Your skills/features
  ]
}
```

#### Experience (`src/data/experience.json`)
```json
{
  "experiences": [
    {
      "company": "Company Name",
      "position": "Your Position",
      "period": "Start - End Date",
      "location": "Location",
      "logo": "/images/company-logo.jpg",
      "description": "Job description",
      "responsibilities": ["Task 1", "Task 2"],
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

#### Projects (`src/data/projects.json`)
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "link": "https://github.com/username/project",
      "status": "Completed",
      "technologies": ["React", "Node.js"]
    }
  ]
}
```

### Theme Customization

Update CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #3b82f6;      /* Main brand color */
  --secondary-color: #1f2937;    /* Secondary color */
  --accent-color: #f59e0b;       /* Accent color */
  /* ... other variables */
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository to Netlify for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
3. Run: `npm run deploy`

## 📱 Mobile Responsiveness

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Optimized layouts for tablets and phones
- Touch-friendly interface elements

## 🎨 Design Features

- **Clean Typography**: Carefully chosen fonts and spacing
- **Smooth Animations**: CSS transitions and hover effects
- **Modern Layout**: Grid and flexbox layouts
- **Professional Color Scheme**: Carefully selected color palette
- **Interactive Elements**: Hover states and micro-interactions

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Malak Grami - gramimalak@gmail.com

Project Link: [https://github.com/MalakGrami/portfolio](https://github.com/MalakGrami/portfolio)

---

⭐ Don't forget to give the project a star if you liked it!
