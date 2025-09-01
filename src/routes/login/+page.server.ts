import { login, register } from '../../appwrite/auth';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(303, '/visualizeArea');
}
export const actions = {
    login: async ({request}:any) => {
        const formData = await request.formData();
        const email = formData.get("email") as string | null;   
        const password = formData.get("password") as string | null;
        if (!email) {
			return fail(400, { email, missing: true });
		}
        if (!password) {
			return fail(400, { password, missing: true });
		}
        try {
            const response = await login(email, password);
            return { success: true, response };
        } catch (error) {
            return { success: false, error };
        }
    }
} satisfies Actions;