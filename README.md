# YouTube Clone 🎥

Welcome to the **YouTube Clone** project! This application replicates key features of the popular video-sharing platform, providing a seamless user experience for discovering, watching, and managing videos.

## Table of Contents

- [Getting Started](#getting-started)
- [Design Overview](#design-overview)
- [Features](#features)
- [Constraints](#constraints)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [Links](#links)
- [Credits](#credits)
- [Contact](#contact)

## Getting Started

To use this project, clone it from GitHub and follow these steps:

1. **Install Dependencies**: Run the following command to install all required dependencies for both the front-end and back-end. As both the frontend and backend are in the same root folder there are 3 npm projects created. For frontend, backend and main folder.

	- Root: 
	```bash
	npm install
	```

	- Backend: 
	```bash
	cd backend
	npm install
	```
	
	- Frontend: 
	```bash
	cd frontend
	npm install
	```
	
2. As everything is set you do not need to run frontend and backend seperately because i have use `concurrently` as it runs both backend and frontend at once.

	```bash
	npm run dev
	```

3. Once you run this code your project will run the frontend in `http://localhost:5173` and the backend in `http://localhost:5000`

## Design Overview

The YouTube Clone features a clean and modern design, ensuring a smooth user experience. It is fully responsive, adapting to various device sizes such as desktops, tablets, and smartphones.

- **Header**: Includes the logo, search bar and filtering for different videos browsing videos, managing profiles, and uploading content.
- **Main Section**: Displays all the videos and search results.
- **Video Player**: A fully functional video player with play, pause, and volume controls.
- **User Dashboard**: Allows users to view their created channels, playlist likes, and comments.

## Features

- **Video Streaming**: Play videos with a user-friendly interface.
- **Search Functionality**: Find videos using keywords.
- **Filter Functionality**: Filter videos according to your needs.
- **User Authentication**: Sign up, log in, and manage user profiles securely.
- **Video Upload**: Upload and manage video content.
- **Like & Comment**: Interact with videos through likes and comments.
- **Responsive Design**: Optimized for all devices.
- **Subscriptions**: Allow users to subscribe to their favorite channels.

## Constraints

### Video Upload:

- **VIdeo link**: Must start with `http/https`
- **Thumbnail link**: Must start with `http/https`

### User Authentication:

- **Name**: Must be a valid email address.
- **Username**: Must be unique for every user.
- **Password Length**: Minimum 8 characters.

## Technologies Used

- **Front-End**:
  - React, React DOM Redux, Material UI
  - HTML5, CSS3, JavaScript
  - React router dom, Axios, React Player, 
  
- **Back-End**:
  - Node.js, Express.js, Mongoose
  - bcryptjs, cors, jsonwebtoken
  
- **Database**:
  - MongoDB
  
- **Other Tools**:
  - Imagekit
  - JWT for authentication

## Future Improvements

- **Personalized Recommendations**: Suggest videos based on user preferences.
- **Live Stream**: Enable real-time stream for videos.
- **Dark Mode**: Add a dark mode feature for better user experience.

## Links

- **GitHub Repository**: [YouTube Clone](https://github.com/pradeep13jena/Youtube)
- **Live Website**: [YouTube Clone](https://youtube-clone.example.com)

## Credits

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Expressjs](https://www.npmjs.com/package/express)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Material Ui](https://mui.com/material-ui/getting-started/)
- [Axios](https://www.npmjs.com/package/axios)
- [Redux](https://redux-toolkit.js.org/introduction/getting-started)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [TailwindCSS](https://tailwindcss.com/docs/guides/vite)

## Contact

- **Portfolio**: [Your Portfolio](https://pradeepjena.netlify.app/)
- **Email**: [your-email@example.com](mailto\:goldrushatjenas@gmail.com)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/pradeepjena)