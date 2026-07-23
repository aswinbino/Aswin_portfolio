import React from "react";

function Resume() {
  return (
    <section id="resume" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Resume</h2>
        {/* Professional Summary */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Professional Summary</h3>
          <p className="text-lg leading-relaxed">
            Final-year B.Tech student in AI & Data Science who builds things end-to-end — from intelligent backends to polished frontends. Gained real production experience through an industry internship and independently shipped four projects solving real problems.
          </p>
        </div>
        {/* Education */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          <p className="text-lg">
            <strong>B.Tech – Computer Science Engineering (AI & Data Science)</strong><br />
            Vels Institute of Science, Technology and Advanced Studies<br />
            Expected Graduation: May 2027 | CGPA: 7.5/10
          </p>
        </div>
        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS</li>
            <li>Backend: Node.js, Express.js, REST APIs, MongoDB, FastAPI</li>
            <li>Languages: Java, Python, JavaScript</li>
            <li>AI / ML: Generative AI, Prompt Engineering</li>
          </ul>
        </div>
        {/* Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Selected Projects</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Portfolio Website – Full‑stack React + Vite + Tailwind, deployed on Vercel.</li>
            <li>AI Prompt Generator – Streamlit app with OpenAI API integration.</li>
            <li>Chat Application – Real‑time chat using Socket.io and React.</li>
            <li>Data Visualization Dashboard – Python Flask backend with D3.js frontend.</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-lg">
            Email: <a href="mailto:aswinbino1234@gmail.com" className="text-primary underline">aswinbino1234@gmail.com</a><br />
            LinkedIn: <a href="https://www.linkedin.com/in/aswin-bino" target="_blank" rel="noopener noreferrer" className="text-primary underline">LinkedIn Profile</a><br />
            GitHub: <a href="https://github.com/Aswin-Bino" target="_blank" rel="noopener noreferrer" className="text-primary underline">github.com/Aswin-Bino</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
