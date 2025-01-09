import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("LinkHive");
    const collection = db.collection("Links");

    const result = await collection.insertOne(body);
    console.log("result: ", result)

    return Response.json({ result });
}
