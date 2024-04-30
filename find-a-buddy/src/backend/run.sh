#!/bin/bash


run_scripts() {
    cd '\Users\niels\OneDrive\Documents\GitHub\FindABuddy\find-a-buddy\src\backend' &
    node read-db.js &
    node write-db.js &
    cd '\Users\niels\OneDrive\Documents\GitHub\FindABuddy\find-a-buddy\src\backend' & 
    npm start &
    wait
}

while true; do
    run_scripts
    echo "Restarting scripts..."
    sleep 10
done

