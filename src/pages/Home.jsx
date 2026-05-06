import Navbar from "../components/navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <section className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-700 mb-5">
          MCA Event Management
        </h1>

        <p className="text-xl">Manage workshops and hackathons</p>
      </section>
    </div>
  );
}

export default Home;
