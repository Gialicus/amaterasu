import { browser } from "$app/environment";
import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pb = writable<PocketBase | undefined>(undefined, (set) => {
    if (!browser) return;
    const pocketbaseIstance = new PocketBase("http://localhost:8090");
    pocketbaseIstance.authStore.loadFromCookie(document.cookie);
    set(pocketbaseIstance);
})

