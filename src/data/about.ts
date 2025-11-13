export type About = {
  id: number;
  title: string;
  url: string;
  image: string;
  type: 'book' | 'album';
}

export const books: About[] = [
  { 
    id: 1, 
    title: "Beartown", 
    url: "https://www.goodreads.com/book/show/33413128-beartown", 
    image: "/assets/About/Book-1.jpg",
    type: 'book'
  },
  { 
    id: 2, 
    title: "Stay True", 
    url: "https://www.goodreads.com/book/show/59900070-stay-true", 
    image: "/assets/About/Book-2.jpg",
    type: 'book'
  },
  { 
    id: 3, 
    title: "Harrow the Ninth", 
    url: "https://www.goodreads.com/book/show/39325105-harrow-the-ninth", 
    image: "/assets/About/Book-3.jpg",
    type: 'book'
  },
  { 
    id: 4, 
    title: "Immaculate Conception", 
    url: "https://www.goodreads.com/book/show/217453576-immaculate-conception", 
    image: "/assets/About/Book-4.jpg",
    type: 'book'
  },
  { 
    id: 5, 
    title: "Beloved", 
    url: "https://www.goodreads.com/book/show/6149.Beloved", 
    image: "/assets/About/Book-5.jpg",
    type: 'book'
  },
]

export const albums: About[] = [
  { 
    id: 1, 
    title: "FISSION", 
    url: "https://open.spotify.com/album/6PUmlxsIK7Z2Gr5OSTa5YA?si=SaT-4iJPSUeuG0gozIi98g", 
    image: "/assets/About/Song-1.jpg",
    type: 'album'
  },
  { 
    id: 2, 
    title: "GUTS", 
    url: "https://open.spotify.com/album/1xJHno7SmdVtZAtXbdbDZp?si=GTBG02hiRyiRVMAyrtQdHQ", 
    image: "/assets/About/Song-2.jpg",
    type: 'album'
  },
  { 
    id: 3, 
    title: "i feel everything", 
    url: "https://open.spotify.com/album/2WbgQIggT3i5OUr94vlcUT?si=AsDBpduDQAmptgtKvR6aJg", 
    image: "/assets/About/Song-3.jpg",
    type: 'album'
  },
  { 
    id: 4, 
    title: "Water the Flowers, Pray for a Garden", 
    url: "https://open.spotify.com/album/2AUF4A04JUP4xaSUmFjJnK?si=ZQHqd8vTSdendgK1mMuIgg", 
    image: "/assets/About/Song-4.jpg",
    type: 'album'
  },
  { 
    id: 5, 
    title: "BADLANDS", 
    url: "https://open.spotify.com/album/5U5rt98q8Jqx4lP3RdqYfO?si=WAvfrhl6RgSzqWwH3VoQ-w", 
    image: "/assets/About/Song-5.jpg",
    type: 'album'
  },
]