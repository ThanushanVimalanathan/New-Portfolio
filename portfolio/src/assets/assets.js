import logo from './logo4.png'
import react_icon from './ReactIcon.png'
import express_icon from './Express.png'
import node_icon from './Node.png'
import mongodb_icon from './MongoDbIcon.png'
import aws_icon from './AWS.png'
import docker_icon from './Docker.png'
import python_icon from './Python.png'
import java_icon from './Java.png'
import git_icon from './Git.png'
import fastAPI_icon from './FastAPI.png'
import profile_pic from './pro_pic.png'


import neonBrain from './BlueNeonBrain_2.png'
import neon_rocker from './NeonPaperPlane.png'
import neon_world from './GlobalNetworkGlobe.png'
import neon_Stack from './GreenStackedPanes.png'

import download_icon from './download_icon.png'




export const assets = {
    logo,
    react_icon,
    profile_pic,
    express_icon,
    node_icon,
    mongodb_icon,
    aws_icon,
    docker_icon,
    python_icon,
    java_icon,
    git_icon,
    fastAPI_icon,
    neonBrain,
    neon_rocker,
    neon_world,
    neon_Stack,
    download_icon
    
    
}

export const PROJECTS = [

  // ----- MERN Projects -----
  {
    title: "E-Com Webside",
    description:
      "Full-stack e-commerce app with JWT auth, cart, Stripe payments & an admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    badge: { label: "FULL-STACK", tone: "emerald" },
    tags: ["MERN", "Stripe", "JWT", "Vite"],
    category: "MERN",
    repo: "https://github.com/ThanushanVimalanathan/E-Com-webside",
  },
  {
    title: "MERN Chat App",
    description:
      "Real-time chat application with multiple rooms and instant messaging via Socket.IO.",
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop",
    badge: { label: "FULL-STACK", tone: "emerald" },
    tags: ["MERN", "Socket.IO", "Realtime", "Express"],
    category: "MERN",
    repo: "https://github.com/ThanushanVimalanathan/MERN-Chatapp",
  },
  {
    title: "Food Order App",
    description:
      "Food ordering web app for browsing menus, managing a cart, and placing orders.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    badge: { label: "FULL-STACK", tone: "emerald" },
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "MERN",
    repo: "https://github.com/ThanushanVimalanathan/Food-Order",
  },
  {
    title: "Online Gift Shop",
    description:
      "MERN-based online gift store with product browsing and order flow.",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop",
    badge: { label: "FULL-STACK", tone: "emerald" },
    tags: ["MERN", "React", "MongoDB", "E-commerce"],
    category: "MERN",
    repo: "https://github.com/ThanushanVimalanathan/online-gift-shop",
  },
  {
    title: "Hotel Booking Platform",
    description:
      "Hotel booking web app for browsing, searching and reserving rooms with confirmations.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    badge: { label: "FULL-STACK", tone: "emerald" },
    tags: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    category: "MERN",
    repo: "https://github.com/ThanushanVimalanathan/Hottel-Booking",
  },

  // ----- AI / ML Projects -----
  {
    title: "Potato Leaf Disease Detection",
    description:
      "CNN-based classifier trained on PlantVillage to detect early/late blight in potato leaves.",
    image:
      "https://agritechfuture.com/wp-content/uploads/2025/07/u3164177947_An_ultra_high_resolution_photograph_of_a_mans_han_89a12a7f-af7d-47eb-88d7-f099e9c6363b_1-1024x574.png",
    badge: { label: "AI / ML", tone: "sky" },
    tags: ["TensorFlow", "Keras", "CNN", "Python"],
    category: "AI / ML",
    repo: "https://github.com/ThanushanVimalanathan/Potato_Leaf_disease_prediction",
  },
  {
    title: "Weather Prediction (Decision Tree & RF)",
    description:
      "Supervised learning notebook comparing Decision Tree and Random Forest models for weather forecasting.",
    image:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=800&auto=format&fit=crop",
    badge: { label: "AI / ML", tone: "sky" },
    tags: ["Scikit-learn", "Pandas", "Python", "Jupyter"],
    category: "AI / ML",
    repo: "https://github.com/ThanushanVimalanathan/weather_prediction-Decission_Tree_and_RandomForest-",
  },
  {
    title: "OCV Car Counter",
    description:
      "Real-time vehicle detection, tracking & line-crossing counter using YOLOv8 and SORT.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    badge: { label: "AI / CV", tone: "sky" },
    tags: ["YOLOv8", "OpenCV", "SORT", "Python"],
    category: "AI / ML",
    repo: "https://github.com/ThanushanVimalanathan/OCV-Car-Counter",
  },
  {
    title: "GradientBoost Shop Sales Predictor",
    description:
      "Gradient Boosting regression model that forecasts shop sales from historical trends.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    badge: { label: "AI / ML", tone: "sky" },
    tags: ["Gradient Boosting", "Scikit-learn", "Pandas", "Python"],
    category: "AI / ML",
    repo: "https://github.com/ThanushanVimalanathan/GradianBoost-Predict-shop-sales-",
  },
  {
    title: "Medical Prediction ML",
    description:
      "Exploratory ML notebook for basic medical outcome prediction from health data.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    badge: { label: "AI / ML", tone: "sky" },
    tags: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    category: "AI / ML",
    repo: "https://github.com/ThanushanVimalanathan/Medical_prediction_ML",
  },

  // ----- GEN-AI Projects -----
  {
    title: "AI Text Summarizer",
    description:
      "Dialogue summarization model fine-tuning PEGASUS on the SAMSum dataset with Hugging Face.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    badge: { label: "GEN-AI", tone: "violet" },
    tags: ["Transformers", "PyTorch", "PEGASUS", "Python"],
    category: "GEN-AI",
    repo: "https://github.com/ThanushanVimalanathan/GEN-AI-Text_Summarization",
  },
  {
    title: "Telegram GPT Chat Bot",
    description:
      "Context-aware Telegram bot powered by OpenAI's GPT with async message handling.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    badge: { label: "GEN-AI", tone: "violet" },
    tags: ["Python", "OpenAI API", "aiogram", "Telegram"],
    category: "GEN-AI",
    repo: "https://github.com/ThanushanVimalanathan/Telegram-chat-bot",
  },
  {
    title: "Custom Website Chatbot",
    description:
      "RAG-powered chatbot that answers questions from scraped website content using LangChain & FAISS.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    badge: { label: "GEN-AI", tone: "violet" },
    tags: ["LangChain", "FAISS", "OpenAI", "Python"],
    category: "GEN-AI",
    repo: "https://github.com/ThanushanVimalanathan/CustomWebsiteChatbot",
  },
  {
    title: "Interview Question Creator",
    description:
      "Gen-AI tool that automatically generates interview questions from source material.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    badge: { label: "GEN-AI", tone: "violet" },
    tags: ["LLM", "Python", "NLP"],
    category: "GEN-AI",
    repo: "https://github.com/ThanushanVimalanathan/InterviewQuestionCreater",
  },
  {
    title: "RAG with LlamaIndex",
    description:
      "RAG demo indexing local documents with Gemini/HuggingFace embeddings and querying via Gemini LLM.",
    image:
      "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=800&auto=format&fit=crop",
    badge: { label: "GEN-AI", tone: "violet" },
    tags: ["LlamaIndex", "Gemini", "RAG", "Python"],
    category: "GEN-AI",
    repo: "https://github.com/ThanushanVimalanathan/RAG_LlamaIndex",
  },
  {
    title: "Text-to-Image Generator",
    description:
      "Generative AI pipeline that produces images from text prompts.",
    image:
      "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=800&auto=format&fit=crop",
    badge: { label: "GEN-AI", tone: "violet" },
    tags: ["Diffusion", "Python", "Generative AI"],
    category: "GEN-AI",
    repo: "https://github.com/ThanushanVimalanathan/Text-to-image_gen",
  },

  // ----- Python Projects -----
  {
    title: "Snake Game",
    description: "Classic Snake game built in Python.",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    badge: { label: "PYTHON", tone: "amber" },
    tags: ["Python", "Pygame", "Game Dev"],
    category: "Python",
    repo: "https://github.com/ThanushanVimalanathan/snake-game",
  },
  {
    title: "Inventory Management System",
    description: "Python application for tracking and managing inventory records.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    badge: { label: "PYTHON", tone: "amber" },
    tags: ["Python", "Database", "CRUD"],
    category: "Python",
    repo: "https://github.com/ThanushanVimalanathan/Inventory_management",
  },
];