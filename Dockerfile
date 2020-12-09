FROM golang:latest

VOLUME [ /tendermint ]
WORKDIR /tendermint
COPY entrypoint.sh /entrypoint.sh
RUN ["chmod", "+x", "/entrypoint.sh"]
EXPOSE 26656 26657
ENTRYPOINT ["/entrypoint.sh"]
