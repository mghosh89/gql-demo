import { Stories } from './dbConnector.js';

// A resolver is a function that's responsible for populating the data for a single field in your schema.
const resolvers = {
  Query: {
    // fetch a single story by id
    getStory: async (_, { id }) => {
      const story = await Stories.findById(id);
      return story;
    },
    // fetch all stories
    stories: async () => {
      return await Stories.find();
    },
  },
  Mutation: {
    // create a new story document
    createStoryMut: async (_, { input }) => {
      const created = await Stories.create(input);
      return created;
    },
  },
};

export default resolvers;
