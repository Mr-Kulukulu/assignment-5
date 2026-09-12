# 🚀 Dev Stack

> **Curated tools, technologies, and resources for developers building modern software.**

Dev Stack is a modern web application designed to help developers explore and build their ideal development stack. Users can browse different technologies, select the tools they want to work with, and create a personalized technology stack.

---

## ✨ Features

### 🧩 Explore Technologies

Browse a collection of modern development technologies and learn about each technology.

### ⚡ Build Your Development Stack

Select your favorite technologies and create your own development stack.

### 🎨 Modern & Responsive UI

A clean and responsive design that works well on desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

* ⚛️ React
* 📘 TypeScript
* 🎨 Tailwind CSS
* 🌐 HTML5
* 🎨 CSS3
* ⚡ JavaScript

---

# 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.
It makes React components easier to write and understand.

---

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

Simple way to remember:

* **Props → received from parent**
* **State → managed by the component**

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and manage changing data inside a React component.

In this project, I used `useState` to keep track of the **selected technologies** in the development stack.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code when something happens, such as when a component loads.

I used it to **load the JSON data when the component starts**, so the technology information could be displayed in the application.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list.

It allows React to understand which item was added, removed, or changed.

Example:

```tsx
{technologies.map((technology) => (
  <div key={technology.id}>
    {technology.name}
  </div>
))}
```

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

In this project, I used it to show a message when no technology has been selected yet.

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <SelectedTechnology technologies={selectedTechnologies} />
)}
```

So, if the stack is empty, the **"Your stack is empty"** message is shown.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

```tsx
<Technologies technologies={technologies} />
```

The child can send something back by using a **function passed from the parent as a prop**.

```tsx
<Child onSelect={handleSelect} />
```

Then the child calls that function when something happens.

**Simple idea:**

**Parent → Child:** Send data using props.
**Child → Parent:** Send information using a function from the parent.

---

## 👨‍💻 Developer

**Dev Stack**

Built with ❤️ using React, TypeScript & Tailwind CSS.

---

⭐ If you like this project, consider giving it a **star** on GitHub!
