import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects mt-10">
      <p className="project-txt">Projects I've Made</p>
      <div className="scroll-boxes text-white md:grid md:grid-cols-2 lg:grid-cols-3">
        {/* Ziro project  */}
        <div className="w-[335px] mt-3 border">
          <div className="box box-0 w-[335px] h-[370px] mt-3"></div>
          <div className="inner-side ml-3 mb-2">
            <h3 className="text-2xl">UniAid</h3>

            <div className="flex mt-2">
              <button
                className="btn btn-outline text-xs px-2 btn-primary"
                onClick={() => window.my_modal_1.showModal()}
              >
                Technology
              </button>
              <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Technology:</h3>
                  <ul className="grid grid-cols-3">
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Redux</li>
                    <li>Node mailer</li>
                    <li>Axios</li>
                    <li>JWT</li>
                    <li>Tanstack Query</li>
                    <li>Firebase</li>
                    <li>Framer Motion</li>
                    <li>React Messenger</li>
                    <li>React Social</li>
                    <li>React Router</li>
                    <li>React Toastify</li>
                    <li>Recharts</li>
                    <li>Tailwind</li>
                    <li>DaisyUI</li>
                  </ul>
                </form>
              </dialog>

              {/* <a className='ml-3 btn btn-outline btn-primary text-xs px-2'>Github</a>  */}
              <div className="ml-3">
                <button
                  className="btn btn-outline text-xs px-2 btn-primary"
                  onClick={() => window.my_modal_12.showModal()}
                >
                  Github
                </button>
                <dialog id="my_modal_12" className="modal">
                  <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <div className="flex justify-center">
                      <a
                        href="https://github.com/Eshtiaque/Crowd-Funding-Client"
                        className="ml-3 btn btn-outline btn-primary text-xs px-2"
                      >
                        Client Code
                      </a>
                      <a
                        href="https://github.com/Eshtiaque/Crowd-Funding-Server"
                        className="ml-3 btn btn-outline btn-primary text-xs px-2"
                      >
                        Server Code
                      </a>
                    </div>
                  </form>
                </dialog>
                <a
                  href="https://crowd-funding-dc81b.web.app/"
                  className=" ml-3 btn btn-outline btn-primary text-xs px-2"
                >
                  {" "}
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ziro.2 project  */}
        <div className="w-[335px] mt-3 border">
          <div className="box box-9 w-[335px] h-[370px] mt-3"></div>
          <div className="inner-side ml-3 mb-2">
            <h3 className="text-2xl">Console</h3>

            <div className="flex mt-2">
              <button
                className="btn btn-outline text-xs px-2 btn-primary"
                onClick={() => window.my_modal_9.showModal()}
              >
                Technology
              </button>
              <dialog id="my_modal_9" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Technology:</h3>
                  <ul className="grid grid-cols-3">
                    <li> ReactJS</li>
                    <li> Tailwind CSS</li>
                    <li> Daisy UI</li>
                    <li> SwiperJS </li>
                    <li> Firebase</li>
                    <li> npm</li>
                    <li> MongoDB</li>
                    <li> Cors</li>
                    <li> NodeJS</li>
                    <li> ExpressJS</li>
                    <li> JWT</li>
                  </ul>
                </form>
              </dialog>

              {/* <a className='ml-3 btn btn-outline btn-primary text-xs px-2'>Github</a>  */}
              <div className="ml-3">
                <button
                  className="btn btn-outline text-xs px-2 btn-primary"
                  onClick={() => window.my_modal_10.showModal()}
                >
                  Github
                </button>
                <dialog id="my_modal_10" className="modal">
                  <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <div className="flex justify-center">
                      <a
                        href="https://github.com/mahdimortuza/e_commerce_client"
                        className="ml-3 btn btn-outline btn-primary text-xs px-2"
                      >
                        Client Code
                      </a>
                      <a
                        href="https://github.com/mahdimortuza/e_commerce_server"
                        className="ml-3 btn btn-outline btn-primary text-xs px-2"
                      >
                        Server Code
                      </a>
                    </div>
                  </form>
                </dialog>
                <a
                  href="https://e-commerce-client-jade.vercel.app/"
                  className=" ml-3 btn btn-outline btn-primary text-xs px-2"
                >
                  {" "}
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* First project  */}
        <div className="w-[335px] mt-3 border">
          <div className="box box-1 w-[335px] h-[370px] mt-3"></div>
          <div className="inner-side ml-3 mb-2">
            <h3 className="text-2xl">Yes Cookies</h3>

            <div className="flex mt-2">
              <button
                className="btn btn-outline text-xs px-2 btn-primary"
                onClick={() => window.my_modal_3.showModal()}
              >
                Technology
              </button>
              <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Technology:</h3>
                  <ul className="grid grid-cols-3">
                    <li> ReactJS</li>
                    <li> Tailwind CSS</li>
                    <li> Daisy UI</li>
                    <li> SwiperJS </li>
                    <li> Firebase</li>
                    <li> npm</li>
                    <li> MongoDB</li>
                    <li> Cors</li>
                    <li> NodeJS</li>
                    <li> ExpressJS</li>
                    <li> JWT</li>
                  </ul>
                </form>
              </dialog>

              {/* <a className='ml-3 btn btn-outline btn-primary text-xs px-2'>Github</a>  */}
              <div className="ml-3">
                <button
                  className="btn btn-outline text-xs px-2 btn-primary"
                  onClick={() => window.my_modal_6.showModal()}
                >
                  Github
                </button>
                <dialog id="my_modal_6" className="modal">
                  <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <div className="flex justify-center">
                      <a
                        href="https://github.com/mahdimortuza/yes-biscuit-client"
                        className="ml-3 btn btn-outline btn-primary text-xs px-2"
                      >
                        Client Code
                      </a>
                      <a
                        href="https://github.com/mahdimortuza/yes-biscuit-server"
                        className="ml-3 btn btn-outline btn-primary text-xs px-2"
                      >
                        Server Code
                      </a>
                    </div>
                  </form>
                </dialog>
                <a
                  href="https://yes-cookies.netlify.app/"
                  className=" ml-3 btn btn-outline btn-primary text-xs px-2"
                >
                  {" "}
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* second project  */}
        <div className="w-[335px] mt-3 border">
          <div className="box box-2 w-[335px] h-[370px] mt-3"></div>
          <div className="inner-side ml-3 mb-2">
            <h3 className="text-2xl">Coco Studio(clone)</h3>

            <div className="flex mt-2">
              <button
                className="btn btn-outline text-xs px-2 btn-primary"
                onClick={() => window.my_modal_4.showModal()}
              >
                Technology
              </button>
              <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Technology:</h3>
                  <ul className="grid grid-cols-3">
                    <li> ReactJS</li>
                    <li> Tailwind CSS</li>
                    <li> Daisy UI</li>
                    <li> npm</li>
                  </ul>
                </form>
              </dialog>

              <div>
                <a
                  href="https://github.com/mahdimortuza/coco-studio"
                  className="ml-3 btn btn-outline btn-primary text-xs px-2"
                >
                  Github
                </a>
                <a
                  href="https://coco-studio.netlify.app/"
                  className=" ml-3 btn btn-outline btn-primary text-xs px-2"
                >
                  {" "}
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Third Project  */}

        <div className="w-[335px] mt-3 border">
          <div className="box box-3 w-[335px] h-[370px] mt-3"></div>
          <div className="inner-side ml-3 mb-2">
            <h3 className="text-2xl">EduHub</h3>

            <div className="flex mt-2">
              <button
                className="btn btn-outline text-xs px-2 btn-primary"
                onClick={() => window.my_modal_5.showModal()}
              >
                Technology
              </button>
              <dialog id="my_modal_5" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Technology:</h3>
                  <ul className="grid grid-cols-3">
                    <li> ReactJS</li>
                    <li> Tailwind CSS</li>
                    <li> SwiperJS </li>
                    <li> Daisy UI</li>
                    <li> Firebase</li>
                    <li> npm</li>
                    <li> Cors</li>
                    <li> NodeJS</li>
                    <li> ExpressJS</li>
                    <li> MongoDB</li>
                  </ul>
                </form>
              </dialog>

              <div>
                {/* <a className='ml-3 btn btn-outline btn-primary text-xs px-2'>Github</a>  */}
                <div className="ml-3">
                  <button
                    className="btn btn-outline text-xs px-2 btn-primary"
                    onClick={() => window.my_modal_7.showModal()}
                  >
                    Github
                  </button>
                  <dialog id="my_modal_7" className="modal">
                    <form method="dialog" className="modal-box">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      <div className="flex justify-center">
                        <a
                          href="https://github.com/mahdimortuza/eduhub-client"
                          className="ml-3 btn btn-outline btn-primary text-xs px-2"
                        >
                          Client Code
                        </a>
                        <a
                          href="https://github.com/mahdimortuza/eduhub-server"
                          className="ml-3 btn btn-outline btn-primary text-xs px-2"
                        >
                          Server Code
                        </a>
                      </div>
                    </form>
                  </dialog>
                  <a
                    href="https://edu-hub-e0578.web.app/"
                    className=" ml-3 btn btn-outline btn-primary text-xs px-2"
                  >
                    {" "}
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
