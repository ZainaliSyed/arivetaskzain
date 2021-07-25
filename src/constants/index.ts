const BASE_URL = 'Https://abc.com';
const getCategory = 'category/cat-id';
const getSubCategory = '/product/sub-categoryid=hand-wash';

const productCategories = [
  {
    id: 'all',
    title: 'All Products'
  },
  {
    id: 'shampoo',
    title: 'Shampoo'
  },
  {
    id: 'hand-wash',
    title: 'Hand Wash'
  },
  {
    id: 'fragrance',
    title: 'Fragrance'
  },
]

const dashboardData = [
  {
    id: 1,
    cat_id: 'shampoo',
    title: "Shampoo",
    brand: 'Marvis',
    price: '39.99$',
    imgName: "https://m.media-amazon.com/images/I/71FMlrA8TiL._SL1500_.jpg",
    screenName: "Shampoo"
  },
  {
    id: 2,
    cat_id: 'shampoo',
    title: "Shampoo1",
    brand: 'Aesop',
    price: '25.8$',
    imgName: "https://www.ogxbeauty.com/wp-content/uploads/2017/02/0028_91670-Biotin-Shampoo-13oz.jpg",
    screenName: "Shampoo1"
  },
  {
    id: 3,
    cat_id: 'shampoo',
    title: "Shampoo2",
    brand: 'VAAY',
    price: '55$',
    imgName: "https://www.dove.com/content/dam/unilever/dove/pakistan/pack_shot/hfr-front-798822-2170943-png.png",
    screenName: "Shampoo2"
  },
  {
    id: 4,
    cat_id: 'hand-wash',
    title: "Hand Wash",
    brand: 'Marvis',
    price: '10$',
    imgName: "https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hfc/h62/8867998236702/DettolOriginalLiquidHandwash.jpg",
    screenName: "Hand Wash"
  },
  {
    id: 5,
    cat_id: 'hand-wash',
    title: "Hand Wash1",
    brand: 'Aesop',
    price: '45$',
    imgName: "https://www.simpleskincare.com/sk-eu/content/dam/brands/lifebuoy/specified_clusterscountries/2169678-lifebuoy-handwash-total---total-10-handwash.png",
    screenName: "Hand Wash1"
  },
  {
    id: 6,
    cat_id: 'fragrance',
    title: "Fragrance",
    brand: 'VAAY',
    price: '60$',
    imgName: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fragrance-women2020b-1589562509.jpg?crop=0.405xw:0.811xh;0.288xw,0.0962xh&resize=640:*",
    screenName: "Fragrance"
  }
]


export {
  BASE_URL,
  getCategory,
  getSubCategory,
  dashboardData,
  productCategories,
};