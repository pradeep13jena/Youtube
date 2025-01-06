import React from 'react'
import Homeviewer from './Homeviewer';
import Filter from './Filter';

export default function Subscription() {
  const channels = [
    {
      name: "TechExplained",
      thumbnail: "https://example.com/thumbnails/tech-explained.jpg", // Replace with actual image URL
      description: "A futuristic graphic featuring a glowing circuit board with the channel logo in the center."
    },
    {
      name: "Daily Adventure",
      thumbnail: "https://example.com/thumbnails/daily-adventure.jpg", // Replace with actual image URL
      description: "A serene image of a hiker standing on a mountain peak with a sunrise in the background."
    },
    {
      name: "Foodie Bliss",
      thumbnail: "https://example.com/thumbnails/foodie-bliss.jpg", // Replace with actual image URL
      description: "A vibrant image of a perfectly plated dish with steam rising, set on a rustic wooden table."
    },
    {
      name: "Fitness First",
      thumbnail: "https://example.com/thumbnails/fitness-first.jpg", // Replace with actual image URL
      description: "A fitness enthusiast mid-workout, with bold typography showcasing 'Stay Strong' as the focus."
    },
    {
      name: "CodeCraft",
      thumbnail: "https://example.com/thumbnails/code-craft.jpg", // Replace with actual image URL
      description: "A creative shot of a laptop with code displayed, surrounded by coffee and sticky notes."
    },
    {
      name: "TechExplained",
      thumbnail: "https://example.com/thumbnails/tech-explained.jpg", // Replace with actual image URL
      description: "A futuristic graphic featuring a glowing circuit board with the channel logo in the center."
    },
    {
      name: "Daily Adventure",
      thumbnail: "https://example.com/thumbnails/daily-adventure.jpg", // Replace with actual image URL
      description: "A serene image of a hiker standing on a mountain peak with a sunrise in the background."
    },
    {
      name: "Foodie Bliss",
      thumbnail: "https://example.com/thumbnails/foodie-bliss.jpg", // Replace with actual image URL
      description: "A vibrant image of a perfectly plated dish with steam rising, set on a rustic wooden table."
    },
    {
      name: "Fitness First",
      thumbnail: "https://example.com/thumbnails/fitness-first.jpg", // Replace with actual image URL
      description: "A fitness enthusiast mid-workout, with bold typography showcasing 'Stay Strong' as the focus."
    },
    {
      name: "CodeCraft",
      thumbnail: "https://example.com/thumbnails/code-craft.jpg", // Replace with actual image URL
      description: "A creative shot of a laptop with code displayed, surrounded by coffee and sticky notes."
    }
  ];
  
  const videos = [
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Node.js Crash Course",
      channelName: "The Dev Channel",
      views: "1.3M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/43/f2/39/43f2392a45622d3a8f889b7be4793e5c.jpg",
      title: "CSS Flexbox Tutorial for Beginners",
      channelName: "WebDev Simplified",
      views: "850K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Node.js Crash Course",
      channelName: "The Dev Channel",
      views: "1.3M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/43/f2/39/43f2392a45622d3a8f889b7be4793e5c.jpg",
      title: "CSS Flexbox Tutorial for Beginners",
      channelName: "WebDev Simplified",
      views: "850K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Node.js Crash Course",
      channelName: "The Dev Channel",
      views: "1.3M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/43/f2/39/43f2392a45622d3a8f889b7be4793e5c.jpg",
      title: "CSS Flexbox Tutorial for Beginners",
      channelName: "WebDev Simplified",
      views: "850K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Node.js Crash Course",
      channelName: "The Dev Channel",
      views: "1.3M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/43/f2/39/43f2392a45622d3a8f889b7be4793e5c.jpg",
      title: "CSS Flexbox Tutorial for Beginners",
      channelName: "WebDev Simplified",
      views: "850K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    }
  ];

  return (
    <div className='flex flex-col px-0 sm:px-5 justify-start pb-2 md:pb-0 w-full overflow-y-auto'>

      {/* Labels */}
      <div className='w-full md:mt-7 md:mb-5'>
        <div 
          id="id1" 
          className="flex items-center justify-start gap-5 px-2 py-2 w-full min-w-0 overflow-x-auto bg-white sticky top-0 z-50"
        >
          {channels.map((cat, index) => (
            <div 
              key={index} 
              className="shrink-0 min-w-max cursor-pointer">
              <Filter thumbnail={cat.thumbnail} name={cat.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div id="id1" className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-172px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {videos.map((cat, index) => {
          return (
            <Homeviewer key={index} thumbnail={cat.thumbnail} title={cat.title} channelName={cat.channelName} views={cat.views}/>
          );
        })}
      </div>
    </div>
  )
}
