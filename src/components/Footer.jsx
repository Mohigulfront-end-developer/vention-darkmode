import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="">
              <h4 className="pb-[20px] font-semibold text-[25px] text-white">
                Subscribe to our newsletter for industry insights and company
                news!
              </h4>
              <form action="">
                <input
                  type="text"
                  className="outline-none bg-transparent border-none p-5"
                  placeholder="Email adress*"
                />
              </form>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">About</h4>
                <a
                  href="/company"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Company
                </a>
                <a
                  href="/our-work"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Portfolio
                </a>
                <a
                  href="/our-partnerships"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Partnerships
                </a>
                <a
                  href="/newsroom"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Newsroom
                </a>
                <a
                  href="/media-kit"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Media Kit
                </a>
                <a
                  href="https://join.ventionteams.com/"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Careers
                </a>
                <a
                  href="/company/test"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Contact
                </a>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Delivery Models</h4>
                <a
                  href="/company/how-we-work/dedicated-development-teams"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Dedicated development teams
                </a>
                <a
                  href="/company/how-we-work/project-based-engagement"
                  className="block hover:text-gray-400 transition duration-300"
                >
                  Project-based delivery
                </a>
              </div>
              <div className="space-y-4">
                <div className="w-40 h-10">
                  <iframe
                    id="iframe-0.46026144640111477"
                    width="100%"
                    src="https://widget.clutch.co/widgets/get/1?ref_domain=ventionteams.com&uid=80203&rel_nofollow=true&ref_path=/"
                    height="40px"
                    scrolling="no"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      display: "block",
                      height: "42px",
                    }}
                    title="Clutch Widget"
                  ></iframe>
                </div>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.iafcertsearch.org/certification/qPsn615HUEPhPxYaXqXUuNgE"
                    className="block w-28 h-10"
                  >
                    <img
                      alt="bbb-logo"
                      loading="lazy"
                      width="106"
                      height="42"
                      decoding="async"
                      src="/_next/static/images/iso-d52fa14f616b2c18d46829f91e0a1a04.svg"
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "100%",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.bbb.org/us/ny/new-york/profile/computer-software-developers/vention-solutions-inc-0121-87169039/#sealclick"
                    className="block w-56 h-10"
                  >
                    <img
                      alt="Vention Solutions Inc. BBB Business Review"
                      loading="lazy"
                      width="237"
                      height="42"
                      decoding="async"
                      srcSet="/_next/image?url=https%3A%2F%2Fseal-newyork.bbb.org%2Flogo%2Fsehzbul%2Fbbb-87169039.png&w=256&q=75 1x, /_next/image?url=https%3A%2F%2Fseal-newyork.bbb.org%2Flogo%2Fsehzbul%2Fbbb-87169039.png&w=576&q=75 2x"
                      src="/_next/image?url=https%3A%2F%2Fseal-newyork.bbb.org%2Flogo%2Fsehzbul%2Fbbb-87169039.png&w=576&q=75"
                      style={{
                        color: "transparent",
                        border: "0px",
                        height: "100%",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 My Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
