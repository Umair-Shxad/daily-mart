import { BsArrowRight, BsInstagram } from "react-icons/bs";
import Card from "../ui/Card";
import Slider from "../ui/Slider";
import { INSTAGRAM_IMAGES, PRODUCTS } from "../constants";
import Button from "../ui/Button";
import BookingModal from "../ui/BookingModal";

function Homepage() {
  return (
    <>
      <Slider />
      <div className="container py-15">
        <h2 className="text-center text-4xl font-medium font-Poppins mb-10">
          Our Trending Products
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {PRODUCTS.map((product) => (
            <Card product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button as="a" href="#" variant="v1">
            View More
            <BsArrowRight className="ms-3 transition-all duration-300 hover:text-white" />
          </Button>
        </div>
      </div>

      {/* Promo Banner */}
      <section
        className="relative h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4 max-w-3xl">
          <p className="font-bold mb-4 uppercase tracking-widest text-sm">
            Get up to -40% Off
          </p>
          <h2 className="text-5xl font-bold font-poppins mb-6">
            Only Summer Collections
          </h2>
          <p className="text-gray-200 mb-10 leading-relaxed italic text-sm md:text-base">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <Button as="a" href="#" variant="v2" className="w-max mx-auto">
            Start Shopping
            <BsArrowRight className="ms-3 transition-all duration-300 hover:text-white" />
          </Button>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-15 text-center">
        <div className="mb-12">
          <p className="text-brand font-bold text-sm">@mahak_71</p>
          <h2 className="text-3xl font-bold font-poppins font-kaushan italic text-gray-200 -mt-2">
            From Instagram Gallery
          </h2>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <div
              key={i}
              className="aspect-square relative group overflow-hidden"
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt="Instagram"
              />
              <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <BsInstagram size={24} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Badges */}
      <section className="pb-15 border-y border-gray-100 max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center text-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase">Free Shipping</h4>
            <p className="text-muted text-xs">Capped at $10 per order</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center text-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase">Secure Payments</h4>
            <p className="text-muted text-xs">Up to 6 months installments</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center text-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase">15-Days Returns</h4>
            <p className="text-muted text-xs">Shop with fully confidence</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center text-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase">24X7 Fully Support</h4>
            <p className="text-muted text-xs">Get friendly support</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
