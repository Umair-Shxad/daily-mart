import Card from "../ui/Card";
import Slider from "../ui/Slider";

function Homepage() {
  return (
    <>
      <Slider />
      <div className="container py-15">
        <h2 className="text-center text-4xl font-medium font-Poppins mb-10">
          Our Trending Products
        </h2>
        <div className="grid grid-cols-4 gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Homepage;
