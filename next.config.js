/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "simply-rent.s3.ap-south-1.amazonaws.com",
    //     port: "",
    //     pathname: "Fitness-offer-banner-for-Web--2.jpg",
    //   },
    // ],

    domains: ["simply-rent.s3.ap-south-1.amazonaws.com"],
  },
};
