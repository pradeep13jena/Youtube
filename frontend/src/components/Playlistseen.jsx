import React from 'react'
import PlaylistViewer from './PlaylistViewer'

export default function Playlistseen() {
  const playlists = [
    {
      name: "Watch Later",
      description: "Videos you saved to watch later.",
      category: "Personal",
      subscribers: null, // No subscribers for personal playlists
      created: "2024-01-01",
    },
    {
      name: "Liked Videos",
      description: "All the videos you've liked.",
      category: "Personal",
      subscribers: null,
      created: "2024-01-05",
    },
    {
      name: "Tech Savvy",
      description: "Latest tech reviews, tutorials, and gadget news.",
      category: "Technology",
      subscribers: 1500000,
      created: "2023-12-20",
    },
    {
      name: "Music Vibes",
      description: "Your favorite tracks and music videos.",
      category: "Music",
      subscribers: 2000000,
      created: "2023-11-15",
    },
    {
      name: "Fitness Goals",
      description: "Workout routines and fitness tips.",
      category: "Health & Fitness",
      subscribers: 800000,
      created: "2023-10-10",
    },
    {
      name: "Travel Diaries",
      description: "Exploring the best destinations around the world.",
      category: "Travel",
      subscribers: 1200000,
      created: "2023-09-25",
    },
    {
      name: "Gaming Central",
      description: "Walkthroughs, reviews, and live streams.",
      category: "Gaming",
      subscribers: 1750000,
      created: "2023-08-30",
    },
    {
      name: "Comedy Nights",
      description: "Funny sketches and stand-up specials.",
      category: "Comedy",
      subscribers: 2200000,
      created: "2023-07-15",
    },
    {
      name: "DIY & Crafts",
      description: "Creative projects to try at home.",
      category: "Lifestyle",
      subscribers: 650000,
      created: "2023-06-10",
    },
    {
      name: "Cinematic Universe",
      description: "Movie reviews, trailers, and behind-the-scenes.",
      category: "Entertainment",
      subscribers: 1300000,
      created: "2023-05-20",
    },
  ];
  
  return (
    <div className='px-3 sm:px-5 my-5 w-full'>
      <h1 className='text-2xl md:text-4xl font-roboto font-bold mb-6'>Playlists</h1>
      <div id='id1' className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-192.2px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
        {playlists.map((cat, index) => {
          return (
            <PlaylistViewer key={index} name={cat.name} date={cat.created}/>
          )
        })}
      </div> 
    </div>
  )
}
