#!/bin/bash


run_scripts() {
    cd '/Users/rohansingh/github_repos/FindABuddy/find-a-buddy/src/backend' &
    node read-db.js &
    node write-db.js &
    cd '/Users/rohansingh/github_repos/FindABuddy/find-a-buddy' & 
    npm start &
    wait
}

while true; do
    run_scripts
    echo "Restarting scripts..."
    sleep 10
done

