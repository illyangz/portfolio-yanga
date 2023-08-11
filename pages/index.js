import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Spline from "@splinetool/react-spline";
import { CgMusicSpeaker } from "react-icons/cg";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { FaMapPin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GiAudioCassette } from "react-icons/gi";
import { TiSocialInstagram } from "react-icons/ti";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMailBulk,
  FaArrowRight,
} from "react-icons/fa";
import { CgMusic } from "react-icons/cg";


export default function Home() {
  return (
    <>
      <Head>
        <title>Hassan Mango
          
        </title>
        <link rel="icon" href="/blob.png" />
        <meta
          name="description"
          content="Hassan Mango's developer portfolio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader&family=Orbit&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="everything">
        <Navbar />
        <div className="main-container">
          <div className="flex items-center justify-center">
            <h1 className="name-heading">Hello. I am <span className="text-[#FFA048]">Yanga</span></h1>
          </div>
          <Spline 
             class="spline-container flex justify-items-center"
             scene="https://prod.spline.design/qqhA5qelQHGqJK7U/scene.splinecode"
            
            />
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
          <div className="intro-location-container">
            <div>
              <div className="about" >about<span className="text-[#FFA048]">_</span>me</div>
              <p className="intro">
              My name is Hassan but you can call me <span className="hover:text-[#FFA048]">yanga</span>. I'm a Web Developer from Italy and Jordan. I like to mix
              music for fun. When I am not programming, I am playing ⚽. I work with many agencies, startups and individuals to hypothesize an imaginative blueprint for their
              digital businesses. My clients have relied on me to create, design and implement their perspectives in the digital world. 
              </p>
            </div>
          </div>

          <h2 className="subheading mb-8" id="skills">
            technical<span className="text-[#FFA048]">_</span>skills
          </h2>
          <div class="skills-container mt-[20px]">
            <div class="skill-column">
              <p class="skill-heading">Languages</p>
              <p class="skill-item">JavaScript</p>
              <p class="skill-item">Typescript</p>
              <p class="skill-item">Python</p>
              <p class="skill-item">C#</p>
              <p class="skill-item">Swift</p>
              <p class="skill-item">PHP</p>
              <p class="skill-item">Flutter</p>
              <p class="skill-item">SQL</p>
              <p class="skill-item">HTML/CSS</p>
            </div>

            <div class="skill-column">
              <p class="skill-heading">Frameworks</p>
              <p class="skill-item">React</p>
              <p class="skill-item">Next.js</p>
              <p class="skill-item">Svelte</p>
              <p class="skill-item">Three.js</p>
              <p class="skill-item">.Net</p>
              <p class="skill-item">Django</p>
              <p class="skill-item">TailwindCSS</p>
              <p class="skill-item">Bootstrap</p>
              <p class="skill-item">SwiftUI</p>
            </div>

            <div class="skill-column">
              <p class="skill-heading">Technologies</p>
              <p class="skill-item">Node.js</p>
              <p class="skill-item">Blender</p>
              <p class="skill-item">Spline</p>
              <p class="skill-item">Womp3D</p>
              <p class="skill-item">Framer</p>
              <p class="skill-item">MsSQL</p>
              <p class="skill-item">Redux</p>
              <p class="skill-item">Figma</p>
              <p class="skill-item">Wordpress</p>
            </div>

            <div class="skill-column">
              <p class="skill-heading">DevOps</p>
              <p class="skill-item">AWS</p>
              <p class="skill-item">Azure</p>
              <p class="skill-item">Git</p>
              <p class="skill-item">Vercel</p>
              <p class="skill-item">Eclipse</p>
              <p class="skill-item">Firebase </p>
              <p class="skill-item">MongoDB</p>
              <p class="skill-item">Elementor</p>
              <p class="skill-item">Firebase</p>
            </div>
          </div>

          <div className="work-container" id="work">
            

            <h2 className="subheading mb-5">selected<span className="text-[#FFA048]">_</span>jobs</h2>
            <div className="job-container">
              <div className="job-position">
                <p className="work-intro-span">
                  <Link
                    href="https://wajeez.com/"
                    target="_blank"
                    className="flex items-center"
                  >
                    <p className="font-text">Wajeez{" "}</p>
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>
                  <span>
                    {" "}
                    Front End Engineer{" "}
                  </span>
                </p>
              </div>
              <p className="job-date">December 2022</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p className="work-intro-span">
                  <Link
                    href="https://docs.carbovalent.com/the-carbovalent-protocol"
                    target="_blank"
                    className="flex items-center"
                  >
                    <p className="font-text">Carbovalent{" "}</p>
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>
                  <span>
                    {" "}
                    Consultant & Ideator
                  </span>
                </p>
              </div>
              <p className="job-date">Nov - Dec 2022</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p className="work-intro-span">
                  <Link
                    href="https://plasticpalletpros.com/"
                    target="_blank"
                    className="flex items-center"
                  >
                    <p className="font-text">Plastic Pallet Pros.{" "}</p>
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>
                  <span>
                    {" "}
                    Front End Engineer{" "}
                  </span>
                </p>
              </div>
              <p className="job-date">August 2021</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p className="work-intro-span">
                  <Link
                    href="https://meksonmain.com/"
                    target="_blank"
                    className="flex items-center"
                  >
                    <p className="font-text">Meks on Main{" "}</p>
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>
                  <span>
                    {" "}
                    Front End Engineer{" "}
                  </span>
                </p>
              </div>
              <p className="job-date">July 2021</p>
            </div>
            <div className="job-container">
              <div className="job-position">
                <p className="work-intro-span">
                  <Link
                    href="https://www.scottmcclintocklaw.com/"
                    target="_blank"
                    className="flex items-center"
                  >
                  <p className="font-text">Scott McClintock Law</p>
                    <FiExternalLink className="ml-1" color="white" size={15} />
                  </Link>
                  <span>
                    {" "}
                    Web Developer{" "}
                  </span>
                </p>
              </div>
              <p className="job-date">June 2021</p>
            </div>
            
          </div>
          
          <h2 className="subheading mb-5" id="projects">
            active<span className="text-[#FFA048]">_</span>projects
          </h2>
          <div className="flex col-span-3 flex-auto text-Orbit">
              <div className="card mt-5 mr-2">
                <p className="card-title mb-2">Gatinha - Brazil </p>
                <p className="card-text">
                  Imagine a dating/social meeting app in Brazil. The catch is AI
                  bots representing matched individuals will be chatting together on the behalf of users.
                </p>
              </div>
              <div className="card mt-5 mr-2">
                <p className="card-title mb-2">Rabi7ni - Jordan </p>
                <p className="card-text">
                After watching a short ad from a local business, users will scratch cards in 
                order to have a chance to win free items from those local business & brands.
                </p>
              </div>
             
            </div>
            <div className="flex col-span-3 flex-auto text-Orbit">
              <div className="card mt-2 mr-2">
                <p className="card-title mb-2">Cleanup Crew - Jordan</p>
                <p className="card-text">
                On demand cleaning services from our crew, 
                at specific locations. Goal is to have a cleaner world, 
                one location at a time. 

                </p>
              </div>
              <div className="card mt-2 mr-2">
              <p className="card-title mb-2">Tajamo3 - Mena Region</p>
                <p className="card-text">
                An app that has a map with attributes, with free
                  things to do around the country - like hikes, picnic
                  locations, waterfalls, rivers and much more.
                </p>
              </div>
         
            </div>
            <div className="flex col-span-3 flex-auto text-Orbit">
              <div className="card mt-2 mr-2">
              <p className="card-title mb-2">FirstHealth - Global </p>
                <p className="card-text">
                A network system where subscribers will have the ability to
                  prioritize appointments based on their subscription package.
                </p>
              </div>
              <div className="card mt-2 mr-2">
                <p className="card-title mb-2">7ajzi - Jordan </p>
                <p className="card-text">
                An interface for creating & managing bookings with live
                  feedback on spaces or seats available at a certain venue.
                </p>
              </div>
         
            </div>
          
            

         

          <h2 className="subheading mb-5" id="contact">
            social<span className="text-[#FFA048]">_</span>links
          </h2>
          
  
          <div class="contact-container">
          <Link href="https://instagram.com/hassannmango/" target="_blank">
          <div class="contact-item">
          <TiSocialInstagram size={20} />
          <p class="contact-text">
            hassannmango
          </p>
          </div>
          </Link>

          <Link href="https://github.com/illyangz" target="_blank">
          <div class="contact-item">
          <FaGithub size={20} />
          <p class="contact-text">
             illyangz
          </p>
          </div>
          </Link>

          <Link href="https://www.linkedin.com/in/hassan-mango-11791223b/" target="_blank">
          <div class="contact-item">
          <FaLinkedin size={20} />
          <p class="contact-text">
          Hassan Mango
          </p>
          </div>
          </Link>

          <a href="mailto:hmango77@gmail.com" target="_blank" class="clickable-div">
  <div class="contact-item">
    <FaMailBulk size={20} />
    <p class="contact-text">
      <Link
        href="mailto:hmango77@gmail.com"
        target="_blank"
        class="border-b-[1px] border-current pb-[-1px] opacity-[0.99]"
      >
        <p className="contact-text">hmango77@gmail.com</p>
        
      </Link>
    </p>
  </div>
</a>


          </div>
          <a href="https://soundcloud.com/yangzog" target="_blank" class="clickable-div">
  <div class="contact-item mt-5">
    <GiAudioCassette size={20} />
    <p class="contact-text">
      <Link
        href="https://soundcloud.com/yangzog"
        target="_blank"
        class="border-b-[1px] border-current pb-[-1px] opacity-[0.99]"
      >
        <p className="contact-text">SoundCloud</p>
      </Link>
    </p>
  </div>
</a>


<a href="https://music.apple.com/profile/yanga8" target="_blank" class="clickable-div">
  <div class="contact-item mt-5">
    <CgMusic size={20} />
    <p class="contact-text">
      <Link
        href="https://music.apple.com/profile/yanga8"
        target="_blank"
        class="border-b-[1px] border-current pb-[-1px] opacity-[0.99]"
      >
        <p className="contact-text">Apple Music</p>
      </Link>
    </p>
  </div>
</a>

        </div>
        

        <div className="footer">
          <span className="footer-text-left">Yanga</span>
          <hr className="footer-line" />
          <span className="footer-text-right">
            @2023 developedbymango copyright. All Rights Reserved
          </span>
        </div>
      </div>

    </>
  );
}