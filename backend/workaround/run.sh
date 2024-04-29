#!/bin/bash


run_scripts() {
    node read-db.js &
    node write-db.js &
    npm run &
    wait
}

while true; do
    run_scripts
    echo "Restarting scripts..."
done

