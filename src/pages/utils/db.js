import { openDB } from "idb";

export const dbPromise = openDB ("pokemon-db", 1,{
    upgrade(db){
        if (!db.objectStoreNames.contains("pokemon")) {
            db.createObjectStore("pokemon", { keyPath: "name" });
        }
    }
});