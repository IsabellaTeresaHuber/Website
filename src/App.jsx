import { useEffect, useState } from 'react'
import './App.css'

const experiences = [
  {
    id: 1,
    title: 'Senior Channel Account Manager',
    company: 'Current Role',
    period: '01/2024 – Present',
    location: 'DACH Region',
    highlights: [
      'Revenue Excellence: Currently performing at 240% (YTD) quota, following a 126% annual quota attainment for 2024',
      'Partner Ecosystem: Manage the end-to-end partner lifecycle, from contract negotiation to high-level strategic alignment for the DACH region',
      'Strategic Growth: Develop and execute Joint Business Plans to drive market penetration and technical enablement for key partners',
      'Performance Tracking: Implement and monitor KPIs through SFDC and Tableau to ensure healthy Deal Reg, pipeline velocity and deal closure',
    ],
  },
  {
    id: 2,
    title: 'Team Lead – Strategic Business Development',
    company: 'CEE, Israel & DACH',
    period: '05/2020 – 12/2023',
    highlights: [
      'Remote Leadership: Directed a multi-national team of 15 BDRs across Europe',
      'Operational Efficiency: Iterated internal processes to streamline team expansion and campaign execution',
      'Performance Excellence: Consistently exceeded pipeline targets (100%+) for all quarters',
      'Strategic Collaboration: Partnered with SalesOps, AEs Marketing to design and launch high-conversion lead gen campaigns',
    ],
  },
]

const earlyCareer = [
  'Built a diverse professional foundation across the BMW Group, IAV GmbH, and ExB Group, focusing on marketing strategy, process optimization, and AI-driven business development.',
  'Developed deep expertise in Design Thinking and UX Research through mentorship at UnternehmerTUM and research at the TUM School of Management.',
  'Successfully led independent projects (Project Lary), including the end-to-end design and MVP testing of a logistics optimization app and providing strategic business development support for the BE5 innovation platform.',
]

const education = [
  {
    id: 1,
    degree: 'Master in Management & Technology',
    school: 'TU Munich',
    period: '10/2017 – 03/2019',
    details: 'Grade: 1.4 / GPA: 3.7',
    extra: 'Incl. Shanghai Jiao Tong University – MBA at Antai School of Economics & Management (09/2018 – 01/2019)',
  },
  {
    id: 2,
    degree: 'Bachelor in International Business Administration',
    school: 'University of Vienna',
    period: '10/2012 – 06/2015',
    details: 'Grade: 1.9 / GPA: 3.3',
    extra: 'Incl. Linköping University (01/2014 – 07/2014)',
  },
]

const skills = [
  { category: 'Certification', items: ['ICF-Certified Executive Coach'] },
  { category: 'Data & Automation', items: ['Python', 'C++', 'VBA'] },
  { category: 'Enterprise Systems', items: ['SFDC', 'SAP', 'Tableau'] },
  { category: 'Operational Excellence', items: ['G-Suite', 'MS Office', 'Professional reporting', 'Project coordination'] },
]

