import React from "react";
import { CgAdd } from "react-icons/cg";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="font-bold font-titleFont w-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              style={{ height: "50px", width: "50px" }}
            >
              <defs>
                <style>.cls-1{"fill:#1e0f00"}</style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="_1" data-name="1">
                  <path
                    class="cls-1"
                    d="M22 10h6v2h-6zM11 10h9v2h-9zM11 15h14v2H11zM19 20h5v2h-5zM11 20h6v2h-6zM11 25h14v2H11zM21 30h7v2h-7zM21 35h9v2h-9zM32 35h5v2h-5z"
                  />
                  <path
                    class="cls-1"
                    d="M41 42H17a1 1 0 0 1-.71-.29l-10-10A1 1 0 0 1 6 31V1a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v8h-2V2H8v28.59L17.41 40H40v-7h2v8a1 1 0 0 1-1 1z"
                  />
                  <path
                    class="cls-1"
                    d="M35 48H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4v2H2v38h32v-3h2v4a1 1 0 0 1-1 1z"
                  />
                  <path
                    class="cls-1"
                    d="M17 42a1 1 0 0 1-.71-.29l-10-10a1 1 0 0 1-.21-1.09A1 1 0 0 1 7 30h10a1 1 0 0 1 1 1v10a1 1 0 0 1-.62.92.84.84 0 0 1-.38.08zM9.41 32 16 38.59V32zM17 5h14v2H17zM37 32a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9z"
                  />
                  <path
                    class="cls-1"
                    d="m39.2 25.6-3-4a1 1 0 0 1 .09-1.31l5-5 1.42 1.42-4.39 4.38 2.48 3.31z"
                  />
                </g>
              </g>
            </svg>
          </span>
          <p className="text-lightText text-base ml-9">Two years warranty</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-5xl text-center w-10 ml-1 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              style={{ height: "60px", width: "60px" }}
            >
              <path d="M63 32c0-.33.47.72-6-12.21A5 5 0 0 0 52.53 17H37V9a1 1 0 0 0-1-1H20a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4v12H21v-4a1 1 0 0 0-2 0v4H4a1 1 0 0 0-1 1v13H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4.07a8 8 0 0 0 15.86 0H23a1 1 0 0 0 0-2h-1.06a8 8 0 0 0-15.88 0H3v-9h5a1 1 0 0 0 0-2H5V24h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4v12h-7a1 1 0 0 0 0 2h23v9h-3a1 1 0 0 0 0 2h7.07a8 8 0 0 0 15.86 0H62a1 1 0 0 0 1-1V32zM29 13h-2v-3h2zm-9 35a6 6 0 1 1-6-6 6 6 0 0 1 6 6zm-7-21h-2v-3h2zm16-3v3h-2v-3zm-8 12V24h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4v12zm40 11h-6.06a8.4 8.4 0 0 0-.94-2.83 1 1 0 0 0-1.76.95 6 6 0 1 1-2.39-2.39 1 1 0 0 0 1.36-.4c.92-1.71-3.16-2.53-5.28-2.25A8 8 0 0 0 39.06 47H37V19h15.53a3.1 3.1 0 0 1 2.86 2H49a1 1 0 0 0 0 2h7.38l4 8H43v-8h2a1 1 0 0 0 0-2h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h19v3a4 4 0 0 0 0 8zm0-5a2 2 0 0 1 0-4z" />
              <path d="M47 44a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM10 48a4 4 0 1 0 4-4 4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM28 47h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM44 35h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
            </svg>
          </span>
          <p className="text-md text-lightText text-base ml-7">
            Free shipping <br />
          </p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl  text-center w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "50px", width: "50px" }}
            >
              <g fill="#1a171b">
                <path d="M48 22.2a3.521 3.521 0 0 0-1.26-2.814 4.259 4.259 0 0 0 1.008-2.886 3.693 3.693 0 0 0-3.412-3.759h-9.394a19 19 0 0 0 .368-5.628c-.371-4.145-2.364-7-4.959-7.1a6.231 6.231 0 0 0-3.31.49.728.728 0 0 0-.334.766c.379 1.861.847 5.226.491 6.328-.764 2.363-2.63 4.445-4.275 6.282-1.358 1.516-2.468 2.766-2.808 3.963H13.58a.729.729 0 0 0-.728.727V35.46a.729.729 0 0 0 .728.727h27.765a2.052 2.052 0 0 0 .276-.02 4.07 4.07 0 0 0 3.693-4.067 4.121 4.121 0 0 0-.177-1.186 4.1 4.1 0 0 0 2.417-3.721 4.051 4.051 0 0 0-.652-2.207A4.105 4.105 0 0 0 48 22.2zM20 34.73h-5.691V19.294H20zm25.482-10.418a.728.728 0 0 0-.1 1.083 2.619 2.619 0 0 1-1.368 4.365.727.727 0 0 0-.487 1.06 2.672 2.672 0 0 1 .333 1.28 2.628 2.628 0 0 1-2.406 2.621 1 1 0 0 1-.109.01H21.451V18.566c0-.869 1.241-2.254 2.555-3.719 1.656-1.848 3.718-4.147 4.576-6.8.486-1.506-.062-4.973-.329-6.439a7.932 7.932 0 0 1 2.039-.139c1.774.07 3.275 2.5 3.568 5.78a17.412 17.412 0 0 1-.548 6.028.726.726 0 0 0 .7.924h10.322a2.233 2.233 0 0 1 1.958 2.299c0 1.631-.926 2.264-1.167 2.287a.728.728 0 0 0 0 1.456c.6 0 1.42.682 1.42 1.959a2.594 2.594 0 0 1-1.063 2.11z" />
                <path d="M37.408 39.307a.733.733 0 0 0-.865.555l-.6 2.756a1.4 1.4 0 0 1-1.786 1.029L30.55 42.5a2.86 2.86 0 0 0-2.972.8l-2.546 2.8a1.429 1.429 0 0 1-2.063 0l-2.547-2.8a2.852 2.852 0 0 0-2.971-.8l-3.6 1.146a1.395 1.395 0 0 1-1.785-1.029l-.809-3.695a2.86 2.86 0 0 0-2.175-2.176l-3.698-.806a1.4 1.4 0 0 1-1.031-1.787l1.148-3.6a2.862 2.862 0 0 0-.8-2.973l-2.792-2.549a1.393 1.393 0 0 1 0-2.06l2.8-2.547a2.86 2.86 0 0 0 .8-2.971l-1.148-3.6a1.395 1.395 0 0 1 1.031-1.787l3.7-.808a2.863 2.863 0 0 0 2.175-2.176l.808-3.693a1.394 1.394 0 0 1 1.785-1.031l3.6 1.146a2.85 2.85 0 0 0 2.971-.8l2.548-2.8a1.321 1.321 0 0 1 .114-.111A.727.727 0 0 0 22.13.7a2.844 2.844 0 0 0-.23.23l-2.548 2.8a1.393 1.393 0 0 1-1.454.39l-3.6-1.147a2.851 2.851 0 0 0-3.648 2.106l-.816 3.688a1.4 1.4 0 0 1-1.065 1.066l-3.694.808a2.849 2.849 0 0 0-2.106 3.649l1.147 3.6a1.4 1.4 0 0 1-.39 1.455L.93 21.894a2.849 2.849 0 0 0 0 4.212l2.8 2.545a1.4 1.4 0 0 1 .39 1.457l-1.147 3.6a2.849 2.849 0 0 0 2.106 3.648l3.694.809a1.4 1.4 0 0 1 1.064 1.064l.808 3.7a2.852 2.852 0 0 0 3.648 2.1l3.6-1.146a1.389 1.389 0 0 1 1.453.389l2.548 2.8a2.847 2.847 0 0 0 4.21 0l2.547-2.8a1.4 1.4 0 0 1 1.456-.389l3.6 1.146a2.852 2.852 0 0 0 3.648-2.1l.6-2.756a.722.722 0 0 0-.547-.866z" />
                <circle cx="17.153" cy="31.886" r=".728" />
              </g>
            </svg>
          </span>
          <p className="text-lightText text-base ml-2">30 days return policy</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
