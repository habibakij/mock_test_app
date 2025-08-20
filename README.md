# Learning Platform Website

A modern, responsive learning platform website built with React, TypeScript, and Tailwind CSS. This project recreates a beautiful Figma design for an educational platform offering mock tests, courses, and learning resources.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Components**: Hover effects, expandable FAQ section, and smooth transitions
- **Test Cards Grid**: Display of various learning assessments with pricing and details
- **FAQ Section**: Expandable accordion-style frequently asked questions
- **Professional Footer**: Complete with contact info, social links, and payment methods
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your computer:

- **Node.js** (version 16.0 or higher)
  - Download from: https://nodejs.org/
  - To check if installed: `node --version`
- **npm** (comes with Node.js)
  - To check if installed: `npm --version`
- **Git** (optional, for version control)
  - Download from: https://git-scm.com/

## 🛠️ Installation Steps

### Step 1: Download the Project
1. Download the project ZIP file
2. Extract it to your desired location
3. Open terminal/command prompt in the project folder

### Step 2: Install Dependencies
```bash
# Navigate to project directory (if not already there)
cd learning-platform-website

# Install all required packages
npm install
```

This will install all dependencies including:
- React 18
- TypeScript
- Tailwind CSS
- Vite (build tool)
- Lucide React (icons)

### Step 3: Start Development Server
```bash
# Start the development server
npm run dev
```

The application will start and you'll see output like:
```
  VITE v5.4.2  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 4: Open in Browser
1. Open your web browser
2. Go to `http://localhost:5173/`
3. You should see the learning platform website running!

## 📁 Project Structure

```
learning-platform-website/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section with illustration
│   │   ├── TestCard.tsx   # Individual test card component
│   │   ├── TestsSection.tsx # Grid of test cards
│   │   ├── FAQSection.tsx # FAQ accordion section
│   │   └── Footer.tsx     # Footer with links and contact info
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   ├── index.css         # Global styles and Tailwind imports
│   └── vite-env.d.ts     # TypeScript declarations
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build tool configuration
└── README.md            # This file
```

## 🎨 Customization

### Changing Colors
The project uses a consistent color scheme. To modify colors, edit the Tailwind classes in the components:
- Primary: `orange-500`, `orange-400`
- Background: `gray-900`, `gray-50`
- Text: `gray-900`, `gray-600`, `gray-400`

### Adding New Test Cards
Edit `src/components/TestsSection.tsx` and add new objects to the `tests` array:

```typescript
{
  title: "Your Test Name",
  author: "Author Name",
  date: "Date",
  questions: 50,
  marks: 200,
  minutes: 60,
  hasNegative: false,
  price: 'Free' as const, // or a number like 450
  subjects: ["Subject1", "Subject2"]
}
```

### Modifying FAQ Questions
Edit `src/components/FAQSection.tsx` and update the `faqs` array with your questions and answers.

### Updating Company Information
Edit `src/components/Footer.tsx` to change:
- Company name and description
- Contact information
- Social media links
- Address and phone numbers

## 🚀 Building for Production

When you're ready to deploy your website:

```bash
# Create production build
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment Options

You can deploy this website to various platforms:

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Your site is live!

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### Traditional Web Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to your web server

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library
- **ESLint** - Code linting and quality

## 📞 Support

If you encounter any issues:

1. **Check Node.js version**: Ensure you have Node.js 16+ installed
2. **Clear cache**: Delete `node_modules/` and run `npm install` again
3. **Check console**: Look for error messages in browser developer tools
4. **Port conflicts**: If port 5173 is busy, Vite will automatically use another port

## 🎯 Next Steps

After getting the project running, you might want to:

1. **Add a backend**: Connect to a database for dynamic content
2. **Add authentication**: User login and registration
3. **Add payment integration**: Stripe or other payment processors
4. **Add more pages**: About, Contact, Course details pages
5. **SEO optimization**: Add meta tags and structured data
6. **Performance optimization**: Image optimization, lazy loading

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed.

---

**Happy coding! 🚀**

For any questions or support, please refer to the documentation of the individual technologies used.