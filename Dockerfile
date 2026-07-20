FROM ubuntu:22.04
RUN apt-get update && apt-get install -y curl
WORKDIR /usr/src/app
CMD ["curl", "http://helsinki.fi"]
