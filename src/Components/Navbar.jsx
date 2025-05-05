import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Navbar = () => {
  const navRef = useRef(null);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    const spans = navRef.current.querySelectorAll("#logo h4 span");
    const logoImage = navRef.current.querySelector("#logo img");
    const menus = navRef.current.querySelectorAll("#menu a");
    const mob = navRef.current.querySelector("#mob i");

    const tl = gsap.timeline();

    tl.fromTo(
      logoImage,
      { x: -100 },
      { x: 0 },
    );

    tl.fromTo(
      spans,
      { y: 0, opacity: 0, scale: 0 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        duration: 0.8,
      });

    gsap.fromTo(
      menus, {
      y: -50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
    });

    gsap.fromTo(
      mob,
      {x: 100, opacity: 0},
      {x: 0, opacity: 1, duration: 0.8}
    );
  }, []);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);

    const mob = navRef.current.querySelectorAll("#mob i");
    const mobMenu = navRef.current.querySelector("#mobMenu");
    const mobItems = navRef.current.querySelectorAll("#mobMenu a");

    gsap.fromTo(
      mob,
      {rotate: 0, opacity: 0},
      {rotate: 180, opacity: 1, duration: 0.8}
    );

    gsap.fromTo(
      mobMenu,
      { height: 0 },
      { height: "40vh", duration: 1, ease: "power2.out" }
    );
    
    gsap.fromTo(
      mobItems,
      { opacity: 0, y: -20},
      { opacity: 1, y: 0, duration: .8, stagger: 0.15 }
    );
  }

  return (
    <nav ref={navRef} className="w-full h-[10vh] bg-blue-600 flex justify-between pl-5 pr-8 fixed top-0 left-0">
      <div id="logo" className="flex h-full gap-3 text-white justify-between items-center select-none">
        <img className="w-14 h-14" src="/imgs/logo.png" alt="" />
        <h4 className="font-bold text-2xl hover:scale-110 duration-500">
          <span>K</span>
          <span>h</span>
          <span>y</span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
        </h4>
      </div>

      <div id="menu" className={`hidden md:flex h-full justify-between gap-8 items-center text-white font-semibold tracking-wide`}>
        <a className='hover:pb-3 transition-all duration-300' href=''>Home</a>
        <a className='hover:pb-3 transition-all duration-300' href="">About Us</a>
        <a className='hover:pb-3 transition-all duration-300' href="">Services</a>
        <a className='hover:pb-3 transition-all duration-300' href="">Gallery</a>
        <a className='hover:pb-3 transition-all duration-300' href="">FAQs</a>
      </div>

      {/* style={{background: "", backdropFilter: "blur(10px)"}} */}
      <div id="mobMenu" className={`${!menuToggle ? 'hidden' : 'block'} absolute top-[9.90vh] left-0 h-[40vh] w-[85vw] mx-[7.5vw] flex flex-col justify-around items-center text-white text-xl font-semibold bg-blue-600`} >
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Gallery</a>
        <a href="">FAQs</a>
      </div>

      <div id='mob' className='md:hidden flex text-white text-3xl items-center font-semibold cursor-pointer'>
        <i onClick={toggleMenu}  className={`${menuToggle ? 'hidden' : 'block'} ri-menu-3-line`}></i>
        <i onClick={toggleMenu}  className={`${!menuToggle ? 'hidden' : 'block'} ri-close-large-line`}></i>
      </div>
    </nav>
  )
}