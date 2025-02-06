Great! Here are **3 React problems** for you to solve using **Context API, useReducer, useRef, and React Portal**. Try them on your own and let me know if you need help. 🚀  

---

### **Problem 1: Context API + useReducer (Todo List)**
👉 **Build a Todo List with Context API and useReducer.**  

#### **Requirements:**
1. Create a `TodoContext` using Context API.
2. Use `useReducer` to manage state (add, remove, toggle complete).
3. Provide `addTodo`, `removeTodo`, and `toggleTodo` functions.
4. Display the list of todos with a button to mark them as completed.
5. Allow removing todos.

**Example UI:**
```
📝 My Todos
✅ Buy groceries [Completed] ❌ Remove
⬜ Learn React [Incomplete] ✅ Mark as Done ❌ Remove
⬜ Read a book [Incomplete] ✅ Mark as Done ❌ Remove
```

---

### **Problem 2: useRef + React Portal (Click Outside to Close Modal)**
👉 **Create a Modal that closes when clicking outside, using useRef and React Portal.**  

#### **Requirements:**
1. Use `useRef` to track the modal div.
2. If a user clicks **outside the modal**, it should close.
3. Use `React Portal` to render the modal outside the root div.
4. Add a **button** to open the modal.

**Example UI:**
```
[Open Modal]
-----------------
|    Modal      |
|  Content      |
|  [Close]      |
-----------------
```

If the user **clicks outside the modal**, it should close automatically.

---

### **Problem 3: Context API + useReducer + useRef (Stopwatch App)**
👉 **Build a Stopwatch App using useReducer, useRef, and Context API.**  

#### **Requirements:**
1. Use `useReducer` to manage time (`start`, `stop`, `reset`).
2. Use `useRef` to store the timer interval.
3. Use `Context API` to manage stopwatch state globally.
4. Provide buttons for **Start, Stop, and Reset**.

**Example UI:**
```
🕒 Stopwatch: 00:12
[Start] [Stop] [Reset]
```

---

## 🎯 **Bonus Challenge**
**Combine all three problems** into a **single application** where:
- The **todo list** has a timer.
- Clicking on a todo opens a **modal** to edit it.
- The **modal closes when clicking outside**.

---

Try solving these problems, and let me know if you get stuck! 🚀🔥