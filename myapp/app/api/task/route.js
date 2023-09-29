import db from "@/lib/db";
import Contact from "@/models/Contact";

export async function GET(req) {
    await db.connect()

    try {
        const contacts = await Contact.find({})
        return new Response(JSON.stringify(contacts), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
