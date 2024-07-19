const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Omni Shop</h1>
          <p className="py-6">At Omni Shop, you can have it all</p>
          <button className="btn btn-primary">
            <a href="/shop">See what we've got</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
