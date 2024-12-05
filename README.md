- Custom Table Component
Introduction
Custom Table Component is a React-based application that allows users to view and interact with tabular data. The table supports sorting, filtering, and dynamic styling, providing users with a flexible and customizable table experience. It is designed to demonstrate React best practices and the ability to create reusable components with an interactive interface.

Project Type
Frontend

Deployed App
Currently, this project can be deployed and tested locally or on any preferred hosting platform.

Directory Structure
bash
Copy code
custom-table/
  ├─ src/
  │   ├─ components/
  │   ├─ App.js
  │   └─ index.js
  ├─ public/
  │   └─ index.html
  ├─ styles/
  │   └─ customTable.css
  ├─ .gitignore
  ├─ package.json
  └─ README.md

  Features
Sorting: Allows users to sort data in ascending or descending order by clicking on the column headers.
Filtering: Users can filter data by entering a search term for each column, allowing for dynamic searching across different table columns.
Dynamic Styling: Customize table fonts, background colors, and text colors through props for a personalized UI.
Responsiveness: Ensures the table layout is responsive and adjusts properly on different screen sizes.
Reusable Components: Modular design with components like TableHeader, TableBody, TableContainer, and FilterInput to maintain clean, maintainable code.
Clear UI Feedback: Visual feedback for sorting actions (up/down arrows) and filtered columns.
Design Decisions and Assumptions
React for UI: React was chosen for building the table UI, leveraging its functional components and hooks (useState, useMemo) for managing state and UI logic.
Modular Component Structure: Components are split into smaller reusable parts (TableHeader, TableBody, etc.) for easy maintenance and scalability.
CSS Styling: Custom styles are defined in a separate CSS file to ensure clarity and maintainability.
No External APIs: This project works with locally defined data and doesn't rely on external APIs.

- Usage
After running the application, you can interact with the table by:

Sorting Columns: Clicking on the column headers sorts the data in ascending or descending order.
Filtering Columns: Enter a search term in the filter input fields to filter data in the columns based on user input.
Dynamic Styling: Pass in styleProps to customize the font size, background color, and text color of the table.
Credentials
No authentication is required for this application.

APIs Used
No external APIs are used in this project.

Technology Stack
Core Technologies
React: JavaScript library for building the user interface.
CSS: Custom styling for table components.
JavaScript: Used for managing interactivity and data manipulation in the table.
Additional Tools
useState and useMemo Hooks: For managing state and memoizing filtered/sorted data to optimize performance.
Screenshots
