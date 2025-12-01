import React from "react";

const IMAGE_POOL = [
  "https://images.pexels.com/photos/5845255/pexels-photo-5845255.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/1718758/pexels-photo-1718758.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/5589598/pexels-photo-5589598.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/2338113/pexels-photo-2338113.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/10175091/pexels-photo-10175091.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",

  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/338711/pexels-photo-338711.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",

  "https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/756685/pexels-photo-756685.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/1403653/pexels-photo-1403653.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/2119632/pexels-photo-2119632.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/2610756/pexels-photo-2610756.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",

  "https://images.pexels.com/photos/1769356/pexels-photo-1769356.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/264502/pexels-photo-264502.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
  "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
];

const getRandomImageUrl = () => {
  const index = Math.floor(Math.random() * IMAGE_POOL.length);
  return IMAGE_POOL[index];
};

export default getRandomImageUrl;
