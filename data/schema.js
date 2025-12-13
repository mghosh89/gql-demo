export const typeDefs = `
    type Story {
        id: ID!
        name: String!
        description: String!
        votedStatus: Boolean!
        metadata: [Meta]!
        ageRating: Int
    }
    type Meta {
        theme: String!
        genre: String!
    }
    type Query {
        stories: [Story!]!
        getStory(id: ID!): Story
    }
    
    # Now we are creating mutations below:-

    input StoryInput {
        id: ID
        name: String!
        description: String!
        votedStatus: Boolean!
        metadata: [MetaInput]!
        ageRating: Int
    }

    input MetaInput {
        theme: String!
        genre: String!
    }

    type Mutation {
        createStoryMut(input: StoryInput): Story
        updateStoryMut(input: StoryInput): Story
        deleteStoryMut(id: ID!): String
    }
`