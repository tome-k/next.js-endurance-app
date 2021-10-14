import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;
    if (!email || !email.includes("@") || !message || message.trim() === "") {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }

    const client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();
    await db
      .collection("messages")
      .insertOne({ email: email, message: message });

    client.close();

    res.status(201).json({ message: "Signed Up!" });
  }
}
