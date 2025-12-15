function Topbar() {
  return (
    <div className="bg-(--clr-grey) hidden lg:block">
      <div className="container py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-2 items-center">
          <div className="text-center md:text-left">
            <a href="tel:(+84) 0123 456 789" className="text-body">
              (+84) 0123 456 789
            </a>
          </div>

          <div>
            <p className="text-center text-body">
              Get Free delivery from $2000{" "}
              <a
                href="#"
                className="text-black underline text-xs hover:no-underline"
              >
                Shop Now
              </a>
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="nav">
              <ul className="flex justify-center md:justify-end flex-wrap gap-4">
                <li>
                  <a href="#" className="text-body">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body">
                    $USD
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
