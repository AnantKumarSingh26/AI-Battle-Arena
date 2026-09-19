# ⚔️ AI Battle Arena — Frontend

> **Two AIs. One Question. One Judge. One Winner. 🏆**

**AI Battle Arena** is a React-based Single Page Application (SPA) where two AI models compete to answer the same question, while a third AI model acts as the **Judge** and evaluates both responses to determine the winner.

The frontend follows an **MVC (Model–View–Controller)** architecture adapted for React, keeping API logic, application state, and UI components cleanly separated.

---

## ✨ Features

### 🤖 Dual-AI Face-Off

Two AI models independently answer the same user prompt, allowing their responses to be compared side-by-side.

### ⚖️ AI Judge

A dedicated Judge panel evaluates both responses and displays:

* 🏆 Winner
* 📊 Scores
* 🧠 Judge reasoning

### 🏗️ MVC Architecture

The application separates responsibilities into:

* **Model** → API communication and backend interaction
* **Controller** → State, loading, and error management
* **View** → React UI components

### 🎨 Responsive Dark UI

A modern, immersive **dark-themed arena interface** built with Tailwind CSS and designed to work across different screen sizes.

### ⚡ Real-Time API Integration

Uses **Axios** to communicate with the backend graph workflow and retrieve AI battle results.

### 🧭 Smart Routing

Uses React Router to handle application navigation and redirect the root route to `/graph`.

---

## 🛠️ Tech Stack

| Technology           | Purpose                       |
| -------------------- | ----------------------------- |
| **React.js**         | Frontend UI                   |
| **React Router v6**  | Client-side routing           |
| **Tailwind CSS**     | Styling and responsive design |
| **Axios**            | HTTP/API communication        |
| **JavaScript / JSX** | Application development       |
| **MVC Architecture** | Application structure         |

---

## 🏗️ Architecture

The application follows the following architecture:

```text
                    ┌───────────────────┐
                    │      User         │
                    │   Enters Prompt   │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │   PromptInput     │
                    │      (View)       │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │ Battle Controller │
                    │   (Controller)    │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │   Battle Model    │
                    │      (Model)      │
                    └─────────┬─────────┘
                              │
                              │ POST /graph
                              ▼
                    ┌───────────────────┐
                    │ Express Backend   │
                    │  AI Graph Flow    │
                    └─────────┬─────────┘
                              │
                              │ JSON Response
                              ▼
                    ┌───────────────────┐
                    │ Battle Controller │
                    │   Updates State   │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │      Arena        │
                    │      (View)       │
                    └─────────┬─────────┘
                              │
                 ┌────────────┴────────────┐
                 ▼                         ▼
        ┌─────────────────┐       ┌─────────────────┐
        │  ResponseCard   │       │   JudgePanel    │
        │   AI Responses  │       │ Winner & Score  │
        └─────────────────┘       └─────────────────┘
```

---

## 📂 Project Structure

The project follows an MVC-inspired folder structure:

```text
src/
│
├── models/
│   └── battleModel.js
│       └── Handles Axios API requests
│
├── controllers/
│   └── useBattleController.js
│       └── Manages state, loading & errors
│
├── views/
│   ├── Arena.jsx
│   │   └── Main battle arena layout
│   │
│   ├── Sidebar.jsx
│   │   └── Navigation & developer links
│   │
│   ├── PromptInput.jsx
│   │   └── User question input
│   │
│   ├── ResponseCard.jsx
│   │   └── Displays AI responses
│   │
│   └── JudgePanel.jsx
│       └── Displays winner & judge reasoning
│
├── app.routes.jsx
│   └── React Router configuration
│
└── main.jsx / index.js
    └── Application entry point
```

---

# 🚀 Getting Started

Follow these steps to run the frontend locally.

## Prerequisites

Before starting, make sure you have:

* **Node.js** installed
* **npm** or **Yarn** installed
* The AI Battle Arena backend running locally

---

## 📥 1. Clone the Repository

```bash
git clone <your-repo-url>

cd <your-frontend-folder-name>
```

---

## 📦 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

---

## 🔌 3. Configure the Backend

Make sure the backend server is running.

By default, the frontend sends requests to:

```text
http://localhost:3000/graph
```

The API URL is configured in:

```text
src/models/battleModel.js
```

Example:

```javascript
const API_URL = 'http://localhost:3000/graph';
```

If your backend is running on another port, update the URL accordingly:

```javascript
const API_URL = 'http://localhost:YOUR_BACKEND_PORT/graph';
```

> **Note:** Make sure the backend is running before starting a battle from the frontend.

---

## ▶️ 4. Start the Development Server

If you're using **Vite**:

```bash
npm run dev
```

If you're using **Create React App**:

```bash
npm start
```

The application will then be available at the local development URL shown in your terminal.

---

# 🧠 How It Works

The complete request flow can be summarized as:

**User → View → Controller → Model → Backend → Controller → View**

### 1. 📝 User Input

The user enters a question through:

```text
PromptInput.jsx
```

and clicks the **Battle** button.

### 2. 🎮 Controller

The `useBattleController.js` hook:

* Receives the user's prompt
* Sets the loading state
* Calls the model
* Handles the API response
* Handles errors
* Updates the application state

### 3. 📡 Model

`battleModel.js` communicates with the backend using Axios.

The request contains:

```json
{
  "prompt": "Your question here"
}
```

The backend processes the prompt through its AI graph workflow and returns the battle result.

### 4. 🖥️ Rendering

After receiving the response, the Controller updates the state.

The `Arena.jsx` view then renders:

* AI response cards
* Scores
* Winner
* Judge reasoning

---

# 🔄 Application Flow

```text
User
 │
 │ Enters question
 ▼
PromptInput.jsx
 │
 │ "Battle"
 ▼
useBattleController.js
 │
 │ API Request
 ▼
battleModel.js
 │
 │ POST /graph
 ▼
Backend / AI Graph
 │
 │ JSON Response
 ▼
useBattleController.js
 │
 │ Updates state
 ▼
Arena.jsx
 │
 ├───────────────┐
 ▼               ▼
ResponseCard   JudgePanel
 │               │
AI Responses   Winner
               Score
               Reasoning
```

---

# 📡 API Integration

The frontend communicates with the backend through the following endpoint:

```http
POST /graph
```

### Request

```json
{
  "prompt": "Your question here"
}
```

### Response

The frontend expects the backend to return a JSON payload containing the AI responses and judging information.

> The exact response structure depends on the backend implementation.

---

# 🎯 Project Goals

The project was designed to demonstrate:

* Clean React architecture
* Separation of concerns
* Custom React hooks
* REST API integration
* AI-powered workflows
* Responsive UI development
* Component-based design
* Scalable frontend structure

---

# 🔮 Future Improvements

Potential improvements include:

* [ ] Streaming AI responses
* [ ] Battle history
* [ ] User authentication
* [ ] Multiple AI model selection
* [ ] Custom judging criteria
* [ ] Persistent conversation history
* [ ] Animated battle transitions
* [ ] Performance optimizations
* [ ] Improved error and retry handling
* [ ] Production environment configuration

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### To contribute:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "feat: add your feature"
```

5. Push your branch

```bash
git push origin feature/your-feature
```

6. Open a Pull Request

---

# 👨‍💻 Developer

Built with ❤️ by **Anant Kumar Singh**

🔗 **LinkedIn:**
https://www.linkedin.com/in/anantkumarsingh-code

---

## ⭐ Support

If you find this project interesting, consider giving the repository a **⭐ Star** on GitHub!

> **AI Battle Arena — Let the models battle. Let the Judge decide. ⚔️🏆**
