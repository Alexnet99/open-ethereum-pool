#!/bin/bash

#Make sure no other pesky screens are running
killall screen
screen -wipe
sleep 1

cd /home/pirl/open-ethereum-pool/
echo starting etznodesync
screen -LdmS etznodesync ./geth --syncmode=fast -cache=512
