import { error, redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const actions = {
	default: async ({ request, locals }) => {
		if (locals.pocketbase.authStore.isValid) {
			throw redirect(302, '/');
		}

		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const passwordConfirm = formData.get('passwordConfirm');

		if (password?.toString() !== passwordConfirm?.toString()) {
			throw error(400, 'Passwords do not match');
		}
		try {
			await locals.pocketbase.collection('users').create({
				email: email?.toString(),
				password: password?.toString(),
				passwordConfirm: passwordConfirm?.toString()
			});
		} catch (error) {
			if (error instanceof ClientResponseError) {
				console.log(error.response);
			} else {
				console.error(error);
			}
		}

		await locals.pocketbase
			.collection('users')
			.authWithPassword(email?.toString(), password?.toString());

		throw redirect(303, '/');
	}
};
