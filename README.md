# 📝 Redux Toolkit Todo App

A simple todo list app built while learning **Redux Toolkit** — covers global state management with `createSlice`, `configureStore`, and `react-redux`, styled with Tailwind CSS.

## 📸 Preview

![Home page preview](./src/assets/home-page.png)

## ✨ Features

- ➕ Add new todos
- ✏️ Edit existing todos in place
- ❌ Delete todos
- 🌍 Global state managed with Redux Toolkit (no prop drilling)
- 🎨 Styled with Tailwind CSS

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📂 Project Structure

```
src/
├── appStore/
│   └── store.js          # Redux store configuration
├── features/
│   └── Todo/
│       └── todoSlice.js  # Todo slice: state + reducers (add/remove/update)
├── components/
│   ├── AddTodos.jsx      # Form to add a new todo
│   └── Todos.jsx         # List of todos with edit/delete
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

Run the dev server:

```bash
npm run dev
```

## 📚 What I Learned

This project was built to practice the core Redux Toolkit workflow:

- Setting up a store with `configureStore`
- Creating a slice with `createSlice` (actions + reducers in one place)
- Dispatching actions from components with `useDispatch`
- Reading state from the store with `useSelector`
- Wrapping the app with the Redux `<Provider>`

