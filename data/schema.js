export const typeDefs = `
    type Story {
        id: ID!
        name: String!
        description: String!
        votedStatus: Boolean!
        metadata: [Meta]!
    }
    type Meta {
        theme: String!
        genre: String!
    }
    type Query {
        stories: Story
        getStory(id: ID): Story
    }
    
    # Now we ae creating mutations below:-

    input storyInput {
        id: ID
        name: String!
        description: String!
        votedStatus: Boolean!
        metadata: [MetaInput]!
        }

        input MetaInput{
            theme: String!
            genre: String!
        }
    type Mutation {
        createStoryMut( input: storyInput!): Story
    }
`