# ⚔️ AI Battle Arena - Backend

The backend service for **AI Battle Arena**. It receives a user prompt, sends it to two AI models, evaluates their responses using an AI judge, and returns the result to the frontend.

> **Two AIs. One Question. One Judge. One Winner. 🏆**

---

## ✨ Features

- Accepts user questions through a REST API
- Generates responses from two AI models
- Uses an AI-powered judge to compare the responses
- Evaluates responses based on:
  - Copyright compliance
  - Structure
  - Clarity
  - Overall quality
- Uses LangChain and LangGraph for AI workflow orchestration
- Supports Google, Mistral, and Cohere AI integrations
- Enables Cross-Origin Resource Sharing using CORS
- Loads configuration securely through environment variables
- Built with TypeScript and Express.js

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| TypeScript | Backend development |
| Express.js | REST API server |
| LangChain | AI application framework |
| LangGraph | AI workflow orchestration |
| Google AI | AI model integration |
| Mistral AI | AI model integration |
| Cohere AI | AI model integration |
| Zod | Data validation |
| Dotenv | Environment variable management |
| CORS | Frontend-backend communication |
| TSX | TypeScript development server |

---

## 📂 Project Structure

```text
Backend/
│
├── server.ts
├── package.json
├── package-lock.json
├── tsconfig.json
│
└── src/
    │
    ├── app.ts
    │
    ├── ai/
    │   ├── graph.ai.ts
    │   └── model.ai.ts
    │
    └── config/
        └── config.ts
```

---

## 🧠 Backend Architecture

```text
Client Request
      │
      ▼
POST /graph
      │
      ▼
Express Application
      │
      ▼
AI Graph Workflow
      │
      ├── AI Model 1 generates a response
      │
      ├── AI Model 2 generates a response
      │
      └── AI Judge evaluates both responses
      │
      ▼
JSON Response
      │
      ▼
Frontend
```

---

## 🚀 Getting Started

### Prerequisites

Before running the backend, make sure you have:

- Node.js installed
- npm installed
- API keys for the AI providers used by the project

---

## 📥 Installation

From the repository root, move into the backend directory:

```bash
cd Backend
```

Install the dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `Backend` directory:

```env
PORT=3000
GOOGLE_API_KEY=your_google_api_key
MISTRAL_API_KEY=your_mistral_api_key
COHERE_API_KEY=your_cohere_api_key
```

### Environment Variable Description

| Variable | Description |
|---|---|
| `PORT` | Port on which the backend server runs |
| `GOOGLE_API_KEY` | API key for Google AI services |
| `MISTRAL_API_KEY` | API key for Mistral AI services |
| `COHERE_API_KEY` | API key for Cohere AI services |

> Never commit your `.env` file or API keys to GitHub.

---

## ▶️ Run the Development Server

Start the backend in development mode:

```bash
npm run dev
```

The server will start on the port configured in your `.env` file.

Example:

```text
Server is running on PORT 3000
```

The backend will be available at:

```text
http://localhost:3000
```

---

## 📡 API Endpoints

### Health Check

```http
GET /
```

#### Response

```text
Resource Successfully Created!
```

---

### Run an AI Battle

```http
POST /graph
```

#### Request Body

```json
{
  "prompt": "Explain the difference between JavaScript and TypeScript."
}
```

#### Example using cURL

```bash
curl -X POST http://localhost:3000/graph \
  -H "Content-Type: application/json" \
  -d "{\"prompt\":\"Explain the difference between JavaScript and TypeScript.\"}"
```

#### Response

The endpoint returns a JSON response containing the generated answers and the judge's evaluation.

The exact response structure depends on the AI graph workflow implementation.

---

## 🔄 Request Flow

1. The frontend sends a prompt to `POST /graph`.
2. Express receives and parses the request body.
3. The prompt is passed to the LangGraph workflow.
4. Two AI models generate independent answers.
5. An AI judge evaluates both answers.
6. The backend returns the battle result as JSON.
7. The frontend displays the responses, scores, winner, and reasoning.

---

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server with automatic reload |
| `npm test` | Test command placeholder |

```bash
npm run dev
```

---

## ⚠️ Error Handling

If the AI graph fails to run, the backend returns:

```json
{
  "error": "Graph failed to run"
}
```

with HTTP status code `500`.

---

## 🔒 Security Notes

- Keep all API keys inside environment variables.
- Do not upload `.env` files to the repository.
- Do not expose provider API keys in frontend code.
- Validate user input before sending it to external AI services.
- Add rate limiting before deploying the application publicly.

---


## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository.
2. Create a feature branch:

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

If you find this project useful, consider giving the repository a star.

> **AI Battle Arena — Let the models battle. Let the Judge decide. ⚔️🏆**