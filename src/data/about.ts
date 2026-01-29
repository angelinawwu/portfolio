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
    image: "/assets/About/Books/Book-1.webp",
    type: 'book'
  },
  { 
    id: 2, 
    title: "Stay True", 
    url: "https://www.goodreads.com/book/show/59900070-stay-true", 
    image: "/assets/About/Books/Book-2.webp",
    type: 'book'
  },
  { 
    id: 3, 
    title: "Harrow the Ninth", 
    url: "https://www.goodreads.com/book/show/39325105-harrow-the-ninth", 
    image: "/assets/About/Books/Book-3.webp",
    type: 'book'
  },
  { 
    id: 4, 
    title: "Immaculate Conception", 
    url: "https://www.goodreads.com/book/show/217453576-immaculate-conception", 
    image: "/assets/About/Books/Book-4.webp",
    type: 'book'
  },
  { 
    id: 5, 
    title: "Beloved", 
    url: "https://www.goodreads.com/book/show/6149.Beloved", 
    image: "/assets/About/Books/Book-5.webp",
    type: 'book'
  },
]

export const albums: About[] = [
  { 
    id: 1, 
    title: "FISSION", 
    url: "https://open.spotify.com/album/6PUmlxsIK7Z2Gr5OSTa5YA?si=SaT-4iJPSUeuG0gozIi98g", 
    image: "/assets/About/Songs/Song-1.webp",
    type: 'album'
  },
  { 
    id: 2, 
    title: "GUTS", 
    url: "https://open.spotify.com/album/1xJHno7SmdVtZAtXbdbDZp?si=GTBG02hiRyiRVMAyrtQdHQ", 
    image: "/assets/About/Songs/Song-2.webp",
    type: 'album'
  },
  { 
    id: 3, 
    title: "i feel everything", 
    url: "https://open.spotify.com/album/2WbgQIggT3i5OUr94vlcUT?si=AsDBpduDQAmptgtKvR6aJg", 
    image: "/assets/About/Songs/Song-3.webp",
    type: 'album'
  },
  { 
    id: 4, 
    title: "Water the Flowers, Pray for a Garden", 
    url: "https://open.spotify.com/album/2AUF4A04JUP4xaSUmFjJnK?si=ZQHqd8vTSdendgK1mMuIgg", 
    image: "/assets/About/Songs/Song-4.webp",
    type: 'album'
  },
  { 
    id: 5, 
    title: "BADLANDS", 
    url: "https://open.spotify.com/album/5U5rt98q8Jqx4lP3RdqYfO?si=WAvfrhl6RgSzqWwH3VoQ-w", 
    image: "/assets/About/Songs/Song-5.webp",
    type: 'album'
  },
]

export type ImageItem = {
  id: number;
  image: string;
  alt: string;
  caption?: string;
}

export const images: ImageItem[] = [
  {
    id: 1,
    image: "/assets/About/ImageRow/ImageRow-1.webp",
    alt: "Image 1",
    caption: "HI, IT'S ME!"
  },
  {
    id: 2,
    image: "/assets/About/ImageRow/ImageRow-2.webp",
    alt: "Image 2",
    caption: "MATCHING JACKETS >:)"
  },
  {
    id: 3,
    image: "/assets/About/ImageRow/ImageRow-3.webp",
    alt: "Image 3",
    caption: "DOG!"
  },
  {
    id: 4,
    image: "/assets/About/ImageRow/ImageRow-4.webp",
    alt: "Image 4",
    caption: "SOME OF MY FAV PEOPLE"
  },
  {
    id: 5,
    image: "/assets/About/ImageRow/ImageRow-5.webp",
    alt: "Image 5",
    caption: "ME AGAIN, BUT ON A ROOFTOP"
  },
]