FROM centos:7
LABEL authors="Eric Wittmann <eric.wittmann@redhat.com>"
ENV RELEASE_PATH target/ocp-example-app-ui-swarm.jar
RUN yum install -y \
    java-1.8.0-openjdk-headless \
  && yum clean all

WORKDIR /opt/ocp-example-app

ADD ${RELEASE_PATH} /opt/ocp-example-app

RUN groupadd -r ocp -g 1001 \
    && useradd -u 1001 -r -g ocp -d /opt/ocp-example-app/ -s /sbin/nologin -c "Docker image user" ocp \
    && chown -R ocp:ocp /opt/ocp-example-app/

USER 1001

EXPOSE 8080

ENV OCP_KC_REALM=ocp-example-app
ENV OCP_KC_PUBLIC_KEY=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoGLGcaMCt1XtzdiyEhBWA27iAQwPoL70b3IcrPoDMxts9j3ED932FMJYv0MQEhfau/05P7JgJ480pWuXPkvDgnD0S8i6V1Bvc7sxKZ/zGSdxBmfOBDARaoEvZNuaab+JUBSQHg87hp56zW+hwFsW7DwGr42bEdMok6EKCxsS3IlFLjWdks94OeLUNnYdBnt+v3VHW8C8KLgByCOXjn6vOqM5B9jL6wPpHZUnLAyWtogUDtOGbFpURoql9cMBpir7xcaweZH4PMR87vKMsopCZj01LDmZPc4ULNO5ETACv/gwtLcd+UhbNDZ6jhMHKgZ5T/gBbZh97yHSdSh+9uT/qQIDAQAB
ENV OCP_KC_AUTH_URL=https://auth-apistudio.rhcloud.com/auth/
ENV OCP_KC_CLIENT_ID_UI=ui
ENV OCP_API_URL=http://localhost:8081
ENV OCP_PORT_OFFSET=0

CMD java -jar /opt/ocp-example-app/ocp-example-app-ui-swarm.jar \
    -Dswarm.port.offset=${OCP_PORT_OFFSET}
