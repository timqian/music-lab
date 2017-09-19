const daos = require('../../daos');

const resolvers = {
    Query: {
        async user(_, { name }, req) {
            return await daos.User.get(name);
        },
    },

    Mutation: {
        async putSong(_, { author, name, notes2D }, req) {
            await daos.Song.put({
                author,
                name,
                notes2D,
            });

            return 'OK';
        },

        async deleteSong(_, { author, name }, req) {
            await daos.Song.del({
                author,
                name,
            });

            return 'OK';
        }
    },

    User: {
        songs(user, args, req) {
            return daos.Song.getAll(user.name);
        },
    }
};

module.exports = resolvers; 