# Dockerized-TodoList
This is a simple yet efficient Todo list web application built using React. It's my first React project, and I've Dockerized it for easy deployment. With this application, you can create, mark as completed, and manage your tasks effortlessly.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- User-friendly interface

## Getting Started

Follow these steps to run the application locally using Docker:-

### Prerequisites

- Make sure you have Docker installed on your machine.

### TodoList

![image](https://github.com/venk404/Dockerized-TodoList/assets/61042520/3d135d2e-89de-451e-a04e-ba476381df80)


# Setup 
```bash
# Clone the project
  git clone https://github.com/venk404/Dockerized-TodoList.git

# change the directory
  cd Dockerized-TodoList  # Change to the directory you just cloned    

# Build the Docker image
  docker build -t task-list .

# Run the Docker container
  docker run -d -p 3000:3000 task-list

#Start the application
npm start

