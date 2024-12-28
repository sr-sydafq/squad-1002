import Resolver from '@forge/resolver';
import { storage } from '@forge/api';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  return 'Hello, world!';
});

resolver.define('saveRecipe', async (req) => {
  console.log(req);

  await storage.set('pizza-recipe', req);

  return JSON.stringify({ status: 'success', message: 'Recipe saved' });
});

resolver.define('getRecipes', async (req) => {
  console.log(req);

  const recipes = await storage.get('pizza-recipe');
  return JSON.stringify(recipes.payload);
});

export const handler = resolver.getDefinitions();
