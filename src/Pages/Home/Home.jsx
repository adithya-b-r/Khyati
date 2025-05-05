export const Home = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://static.showit.co/file/mKbPyOl1J2h6afV98GQ3YA/shared/copy_of_brittneys_art_direction_5_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional) */}
      {/* <div className="absolute inset-0 bg-gray-800/90 z-10" /> */}

      {/* Foreground Content */}
      <div className="relative z-20 text-white flex items-center justify-center h-full">
        hello
      </div>
    </div>
  );
};
