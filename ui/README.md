Instructions
===================

## Usage

To start up the image

    docker run -it ericwittmann/ocp-example-app-ui

You may want to map the port(s) so you can access the app

    docker run -it -p 8080:8080 ericwittmann/ocp-example-app-ui

## Building the image

    docker build -t="ericwittmann/ocp-example-app-ui" --rm .

## Pushing the image to Docker Hub

    docker push ericwittmann/ocp-example-app-ui

## How to customize the image

The following environment variables control configuration of the app:

	OCP_KC_REALM=ocp-example-app
	OCP_KC_PUBLIC_KEY=<Public Key>
	OCP_KC_AUTH_URL=<Keycloak URL>
	OCP_KC_CLIENT_ID_UI=ui
	OCP_API_URL=http://localhost:8081
	OCP_PORT_OFFSET=0

