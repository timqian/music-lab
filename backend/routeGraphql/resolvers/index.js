const daos = require('../../daos');

const resolvers = {
    Query: {
        // posts() {
        //     return posts;
        // },
        user(_, { name }, req) {
            return name;
        },
    },

    // Mutation: {
        // upvotePost(_, { postId }) {
        //     const post = find(posts, { id: postId });
        //     if (!post) {
        //         throw new Error(`Couldn't find post with id ${postId}`);
        //     }
        //     post.votes += 1;
        //     return post;
        // },
    // },

    // Author: {
    //     posts(author) {
    //         return filter(posts, { authorId: author.id });
    //     },
    // },

    // Post: {
    //     author(post) {
    //         return find(authors, { id: post.authorId });
    //     },
    // },

    User: {
        name(name, args, req) {
            return name;
        }
    }
};

module.exports = resolvers; 