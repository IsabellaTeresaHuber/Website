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
            <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-purple-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-purple-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
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
          <p className="text-purple-600 font-medium mb-4">Senior Channel Account Manager</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Isabella Huber
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Driving revenue excellence and strategic growth across the DACH region. 
            ICF-Certified Executive Coach with expertise in partner ecosystems and business development.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Get in Touch
            </a>
            <a href="#experience" className="px-6 py-3 border border-gray-300 rounded-lg hover:border-purple-600 transition-colors">
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
                  <p className="text-purple-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-purple-600 mt-1">•</span>
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
                  <span className="text-purple-600 mt-1">•</span>
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
                <p className="text-purple-600 mb-1">{edu.school}</p>
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
                <h3 className="font-semibold text-purple-600 mb-3">{skill.category}</h3>
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
            <h3 className="font-semibold text-purple-600 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className="font-medium">{lang.name}</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src="/Isa3.jpeg" alt="Isabella Huber" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src="/1536e267-c00a-4b63-a69c-5087e1c3a737.jpeg" alt="Isabella Huber" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src="/Image_20250402_222942_937.jpeg" alt="Isabella Huber" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src="/Image_20250918_152319_215.jpeg" alt="Isabella Huber" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src="/Bildschirmfoto 2026-03-30 um 21.17.08.png" alt="Isabella Huber" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src="/Bildschirmfoto 2026-03-30 um 21.22.36.png" alt="Isabella Huber" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src="/unnamed (31).jpg" alt="Isabella Huber" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
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
            <a href="tel:+491749315203" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
              <div className="text-2xl mb-2">📞</div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">+49 174 931 5203</p>
            </a>
            <a href="mailto:isabellahuber@web.de" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
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