const languages = [
  { name: 'German', level: 'C2' },
  { name: 'English', level: 'C1' },
  { name: 'French', level: 'C1' },
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg">IH</div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#who-am-i" className="hover:text-blue-600 transition-colors">Who Am I</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/Isa1.jpeg" 
              alt="Isabella Huber" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto shadow-lg border-4 border-white dark:border-gray-800"
            />
          </div>
          <p className="text-blue-600 font-medium mb-4">Senior Channel Account Manager</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Isabella Huber
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Driving revenue excellence and strategic growth across the DACH region. 
            ICF-Certified Executive Coach with expertise in partner ecosystems and business development.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </a>
            <a href="#experience" className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 transition-colors">
              View Experience
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Early Career */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Early Career & Research Foundation</h3>
            <p className="text-gray-500 text-sm mb-4">05/2020 – 12/2023</p>
            <ul className="space-y-3">
              {earlyCareer.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{edu.degree}</h3>
                <p className="text-blue-600 mb-1">{edu.school}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{edu.details}</p>
                <p className="text-xs text-gray-500">{edu.extra}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Expertise & Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-blue-600 mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-blue-600 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className="font-medium">{lang.name}</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Who Am I Section */}
<section id="who-am-i" className="py-24 px-6 bg-slate-50 dark:bg-gray-950 overflow-hidden">
  <div className="max-w-6xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3">My Story</h2>
      <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
        Rooted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Family</span>, 
        Driven by Connection.
      </h3>
    </div>

    {/* Chapter 1: The Origin */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg">1</div>
          <div>
            <h4 className="text-2xl font-bold mb-3 dark:text-white">The Eggenfelden Blueprint</h4>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Born in <span className="font-semibold text-blue-600">Eggenfelden, Bavaria</span>, I was 1 of 7 siblings. Growing up in a large family wasn't just about a busy household—it was a masterclass in <span className="text-gray-900 dark:text-white font-medium">interpersonal dynamics, negotiation, and empathy</span>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              My family taught me that different perspectives aren't obstacles; they're the ingredients of a stronger whole. This foundation shaped my approach to leadership, coaching, and partnership development.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="/Family1.jpg" alt="Family roots" className="rounded-2xl shadow-xl w-full h-64 object-cover grayscale hover:grayscale-0 transition duration-500" />
        <img src="/Isa3.jpeg" alt="Professional" className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8" />
      </div>
    </div>

    {/* Chapter 2: Professional Journey */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
        <img src="/1536e267-c00a-4b63-a69c-5087e1c3a737.jpeg" alt="Speaking engagement" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
        <img src="/Family2.jpg" alt="Team collaboration" className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8" />
      </div>
      <div className="order-1 md:order-2 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500 text-white font-bold shadow-lg">2</div>
          <div>
            <h4 className="text-2xl font-bold mb-3 dark:text-white">From Munich to Global Impact</h4>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey took me from <span className="font-semibold text-cyan-600">TU Munich</span> (Master in Management & Technology) to <span className="font-semibold">Shanghai Jiao Tong University</span> for my MBA, and across Europe leading multinational teams.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              I've built my career at the intersection of <span className="text-gray-900 dark:text-white font-medium">technology, strategy, and human connection</span>—from BMW Group and IAV GmbH to leading 15 BDRs across CEE, Israel, and DACH regions.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Chapter 3: Coaching & Leadership */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold shadow-lg">3</div>
          <div>
            <h4 className="text-2xl font-bold mb-3 dark:text-white">ICF-Certified Executive Coach</h4>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              As an <span className="font-semibold text-teal-600">ICF-Certified Executive Coach</span>, I combine strategic business acumen with deep empathy. My coaching philosophy is simple: <span className="text-gray-900 dark:text-white font-medium">authentic leadership starts with understanding yourself and valuing others</span>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              I've mentored teams at UnternehmerTUM, conducted UX research at TUM School of Management, and consistently exceeded pipeline targets (100%+) through human-centric approaches to business development.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="/Image_20250402_222942_937.jpeg" alt="Coaching session" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
        <img src="/Family4.jpg" alt="Leadership" className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8 grayscale hover:grayscale-0 transition duration-500" />
      </div>
    </div>

    {/* Chapter 4: Current Impact */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
        <img src="/Image_20250918_152319_215.jpeg" alt="Partnership success" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
        <img src="/Bildschirmfoto 2026-03-30 um 21.17.08.png" alt="Revenue excellence" className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8" />
      </div>
      <div className="order-1 md:order-2 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold shadow-lg">4</div>
          <div>
            <h4 className="text-2xl font-bold mb-3 dark:text-white">Driving Revenue Excellence</h4>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently performing at <span className="font-semibold text-purple-600">240% YTD quota</span> as Senior Channel Account Manager for the DACH region. I manage the end-to-end partner lifecycle—from contract negotiation to strategic alignment—while developing Joint Business Plans that drive market penetration.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              My secret? <span className="text-gray-900 dark:text-white font-medium">Treating partnerships as relationships</span>, not transactions. I leverage SFDC and Tableau for KPI tracking, but never lose sight of the humans behind the metrics.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Why Work With Me - Enhanced */}
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-12 mb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <h4 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Why Partner With Me?</h4>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h5 className="font-bold text-lg mb-2 dark:text-white">Results-Driven</h5>
            <p className="text-gray-600 dark:text-gray-400">240% quota attainment through strategic partnership development</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h5 className="font-bold text-lg mb-2 dark:text-white">Human-Centric</h5>
            <p className="text-gray-600 dark:text-gray-400">ICF-certified coaching combined with business strategy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌍</div>
            <h5 className="font-bold text-lg mb-2 dark:text-white">Global Perspective</h5>
            <p className="text-gray-600 dark:text-gray-400">Experience across DACH, CEE, Israel, and Asia-Pacific</p>
          </div>
        </div>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 italic">
          "I bring authenticity, diversity of thought, and a genuine knack for building bridges where others see walls."
        </p>
      </div>
    </div>

    {/* Closing Image Gallery */}
    <div className="grid md:grid-cols-3 gap-6">
      <img src="/Bildschirmfoto 2026-03-30 um 21.22.36.png" alt="Professional moments" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
      <img src="/Family5.jpg" alt="Family together" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
      <img src="/unnamed (31).jpg" alt="Achievements" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
    </div>

  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Open to new opportunities and strategic partnerships across the DACH region.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a href="tel:+491749315203" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="text-2xl mb-2">📞</div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">+49 174 931 5203</p>
            </a>
            <a href="mailto:isabellahuber@web.de" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="text-2xl mb-2">✉️</div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">isabellahuber@web.de</p>
            </a>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-2xl mb-2">📍</div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Munich, Germany</p>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="https://www.linkedin.com/in/isabella-huber-b18625183/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#006396] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Isabella Huber. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
