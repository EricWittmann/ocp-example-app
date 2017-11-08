Instructions
===================

## Usage

To start up the image

    docker run -it -p 8080:8080 \
    	-e OCP_KEYCLOAK_USER=admin \
    	-e OCP_KEYCLOAK_PASSWORD=password \
    	-e OCP_UI_URL=http://localhost:8080 \
    	ericwittmann/ocp-example-app-auth


## Building the image

    docker build -t="ericwittmann/ocp-example-app-auth" --rm .

## Pushing the image to Docker Hub

    docker push ericwittmann/ocp-example-app-auth

## How to customize the image

The following environment variables control configuration of the app:

	OCP_KEYCLOAK_USER=admin
	OCP_KEYCLOAK_PASSWORD=password
	OCP_UI_URL=http://app-ui.example.org/
