import mongoose from 'mongoose';

async function connectTODB() {
    try {
        await mongoose.connect('mongodb://localhost/stories-graphql');
        console.log('Connected to MongoDB successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

// initiate connection (no-op if already connected)
connectTODB();

const storySchema = new mongoose.Schema({
    name: String,
    description: String,
    votedStatus: Boolean,
    metadata: [
        {
            theme: String,
            genre: String,
        },
    ],
    ageRating: Number,
});

const Stories = mongoose.model('Story', storySchema);

export { Stories };