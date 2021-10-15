import { MongoClient } from "mongodb";
import { connectDB, insertDoc } from "../../utils/db-util";

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

    let result;

    try {
      result = await insertDoc(client, "messages", {
        email: email,
        message: message,
      });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting DATA Failed!!" });
      return;
    }

    res.status(201).json({ message: "Feedback Sent!" });
  }
}
