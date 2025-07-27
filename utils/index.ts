export const products = [
  {
    name: "Alexa Dress",
    price: 320,
    quickDescription: "Made for the spotlight—your moment starts here.",
    description: "A statement linen dress designed to steal the spotlight, tailored for bold entrances and lasting impressions.",
    features: [
      "100% premium linen",
      "Structured corset bodice",
      "Fully lined for comfort",
      "Back zip closure", 
      "Lightweight and breathable"
    ],
    pictures: [
      "/Images/Klassyy.jpg",
    ],
    variants: [
      { color: "Pink", size: "S", quantity: 1 },
      { color: "Pink", size: "L", quantity: 2 },
      { color: "White", size: "M", quantity: 1 },
      { color: "White", size: "XL", quantity: 1 },
      { color: "Black", size: "L", quantity: 1 },
      { color: "Black", size: "S", quantity: 1 }
    ]
  },
  {
    name: "Noir Dress",
    price: 280,
    quickDescription: "Designed to own the room, day or night.",
    description: "An effortless classic made to move from casual to formal with ease. Confidence stitched into every seam.",
    features: [
      "Silky stretch satin",
      "Flattering wrap silhouette",
      "Elegant V-neckline",
      "Adjustable waist tie",
      "Perfect for day-to-night styling"
    ],
    pictures: [
      "/Images/Klassy.jpg"
    ],
    variants: [
      { color: "Black", size: "M", quantity: 2 },
      { color: "Black", size: "L", quantity: 1 },
      { color: "Cream", size: "S", quantity: 1 },
      { color: "Cream", size: "XL", quantity: 1 },
      { color: "Emerald", size: "M", quantity: 1 },
      { color: "Emerald", size: "L", quantity: 1 }
    ]
  },
  {
    name: "Venus Dress",
    price: 340,
    quickDescription: "For soft power moves and bold entrances.",
    description: "Bold, soft, magnetic—Venus embodies modern femininity with clean lines and undeniable charm.",
    features: [
      "Soft structured crepe",
      "Sculpted square neckline",
      "Draped skirt detail",
      "Invisible side zip",
      "Satin-lined for comfort"
    ],
    pictures: [
      "/Images/Klassyyy.jpg"
    ],
    variants: [
      { color: "White", size: "S", quantity: 1 },
      { color: "White", size: "M", quantity: 1 },
      { color: "Pink", size: "L", quantity: 2 },
      { color: "Pink", size: "XL", quantity: 1 },
      { color: "Black", size: "M", quantity: 1 },
      { color: "Black", size: "S", quantity: 1 }
    ]
  }
];

export const colorMap: Record<string, string> = {
  Pink: '#ffc0cb',
  White: '#ffffff',
  Black: '#000000'
};



