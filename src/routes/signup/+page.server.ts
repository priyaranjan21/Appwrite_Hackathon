import { login, register } from '../../appwrite/auth';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    register : async ({request}) => {
        const formData = await request.formData();
        console.log(formData);
        const email = formData.get("email") as string | null;
        const password = formData.get("password") as string | null;
        const confirmPassword = formData.get("confirm-password") as string | null;

        if (!email) {
            return fail(400, { email, missing: true });
        }
        if (!password) {
            return fail(400, { password, missing: true });
        }
        if (!confirmPassword) {
            return fail(400, { confirmPassword, missing: true });
        }
        if (password !== confirmPassword) {
            return fail(400, { password, confirmPassword, mismatch: true });
        }
        if(password.length < 8) {
            return fail(400, { password, tooShort: true });
        }
        if(password.match(/[A-Z]/) === null) {
            return fail(400, { password, noUppercase: true });
        }
        if(password.match(/[a-z]/) === null) {
            return fail(400, { password, noLowercase: true });
        }
        if(password.match(/[0-9]/) === null) {
            return fail(400, { password, noNumber: true });
        }

        try {
            const response = await register(email, password);
            return { success: true, response };
        } catch (error) {
            return { success: false, error };
        }
    }
} satisfies Actions;