## How to start server

- Add .env file to project root folder
  - add the variables MONGO_DB_HOST, MONGO_DB_NAME and WRITE_ACCESS_KEY
- Run npm install
- Run "npx nodemon"

## How to deploy docker container

- Run "docker compose up"

## Managing NERC deployment

Viz-energy server is deployed to NERC on a VM named "Viz-energy-instance".
To access the instance, you need the RSA private key that was generated when the instance was created.
After sshing into Viz-energy-instance, the server can be stopped by running "docker compose down"

### Updating the deployed server after code changes

- SSH into Viz-energy-instance
- Git pull the updated source code
- Run "docker compose down"
- Run "docker compose up"

## Secrets

The following are values that are needed to smoothly manage the current deployment. A way to securely share these with developers is still being pursued.

- VM IP : the IP address to ssh into inorder to access "Viz-energy-instance" on NERC. Same IP address is where the frontend can access the backend APIS
- RSA private key : the ssh key required for
- WRITE_ACCESS_KEY env variable : the env variable that is set manually on "Viz-energy-instance" in a .env and expected in the headers of http write requests
