import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  Logo
 *  Nav Bar
 * Body
 *  Search
 *  RestaurantContainer
 *      RestaurantCard
 * Footer
 *  Copyright
 *  Links
 *  Address
 *  Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/courier-bike-logo-icon-design_658271-1412.jpg?w=740"
      ></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const cardStyle = { marginTop: 5, marginBottom: 5 };

const restList = [
  {
    "@type": "ListItem",
    position: 1,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/omwm/karachi-chaman-biryani-omwm",
      name: "Karachi Chaman Biryani",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/omwm-listing.jpg",
      servesCuisine: ["Pulao", "Pakistani", "Biryani"],
      priceRange: "$",
      telephone: "+923412550415",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop # 12, Ground Floor, Crown Business Centre, MPCHS, Main Road E-11/2, Islamabad",
        addressLocality: "Islamabad",
        postalCode: "44090",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 2,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/lt6a/xingxung",
      name: "Xingxung",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/lt6a-listing.jpg",
      servesCuisine: ["Chinese"],
      priceRange: "$",
      telephone: "+923120878070",
      address: {
        "@type": "PostalAddress",
        streetAddress: "f 11 Markaz infrount of park avenue",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 3,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/hrxa/islamabad-food-point-hrxa",
      name: "Islamabad food point",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/hrxa-listing.jpg",
      servesCuisine: ["Beverages", "Paratha", "Pakistani"],
      priceRange: "$",
      telephone: "+923365801114",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Royale suit plaza, near Waseem Shanwari, Main double road, E-11/2 Markaz",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 4,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/blss/karachi-student-biryani-blss",
      name: "Karachi Student Biryani",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/blss-listing.jpg",
      servesCuisine: ["Pulao", "Pakistani", "Biryani"],
      priceRange: "$",
      telephone: "+923405045707",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop no 12 ground floor crown business center MPCHS main double road E11/2 Islamabad near international margla hills",
        addressLocality: "Islamabad",
        postalCode: "44090",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 5,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/l18i/urban-grill-and-desserts",
      name: "Urban Grill & Desserts",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/l18i-listing.jpg",
      servesCuisine: [
        "Beverages",
        "Biryani",
        "Western",
        "Ice Cream",
        "Healthy Food",
        "Middle Eastern",
        "Pakistani",
        "Sandwiches",
        "Japanese",
        "Vegetarian",
        "Pizza",
        "Chinese",
        "Thai",
        "Cakes & Bakery",
        "Continental",
        "Tea & Coffee",
        "Broast",
        "Wraps & Rolls",
        "Steak",
        "BBQ",
        "Shawarma",
        "Savouries",
        "Pulao",
        "Seafood",
        "Desserts",
        "Burgers",
        "Fast Food",
      ],
      priceRange: "$$",
      telephone: "+923335104325",
      address: {
        "@type": "PostalAddress",
        streetAddress: "House no. 1519, Street no. 87, D-12/1, Islamabad",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 6,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/n0rj/lebanese-food-garden-n0rj",
      name: "Lebanese Food Garden",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/n0rj-listing.JPG",
      servesCuisine: ["BBQ", "Fast Food"],
      priceRange: "$$",
      telephone: "+923080470008",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop No. 2, Basement Mahnoor Arcade, Next to Karachi Biryani, Sector E-11/2",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 7,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/civr/beijing-box",
      name: "Beijing Box",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/civr-listing.jpg",
      servesCuisine: ["Chinese"],
      priceRange: "$$",
      telephone: "+923188713738",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop 9, Akbar heights, medical society e11/2",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 8,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/ic35/peshawari-bawarchi-khaana",
      name: "Peshawari Bawarchi Khaana",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/ic35-listing.jpeg",
      servesCuisine: [
        "Beverages",
        "Biryani",
        "Western",
        "Haleem",
        "Karahi & Handi",
        "Nihari",
        "Shakes",
        "Middle Eastern",
        "Samosa",
        "Paratha",
        "Pakistani",
        "Sandwiches",
        "Chinese",
        "Continental",
        "Qeema",
        "Tea & Coffee",
        "Broast",
        "Wraps & Rolls",
        "Pasta",
        "BBQ",
        "Shawarma",
        "Savouries",
        "Pulao",
        "Desserts",
        "Burgers",
        "Fast Food",
      ],
      priceRange: "$$",
      telephone: "+923135994399",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House No 88, Street 53-B, Loharan Gali, near Masjid Umer Farooq, E-11/4 Islamabad near Masjid Loharan & Akbar Apartments",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 9,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/grf8/biryani-spot-grf8",
      name: "Biryani Spot",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/grf8-listing.jpg",
      servesCuisine: ["Pulao", "Pakistani", "Biryani"],
      priceRange: "$",
      telephone: "+92512712233",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shah Mehmood Plaza, Shop no. 2, E-11/1,  Ground floor, Islamabad",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 10,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/o9f8/tiffin-by-rustic",
      name: "Tiffin by Rustic",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/o9f8-listing.jpg",
      servesCuisine: [
        "Wraps & Rolls",
        "Beverages",
        "Pakistani",
        "Biryani",
        "Fast Food",
        "Karahi & Handi",
      ],
      priceRange: "$",
      telephone: "+923351843346",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House 57 St # 153 D-12/4 D 12/4 D-12, Islamabad, Islamabad Capital Territory, Pakistan",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 11,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/mahv/love-bites-mahv",
      name: "Love Bites",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/mahv-listing.jpg",
      servesCuisine: [
        "Pakistani",
        "Sandwiches",
        "Biryani",
        "Burgers",
        "Western",
      ],
      priceRange: "$",
      telephone: "+923314833332",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House no/305, Street no. 101 E/11, - E - 11 Sector 1, opposite Neelam Apartment Islamabad",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 12,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/k0xu/mfc-e-11",
      name: "MFC- E-11",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/k0xu-listing.jpg",
      servesCuisine: ["Fast Food"],
      priceRange: "$$",
      telephone: "+923440053568",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop.2, Basement Mahnoor Arcade, Near Lebanese Food, E-11/2",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 13,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/s7pm/nocciola",
      name: "Nocciola",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/s7pm-listing.jpg",
      servesCuisine: ["Ice Cream", "Shakes", "Desserts"],
      priceRange: "$$",
      telephone: "+923339194696",
      address: {
        "@type": "PostalAddress",
        streetAddress: "F11, Liberty Square Plaza, Shop 7, Plot 27, Islamabad",
        addressLocality: "Islamabad",
        postalCode: "44320",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 14,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/ho3q/chai-o-clock",
      name: "Chai O' Clock",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/ho3q-listing.jpg",
      servesCuisine: ["Beverages", "Fast Food"],
      priceRange: "$$",
      telephone: "+923323703709",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop# 14-B & 15 sardar arcade,opp.silk bank F11 Markaz Islamabad.",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 15,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/mrtt/the-homemade-haven",
      name: "The Homemade Haven",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/mrtt-listing.jpg",
      servesCuisine: ["Beverages", "Pakistani", "Biryani"],
      priceRange: "$$",
      telephone: "+923180827680",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shahabuddin Road Near MNA Anjum Aqeel khan Parking E11 Islamabad",
        addressLocality: "Islamabad",
        postalCode: "04403",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 16,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/h2eb/caramel-wasla",
      name: "Caramel Wasla",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/h2eb-listing.jpg",
      servesCuisine: [
        "Beverages",
        "Pasta",
        "Pakistani",
        "Biryani",
        "Karahi & Handi",
      ],
      priceRange: "$",
      telephone: "+923365525552",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Medical cooperative housing society Nafees mansion fabs salon building apartment no 404 fourth floor E-11/2 Islamabad",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 17,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/itz8/al-naseeb-biryani-center",
      name: "Al Naseeb Biryani Center",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/itz8-listing.jpg",
      servesCuisine: ["Pulao", "Pakistani", "Biryani"],
      priceRange: "$",
      telephone: "+923270848066",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Hill road Islamabad opposite Mian g  catering & party decorators",
        addressLocality: "Islamabad",
        postalCode: "46000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 18,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/njet/special-lahori-nashta-and-restaurant",
      name: "Special Lahori Nashta & Restaurant",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/njet-listing.jpg",
      servesCuisine: ["Beverages", "Halwa Puri", "Pakistani", "Desserts"],
      priceRange: "$",
      telephone: "+923125451186",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Royale suit plaza, near Waseem Shanwari, Main double road, E-11/2 Markaz",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 19,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/ygy1/katvee",
      name: "Katvee",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/ygy1-listing.jpg",
      servesCuisine: ["Pakistani"],
      priceRange: "$$",
      telephone: "+923138043472",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Katvee restaurant, Shop 2,3, Crown business center, E-11/1, Islamabad",
        addressLocality: "Islamabad",
        postalCode: "45200",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 20,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/wvlc/rotisserie-chicken-house",
      name: "Rotisserie Chicken House",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/wvlc-listing.jpg",
      servesCuisine: ["Beverages", "Pakistani"],
      priceRange: "$$",
      telephone: "+923275780280",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "House no. 325, Sector E11/1, Street 100, near Masjid-e-Quba",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 21,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/l1h8/quetta-tea-4-u",
      name: "Quetta Tea 4 U",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/l1h8-listing.jpg",
      servesCuisine: ["Beverages", "Pakistani", "Western", "Tea & Coffee"],
      priceRange: "$",
      telephone: "+923152198707",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop# 11 Alkaram plaza Ground floor, Next to HBL bank F11 Markaz Islamabad",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 22,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/mlri/lespresso-cafe",
      name: "L’espresso Cafe",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/mlri-listing.jpg",
      servesCuisine: [
        "Shakes",
        "Beverages",
        "Continental",
        "Desserts",
        "Tea & Coffee",
      ],
      priceRange: "$$",
      telephone: "+923222043010",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop no.6, Ground floor, Liberty Mall, F-11 Markaz",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 23,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/n4jy/ranchers-f-11",
      name: "Ranchers - F 11",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/n4jy-listing.jpg",
      servesCuisine: ["Sandwiches", "Pizza", "Burgers", "Western", "Fast Food"],
      priceRange: "$$",
      telephone: "+923454477776",
      address: {
        "@type": "PostalAddress",
        streetAddress: "shop G5 liberty moor hilal road F-11 murqaz",
        addressLocality: "Islamabad",
        postalCode: "62612",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 24,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/yi03/grill-daddy",
      name: "Grill Daddy",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/yi03-listing.jpg",
      servesCuisine: ["Middle Eastern", "BBQ", "Pakistani"],
      priceRange: "$$",
      telephone: "+923318000087",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop No. 15, First Floor, Liberty Square Plaza, F-11 Markaz, Sector F-11, Islamabad - Pakistan",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 25,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/s9rd/ha-pi",
      name: "Ha' pi'",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/s9rd-listing.jpg",
      servesCuisine: ["Seafood", "Chinese"],
      priceRange: "$$",
      telephone: "+923311146661",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Liberty square plaza f-11 markaz isb",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 26,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/v3us/mamas-food",
      name: "Mama's Food",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/v3us-listing.jpg",
      servesCuisine: [
        "Ice Cream",
        "BBQ",
        "Paratha",
        "Pakistani",
        "Haleem",
        "Fast Food",
        "Nihari",
      ],
      priceRange: "$",
      telephone: "+923358237777",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Golra E-11, Islamabad, Islamabad Capital Territory, Pakistan",
        addressLocality: "Islamabad",
        postalCode: "46000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 27,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/abgi/house-of-cuisine-abgi",
      name: "House of Cuisine",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/abgi-listing.jpg",
      servesCuisine: [
        "Shakes",
        "Beverages",
        "Paratha",
        "Pakistani",
        "Sandwiches",
        "Chinese",
        "Western",
        "Haleem",
        "Fast Food",
        "Karahi & Handi",
        "Nihari",
      ],
      priceRange: "$$",
      telephone: "+923239073455",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Upper Ground floor, E-11/1, Khudad Heights",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 28,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/s0db/pizza-originale-f-11",
      name: "Pizza Originale - F 11",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/s0db-listing.jpg",
      servesCuisine: ["Pizza"],
      priceRange: "$$$",
      telephone: "+92518734005",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Islamabad",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 29,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/xlwy/cajun-chicken",
      name: "Cajun Chicken",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/xlwy-listing.jpg",
      servesCuisine: ["Sandwiches", "Western", "Fast Food"],
      priceRange: "$",
      telephone: "+92516101292",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "2nd Floor, Plot 26, Building 4, F-11 Markaz, Islamabad,",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
  {
    "@type": "ListItem",
    position: 30,
    item: {
      "@type": "Restaurant",
      url: "https://www.foodpanda.pk/restaurant/t1qn/waseem-shanwari",
      name: "Waseem Shanwari",
      image: "https://images.deliveryhero.io/image/fd-pk/LH/t1qn-listing.jpg",
      servesCuisine: ["BBQ", "Paratha", "Pakistani", "Karahi & Handi"],
      priceRange: "$$",
      telephone: "+923005025819",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Shop no.1 & 2 Main double road near Faisal bank E-11/2 Markaz.",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, image, servesCuisine, address, telephone } = restData?.item;

  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="rest-logo" alt="rest-log" src={image}></img>
      <h3 style={cardStyle}>{name}</h3>
      <h5 style={cardStyle}>{servesCuisine.join(", ")}</h5>
      <h5 style={cardStyle}>{address.streetAddress}</h5>
      <h5 style={cardStyle}>{"Ph: " + telephone}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.position} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
