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
  "https://images.pexels.com/photos/1403653/pexels-photo-1403653.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/2119632/pexels-photo-2119632.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/2610756/pexels-photo-2610756.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg",

  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
  "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
  "https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/10369487/pexels-photo-10369487.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",

  "https://images.pexels.com/photos/3722755/pexels-photo-3722755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/1718758/pexels-photo-1718758.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/10175091/pexels-photo-10175091.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "https://images.pexels.com/photos/29778579/pexels-photo-29778579.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
];

export const IMAGE_POOL_EXPORT = IMAGE_POOL;

const getRandomImageUrl = () => {
  const index = Math.floor(Math.random() * IMAGE_POOL.length);
  return IMAGE_POOL[index];
};

export default getRandomImageUrl;
