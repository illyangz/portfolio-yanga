import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import Spline from "@splinetool/react-spline";
import { CgMusicSpeaker } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { TiSocialInstagram } from "react-icons/ti";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { GiAudioCassette } from "react-icons/gi";
import { CgMusic } from "react-icons/cg";
import {TbPremiumRights} from "react-icons/tb"


export default function Home() {
  return (
    <div className="body">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader&family=Orbit&display=swap" rel="stylesheet"
        />
      <Head>
        <title>Hassan Mango</title>
        <link rel="icon" href="/blob.png" />
        
      </Head>
      
      <main className="main-container">
   
      <div className="nav-container mx-10 mt-10">
          <div className="flex items-center hover:text-[#FFA048]">developedby 🥭</div>
          <a className="hover:text-[#FFA048]"
                  href="/Hassan-Resume.pdf"
                  target="_blank">Resume</a>
      </div>
       
        <div className="intro-title">
          <h1>Hello. I am <span className="text-[#FFA048] font-bold">Yanga</span></h1>
            </div>
            
            <div className="container">
            <h1 className="hover:animate-pulse">
              <a className="music"
                href="https://soundcloud.com/yangzog"
                target="_blank"
                rel="noopener noreferrer"
              >
                some music I've been listening to on SoundCloud
                <CgMusicSpeaker className="ml-1 mt-1"/>
              </a>
            </h1>
          </div>


          <Spline class="spline-container"
              scene="https://prod.spline.design/qqhA5qelQHGqJK7U/scene.splinecode"
              className="flex justify-items-center"
            />
          
            <div className="about-container">
              <div>about<span className="text-[#FFA048]">_</span>me</div>
              <div className="about-text">
                <p className="opacity-70">
                  My name is Hassan but you can call me <span className="hover:text-[#FFA048]">yanga</span>. I'm a Web Developer from Italy and Jordan. I like to mix
              music for fun. When I am not programming, I am playing ⚽. I work with many agencies, startups and individuals to hypothesize an imaginative blueprint for their
              digital businesses. My clients have relied on me to create, design and implement their perspectives in the digital world. 
                  </p>
              </div>
            </div>


            <div class="skills">
              <div>technical<span className="text-[#FFA048]">_</span>skills</div>
              <div className="flex center">
              <div class="skills-container">
              <div class="skill-column">
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
              <div class="skill-column">
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
              <div class="skill-column">
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
              <div class="skill-column">
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
        </div>

        <div class="works-container">
        <div>selected<span className="text-[#FFA048]">_</span>works</div>
        <div className="works-card">
        <p className="flex flex-row mt-2">
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
               <p className="flex flex-row mt-8">
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
              <p className="flex flex-row mt-8">
                <Link
                  href="https://plasticpalletpros.com/"
                  target="_blank"
                  className="flex items-center"
                >
                  Plastic Pallet Pros.
                  <HiExternalLink className="ml-1" color="white" size={20} />
                </Link>

                <a className="flex ml-auto ">June - July 2021</a>
              </p>
              <span className="opacity-60">Web Developer</span>
              <p className="flex flex-row mt-8">
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
              <p className="flex flex-row">
                <Link
                  href="https://www.scottmcclintocklaw.com/"
                  target="_blank"
                  className="flex items-center mt-8"
                >
                  Scott McClintock Law
                  <HiExternalLink className="ml-1" color="white" size={20} />
                </Link>

                <a className="flex ml-auto mt-8">May - June 2021</a>
              </p>
              <span className="opacity-60">Front End Engineer</span>
        </div>
        </div>
        <div class="projects">
        <div>active<span className="text-[#FFA048]">_</span>projects</div>
        <div className="flex col-span-3 flex-auto">
              <div className="card mt-5">
                <p className="mb-2">Gatinha - Brazil </p>
                <p>
                  Imagine a dating/social meeting app in Brazil. The catch is AI
                  bots representing individuals will be chatting together based
                  on matches.
                </p>
              </div>
              <div className="card mt-5 ml-2">
                <p className="mb-2">Rabi7ni - Jordan </p>
                <p>
                After watching a short ad from a local business, users will scratch cards in 
                order to have a chance to win free items from those local business & brands 
                </p>
              </div>
              <div className="card mt-5 ml-2">
                <p className="mb-2">Tajamo3 - Jordan </p>
                <p>
                An app that has a map with attributes, with free
                  things to do around the country - like hikes, picnic
                  locations, waterfalls, rivers and much more.
                </p>
              </div>
            </div>
            <div className="flex col-span-3 flex-auto">
              <div className="card mt-2">
                <p className="mb-2">Cleanup Crew - World  </p>
                <p>
                Connecting clients with professional facility cleaners for convenient and
                  efficient on-demand cleanup, quasi promoting a cleaner world per location.
                </p>
              </div>
              <div className="card mt-2 ml-2">
                <p className="mb-2">7ajzi - MENA Region </p>
                <p>
                An interface for creating & managing bookings with live
                  feedback on spaces or seats available at a certain venue.
                </p>
              </div>
              <div className="card mt-2 ml-2">
                <p className="mb-2">FirstHealth - World</p>
                <p>
                A network system where subscribers will have the ability to
                  prioritize appointments based on their subscription package.
                </p>
              </div>
            </div>
        </div>
<div class="contact">
  <div class="flex justify-center mb-8">
    <h2>
      contact<span class="text-[#FFa048]">_</span>me
    </h2>
  </div>
  <div class="contact-text">
    <a
      href="https://github.com/illyangz"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:animate-pulse flex items-center"
    >
      Email
      <HiOutlineMail class="ml-2" />
    </a>
  </div>
  <div class="contact-text">
    <a
      href="https://github.com/illyangz"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:animate-pulse flex items-center"
    >
      Github 
      <VscGithub class="ml-2" />
    </a>
  </div>
  <div class="contact-text">
    <a
      href="https://instagram.com/hassannmango/"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:animate-pulse flex items-center"
    >
      Instagram 
      <TiSocialInstagram class="ml-2" />
    </a>
  </div>
  <div class="contact-text">
    <a
      href="https://www.linkedin.com/in/hassan-mango-11791223b/"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:animate-pulse flex items-center"
    >
      LinkedIn 
      <PiLinkedinLogoBold class="ml-2" />
    </a>
  </div>
  <div class="contact-text">
    <a
      href="https://soundcloud.com/yangzog"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:animate-pulse flex items-center"
    >
      SoundCloud 
      <GiAudioCassette class="ml-2" />
    </a>
  </div>
  <div class="contact-text">
    <a
      href="https://music.apple.com/profile/yanga8"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:animate-pulse flex items-center"
    >
      Apple Music 
      <CgMusic class="ml-2" />
    </a>
  </div>
</div>
<div class="flex items-center">
  <span class="ml-4">Yanga</span>
  <hr class="flex-grow mx-4 border-t border-gray-300" />
  <span class="flex items-center">
    Copyright @2023 Hassan Mango <TbPremiumRights class="ml-1 mr-5" />
  </span>
</div>

      </main>
    </div>
  );
}

