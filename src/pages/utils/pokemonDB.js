import { dbPromise } from "./db";

export const getPokemonDB = async (nome) => {
    const db = await dbPromise;
    return db.get("pokemon", nome);
};

export const savePokemonDB = async (pokemo) => {
    const db = await dbPromise;
    return db.put("pokemon", pokemo);
};