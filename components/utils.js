import { Client, Databases, Account, ID } from 'appwrite';

const PROJECT_ID = 'REPLACE WITH PROJECT ID';
const DATABASE_ID = 'REPLACE WITH DATABASE ID';
const COLLECTION_ID = 'REPLACE WITH COLLECTION ID';

const client = new Client();

const databases = new Databases(client);

client.setEndpoint('http://localhost/v1').setProject(PROJECT_ID);

export const account = new Account(client);

export const create = (data) =>
	databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), data);

export const getList = () =>
	databases.listDocuments(DATABASE_ID, COLLECTION_ID);
