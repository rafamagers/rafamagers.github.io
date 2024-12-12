import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from './assets/Perfil.jpg'; // Ajusta la ruta según la ubicación de tu imagen

function App() {
  const [selectedTab, setSelectedTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'Sobre mí' },
    { id: 'contact', label: 'Contactarme' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white p-8">
      <div className="max-w-5xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
        <div className="text-center mb-6">
          <img
            src={profileImage}
            alt="Perfil"
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Rafael Martinez
          </h1>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {selectedTab === 'about' && (
              <section>
                <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Perfil</h2>
          <p>
            Soy un estudiante de ingeniería de sistemas de último semestre, apasionado por la programación y los videojuegos. Tengo experiencia en desarrollo de programas en Java y Python, y en creación de videojuegos con C# en Unity. Me encanta adquirir y compartir conocimientos, por lo que he sido tutor por 4 años.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Habilidades</h2>
          <ul className="list-disc pl-5">
            <li>Resolución de problemas</li>
            <li>Habilidades analíticas</li>
            <li>Liderazgo y comunicación</li>
            <li>Java, Python, SQL</li>
            <li>Desarrollo en Unity</li>
          </ul>
        </section>

        <section className="mb-6">
  <h2 className="text-2xl font-bold mb-2">Experiencia Laboral</h2>

  <div>
    <h3 className="font-semibold">Unity Programmer - Solventech</h3>
    <p className="text-sm text-gray-500">2024 (11 meses)</p>
    <p>Desarrollador de videojuegos, trabajo multidisciplinario con el equipo de UX/UI.</p>
  </div>

  <div className="mt-4">
    <h3 className="font-semibold">Researcher Assistant</h3>
    <p className="text-sm text-gray-500">2023 - Presente</p>
    <p>Trabajo en desarrollo web y análisis de datos.</p>
  </div>

  <div className="mt-4">
    <h3 className="font-semibold">Monitor Académico de Análisis de Datos - Universidad del Norte</h3>
    <p className="text-sm text-gray-500">Julio 2022 - Diciembre 2024 (2 años 6 meses)</p>
    <p>Par estudiantil para acompañamiento académico de estudiantes cursando análisis de datos en ingeniería I.</p>
  </div>

  <div className="mt-4">
    <h3 className="font-semibold">Tutor Académico de Cálculo II - Universidad del Norte</h3>
    <p className="text-sm text-gray-500">Enero 2021 - Diciembre 2023 (3 años)</p>
    <p>Par estudiantil para acompañamiento académico de estudiantes cursando cálculo II.</p>
  </div>
</section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Educación</h2>
          <div>
            <h3 className="font-semibold">Ingeniería de Sistemas - Universidad del Norte</h3>
            <p className="text-sm text-gray-500">Enero 2020 - Marzo 2025</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Técnico en Programación - Universidad Autónoma de Bucaramanga</h3>
            <p className="text-sm text-gray-500">Abril 2021 - Mayo 2022</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Certificaciones</h2>
          <ul className="list-disc pl-5">
            <li>Microsoft Azure DP900 & AZ900</li>
            <li>Diploma en Liderazgo y Educación Emocional - FLICH (2021)</li>
            <li>International Tutor Training Program Certification - CRLA (2022)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Proyectos y Logros</h2>
          <ul className="list-disc pl-5">
            <li>Mejor promedio en ingeniería de sistemas (2022 - Presente)</li>
            <li>Premio en la XVII Feria de Proyectos de Ingeniería Uninorte (2024)</li>
            <li>Diseño de una herramienta de software para análisis factorial de datos</li>
          </ul>
        </section>

              </section>
            )}

            {selectedTab === 'contact' && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Contactarme</h2>
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:ramontero@uninorte.edu.co" className="text-blue-500 hover:underline">
                    ramontero@uninorte.edu.co
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Teléfono:</strong> +57 3053813566
                </p>
                <p className="mb-4">
                  <strong>Ubicación:</strong> Soledad, Atlántico
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/rafaelamm/"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/rafamagers"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
