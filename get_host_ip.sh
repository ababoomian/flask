#!/bin/sh
# HOST_IP=$(hostname -I | awk '{print $1}')
HOST_IP=http://35.170.192.165
envsubst '${HOST_IP}' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/nginx.conf
nginx -g 'daemon off;'
