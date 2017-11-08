FROM jboss/keycloak:3.3.0.Final

LABEL authors="Eric Wittmann <eric.wittmann@redhat.com>"

ADD realm.json /tmp/ocp-example-app-realm.json
ADD auth-entrypoint.sh /opt/jboss/auth-entrypoint.sh

ENV KEYCLOAK_USER=admin
ENV KEYCLOAK_PASSWORD
ENV 

CMD /opt/jboss/auth-entrypoint.sh -b 0.0.0.0 \
	-Dkeycloak.migration.action=import \
	-Dkeycloak.migration.provider=singleFile \
	-Dkeycloak.migration.strategy=IGNORE_EXISTING \
	-Dkeycloak.migration.file=/tmp/ocp-example-app-realm.json
