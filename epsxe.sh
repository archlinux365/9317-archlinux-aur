#!/usr/bin/env bash


LD_LIBRARY_PATH+=:/opt/epsxe LD_PRELOAD=libcurl.so.3 /opt/epsxe/epsxe "$@"
