export type MovieList = {
 title: string,
 thumbnail: Thumbnail,
 year: number,
 category: "Movie" | "TV Series",
 rating: string,
 isBookmarked: boolean,
 isTrending: boolean,
}

export type Thumbnail = {
 trending: Trending,
 regular: Regular,
}

export type Regular = {
 small: string,
 medium: string,
 large: string,
}

export type Trending = {
 small: string,
 large: string,
}
