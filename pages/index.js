import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { LuInstagram } from "react-icons/lu";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hassan Mango </title>
        <link rel="icon" href="/blob.png" />
      </Head>

      <main className="px-10">
        <section className="min-h-screen">
          <nav className="py-10 mx-10 mb-12 flex justify-between">
            <h1 className="font-orbit hover:text-[#FFa048]">
              developedbymango
            </h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="hover:text-[#FFA048]"
                  href="/Hassan-Resume.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex center">
            <h2 className="ml-40 font-newsreader" style={{ fontSize: "100px" }}>
              Hello. <br /> I am{" "}
              <span className="font-bold text-[#FFa048] hover:animate-bounce">
                Yanga
              </span>
            </h2>

            <img
              className="ml-60 animate-spin"
              src="/blob.png"
              alt="Icon"
              width={300}
              height={230}
              style={{
                animation: "spin 60s linear infinite",
              }}
            />
          </div>

          <div className="pt-20 hover:animate-pulse pb-5 ">
            <h1 className="ml-20 font-orbit" style={{ fontSize: "40px" }}>
              <a
                href="https://soundcloud.com/yangzog"
                target="_blank"
                rel="noopener noreferrer"
              >
                some music I've been listening to on SoundCloud
              </a>
            </h1>
          </div>
        </section>
        <section className="bg-212421 text-white py-10">
          <div className="flex">
            <h2 className="px-20 ml-20 pl-10" style={{ fontSize: "80px" }}>
              about<span className="text-[#FFa048]">_</span>me
            </h2>
          </div>
          <div>
            <p className="font-orbit px-20 pt-5 ml-20 opacity-70">
              My name is Hassan but you can also call me{" "}
              <span className="hover:text-[#FFa048] opacity-100">yanga</span>.
              I'm a Web Developer <br />
              from <span className="hover:text-[#2bae2b]">It</span>a
              <span className="hover:text-[#ff3030]">ly</span> and{" "}
              <span className="hover:text-[black]">Jo</span>
              <span className="hover:text-[#ffffff]">r</span>
              <span className="hover:text-[#ff3030]">d</span>
              <span className="hover:text-[white]">a</span>
              <span className="hover:text-[#2bae2b]">n</span>. I like to mix
              music for fun. When I am not <br /> programming, I am playing ⚽.
              I work with many agencies, startups and <br />
              individuals to hypothesize an imaginative blueprint for their
              digital
              <br /> businesses. My clients have relied on me to create, design
              and <br />
              implement their perspectives in the digital world.
            </p>
          </div>
          <div className="ml-20 mr-20">
            <Spline
              scene="https://prod.spline.design/qqhA5qelQHGqJK7U/scene.splinecode"
              className="flex justify-items-center"
            />
          </div>
        </section>
        <section className="bg-212421 text-white py-10 pb-10">
          <div className="flex center flex-col">
            <h2 className="px-20 ml-20 flex pl-10" style={{ fontSize: "80px" }}>
              technical<span className="text-[#FFa048]">_</span>skills
            </h2>
            <div class="skills-container mt-5 flex px-20 ml-20 ">
              <div class="skill-column mr-20 py-5 pr-8">
                <p class="skill-heading underline">Languages</p>
                <p class="skill-item opacity-60">JavaScript</p>
                <p class="skill-item opacity-60">Python</p>
                <p class="skill-item opacity-60">Swift</p>
                <p class="skill-item opacity-60">C#</p>
                <p class="skill-item opacity-60">Svelte</p>
                <p class="skill-item opacity-60">TypeScript</p>
                <p class="skill-item opacity-60">HTML/CSS</p>
                <p class="skill-item opacity-60">SQL</p>
              </div>

              <div class="skill-column pl-6 mr-20 py-5 pr-8">
                <p class="skill-heading underline">Frameworks</p>
                <p class="skill-item opacity-60">React</p>
                <p class="skill-item opacity-60">Next.js</p>
                <p class="skill-item opacity-60">Three.js</p>
                <p class="skill-item opacity-60">.Net</p>
                <p class="skill-item opacity-60">SwiftUI</p>
                <p class="skill-item opacity-60">Django</p>
                <p class="skill-item opacity-60">TailwindCSS</p>
                <p class="skill-item opacity-60">Bootstrap</p>
              </div>

              <div class="skill-column pl-6 mr-20 py-5 pr-8">
                <p class="skill-heading underline">Technologies</p>
                <p class="skill-item opacity-60">Blender</p>
                <p class="skill-item opacity-60">Node.js</p>
                <p class="skill-item opacity-60">Figma</p>
                <p class="skill-item opacity-60">Framer</p>
                <p class="skill-item opacity-60">Spline</p>
                <p class="skill-item opacity-60">Redux</p>
                <p class="skill-item opacity-60">Womp3D</p>
                <p class="skill-item opacity-60">Wordpress </p>
              </div>

              <div class="skill-column pl-6 mr-20 py-5 pr-8">
                <p class="skill-heading underline">DevOps</p>
                <p class="skill-item opacity-60">Azure</p>
                <p class="skill-item opacity-60">AWS</p>
                <p class="skill-item opacity-60">Git</p>
                <p class="skill-item opacity-60">Eclipse</p>
                <p class="skill-item opacity-60">Vercel</p>
                <p class="skill-item opacity-60">Firebase</p>
                <p class="skill-item opacity-60">MongoDB</p>
                <p class="skill-item opacity-60">XCode</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-212421 text-white py-5 pb-20">
          <div className="flex center flex-col">
            <h2
              className="px-20 pb-10 ml-20 text-lg pl-10 flex"
              style={{ fontSize: "80px" }}
            >
              selected<span className="text-[#FFa048]">_</span>works
            </h2>
            <div class="mx-20 px-20 py-5">
              <p className="flex flex-row">
                <Link
                  href="https://wajeez.com/"
                  target="_blank"
                  className="flex items-center"
                >
                  Wajeez
                  <HiExternalLink className="ml-1" color="white" size={20} />
                </Link>

                <a className="flex ml-auto">December 2022</a>
              </p>
              <span className="opacity-60">Intern - Front End Engineer</span>
            </div>
            <div class="mx-20 px-20 py-5">
              <p className="flex flex-row">
                <Link
                  href="https://docs.carbovalent.com/the-carbovalent-protocol"
                  target="_blank"
                  className="flex items-center"
                >
                  Carbovalent
                  <HiExternalLink className="ml-1" color="white" size={20} />
                </Link>

                <a className="flex ml-auto">November - December 2022</a>
              </p>
              <span className="opacity-60">Ideator</span>
            </div>
            <div class="mx-20 px-20 py-5">
              <p className="flex flex-row">
                <Link
                  href="https://plasticpalletpros.com/"
                  target="_blank"
                  className="flex items-center"
                >
                  Plastic Pallet Pros.
                  <HiExternalLink className="ml-1" color="white" size={20} />
                </Link>

                <a className="flex ml-auto">June - July 2021</a>
              </p>
              <span className="opacity-60">Web Developer</span>
            </div>
            <div class="mx-20 px-20 py-5">
              <p className="flex flex-row">
                <Link
                  href="https://meksonmain.com/"
                  target="_blank"
                  className="flex items-center"
                >
                  Meks on Main
                  <HiExternalLink className="ml-1" color="white" size={20} />
                </Link>

                <a className="flex ml-auto">June - July 2021</a>
              </p>
              <span className="opacity-60">Web Developer</span>
            </div>
            <div class="mx-20 px-20 py-5">
              <p className="flex flex-row">
                <Link
                  href="https://www.scottmcclintocklaw.com/"
                  target="_blank"
                  className="flex items-center"
                >
                  Scott McClintock Law
                  <HiExternalLink className="ml-1" color="white" size={20} />
                </Link>

                <a className="flex ml-auto">May - June 2021</a>
              </p>
              <span className="opacity-60">Front End Engineer</span>
            </div>
          </div>
        </section>
        <section className="bg-212421 text-white pb-10">
          <div className="flex center flex-col">
            <h2
              className="px-20 py-20 ml-20 pl-10 text-lg flex "
              style={{ fontSize: "80px" }}
            >
              pending<span className="text-[#FFa048]">_</span> projects
            </h2>
            <div className="flex col-span-4 flex-auto px-20 ml-10">
              <div className="card mr-4">
                <p className="mb-2">Gatinha - Brazil </p>
                <p>
                  Imagine a dating/social meeting app in Brazil. The catch is AI
                  bots representing individuals will be chatting together based
                  on matches.
                </p>
              </div>
              <div className="card mr-4">
                <p className="mb-2">Free lottery - Jordan</p>
                <p>
                  An application that allows consumers to try and win prizes of
                  a lottery system that is sponsored by local brands.
                </p>
              </div>
              <div className="card mr-4">
                <p className="mb-2">Tajamo3 - Jordan</p>
                <p>
                  An app that works almost like a map with attributes, with free
                  things to do around the country - like hikes, picnic
                  locations, waterfalls, rivers and much more.
                </p>
              </div>
            </div>
            <div className="flex col-span-4 flex-auto px-20 ml-10 pt-4">
              <div className="card mr-4">
                <p className="mb-2">Cleanup Crew - World </p>
                <p>
                  Connecting users with professional cleaners for convenient and
                  efficient on-demand cleanup, promoting a cleaner world.
                </p>
              </div>
              <div className="card mr-4">
                <p className="mb-2">7ajzi - MENA Region</p>
                <p>
                  An interface for creating & managing bookings with live
                  feedback on spaces or seats available at a certain venue.
                </p>
              </div>
              <div className="card mr-4">
                <p className="mb-2">FirstHealth - World</p>
                <p>
                  A network system where subscribers will have the ability to
                  prioritize appointments based on their subscription package.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-212421 text-white py-5 pb-20">
          <div className="flex justify-center">
            <h2
              className="px-20 pb-10 flex justify-center "
              style={{ fontSize: "80px" }}
            >
              contact<span className="text-[#FFa048]">_</span> me
            </h2>
          </div>
          <div
            className="flex justify-center pb-2 hover:animate-pulse"
            style={{ fontSize: "40px" }}
          >
            <a href="mailto:hmango77@gmail.com">Email</a>
          </div>
          <div
            className="flex justify-center pb-2"
            style={{ fontSize: "40px" }}
          >
            <a
              href="https://github.com/illyangz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:animate-pulse"
            >
              Github
            </a>
          </div>
          <div
            className="flex justify-center pb-2"
            style={{ fontSize: "40px" }}
          >
            <a
              href="https://www.instagram.com/hassannmango/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:animate-pulse"
            >
              Instagram
            </a>
          </div>
          <div
            className="flex justify-center pb-2"
            style={{ fontSize: "40px" }}
          >
            <a
              href="https://www.linkedin.com/in/hassan-mango-11791223b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:animate-pulse"
            >
              LinkedIn
            </a>
          </div>
          <div
            className="flex justify-center pb-2"
            style={{ fontSize: "40px" }}
          >
            <a
              href="https://soundcloud.com/yangzog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:animate-pulse"
            >
              SoundCloud
            </a>
          </div>
          <div
            className="flex justify-center pb-2"
            style={{ fontSize: "40px" }}
          >
            <a
              href="https://music.apple.com/profile/yanga8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:animate-pulse"
            >
              Apple Music
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
