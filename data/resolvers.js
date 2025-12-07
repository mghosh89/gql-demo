// Creating function to create a story object as  a mutation
function createStory(id,{name,description,votedStatus,metadata}) {
  return {
    id,
    name,
    description,
    votedStatus,
    metadata,
  };
}

// Creating database to store new stories/data
const storiesDB = [];
// A resolver is a function that's responsible for populating the data for a single field in your schema.
const resolvers = {
  Query: {
    getStory:(_,{id})=>{
        return createStory(id,storiesDB[id]);
    },
  },
  Mutation: {
    createStoryMut: (_, { input}) => {
      let id = Math.floor(Math.random() * 1000); // Generating random id for story
      // Or use crypto randomUUID for unique id
      // let id = crypto.randomUUID();
      storiesDB[id] = input;
      return createStory(id, input);
    },
  },
};

export default resolvers;