Instructions
===================

## Usage

To start up the image

    docker run -it -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=password ericwittmann/ocp-example-app-auth


## Building the image

    docker build -t="ericwittmann/ocp-example-app-auth" --rm .

## Pushing the image to Docker Hub

    docker push ericwittmann/ocp-example-app-auth

## How to customize the image

The following environment variables control configuration of the app:

	KEYCLOAK_USER=admin
	KEYCLOAK_PASSWORD=password

