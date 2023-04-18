import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Categories from './collections/Categories';
import CategoryMenus from './collections/CategoryMenus';

export default buildConfig({
  serverURL: 'http://localhost:3162',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,Categories,CategoryMenus
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
