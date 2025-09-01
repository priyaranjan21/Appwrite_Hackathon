import {Client , Account, ID} from 'appwrite';
import { PUBLIC_APPWRITE_ENDPOINT ,PUBLIC_APPWRITE_PROJECT_ID  } from '$env/static/public';
const client = new Client()
.setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
.setProject(PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);


const register = async (email: string, password: string) => {
    try {
        console.log(email,password);
        const response = await account.create({userId:ID.unique() ,email:email,password:password});
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

const login = async (email: string, password: string) => {
    try {
        const response = await account.createEmailPasswordSession({email:email,password:password});
        return response;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

export { register, login };