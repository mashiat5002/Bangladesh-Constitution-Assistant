# 🇧🇩 Bangladesh Constitution Assistant

> **An AI-powered Legal Question Answering System for the Constitution of Bangladesh using Transformer-based Deep Learning Models**

![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black.svg)
![Transformers](https://img.shields.io/badge/HuggingFace-Transformers-yellow.svg)
![FAISS](https://img.shields.io/badge/FAISS-Vector_Search-green.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## 📖 Overview

The **Bangladesh Constitution Assistant** is an AI-powered legal question-answering system designed to help users understand the **Constitution of Bangladesh** through natural language.

Instead of searching through lengthy legal documents manually, users can ask questions in plain language, and the system intelligently retrieves the relevant constitutional article before generating an accurate answer using transformer-based deep learning models.

This project demonstrates how modern **Natural Language Processing (NLP)**, **semantic search**, and **large transformer architectures** can be combined to build an intelligent legal information retrieval system.

---

# ✨ Features

* 🔍 Detects whether a question is related to the Constitution
* 📚 Retrieves the most relevant constitutional article
* 🤖 Generates context-aware answers using a fine-tuned mBART model
* ⚡ Uses semantic search for high retrieval accuracy
* 🎯 Supports both article-number lookup and semantic article matching
* 🌐 Modern web interface built with Next.js
* 🧠 Transformer-based deep learning pipeline

---

# 🏗 System Architecture

```text
                    User Question
                          │
                          ▼
                  Next.js Frontend
                          │
                          ▼
                    Backend API
                          │
                          ▼
        Relevance Detection (E5-base-v2 + FAISS)
                    │                 │
          Irrelevant (0)        Relevant (1)
                │                    │
                ▼                    ▼
         Reject Request      Article Retrieval
                              │
               ┌──────────────┴──────────────┐
               │                             │
               ▼                             ▼
      Direct Article Lookup      Semantic Matching
                                   (XLM-RoBERTa)
               └──────────────┬──────────────┘
                              ▼
                Constitutional Article Context
                              │
                              ▼
                 Fine-tuned mBART Generator
                              │
                              ▼
                     Generated Response
                              │
                              ▼
                     Frontend Display
```

---

# 🧠 Deep Learning Pipeline

The system consists of **three major stages**.

## 1. Question Relevance Detection

Before generating an answer, the system determines whether the user's question is actually related to the Constitution of Bangladesh.

### Model

* **Sentence Transformer**

  * `intfloat/e5-base-v2`

### Search Engine

* **FAISS Vector Database**

### Labels

| Label | Meaning                       |
| ----- | ----------------------------- |
| 1     | Constitution-related question |
| 0     | Irrelevant question           |

Only relevant questions continue to the next stage.

---

## 2. Constitutional Article Retrieval

Once a question is classified as relevant, the assistant retrieves the appropriate constitutional article.

Two retrieval strategies are used.

### Direct Article Lookup

If the user specifies an article number:

> Explain Article 27

the system directly retrieves the corresponding constitutional article.

### Semantic Article Matching

If no article number is mentioned, the assistant searches semantically using:

* Fine-tuned **XLM-RoBERTa**

This allows users to ask natural questions such as:

> Can the government discriminate against citizens?

without needing to know the article number.

---

## 3. Answer Generation

After retrieving the constitutional article, the answer generation model receives:

```
Context:
<Constitution Article>

Question:
<User Question>
```

The model then generates an accurate constitutional response.

### Model

* Fine-tuned **mBART**

Training data consists of:

* Constitutional Article
* User Question
* Ground Truth Answer

---

# 🛠 Technology Stack

## Frontend

* Next.js
* React
* Tailwind CSS (optional)
* JavaScript / TypeScript

## Backend

* Python
* FastAPI / Flask
* Google Colab
* Ngrok

## Deep Learning

* Hugging Face Transformers
* Sentence Transformers
* FAISS
* XLM-RoBERTa
* mBART
* PyTorch

---

# 📂 Project Structure

```text
Bangladesh-Constitution-Assistant/
│
├── frontend/                 # Next.js application
│
├── backend/
│   ├── api/
│   ├── models/
│   ├── retrieval/
│   ├── utils/
│   └── server.py
│
├── datasets/
│   ├── constitution_articles.csv
│   ├── qa_dataset.csv
│   └── relevance_dataset.csv
│
├── notebooks/
│   ├── training.ipynb
│   ├── retrieval.ipynb
│   └── inference.ipynb
│
├── models/
│   ├── e5/
│   ├── xlm-roberta/
│   └── mbart/
│
├── requirements.txt
├── README.md
└── LICENSE
```

---

# 🚀 Workflow

```text
User Question
      │
      ▼
Relevance Detection
      │
      ▼
Article Retrieval
      │
      ▼
Context Preparation
      │
      ▼
mBART Answer Generation
      │
      ▼
Generated Constitutional Answer
```

---

# 💡 Example

### User Question

> What does Article 27 say?

### Retrieved Context

```
Article 27:
All citizens are equal before law and are entitled to equal protection of law.
```

### Generated Response

```
Article 27 guarantees equality before the law and ensures
that every citizen receives equal protection under the law.
```

---

# 🎯 Objectives

* Improve accessibility to constitutional information
* Reduce manual searching through legal documents
* Demonstrate the application of transformer models in legal AI
* Combine semantic search with generative question answering
* Build an intelligent legal assistant for educational and research purposes

---

# 🔬 Models Used

| Task               | Model                  |
| ------------------ | ---------------------- |
| Question Embedding | intfloat/e5-base-v2    |
| Vector Search      | FAISS                  |
| Article Matching   | Fine-tuned XLM-RoBERTa |
| Answer Generation  | Fine-tuned mBART       |

---

# 📈 Future Improvements

* Support Bengali and English multilingual queries
* Citation-aware answer generation
* Retrieval-Augmented Generation (RAG)
* Voice-based interaction
* PDF upload for legal documents
* Explainable AI with highlighted evidence
* Deployment using Docker and cloud services
* Fine-tuning with larger constitutional QA datasets

---

# 🎓 Academic Context

This project was developed as part of the **Deep Learning (CSE-460)** course at **North East University Bangladesh**.

**Course Instructor**

**Razorshi Prozzwal Talukder**

Lecturer

North East University Bangladesh

---

# 🤝 Contributing

Contributions are welcome.

If you would like to improve the project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📜 License

This project is intended for educational and research purposes.

Choose an appropriate open-source license (such as MIT or Apache 2.0) before public release.

---

# 🙏 Acknowledgements

* Hugging Face Transformers
* Sentence Transformers
* Facebook AI Research (FAISS)
* PyTorch
* Next.js
* The Constitution of the People's Republic of Bangladesh

---

## ⭐ Project Summary

The **Bangladesh Constitution Assistant** integrates **semantic search**, **transformer-based language understanding**, and **context-aware answer generation** into a unified legal AI system. By filtering irrelevant questions, retrieving the most relevant constitutional provisions, and generating informed responses, it provides an accessible and intelligent way to explore the Constitution of Bangladesh while showcasing practical applications of deep learning and natural language processing.
