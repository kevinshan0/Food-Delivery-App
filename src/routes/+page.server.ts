import { createNewUser, signInExistingUser } from "$lib/firebase/firebase.app";
import { fail } from "@sveltejs/kit";
import type { Actions } from './$types';

export const actions = {
    signin: async ({ request }) => {
        const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

        if (!email) {
			return fail(400, { email, missing: true });
		}
        
        signInExistingUser(email, password);
	},
	signup: async ({ request }) => {
        const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

        createNewUser(email, password);
	}
} satisfies Actions;