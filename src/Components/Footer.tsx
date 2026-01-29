import { Link } from "react-router-dom"

function Footer() {


  const footerNavs = [
    {
      label: "Links",
      items: [
        {
          href: '/',
          name: 'Home'
        },
        {
          href: '/installation',
          name: 'Services'
        },
        {
          href: '/',
          name: 'Project Gallery'
        },

        {
          href: '/contact',
          name: 'Contact Us'
        },

      ],
    },


  ]

  return (




    <>


      <footer className="pt-10 border-t">


        <div className="max-w-screen-xl mx-auto px-4 md:px-8">

          <div className="justify-between items-center gap-12 md:flex">

            <div className="flex-1 max-w-lg">
              <h3 className="text-2xl font-bold">
                Get our Products straight to your Home
              </h3>
            </div>


            <div className="flex-2 mt-6 md:mt-0">

              <div className="flex items-center gap-x-6">

                <a href="https://www.facebook.com/neogridsolarr/">
                  <i className="fa-brands fa-facebook text-2xl hover:text-blue-800 text-gray-700 duration-150"></i>
                </a>

                <a href="https://x.com/neogridsolar">
                  <i className="fa-brands fa-x-twitter text-2xl text-gray-700 hover:text-black duration-150"></i>
                </a>

                <a href="https://www.instagram.com/neogridsolarr/">
                  <i className="fa-brands fa-instagram hover:text-pink-700 text-2xl text-gray-700 duration-150"></i>
                </a>

                <a href="https://in.pinterest.com/neogridsolar/">
                  <i className="fa-brands fa-pinterest hover:text-red-600 text-2xl text-gray-700 duration-150"></i>
                </a>


              </div>

            </div>

          </div>


          <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
            {
              footerNavs.map((item, idx) => (
                <ul
                  className="space-y-4 text-gray-600"
                  key={idx}
                >
                  <h4 className="text-gray-800 font-semibold sm:pb-2 text-xl">
                    {item.label}
                  </h4>
                  {
                    item.items.map(((el, idx) => (
                      <li key={idx}>
                        <Link
                          to={el.href}
                          className="hover:text-gray-800 duration-150"

                        >
                          {el.name}
                        </Link>
                      </li>
                    )))
                  }
                </ul>
              ))
            }

            <div className="ms-0 sm:ms-25">

              <h4 className="text-gray-800 font-semibold sm:pb-2 text-xl">Corporate Office </h4>

              <ul>

                <li className="hover:text-gray-800 text-[#2a2a2a] duration-150  w-56">Neogrid</li>
                <li className="hover:text-gray-800 text-[#2a2a2a] duration-150  w-56">An initiative of <br /> SMART ENTERPRISES <br /> MM 11/505-C, Mullampara, Manjeri, Malappuram Kerala, 676121</li>
                <li className="hover:text-gray-800 text-[#2a2a2a] duration-150  w-56">Contact No: <a href="tel:+919846131500" className="hover:text-blue-500">+91 9846131500</a> </li>
                <li className="hover:text-gray-800 text-[#2a2a2a] duration-150  w-56">Email:  <a href="mailto:info@neogrid.in" className="text-gray-600 hover:text-indigo-600 ">info@neogrid.in</a> </li>

              </ul>

              <p ></p>

            </div>


            <div className="flex justify-center items-center">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7085.925425443167!2d76.10415445!3d11.105832000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba635e1acacc6a1%3A0xeb5092b8580b91f7!2sMullampara%20Town%2C%20Manjeri%2C%20Kerala%20676517!5e1!3m2!1sen!2sin!4v1730094466058!5m2!1sen!2sin" className="w-ful" width="400" height="250" loading="lazy" ></iframe>

            </div>

          </div>


          <div className="mt-10 py-8 border-t text-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0 text-center sm:text-left">

                <div>
                  <p className="text-sm">&copy; {new Date().getFullYear()} Neogrid. All rights reserved.</p>
                  <p className="text-xs mt-1 sm:mt-2">
                    Our Parent Company's Legal Name is <span className="font-medium">VILAKKUMADATHIL YASAR ARAFATH</span>, our trade name is <span className="font-medium">Smart Enterprises</span>, and <span className="font-medium">Neogrid</span> is a subsidiary.
                  </p>


                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3">
                  <Link to="/termscondition" className="hover:text-green-500 font-medium text-xs">
                    Terms & Conditions
                  </Link>
                  <Link to="/privacypolicy" className="hover:text-green-500 font-medium text-xs">
                    Privacy Policy
                  </Link>
                  <Link to="/refundpolicy" className="hover:text-green-500 font-medium text-xs">
                    Refund Policy
                  </Link>
                </div>



              </div>
            </div>
          </div>


          <a href="https://exmedia.in" target="_blank" >

            <p className="text-gray-600 text-sm font-semibold hover:text-pink-700 sm:mt-0 pb-8 text-center sm:text-center ">Powerd By exmedia</p>

          </a>


        </div>


      </footer>




    </>





  )






}

export default Footer