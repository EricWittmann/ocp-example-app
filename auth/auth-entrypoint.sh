#!/bin/bash

if [ $KEYCLOAK_USER ] && [ $KEYCLOAK_PASSWORD ]; then
    keycloak/bin/add-user-keycloak.sh --user $KEYCLOAK_USER --password $KEYCLOAK_PASSWORD
fi

awk "{gsub(/OCP_UI_URL/,\"$OCP_UI_URL\");}1" /tmp/ocp-example-app-realm.json > /tmp/ocp-example-app-realm.configured.json

exec /opt/jboss/keycloak/bin/standalone.sh $@
exit $?
