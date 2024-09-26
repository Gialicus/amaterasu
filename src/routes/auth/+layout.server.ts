import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
    if (locals.pocketbase.authStore.isValid) {
        throw redirect(302, "/");
    }
    return {}
}
