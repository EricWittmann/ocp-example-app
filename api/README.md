Instructions
===================

## Usage

To start up the image

    docker run -it ericwittmann/ocp-example-app-api

You may want to map the port(s) so you can access the app

    docker run -it -p 8080:8080 ericwittmann/ocp-example-app-api

## Building the image

    docker build -t="ericwittmann/ocp-example-app-api" --rm .

## Pushing the image to Docker Hub

    docker push ericwittmann/ocp-example-app-api

## How to customize the image

The following environment variables control configuration of the app:

	OCP_KC_REALM=ocp-example-app
	OCP_KC_AUTH_URL=<URL to Keycloak>
	OCP_KC_CLIENT_ID_API=api
	OCP_PORT_OFFSET=0
	OCP_DB_DRIVER_NAME=h2
	OCP_DB_CONNECTION_URL=jdbc:h2:mem:ocpdb
	OCP_DB_USER_NAME=sa
	OCP_DB_PASSWORD=sa

