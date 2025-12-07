function Topbar() {
  return (
    <div className="bg-(--clr-grey)">
      <div className="container mx-auto py-2">
        <div className="row">
          <div className="w-1/3">
            <a href="tel:(+84) 0123 456 789" className="text-body">
              (+84) 0123 456 789
            </a>
          </div>

          <div className="w-1/3">
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

          <div className="w-1/3">
            <div className="nav">
              <ul className="flex justify-end flex-wrap gap-4">
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
