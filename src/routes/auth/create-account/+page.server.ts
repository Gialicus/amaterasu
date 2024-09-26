import { error, redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, locals }) => {
        if (locals.pocketbase.authStore.isValid) {
            throw redirect(302, "/");
        }

        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password?.toString() !== confirmPassword?.toString()) {
            throw error(400, "Passwords do not match");
        }
        try {
            await locals.pocketbase.collection("users").create({
                email: email?.toString(),
                password: password?.toString(),
                confirmPassword: confirmPassword?.toString(),
            });
        } catch (error) {
            console.error(error);
        }


        await locals.pocketbase.collection("users").authWithPassword(email?.toString(), password?.toString());

        throw redirect(303, "/");

    }
}