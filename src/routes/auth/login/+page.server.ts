import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		if (locals.pocketbase.authStore.isValid) {
			throw redirect(302, '/');
		}

		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		await locals.pocketbase
			.collection('users')
			.authWithPassword(email?.toString(), password?.toString());

		throw redirect(303, '/');
	}
};
