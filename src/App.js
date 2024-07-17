import logo from "./logo.svg";
import Hero from "./Components/Hero";
import NavBar from "./Components/Navbar";
import Solution from "./Components/Solution";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Solution />
      <div className="md:h-screen md:flex justify-center items-end pb-10 mx-8  md:mx-64 text-base md:text-xl">
        <div>
          <p className="my-2">Hi Shubham</p>

          <p className="my-2">
            𝗙𝗼𝗿 𝗼𝗻𝗹𝘆 $𝟴𝟬 𝗶 𝘄𝗶𝗹𝗹 𝗯𝘂𝗶𝗹𝗱 a landing page consisting:
            <br />
            🔹 Form that create entry in google sheet <br />
            🔹 Meeting scheduler linked with calenderly <br />
            🔹 SEO optimized <br />
            🔹 96+ Google PageSpeed
            <br />
            🔹 Responsive to all screen sizes Landing page based on your design
            in 5 days.
          </p>

          <p className="my-2">
            I'm a highly skilled Full Stack developer with 3 years of
            professional experience specializing in Front-End development. Being
            new on Upwork, i am eager to build a great profile and I would be
            immensely grateful for this opportunity. <a className="text-[#3295DC]" target="_blank" href="https://www.upwork.com/freelancers/~01dc1740c4a496b609?mp_source=share">- Dishant Gusain</a>
          </p>

         
        </div>
      </div>
    </div>
  );
}

export default App;
