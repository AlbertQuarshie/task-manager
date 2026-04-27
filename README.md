# Task Manager

---

## A. Contributor

- **Albert Junior Quarshie**
- **Maryjane Wakuthii**
- **Natasha Bolyn Oyando**


---

## B. Overview

**Task Manager** is a collaborative, high-performance task management
application designed to simulate a real-world team workflow environment.

- It enables teams to efficiently manage tasks with secure authentication,
  protected routing, and centralized state management.

- Built with a focus on performance optimization, scalability, and a clean,
  responsive user interface using modern React best practices.

---

## C. Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/AlbertQuarshie/task-manager.git
cd task-manager
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

### 4. Build for Production

```bash
npm run build
```

---

## D. Usage

### 1. Authentication

- Users can securely log in and log out
- Sessions are persisted using LocalStorage

### 2. Dashboard Access

- Navigate to the dashboard after login
- Protected routes restrict unauthorized access

### 3. Task Management

- Create new tasks with unique IDs
- View all tasks in a responsive list
- Update task status (Pending / Completed)
- Delete tasks from the system

---

## E. Features

### 1. User Authentication

- Secure login/logout functionality
- Persistent sessions using browser storage

### 2. Protected Routing

- Dashboard routes accessible only to authenticated users

### 3. Full CRUD Operations

- Create, Read, Update, and Delete tasks seamlessly

### 4. Data Persistence

- Automatic synchronization with LocalStorage

### 5. Performance Optimization

- Efficient rendering using modern React hooks:
  - React.memo
  - useCallback
  - useMemo

### 6. Responsive Design

- Mobile-first layout built with Tailwind CSS

---

## F. Tech Stack

| Layer            | Technology                |
| ---------------- | ------------------------- |
| Frontend         | React 18                  |
| State Management | Redux Toolkit (RTK)       |
| Routing          | React Router DOM v6       |
| Styling          | Tailwind CSS              |
| Storage          | LocalStorage              |
| Version Control  | Git & GitHub              |

---

## G. Project Structure

```plaintext
src/
├── components/
├── pages/
├── redux/
├── utils/
├── App.jsx
└── main.jsx
```

---

## H. Performance Optimizations

- React.memo for component memoization
- useCallback for stable function references
- useMemo for optimized computations

---

## I. Group Collaboration & Workflow

- Feature branch workflow
- Minimum 15 meaningful commits
- Peer-reviewed pull requests before merging

---

## J. Contribution Summary

- Member 1 (Albert): Architecture, Authentication, Routing
- Member 2 (Maryjane): Redux, CRUD, Performance
- Member 3 (Natasha): UI, Tailwind, Responsiveness

---
