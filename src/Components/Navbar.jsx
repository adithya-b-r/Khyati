import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Navbar = () => {
  const navRef = useRef(null);

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

  return (
    <nav ref={navRef} className="w-full h-[10vh] bg-blue-600 flex justify-between px-8">
      <div id="logo" className="flex h-full gap-3 text-white justify-between items-center">
        <img className="w-14 h-14" src="/imgs/logo.png" alt="" />
        <h4 className="font-bold text-2xl">
          <span>K</span>
          <span>h</span>
          <span>y</span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
        </h4>
      </div>

      <div id="menu" className='hidden md:flex h-full justify-between gap-8 items-center text-white font-semibold tracking-wide'>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Gallery</a>
        <a href="">FAQs</a>
      </div>

      <div id='mob' className='md:hidden flex text-white text-3xl items-center font-semibold'>
      <i class="ri-menu-3-line"></i>
      </div>
    </nav>
  )
}