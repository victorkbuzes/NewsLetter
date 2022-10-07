import React from "react";

export const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer
          class="text-center text-lg-start text-white"
          style="background-color: #ecf0f1"
        >
          <div class="container p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    DevDeakin
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Explore</h6>
                  <p>
                    <a class="text-white">Home</a>
                  </p>
                  <p>
                    <a class="text-white">Question</a>
                  </p>
                  <p>
                    <a class="text-white">Articles</a>
                  </p>
                  <p>
                    <a class="text-white">Tutorials</a>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Support</h6>
                  <p>
                    <i class="fas fa-home mr-3"></i> FAQs
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> Help
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> Support
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> Contact us
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #3b5998"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #55acee"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #dd4b39"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-google"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #ac2bac"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #0082ca"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #333333"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            class="text-center p-3"
            style="background-color: rgba(0, 0, 0, 0.2)"
          >
            © 2020 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">
              DevDeakin
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

