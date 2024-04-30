# how to integrate

change the file locations to the local filepath in **read-db.js**, **write-db.js** and **run.sh**. The changes only need ot reflect where the repository is within your laptop (the tail end needs to be the same).


steps to run the script:  
  - change your directory to this one
  - ```bash
    chmod 777 run.sh
    ```
  - ```bash
    ./run.sh
    ```


Once you run this you can find all of the readable data inside **local_read_jsons** and any writeable data must be placed int **local_write_jsons**. The script will take care of the rest :D
