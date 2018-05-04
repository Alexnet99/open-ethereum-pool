#!/bin/bash

#Make sure no other pesky screens are running
killall screen
screen -wipe
sleep 1

cd /home/pirl/open-ethereum-pool/
echo starting etznode
screen -LdmS etznode ./getz -maxpeers 100 -rpcport 6588 -rpc -rpcaddr "127.0.0.1" -rpcapi eth,net,web3 -unlock="0xd09f86e579a3cc7af2ceb414a65f43df0fed81ac" -password="/home/pirl/open-ethereum-pool/.walletpass"


sleep 10

#pool2b:
echo starting 2b pool
screen -LdmS etz-pool2b ./open-ethereum-pool pool4b.json

#pool9b:
echo starting 9b pool
screen -LdmS etz-pool9b ./open-ethereum-pool pool9b.json

#api:
echo starting API
screen -LdmS etz-api ./open-ethereum-pool api.json

#unlocker:
echo starting unlocker
screen -LdmS etz-unlocker ./open-ethereum-pool unlocker.json

#payout:
echo starting payout
screen -LdmS etz-payout ./open-ethereum-pool payout.json
