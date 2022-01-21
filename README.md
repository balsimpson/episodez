# episodez

Trending Lists

Popular Lists

Featured Lists

Single Shows
Lists with the most Shows

Most Commented

Get Started Lists
- getting started on a TV Show

Best Episodes lists
- IMDb Score

- Search
    - by Show Name
    - by Tag
    - by List Name
    - by Username?

Follow a member
Get notifications of following accounts latest lists

Comment, reply to comment
Like a comment
Sort Comments by Best and Latest
Flag a comment
- hide comment if more than 3 flags

## Admin
- Flagged comments
- Feedback
- Choose featured lists



Data Schema

List
    title: String,
    created_on: Date.toString(),
    created_by_id: userId,
    created_by_name: displayName,
    description: String,
    genres: [ String ],
    tags: [ String ],
    includedShows: [{show_id, show_name}],
    countLikes: Number,
    countShares: Number,
    countComments: Number,
    episodes: [{
        id: uid,
        air_date: Date,
        comment: String,
        name: String,
        overview: String,
        episode_number: Number,
        season_number: Number,
        show_name: String,
        show_id: String,
        show_backdrop_path: String,
        show_poster_path: String,
        still_path: String,
    }]


User
    display_name: String,
    created_on: Date,
    last_login: Date,
    last_updated: Date,
    likes_total: Number
    shares_total: Number,
    following: [{
        user_id: userId,
        user_name: String
    }],
    
    followers: [{
        user_id: userId,
        user_name: String
    }],

    favorites: [{
        list_id: listId,
        list_name: String
    }],
    
    lists_created: [{
        list_id: listId,
        list_name: String
    }],
    

