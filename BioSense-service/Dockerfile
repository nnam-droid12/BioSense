FROM openjdk:17-slim

WORKDIR /app


COPY target/BioSense-service-0.0.1-SNAPSHOT.jar app.jar

ENV TMPDIR=/tmp

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]