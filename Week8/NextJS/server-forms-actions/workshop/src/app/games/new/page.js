import {sql} from "@vercel/postgres";

export default function NewGamePostPage(){
    async function handleSaveGame(formData) {
        "use server"
        console.log("saving game to database...")

        const title = formData.get("title")
        const studio = formData.get("studio")
        const platforms = formsData.get("platforms")

        await sql `INSERT INTO games (title, studio, platforms) VALUES (${title}, ${studio}, ${platforms})`;
        console.log("game saved!")

    }
    return(
        <form action={handleSavedGme}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text"/>
            <label htmlFor="studio">Studio</label>
            <input id="studio" name="studio" type="text"/>
            <label htmlFor="platforms">Platfrom</label>
            <input id="platfroms" name="platforms" type="text"/>
            <button type="submit">Save</button>
        </form>
    )
}