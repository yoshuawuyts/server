FROM phusion/baseimage
MAINTAINER Yoshua Wuyts <i@yoshuawuyts.com>

# Install node
RUN cd ~ && curl https://github.com/creationix/nvm/master/install.sh | sh
RUN cd ~ && . .nvm/nvm.sh && install 0.11 && nvm use 0.11

# Install postgres
# ENV PG_VERSION 9.2
# ENV PASS {.......}

# RUN

# Expose ports

expose 8080
expose 443