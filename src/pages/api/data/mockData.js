/**
 * Mock data for different social media platforms
 */
export const mockData = {
  instagram: {
    name: "Instagram User",
    username: "@instagram_user",
    bio: "Digital creator | Photography enthusiast | Sharing moments from around the world ✈️ | DM for collaborations",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    stats: {
      posts: "217",
      followers: "15.4K",
      following: "324"
    },
    content: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1610650214064-99b19c7c773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 432,
        comments: 21
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 1024,
        comments: 98
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 543,
        comments: 42
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 876,
        comments: 35
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 232,
        comments: 15
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 651,
        comments: 29
      }
    ]
  },
  twitter: {
    name: "Twitter User",
    username: "@twitter_user",
    bio: "Tech enthusiast | Web developer | Sharing thoughts about the digital world | Tweets are my own",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stats: {
      posts: "3,412",
      followers: "8.7K",
      following: "512"
    },
    content: [
      { 
        type: "text", 
        content: "Just launched a new website! Check it out at example.com #webdev #launch",
        likes: 87,
        retweets: 14,
        comments: 8
      },
      { 
        type: "text", 
        content: "Interesting thread on the future of AI in software development. I believe we're just scratching the surface of what's possible. #AI #coding",
        likes: 133,
        retweets: 42,
        comments: 17
      },
      { 
        type: "text", 
        content: "The key to productive coding sessions: good coffee, nice music, and zero notifications. What's your setup?",
        likes: 214,
        retweets: 28,
        comments: 54
      }
    ]
  },
  facebook: {
    name: "Facebook User",
    username: "facebook.user",
    bio: "Living life to the fullest | Travel | Food | Family",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    stats: {
      posts: "482",
      followers: "1.2K",
      following: "315"
    },
    content: [
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        text: "Beautiful day at the beach with family! #SummerVibes",
        likes: 98,
        comments: 12
      },
      { 
        type: "text", 
        content: "So excited to announce that we're moving to a new city next month! Can't wait for this new chapter in our lives. ✨",
        likes: 187,
        comments: 43
      },
      { 
        type: "image", 
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        text: "Dinner with friends at the new restaurant downtown. The food was amazing!",
        likes: 64,
        comments: 7
      }
    ]
  },
  tiktok: {
    name: "TikTok Creator",
    username: "@tiktok_creator",
    bio: "Making people smile | Daily content | DM for business inquiries",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    stats: {
      posts: "124",
      followers: "457K",
      following: "86"
    },
    content: [
      { 
        type: "video", 
        thumbnail: "https://images.unsplash.com/photo-1640159856195-3d05acc1ac8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        views: "1.2M",
        likes: "245K",
      },
      { 
        type: "video", 
        thumbnail: "https://images.unsplash.com/photo-1627315337860-d8050b008aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        views: "879K",
        likes: "154K",
      },
      { 
        type: "video", 
        thumbnail: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        views: "2.3M",
        likes: "512K",
      }
    ]
  },
  youtube: {
    name: "YouTube Creator",
    username: "youtube_creator",
    bio: "Tech reviews | Tutorials | Vlogs | New videos every Tuesday and Friday",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    stats: {
      posts: "87",
      followers: "243K",
      following: "15"
    },
    content: [
      { 
        type: "video", 
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "Unboxing the Latest Smartphone - Is it Worth It?",
        views: "127K",
        likes: "8.4K",
      },
      { 
        type: "video", 
        thumbnail: "https://images.unsplash.com/photo-1574390353491-92705afa9be3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "Learn Web Development in 30 Days - Complete Guide",
        views: "324K",
        likes: "24K",
      },
      { 
        type: "video", 
        thumbnail: "https://images.unsplash.com/photo-1696656490093-89d5fc05e252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "A Day in My Life as a Content Creator",
        views: "98K",
        likes: "7.1K",
      }
    ]
  },
  linkedin: {
    name: "LinkedIn Professional",
    username: "linkedin-pro",
    bio: "Senior Software Engineer | Web Development | Cloud Architecture | Open to new opportunities",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    stats: {
      posts: "84",
      followers: "2.8K",
      following: "347"
    },
    content: [
      { 
        type: "text", 
        content: "Excited to announce that I've just completed my AWS certification! Looking forward to applying these skills in my next project. #AWS #Certification #ProfessionalDevelopment",
        likes: 142,
        comments: 28
      },
      { 
        type: "text", 
        content: "Just published a new article on Medium about modern frontend development practices and how they're shaping the industry. Link in comments. #WebDev #Frontend",
        likes: 87,
        comments: 14
      },
      { 
        type: "text", 
        content: "Proud to share that our team has successfully launched the new company website, improving load times by 40% and increasing user engagement. #WebPerformance #UX",
        likes: 234,
        comments: 42
      }
    ]
  }
}; 