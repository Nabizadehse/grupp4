const products = {
  productsData: [
    {
      "id": 1,
      "title": "Xbox Game Pass",
      "description": "Med Xbox Game Pass Ultimate får du alla fördelarna med Xbox Live Gold, över 100 högkvalitativa spel för konsol, PC och mobila Android-enheter samt tillgång till EA Play utan extra kostnad, allt för ett lågt månadspris.",
      "category": "game",
      "company": "microsoft",
      "type": "Card",
      "price": "120"
    },
    {
      "id": 2,
      "title": "Spotify Gift Card",
      "description": "Spotify Premium lets you download up to 10,000 songs so you can listen when you're away from the internet or just want to cut down on your data usage. And you can do this on up to five different devices ",
      "category": "music",
      "company": "Spotify",
      "type": "Card",
      "price": "100"
    },
    {
      "id": 3,
      "title": "Tidal Gift Card",
      "description": "Stream all of your favorites. Over 70 million songs and 250,000 videos at your fingertips. TIDAL is the first global music streaming service with high fidelity sound.",
      "category": "music",
      "company": "Tidal",
      "type": "Card",
      "price": "100"
    },
    {
      "id": 4,
      "title": "Youtube Premium Gift Card",
      "description": "The service provides ad-free access to content across the service, as well as access to premium YouTube Originals programming produced in collaboration with the site's creators, downloading videos and background playback of videos on mobile devices, and access to the YouTube Music music streaming service",
      "category": "music",
      "company": "Youtube",
      "type": "Card",
      "price": "100"
    },
    {
      "id": 5,
      "title": "Playstation Plus",
      "description": "PS Plus is a paid subscription service from PlayStation which gives members two PS4 games to download every month, as well as access to online multiplayer gaming, exclusive discounts from PlayStation Store, 100GB of cloud storage for game saves and bonus content such as skins and in-game items for free-to-play games",
      "category": "game",
      "company": "sony",
      "type": "Card",
      "price": "100"
    },
    {
      "id": 6,
      "title": "Playstation Store Gift Card",
      "description": "PlayStation Store gift cards are redeemable on the PlayStation Network (PSN) so it doesn’t matter if you have the current PS4 or an older console (e.g. PS1, PS2, PS3), the gift card will be redeemable for downloadable content (e.g. movies, games, in-game features, etc.) via the PSN.",
      "category": "game",
      "company": "sony",
      "type": "Card",
      "price": "100"
    },
    {
      "id": 7,
      "title": "Nintendo Switch Online",
      "description": "Nintendo Switch Online features include online multiplayer, cloud saving, voice chat via a smartphone app, access to a library of Nintendo Entertainment System (NES) and Super Nintendo Entertainment System (SNES) games",
      "category": "game",
      "company": "nintendo",
      "type": "Card",
      "price": "120"
    },
    {
      "id": 8,
      "title": "Steam Gift Card",
      "description": "Steam gift cards are redeemable for games, software, hardware and more on the Steam.com storefront",
      "category": "game",
      "company": "steam",
      "type": "Card",
      "price": "150"
    },
    {
      "id": 8,
      "title": "Fortnite Gift Card",
      "description": "Fortnite is a game that can be played on a variety of platforms—PlayStation, Xbox, Nintendo and Steam, as well as mobile devices and computers",
      "category": "game",
      "company": "epic-games",
      "type": "Card",
      "price": "100"
    },
    {
      "id": 9,
      "titel": "League Of Legends Gift Card",
      "description": "League of Legends gift cards are redeemable for Riot Points that must be used within the gaming platform to buy character accessories, the use of champions and other premium content.",
      "category": "game",
      "company": "riot",
      "type": "Card",
      "price": "100"
    },
    {
      "id": 10,
      "title": "Asos Gift Card",
      "description": "ASOS is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content, making ASOS.com the hub of a thriving fashion community",
      "category": "fashion",
      "company": "asos",
      "type": "Card",
      "price": "150"
    },
    {
      "id": 11,
      "title": "Gap Gift Card",
      "description": "Gap has everything you need to express your personal style.  Whether you’re looking for wardrobe essentials such as t-shirts, hoodies, great-fitting pants, or trendy tops and great denim",
      "category": "fashion",
      "company": "gap",
      "type": "Card",
      "price": "120"
    },
    {
      "id": 12,
      "title": "Nike Gift Card",
      "description": "Nike is one of the world’s most iconic brands. From sports fans to style aficionados, athletes to achievers, Nike Gift Cards are always the perfect fit for exciting, motivating, and inspiring your team.",
      "category": "fashion",
      "company": "nike",
      "type": "Card",
      "price": "100"
    },
    {
      "id": 13,
      "title": "Nordstrom Gift Card",
      "description": "Nordstrom gift cards serve customers through Nordstrom Rack stores and online at nordstromrack.com and flash-sale site Hautelook.com without ever expiring. Redeem your gift card or egift card fully at at stores on online at Nordstrom, Nordstrom Rack, and Hautelook.",
      "category": "fashion",
      "company": "nordstrom",
      "type": "Card",
      "price": "120"
    },
    {
      "id": 14,
      "title": "Ray-Ban Gift Card",
      "description": "Throughout its seven-and-a-half decades, Ray-Ban has been instrumental in pushing boundaries in music and the arts, forging the rise of celebrity culture, and creating the power of the rock and movie stars to influence fashion",
      "category": "fashion",
      "company": "rayban",
      "type": "Card",
      "price": "120"
    },
    {
      "id": 15,
      "title": "McDonalds Gift Card",
      "description": "The craveable gift for any occasion -- holidays, birthdays, appreciation or just because. Everyone on your list will love a McDonald's Gift Card. Send one to yourself and enjoy the convenience of a cash-free fries run any time.",
      "category": "food",
      "company": "mcdonalds",
      "type": "Card",
      "price": "120"
    },
    {
      "id": 16,
      "title": "Chipotle Gift Card",
      "description": "With more than 2,000 restaurants across America, there are plenty of places to use a Chipotle gift card.",
      "category": "food",
      "company": "mcdonalds",
      "type": "Card",
      "price": "120"
    },
    {
      "id": 17,
      "title": "Treehotel night",
      "description": "Spend a night at a tree hotel in Sweden",
      "category": "hotel",
      "company": "Tree-resort",
      "type": "Card",
      "price": "5000"
    },
    {
      "id": 18,
      "title": "A night at the museum",
      "description": "Find out the National Museum of Natural History during late hours",
      "category": "museum",
      "company": "national museum of natural history",
      "type": "Card",
      "price": "300"
    },
    {
      "id": 19,
      "title": "A cooking lesson",
      "description": "Learn how to cook with the best of all chefs, Cyril Lignac.",
      "category": "cooking",
      "company": "Cyril Lignac",
      "type": "Card",
      "price": "1500"
    },
    {
      "id": 20,
      "title": "A massage at a japanese SPA",
      "description": "Spend the weekend at the japanese SPA Yasuragi and relax",
      "category": "massage",
      "company": "Yasuragi",
      "type": "Card",
      "price": "5000"
    },
    {
      "id": 21,
      "title": "A night at the opera",
      "description": "Listen to La Bohème at the opera on a Monday evening",
      "category": "opera",
      "company": "Royal Opera of Stockholm",
      "type": "Card",
      "price": "600"
    },
    {
      "id": 22,
      "title": "A football game",
      "description": "Watch a football game at Friends Arena",
      "category": "football",
      "company": "AIK",
      "type": "Card",
      "price": "400"
    }
  ]

}




export default products;
