const { MongoClient } = require("mongodb");

async function run() {
  const client = new MongoClient("your_mongodb_uri");
  await client.connect();
  const db = client.db("schoolDB");
  const students = db.collection("students");

  // updateOne
  const updateOneRes = await students.updateOne({ name: "Alice" }, { $set: { age: 16 } });
  console.log("Modified:", updateOneRes.modifiedCount);

  // updateMany
  const updateManyRes = await students.updateMany({ grade: 10 }, { $set: { status: "active" } });
  console.log("Modified:", updateManyRes.modifiedCount);

  // findOneAndUpdate
  const updatedDoc = await students.findOneAndUpdate(
    { name: "Bob" },
    { $inc: { age: 1 } },
    { returnDocument: "after" }
  );
  console.log("Updated Document:", updatedDoc.value);

  await client.close();
}

run();
