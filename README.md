# USICT One - USICT Management Dashboard

A modern, responsive school management system built with Next.js 14, TypeScript, and Tailwind CSS. This comprehensive dashboard provides role-based access for administrators, teachers, students, and parents to manage all aspects of College operations.

## ✨ Features

### 🎯 Core Functionality
- **Multi-role Dashboard** - Admin, Teacher, Student, and Parent interfaces
- **Student Management** - Complete student profiles, enrollment, and tracking
- **Teacher Management** - Staff profiles, subject assignments, and class management
- **Academic Management** - Subjects, classes, lessons, and curriculum planning
- **Assessment System** - Exams, assignments, results, and grading
- **Attendance Tracking** - Real-time attendance monitoring and reporting
- **Event Management** - School events, calendar integration, and scheduling
- **Communication Hub** - Messages, announcements, and notifications

### 🎨 UI/UX Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Custom Scrollbars** - Hover-activated, styled scrollbars
- **Interactive Charts** - Data visualization with Recharts
- **Role-based Navigation** - Dynamic menu based on user permissions
- **Modern Interface** - Clean, intuitive design with custom color palette

## 🛠️ Tech Stack(Currently in frontend dev phase)

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Custom PNG assets
- **Development:** ESLint, PostCSS

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── (dashboard)/          # Dashboard layout group
│   │   ├── globals.css           # Global styles & custom scrollbar
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   ├── AttendanceChart.tsx   # Attendance visualization
│   │   ├── CountChart.tsx        # Statistics charts
│   │   ├── finance.tsx           # Financial components
│   │   ├── Menu.tsx              # Navigation menu
│   │   ├── Navbar.tsx            # Top navigation bar
│   │   └── UserCard.tsx          # User profile cards
│   └── lib/
│       └── data.ts               # Mock data & types
├── public/                       # Static assets (icons, images)
├── tailwind.config.ts           # Tailwind configuration
└── package.json                 # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "USICT One/frontend"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#C3EBFA` (lamaSky) / `#EDF9FD` (lamaSkyLight)
- **Purple Accent:** `#CFCEFF` (lamaPurple) / `#F1F0FF` (lamaPurpleLight)  
- **Yellow Highlight:** `#FAE27C` (lamaYellow) / `#FEFCE8` (lamaYellowLight)
- **Background:** `#F7F8FA`

### Custom Features
- **Hover Scrollbars** - Hidden by default, appear on hover with light gray styling
- **Responsive Sidebar** - Adaptive width based on screen size
- **Role-based Menu** - Dynamic navigation items based on user role

## 📊 Data Management

The application uses mock data located in `src/lib/data.ts` containing:
- Teachers, Students, Parents data
- Subjects, Classes, Lessons
- Exams, Assignments, Results
- Events, Announcements
- Calendar events with scheduling

## 🔐 Role-based Access

### Admin
- Full system access
- User management
- System configuration
- All reports and analytics

### Teacher  
- Class and student management
- Lesson planning
- Grade management
- Attendance tracking

### Student
- Personal dashboard
- Assignments and exams
- Results and attendance
- Event calendar

### Parent
- Child's academic progress
- Communication with teachers
- Event notifications
- Attendance monitoring

## 🎯 Key Components

### Dashboard Layout
- **Responsive sidebar** with role-based menu items
- **Fixed navbar** with search, notifications, and user profile
- **Custom scrollable content** area with hover scrollbars

### Navigation Menu
- **Dynamic menu items** based on user role
- **Icon-based navigation** with descriptive labels
- **Responsive design** - icons only on mobile, full labels on desktop

### Charts & Analytics
- **Attendance visualization** with Recharts
- **Statistical counters** for key metrics
- **Interactive data displays**

## 🚧 Development Status

This is a frontend-only implementation with mock data. Future enhancements may include:
- Backend API integration
- Authentication system
- Real-time notifications
- File upload functionality
- Advanced reporting features

## 📝 License

This project is part of the USICT One school management system.

---

**Built with ❤️ by Kaustav Bhalla**