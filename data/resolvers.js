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
      const allstories = await Stories.find();
      return allstories;
    },
  },
 /*//This mutations part is added to create new story 
  Mutation: {
    // create a new story document
    createStoryMut: async (_, { input }) => {
      const created = await Stories.create(input);
      return created;
    },
  },*/
  
  // Mutation to create a story in the database
  Mutation: {
    createStoryMut: async (_, { input }) => {
        const newStory = new Stories({
            name: input.name,
            description: input.description,
            votedStatus: input.votedStatus,
            metadata: input.metadata,
            ageRating: input.ageRating,
        });
        newStory.id = newStory._id; // Assign the generated _id to id field
        await newStory.save();
        return newStory;
    },
    // Update story mutation
    updateStoryMut: async (_, { input }) => {
      const updatedStory = await Stories.findOneAndUpdate(
        { _id: input.id },
        input,
        { new: true } // if user enters any input that is not present in the schema it will be created automatically
      );
      return updatedStory;
    },
    // Delete story mutation
    deleteStoryMut: async (_, { id }) => {
      const deletedStory = await Stories.findByIdAndDelete(id);
      return "Story deleted successfully";
      //return deletedStory;
    },
  },

};

export default resolvers;
