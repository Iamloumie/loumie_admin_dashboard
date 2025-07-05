# React Dashboard Application

A modern, responsive dashboard application built with React, Synfusion Libary, and Tailwind CSS featuring comprehensive data visualization, e-commerce functionality, and customizable themes.

## Features

### 📊 Data Visualization
- Multiple chart types (Line, Bar, Pie, Area, Financial, Pyramid, Stacked)
- Interactive sparklines and data tables
- Real-time data updates
- Customizable chart configurations

### 🛍️ E-commerce Components
- Product catalog and shopping cart
- Order management system
- Customer database
- Employee management

### 🎨 User Interface
- Reusable UI components with Syncfusion
- Responsive design with Tailwind CSS
- Dark/Light theme switching
- Customizable color schemes
- Mobile-friendly sidebar navigation
- Interactive notifications system

### 📅 Productivity Tools
- Calendar integration
- Kanban board for project management
- Rich text editor
- Color picker utility
- Chat functionality

## Tech Stack

- **Frontend**: React 18+
- **UI Library**: Syncfusion
- **Styling**: Tailwind CSS
- **Build Tool**: Create React App with CRACO
- **State Management**: React Context API
- **Charts**: Custom chart components
- **Icons**: React Icons library
- **Netlify**: Static deployment

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Charts/         # Chart components
│   ├── Button.jsx      # Custom button component
│   ├── Cart.jsx        # Shopping cart
│   ├── Navbar.jsx      # Navigation bar
│   ├── Sidebar.jsx     # Side navigation
│   └── ...
├── pages/              # Main application pages
│   ├── Charts/         # Chart pages
│   ├── Ecommerce.jsx   # Dashboard home
│   ├── Calendar.jsx    # Calendar view
│   ├── Customers.jsx   # Customer management
│   └── ...
├── contexts/           # React Context providers
│   └── ContextProvider.js
├── data/               # Mock data and constants
│   └── dummy.js
└── App.js              # Main application component
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Configuration

### CRACO Configuration
The project uses CRACO (Create React App Configuration Override) for custom webpack configurations. See `craco.config.js` for current settings.

### Tailwind CSS
Tailwind CSS is configured via `tailwind.config.js`. The configuration includes:
- Custom color schemes
- Responsive breakpoints
- Custom utility classes

## Features Overview

### Dashboard Pages
- **Ecommerce**: Main dashboard with sales analytics
- **Orders**: Order management and tracking
- **Employees**: Staff management interface
- **Customers**: Customer database and analytics
- **Calendar**: Event scheduling and management
- **Kanban**: Project management board
- **Editor**: Rich text editing capabilities
- **ColorPicker**: Color selection utility

### Chart Types
- **Line Charts**: Trend analysis and time series data
- **Bar Charts**: Comparative data visualization
- **Pie Charts**: Proportional data representation
- **Area Charts**: Cumulative data visualization
- **Financial Charts**: Stock price and financial data
- **Pyramid Charts**: Hierarchical data display
- **Stacked Charts**: Multi-dimensional data comparison

### Customization
- **Theme Settings**: Switch between light and dark modes
- **Color Schemes**: Multiple pre-defined color palettes
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **User Profiles**: Customizable user settings

## Assets

The project includes sample e-commerce images located in `public/images/` and dummy data in `src/data/` for demonstration purposes.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ using Syncfusion, React, and Tailwind CSS with guidance from Adrian(JSMASTERY class, Author)