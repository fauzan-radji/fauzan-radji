import profilePict from "./assets/profile-pict.png";

export default function App() {
  return (
    <div className="flex min-h-[100dvh] max-w-full flex-col justify-start overflow-x-hidden bg-slate-300 text-slate-950">
      <section className="relative rounded-b-[3rem] bg-slate-950 py-24 text-slate-50 shadow-xl shadow-slate-500/40 md:rounded-b-[5rem]">
        <div className="container mx-auto flex flex-col items-center gap-8 px-6 landscape:flex-row-reverse landscape:justify-between landscape:px-20">
          <div className="relative flex aspect-square w-80 items-center justify-center md:aspect-auto md:h-[28rem]">
            <svg
              className="absolute bottom-2 aspect-square h-4/5 animate-spin text-slate-600 [animation-duration:64s]"
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
              className="absolute bottom-0 ml-4 aspect-[2/3] h-full rounded-b-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 text-center md:gap-4 md:text-left">
            <h1 className="text-3xl font-bold md:text-5xl">
              👋 Hello there! I&apos;m&nbsp;Fauzan
            </h1>
            <h3 className="md:text-xl">I&apos;m a self taught web developer</h3>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="container mx-auto flex flex-col items-center gap-4 bg-slate-300 px-6 pb-4 pt-8">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="flex gap-4">
            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nemo aliquid eveniet alias recusandae cum quae rerum earum dolorem
              expedita.
            </p>
            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              veniam amet a optio provident? Aut!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
