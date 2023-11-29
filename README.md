
## A BRIEF ABOUT CHAT APPLICATION

This chat application has server-side events, with the backend developed in Go and the frontend in React using TypeScript.
The integration of Redis which is used to store data, enables horizontal scalability, as each server instance avoids storing crucial state information in memory.
To maintain control, a rudimentary session ID system is implemented using JWT, ensuring that users are restricted to sending messages only in the room they are presently engaged in.


## HOW TO RUN!?

Clone the app.
Download Docker and Golang.
Inorder to generate the JWT key, create a '.env' file.
The secret key for JWT should be stored in a `.env` file within the `server` folder under the name `JWT_SECRET_KEY`. If the key is not provided, then `env-var-not-found` will be used as a fallback key. The environment variable can also be provide by modifying the `docker-compose.yml` file.
Start your Docker daemon and run the following command while navigated to the project's directory:

```shell
docker compose up --build -d
```

Done. UI can be accessed on `http://localhost:3000` while the server runs on `http://localhost:3001`.
