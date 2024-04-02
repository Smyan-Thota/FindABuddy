const result = await db.collection("users").insertOne(userData);
    console.log(`User added with the _id: ${result.insertedId}`);