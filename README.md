[![Premium Photo | Chef Cooking Food Professional Chef Cooking with Wok ...](https://tse2.mm.bing.net/th?id=OIP.CWrhGwYBkSiQsEJB5cHtlAHaE7\&pid=Api)](https://www.freepik.com/premium-ai-image/chef-cooking-food-professional-chef-cooking-with-wok-fire-asian-kitchen_199404101.htm)

Here's a comprehensive README for the [Wok-and-Fire](https://github.com/sifat-hossain-niloy/Wok-and-Fire) project:

---

# 🔥 Wok and Fire

**Wok and Fire** is a full-stack web application designed to streamline restaurant management. It offers an intuitive interface for managing menus, orders, and customer interactions.([Freepik][1])

---

## 🚀 Features

* **Menu Management**: Easily add, update, or remove menu items with real-time updates.
* **Order Tracking**: Monitor incoming orders, update their status, and manage order history.
* **Customer Interface**: Allow customers to browse the menu and place orders seamlessly.
* **Responsive Design**: Optimized for both desktop and mobile devices.

---

## 🛠️ Tech Stack

* **Frontend**: React.js, Redux, CSS Modules
* **Backend**: Node.js, Express.js, MongoDB
* **Authentication**: JWT-based authentication system
* **Deployment**: Dockerized for easy deployment

---

## 📂 Project Structure

```bash
Wok-and-Fire/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── App.js
├── .env
├── docker-compose.yml
└── README.md
```



---

## ⚙️ Installation

### Prerequisites

* Node.js (v14 or above)
* MongoDB
* Docker & Docker Compose (for containerized deployment)([GitHub][2])

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sifat-hossain-niloy/Wok-and-Fire.git
   cd Wok-and-Fire
   ```



2. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```



3. **Install dependencies**:

   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```



4. **Run the application**:

   ```bash
   # Start backend
   cd ../backend
   npm start

   # Start frontend
   cd ../frontend
   npm start
   ```



The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:5000`.

---

## 🐳 Docker Deployment

To deploy the application using Docker:

1. **Ensure Docker and Docker Compose are installed**.

2. **Build and run the containers**:

   ```bash
   docker-compose up --build
   ```



The application will be accessible at `http://localhost`.

---

## 🧪 Testing

To run tests for the backend:

```bash
cd backend
npm test
```



For frontend tests:

```bash
cd frontend
npm test
```



---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Developed by [Md Sifat Hossain](https://github.com/sifat-hossain-niloy) and [Intesar Tahmid](https://github.com/Intesar-Tahmid)

---

Feel free to customize this README further to match any additional features or configurations specific to your project.

[1]: https://www.freepik.com/premium-ai-image/chef-cooking-food-professional-chef-cooking-with-wok-fire-asian-kitchen_199404101.htm?utm_source=chatgpt.com "Premium Photo | Chef Cooking Food Professional Chef Cooking with Wok ..."
[2]: https://github.com/kimchi-project/wok?utm_source=chatgpt.com "GitHub - kimchi-project/wok: A cherrypy framework for multi-purpose ..."
