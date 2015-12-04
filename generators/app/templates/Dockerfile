FROM registry.docker.private.linksynergy.com/rm-rant/centos7-nodejs-nvm-base
MAINTAINER Kyril Revels <kyril.revels@rakuten.com>

ENV NODE_ENV production

RUN npm install --production \
  && npm rebuild

EXPOSE 3000
