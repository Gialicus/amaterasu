import { handleError } from "$lib/handleError";
import { pb } from "$lib/pocketbase";
import { fail } from "@sveltejs/kit";
import PocketBase from "pocketbase";
import { POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD } from "$env/static/private";


export const handle = async ({ event, resolve }) => {
    event.locals.pocketbase = new PocketBase(POCKETBASE_URL);
    try {
        event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
        await event.locals.pocketbase.collection("users").authRefresh();
    } catch {
        event.locals.pocketbase.authStore.clear();
    }
    event.locals.pocketbaseAdmin = new PocketBase(POCKETBASE_URL);
    try {
        event.locals.pocketbaseAdmin.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD);
    } catch (error) {
        throw fail(500, { message: handleError(error) });
    }
    pb.set(event.locals.pocketbase);
    const response = await resolve(event);
    response.headers.append("Set-Cookie", event.locals.pocketbase.authStore.exportToCookie());
    return response;
}