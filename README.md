# My Portfolio

A personal portfolio website built with React and Tailwind CSS.

## 🚀 Live Demo

Visit the live site: [https://abhishekbiyani08.github.io/my-portfolio](https://abhishekbiyani08.github.io/my-portfolio)

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- React Icons
- React Scroll
- Firebase

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/abhishekbiyani08/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

## 🚀 Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Make sure you have the `gh-pages` package installed:

```bash
npm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

This will:

- Build the project for production
- Deploy it to the `gh-pages` branch
- Make it available at your GitHub Pages URL

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── 404.html           # 404 page for GitHub Pages
│   └── ...                # Other static assets
├── src/
│   ├── components/        # React components
│   ├── assets/           # Images and other assets
│   ├── data/             # Data files
│   ├── App.js            # Main App component
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
├── build/                # Production build (generated)
└── package.json          # Dependencies and scripts
```

## ⚙️ Configuration

The project is configured for GitHub Pages with:

- `homepage` field in `package.json` set to your GitHub Pages URL
- Proper routing scripts in `index.html` and `404.html`
- Build and deploy scripts configured

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
