<img width="1451" height="725" alt="Screenshot 2026-02-28 at 7 53 45 PM" src="https://github.com/user-attachments/assets/1092baca-0655-4916-a176-f38ba15fed7c" />

ADMISSION ANALYTICS DASHBOARD


📌 PROJECT OVERVIEW

The Admission Analytics Dashboard is a responsive and dynamic web application built for the University Admin Portal.

It provides administrators with real-time insights into application statistics through interactive charts, metric cards, and filtering functionality.

This project was developed as part of a one-day (8-hour) technical assignment to demonstrate frontend architecture, data visualization, and API handling.

🛠 TECHNOLOGY STACK

Frontend:

React (Functional Components + Hooks)

Tailwind CSS (Responsive UI)

Recharts (Charts & Data Visualization)

Fetch (API Integration)

Backend (Mock Server):

JSON Server

db.json (Mock Database)

✨ KEY FEATURES

1️⃣ Dashboard Layout
- Clean university-themed design
- Responsive across Mobile, Tablet, Desktop
- Structured layout with cards and charts

2️⃣ Metric Cards (Reusable Component)
- Total Applicants
- Verified Applicants
- Rejected Applicants
- Highlight Logic:
> 500 → Orange
> 1000 → Red
- Built using props for reusability

3️⃣ Data Visualization (Recharts)
📊 Bar Chart
- Applications per Program
📈 Line Chart
- Application Trends by Date
- Fully responsive
- Tooltip & Axis configured

4️⃣ Date Range Filter
- From – To filtering
- Optimized using useMemo
- ISO date format comparison

5️⃣ Custom useFetch Hook
- Axios-based data fetching
- Loading state management
- Error handling
- Refetch capability

6️⃣ Loader Component
- Displays during API requests
- Used for lazy-loaded charts

7️⃣ Empty State Component
- Handles no-data scenarios
- Handles API errors
- Handles empty filter results

8️⃣ Refresh Button
- Manual data refetching

📂 PROJECT STRUCTURE

src/
│
├── api/
│ analytics.js
│
├── hooks/
│ useFetch.js
│
├── Component/
│ ├── Card/
│ │ MetricCard.jsx
│ │
│ ├── Charts/
│ │ ProgramBarChart.jsx
│ │ TrendLineChart.jsx
│ │
│ ├── Loader.jsx
│ └── EmptyState.jsx
│
├── pages/
│ Dashboard.jsx
│
└── App.jsx

Root:
db.json

🗄 MOCK BACKEND SETUP (JSON SERVER)

Step 1: Install JSON Server

Option A (Global Install)
npm install -g json-server


Option B (Local Dev Dependency)
npm install json-server --save-dev

Step 2: Create db.json

Place the db.json file in the project root directory.
This file contains analytics data including:

totalApplicants

verifiedApplicants

rejectedApplicants

programApplications

trends

Step 3: Start Backend Server

Run the following command from the root directory:

json-server --watch db.json --port 5000

Server will start at:

http://localhost:5000

🔗 API ENDPOINT CONFIGURATION

In analytics.js:

const api = "http://localhost:5000/analytics
";
export default api;

Available Endpoint:

GET http://localhost:5000/analytics

🚀 RUNNING THE FRONTEND

Step 1: Install Dependencies

npm install

Step 2: Start React Application

npm run dev

Application will run at:

http://localhost:5173
 (or configured port)

📋 ASSIGNMENT REQUIREMENT COVERAGE

✔ Dashboard Layout with custom theme
✔ Total Applicants
✔ Verified Applicants
✔ Rejected Applicants
✔ Bar Chart (Applications per Program)
✔ Line Chart (Application Trends)
✔ Date Filter (From – To)
✔ Responsive Layout
✔ Refresh Button
✔ Loader & Empty State
✔ Highlight Threshold Logic
✔ Mock API Integration

⚡ PERFORMANCE OPTIMIZATIONS

useMemo for optimized filtering

React.lazy + Suspense for charts

Reusable components

Clean API abstraction

Separation of concerns
