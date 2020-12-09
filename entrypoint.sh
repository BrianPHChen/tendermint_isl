#!/bin/bash

export TMHOME="/tendermint/node${ID}"

linenum=$(grep -n "TCP or UNIX socket address for the RPC server to listen on" ${TMHOME}/config/config.toml | awk -F':' '{print $1}')
((linenum++))
sed -i "${linenum}c laddr = \"tcp://0.0.0.0:26657\"" ${TMHOME}/config/config.toml
./tendermint node --home ${TMHOME} --proxy_app kvstore

