import { MongoClient } from "mongodb";

const connectDB = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
};

const insertDoc = async (client, document) => {
  const db = client.db();
  await db.collection("messages").insertOne(document);
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;
    if (!email || !email.includes("@") || !message || message.trim() === "") {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }

    let client;

    try {
      client = await connectDB();
    } catch (error) {
      res.status(500).json({ message: "Connecting to DB Failed!" });
      return;
    }

    try {
      await insertDoc(client, { email: email, message: message });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting DATA Failed!!" });
      return;
    }

    res.status(201).json({ message: "Feedback Sent!" });
  }
}
