import profilePict from "./assets/profile-pict.png";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-[100dvh]">
      <div className="w-full">
        <div className="flex flex-col gap-8 container items-center mx-auto px-6">
          <div className="relative aspect-square w-60">
            <svg
              className="text-gray-600 w-full aspect-square absolute inset-0 m-auto animate-spin [animation-duration:64s]"
              viewBox="0 0 900 900"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <g transform="translate(510.88443096263313 386.09160042626115)">
                <path
                  d="M259.5 -237C329.5 -189.5 374.8 -94.8 360.5 -14.2C346.3 66.3 272.6 132.6 202.6 214.8C132.6 296.9 66.3 395 -23.4 418.4C-113.1 441.8 -226.3 390.6 -320 308.4C-413.8 226.3 -488.1 113.1 -484.8 3.3C-481.5 -106.5 -400.6 -213.1 -306.8 -260.6C-213.1 -308.1 -106.5 -296.5 -5.9 -290.6C94.8 -284.8 189.5 -284.5 259.5 -237"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <img
              src={profilePict}
              alt="Fauzan Radji"
              className="rounded-b-full absolute w-4/5 aspect-[2/3] bottom-0 mx-auto left-3 right-0  object-contain"
            />
          </div>
          <div className="flex flex-col text-center gap-2">
            <h1 className="text-3xl font-bold underline">
              Hello there! 👋 I&apos;m&nbsp;Fauzan
            </h1>
            <h3>I&apos;m a self taught web developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
