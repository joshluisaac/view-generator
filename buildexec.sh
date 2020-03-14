#!/usr/bin/env bash

docker build -t utils/viewgen .
docker run --rm utils/viewgen:latest