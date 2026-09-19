# ⚔️ AI Battle Arena

> **Two AIs. One Question. One Judge. One Winner. 🏆**

AI Battle Arena is a full-stack application where two AI models independently answer the same problem statement. A third AI model acts as a judge and evaluates both answers based on copyright compliance, structure, clarity, and overall quality.

The application provides a fair and automated way to benchmark and compare AI-generated responses.

---

## ✨ Features

- Compare responses from two AI models
- Use an AI-powered judge to select the stronger response
- Display both AI answers side by side
- Show scores and judging reasoning
- Evaluate responses for:
  - Copyright compliance
  - Structure
  - Clarity
  - Overall quality
- Responsive dark-themed user interface
- REST API communication between frontend and backend
- LangChain and LangGraph-powered backend workflow
- MVC-inspired frontend architecture
- TypeScript backend with React frontend

---

## 🏗️ Application Architecture

```text
                         ┌─────────────────────┐
                         │        User         │
                         │   Enters a Prompt   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    React Frontend   │
                         │   PromptInput View  │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     Controller      │
                         │ State & API Handling│
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Axios         │
                         │   API Communication │
                         └──────────┬──────────┘
                                    │
                              POST /graph
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Backend   │
                         │   LangGraph Workflow│
                         └──────────┬──────────┘
                                    │
                 ┌──────────────────┼──────────────────┐
                 ▼                  ▼                  ▼
          ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
          │   AI Model 1│    │   AI Model 2│    │  AI Judge   │
          │   Response  │    │   Response  │    │ Evaluation  │
          └─────────────┘    └─────────────┘    └─────────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    JSON Response    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    Arena Interface  │
                         │ Responses & Winner  │
                         └─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript and JSX
- Vite
- React Router
- Axios
- Tailwind CSS
- ESLint

### Backend

- Node.js
- TypeScript
- Express.js
- LangChain
- LangGraph
- Google AI
- Mistral AI
- Cohere AI
- Zod
- Dotenv
- CORS
- TSX

---

## 📂 Project Structure

```text
AI-Battle-Arena/
│
├── Backend/
│   ├── server.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   │
│   └── src/
│       ├── app.ts
│       │
│       ├── ai/
│       │   ├── graph.ai.ts
│       │   └── model.ai.ts
│       │
│       └── config/
│           └── config.ts
│
├── Frontend/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   │
│   └── src/
│       ├── main.jsx
│       ├── app/
│       ├── controllers/
│       ├── features/
│       ├── models/
│       └── views/
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- API keys for the AI providers used by the backend

---

## 📥 Clone the Repository

```bash
git clone https://github.com/AnantKumarSingh26/AI-Battle-Arena.git
cd AI-Battle-Arena
```

---

## 🔐 Configure Backend Environment Variables

Create a `.env` file inside the `Backend` directory:

```env
PORT=3000
GOOGLE_API_KEY=your_google_api_key
MISTRAL_API_KEY=your_mistral_api_key
COHERE_API_KEY=your_cohere_api_key
```

> Never commit API keys or `.env` files to the repository.

---

## ▶️ Run the Backend

Open a terminal and run:

```bash
cd Backend
npm install
npm run dev
```

The backend will run at:

```text
http://localhost:3000
```

---

## ▶️ Run the Frontend

Open another terminal from the repository root:

```bash
cd Frontend
npm install
npm run dev
```

Vite will display the frontend URL in the terminal. It is usually available at:

```text
http://localhost:5173
```

Make sure the backend is running before starting an AI battle.

---

## 🔄 How the Application Works

1. The user enters a problem statement in the frontend.
2. The frontend sends the prompt to the backend.
3. The backend receives the request through the `/graph` endpoint.
4. Two AI models generate independent responses.
5. The AI judge compares both responses.
6. The judge evaluates the responses based on quality and compliance.
7. The backend returns the results as JSON.
8. The frontend displays:
   - Both AI responses
   - Scores
   - Winner
   - Judge reasoning

---

## 📡 API Documentation

### Health Check

```http
GET /
```

#### Response

```text
Resource Successfully Created!
```

---

### Start an AI Battle

```http
POST /graph
```

#### Request Body

```json
{
  "prompt": "Explain how artificial intelligence works."
}
```

#### Example Request

```bash
curl -X POST http://localhost:3000/graph \
  -H "Content-Type: application/json" \
  -d "{\"prompt\":\"Explain how artificial intelligence works.\"}"
```

#### Response

The API returns a JSON object containing the AI-generated responses and the judge's evaluation.

The exact response structure depends on the backend graph workflow.

---

## 🧩 Frontend Architecture

The frontend follows an MVC-inspired architecture:

```text
Frontend
│
├── Models
│   └── Handles API communication
│
├── Controllers
│   └── Handles state, loading, and errors
│
└── Views
    └── Renders the user interface
```

### Main Frontend Responsibilities

- Accept the user's prompt
- Send requests to the backend
- Display loading states
- Handle API errors
- Render AI responses
- Display scores and winner information
- Show the judge's explanation

---

## 🧠 Backend Architecture

The backend uses an Express server and an AI graph workflow:

```text
Client Request
      │
      ▼
Express API
      │
      ▼
LangGraph Workflow
      │
      ├── Generate first AI response
      ├── Generate second AI response
      └── Judge both responses
      │
      ▼
Return JSON Result
```

---

## 🧪 Available Commands

### Backend

Run these commands from the `Backend` directory:

```bash
npm install
npm run dev
```

### Frontend

Run these commands from the `Frontend` directory:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

---

## ⚠️ Troubleshooting

### Backend is not responding

Make sure:

- The backend terminal is running.
- The `.env` file exists inside `Backend`.
- The `PORT` value is configured correctly.
- The required AI API keys are valid.

### Frontend cannot connect to the backend

Make sure:

- The backend is running.
- The frontend is using the correct backend URL.
- The request is being sent to:

```text
http://localhost:3000/graph
```

- CORS is enabled on the backend.

### AI graph fails

Check:

- API key configuration.
- Network connectivity.
- Terminal logs from the backend.
- The request contains a valid `prompt` value.

---

## 🔒 Security Considerations

- Do not expose API keys in the frontend.
- Store secrets in environment variables.
- Do not commit `.env` files.
- Validate incoming user prompts.
- Add authentication before public deployment.
- Add rate limiting to protect AI provider usage.
- Add centralized error handling.
- Use production environment variables in deployment.

---

## 🔮 Future Improvements

- Streaming AI responses
- Battle history
- User authentication
- Multiple AI model selection
- Custom judging criteria
- Persistent conversation history
- Animated battle transitions
- Automated backend and frontend tests
- Improved retry and error handling
- Response caching
- User accounts and leaderboards
- Docker support
- Production deployment configuration
- API rate limiting
- Database integration

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

### Contribution Steps

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "feat: add your feature"
```

5. Push your branch:

```bash
git push origin feature/your-feature
```

6. Open a Pull Request.

---

## 👨‍💻 Developer

Built with ❤️ by **Anant Kumar Singh**

- GitHub: [AnantKumarSingh26](https://github.com/AnantKumarSingh26)
- LinkedIn: [Anant Kumar Singh](https://www.linkedin.com/in/anantkumarsingh-code)

---

## ⭐ Support

If you find this project interesting, consider giving the repository a star.

> **AI Battle Arena — Let the models battle. Let the Judge decide. ⚔️🏆**