export default function Home() {
  return (
    <main className="font-sans">

      {/* HERO CON VIDEO YOUTUBE */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">

        {/* VIDEO */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="w-full h-full scale-150 pointer-events-none"
  src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&loop=1&playlist=ScMzIvxBSi4&controls=0&modestbranding=1"
  title="Industrial City"
  frameBorder="0"
  allow="autoplay; fullscreen"
          ></iframe>
        </div>

        {/* OSCURECER */}
        <div className="absolute inset-0 bg-black/60" />

        {/* TEXTO */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Oficina Técnica de Ingeniería en Almería
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Proyectos industriales, homologaciones, peritaciones y asesoramiento técnico con rapidez y experiencia.
          </p>
          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg"
          >
            Solicitar asesoramiento
          </a>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">
          ¿Por qué elegir Ábaco Ingeniería?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-bold text-xl">+40 años de experiencia</h3>
            <p>Trayectoria consolidada en proyectos técnicos.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">Rapidez y eficacia</h3>
            <p>Gestión ágil de proyectos y trámites.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">Trato directo</h3>
            <p>Atención personalizada y cercana.</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">Servicios</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="font-bold text-xl mb-2">Proyectos técnicos</h3>
            <p>Industriales, civiles y agrícolas.</p>
          </div>
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="font-bold text-xl mb-2">Homologaciones</h3>
            <p>Vehículos e instalaciones.</p>
          </div>
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="font-bold text-xl mb-2">Peritaciones</h3>
            <p>Informes técnicos y valoraciones.</p>
          </div>
        </div>
      </section>

      {/* VIDEO EXTRA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Así trabajamos
        </h2>

        <div className="max-w-4xl mx-auto px-4">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Video ingeniería"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesitas asesoramiento técnico?
        </h2>
        <p className="mb-6">Contacta con nosotros sin compromiso</p>

        <a
          href="tel:+34600000000"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Llamar ahora
        </a>
      </section>

    </main>
  );
}