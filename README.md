**Introduction**

This repository contains a microservices-based system for **Meeting Room Reservations**, implementing **event streaming** with **Apache Kafka**. The system allows users to reserve and cancel meeting rooms, and provides real-time updates through asynchronous event streaming. It also demonstrates how microservices can be integrated using Kafka for efficient communication.

**System Overview**

The project is built using **Nest.js** and Docker, with **Kafka** managing the event-driven communication between services. It consists of two main services:

1.	**Meeting Service**: Allows users to book or cancel rooms (acts as a **producer** in Kafka).

2.	**Notification Service**: Listens for room reservation events and sends notifications (acts as a **consumer** in Kafka).

**Features**

•	**Asynchronous Communication**: Event-based messaging allows microservices to communicate without direct dependencies.

•	**Real-Time Updates**: Changes in room reservations are propagated immediately to all subscribed services.

•	**Scalable Architecture**: The system can scale horizontally with the number of Kafka consumers and producers.

**Technologies Used**

•	**Nest.js**: Framework for building scalable server-side applications.

•	**Apache Kafka**: Distributed event streaming platform used for messaging between microservices.

•	**Docker**: Containerization platform to run Kafka, Zookeeper, and the services.

•	**Kafka UI**: Web interface to monitor Kafka topics, consumers, and brokers.

**Getting Started**

**Prerequisites**

Before running the project, ensure you have the following installed on your system:

•	[Docker](https://www.docker.com/get-started)

•	[Node.js](https://nodejs.org/) (LTS version recommended)

•	[Nest.js CLI](https://docs.nestjs.com/cli/overview) (for development)

**Installation**

1.	Clone the repository:

git clone https://github.com/your-username/meeting-room-reservation.git

cd meeting-room-reservation

2.	Install dependencies for both microservices:

cd meeting-service

npm install

cd ../notification-service

npm install

3.	Set up **Docker Compose** to run Kafka, Zookeeper, and Kafka UI. Create a docker-compose.yml file (or use the one provided) and start the containers:

docker-compose up -d

4.	Ensure that Kafka is running by checking the Kafka UI at http://localhost:8080.

**Running the Services**

1.	**Start the Notification Service (Consumer)**:

cd notification-service

npm run start

2.	**Start the Meeting Service (Producer)**:

cd meeting-service

npm run start

**Testing the Event Flow**

To test the system, you can use **Postman** or **cURL** to simulate room reservations and cancellations. For example, to reserve a room:

curl -X POST http://localhost:3000/meetings/reserve -d '{"roomId": "101"}' -H "Content-Type: application/json"

You can then check the logs of the **Notification Service** to see that it has received the reservation event.

**Kafka UI**

The **Kafka UI** can be accessed at http://localhost:8080 to monitor the Kafka topics, events, and consumer activity.

**Project Structure**

.

├── docker-compose.yml        # Docker configuration for Kafka, Zookeeper, and Kafka UI

├── meeting-service/          # Producer service for managing room reservations

│   ├── src/

│   └── ...

├── notification-service/     # Consumer service for processing reservation events

│   ├── src/

│   └── ...

└── README.md                 # Project documentation

**Acknowledgments**

•	**Nest.js** for providing an excellent framework for building microservices.

•	**Apache Kafka** for powering real-time event streaming.

•	**Docker** for simplifying the containerization and deployment process.
