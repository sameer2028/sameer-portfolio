import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // 1. Define the state to hold the user's input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // 2. Handle typing in the input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // 3. The actual submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://sameer-portfolio-oa4p.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // We inject a default 'subject' here so MongoDB doesn't block the request!
        body: JSON.stringify({
          ...formData,
          subject: "New Portfolio Message" 
        }), 
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent! I'll be in touch soon.", {
          style: {
            borderRadius: '10px',
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #262626'
          },
          iconTheme: {
            primary: '#06b6d4',
            secondary: '#1a1a1a',
          },
        });
        
        // Clear the form after success
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Could not connect to the server.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <section id="contact" className="px-6 py-24 bg-neutral-950 text-white flex items-center">
      <Toaster position="bottom-right" />
      
      <div className="mx-auto max-w-5xl w-full">
        <div className="grid gap-16 md:grid-cols-2">
          
          {/* Left Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Let's <span className="text-cyan-500">Work</span><br/>Together
            </h2>
            <p className="mb-10 text-neutral-400 max-w-sm">
              Have a project in mind? I'd love to hear from you. Let's build something great.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Email</p>
                <a href="mailto:sameerupadhyay0133@gmail.com" className="text-lg font-medium hover:text-cyan-400 transition">
                  sameerupadhyay0133@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Phone</p>
                <a href="tel:+916392378133" className="text-lg font-medium hover:text-cyan-400 transition">
                  +91 6392378133
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Location</p>
                <p className="text-lg font-medium">India</p>
              </div>
              
              {/* Social Media Links */}
              <div className="pt-6 mt-6 border-t border-neutral-800">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Socials</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/sameer2028" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#0A66C2] transition-colors duration-300">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/sameer_upadhyay___/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-pink-500 transition-colors duration-300">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form - NOW CONNECTED TO STATE */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Name</label>
                <input 
                  required 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-4 py-3 focus:outline-none focus:border-cyan-500 transition" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                <input 
                  required 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-4 py-3 focus:outline-none focus:border-cyan-500 transition" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">Message</label>
                <textarea 
                  required 
                  rows="4" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full rounded-lg bg-neutral-950 border border-neutral-800 px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-lg bg-cyan-500 text-neutral-950 font-bold py-4 hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact