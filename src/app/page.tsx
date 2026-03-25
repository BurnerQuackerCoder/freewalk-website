"use client"; // <-- Add this to line 1!

import { Bot, Building, Camera, Map, MapPinned, Send, ShieldCheck, Zap, Info, User, MessageSquare} from 'lucide-react';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  // --- ADD THIS CAROUSEL STATE ---
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Auto-cycle through the 3 steps every 3 seconds
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  // -------------------------------
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white font-sans antialiased overflow-hidden">
      
      {/* Navigation - Pure Typography */}
       <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold tracking-tighter text-teal-900 hover:scale-105 hover:rotate-1 transition-transform cursor-pointer">
            Free<span className="text-emerald-500">Walk</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/mission" className="text-sm font-bold text-slate-600 hover:text-teal-700 transition-colors hidden sm:block">
              Our Mission
            </Link>
          </div>
          <a 
            href="https://appdistribution.firebase.dev/i/e80e0a15fd2cf34e" 
            className="px-6 py-2.5 bg-teal-800 hover:bg-teal-700 hover:-translate-y-1 text-white text-sm font-bold rounded-full transition-all shadow-sm hover:shadow-lg"
          >
            Join Beta
          </a>
        </div>
      </nav>

      {/* Hero Section - Playful & Emoji Driven */}
      <section className="container mx-auto px-6 py-16 md:py-24 text-center flex flex-col items-center">
        
       {/* Playful Floating Image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 animate-[bounce_4s_infinite] drop-shadow-2xl hover:scale-110 transition-transform duration-300">
          {/* MAKE SURE YOUR NEW IMAGE IS SAVED AS icon.png IN THE /public FOLDER! */}
          <Image 
            src="/icon.png" 
            alt="FreeWalk Mascot/Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-bold mb-8 border border-orange-200 shadow-sm animate-pulse">
          <Zap size={18} className="text-orange-500" />
          📍 LIVE: Ward 118, Mumbai
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15] text-slate-900">
          Mumbai's footpaths.<br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 py-1 inline-block mt-2 md:mt-0">
            Reclaimed by you.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tired of walking on the road? FreeWalk is an AI-verified evidence engine that turns everyday sidewalk annoyances into actionable data.
        </p>
        
        <a 
          href="https://appdistribution.firebase.dev/i/e80e0a15fd2cf34e" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-extrabold text-white transition-all duration-200 bg-orange-500 rounded-2xl hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] active:translate-y-1"
        >
          Download Android Beta
          <span className="ml-3 group-hover:translate-x-2 transition-transform text-2xl"></span>
        </a>
        {/* --- NEW: BETA TRANSPARENCY NOTE --- */}
        <div className="max-w-xl w-full bg-slate-100 border border-slate-200 rounded-2xl p-5 text-left flex gap-4 items-start shadow-sm mt-8">
          <Info className="text-teal-600 flex-shrink-0 mt-0.5" size={24} />
          <div>
            <h4 className="font-bold text-slate-800 mb-1">Beta Testing Notice</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              V1 is currently an evidence-gathering engine. As all the services are on free tier, initial OTP takes time and other delays also expected. The live heatmap is restricted to Admin view. Expect occasional bugs, and note that reports are capped at 10/day to prevent API spam.{" "}
              <Link href="/mission" className="text-teal-600 font-bold hover:underline ml-1">
                Read our full mission here.
              </Link>
            </p>
          </div>
        </div>
        {/* ---------------------------------- */}
      </section>

      {/* NEW: App Showcase & Step-by-Step Section */}
      <section className="bg-white py-24 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: The Steps */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-teal-900">
                Your 30-Second Act of Civic Activism.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Join thousands of citizens converting frustration into structured data. It takes exactly three taps to reclaim your street.
              </p>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div 
                  onClick={() => setActiveStep(0)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${activeStep === 0 ? 'bg-white border-emerald-300 shadow-md scale-[1.02]' : 'bg-slate-50 border-slate-200 opacity-60 hover:opacity-100'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${activeStep === 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-500'}`}>
                    <Camera size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeStep === 0 ? 'text-teal-900' : 'text-slate-600'}`}>1. Snapshot</h4>
                    <p className="text-slate-600 pt-1 font-medium text-sm">Capture the blocked footpath through the secure, AI-powered FreeWalk camera.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div 
                  onClick={() => setActiveStep(1)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${activeStep === 1 ? 'bg-white border-teal-300 shadow-md scale-[1.02]' : 'bg-slate-50 border-slate-200 opacity-60 hover:opacity-100'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${activeStep === 1 ? 'bg-teal-100 text-teal-700' : 'bg-slate-200 text-slate-500'}`}>
                    <Map size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeStep === 1 ? 'text-teal-900' : 'text-slate-600'}`}>2. Tag & Verify</h4>
                    <p className="text-slate-600 pt-1 font-medium text-sm">Select the violation type. The app instantly verifies the GPS and tags the BMC Ward.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div 
                  onClick={() => setActiveStep(2)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${activeStep === 2 ? 'bg-white border-orange-300 shadow-md scale-[1.02]' : 'bg-slate-50 border-slate-200 opacity-60 hover:opacity-100'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${activeStep === 2 ? 'bg-orange-100 text-orange-600' : 'bg-slate-200 text-slate-500'}`}>
                    <Send size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeStep === 2 ? 'text-teal-900' : 'text-slate-600'}`}>3. Share the Evidence</h4>
                    <p className="text-slate-600 pt-1 font-medium text-sm">Post the watermarked, undeniable report to X/Twitter with one single tap.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: CSS Mobile Phone Mockup (The Carousel) */}
            <div className="relative mx-auto w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-2xl overflow-hidden group">
              {/* Fake iPhone Notch */}
              {/* <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-40 mx-auto z-20"></div> */}
              
              {/* SCREEN 1: Camera UI */}
              <div className={`absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 ${activeStep === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                {<Image src="/screen_1.jpeg" alt="Camera" fill className="object-cover" />}
                <Camera size={48} className="text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">1. Camera Interface</h3>
                <p className="text-sm text-slate-500">Add screen1.jpg here</p>
              </div>

              {/* SCREEN 2: Tag/Preview UI */}
              <div className={`absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                {<Image src="/screen_2.jpeg" alt="Tagging" fill className="object-cover" />}
                <Map size={48} className="text-teal-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">2. Tagging Interface</h3>
                <p className="text-sm text-slate-500">Add screen2.jpg here</p>
              </div>

              {/* SCREEN 3: Success/Share UI */}
              <div className={`absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 ${activeStep === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                {/* <Image src="/screen3.jpg" alt="Share" fill className="object-cover" /> */}
                <Send size={48} className="text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">3. Success Interface</h3>
                <p className="text-sm text-slate-500">Uploading soon...</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works Section - Quirky Tilting Cards */}
      <section id="tech" className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Playful background blobs */}
        <div className="absolute top-0 left-[-10%] w-96 h-96 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-[-10%] w-96 h-96 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-teal-900">Not Just Another Twitter Rant</h2>
            <p className="text-lg text-slate-500">We don't do angry tweets. We do undeniably verified data.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" style={{perspective: '1000px'}}>
            {/* Card 1: Tilts Left */}
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:-rotate-3 transition-all duration-300 cursor-default">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">AI-Verified Integrity</h3>
              <p className="text-slate-600 leading-relaxed">Our Gemini AI acts as a digital bouncer. It blocks fake uploads, spoofing, or photos of laptop screens.</p>
            </div>
            
            {/* Card 2: Pops Up */}
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-6 transition-all duration-300 cursor-default">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-teal-700" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Zero Retaliation</h3>
              <p className="text-slate-600 leading-relaxed">Taking photos can be risky. We strip all camera EXIF data and GPS tags on your phone *before* it hits our servers.</p>
            </div>
            
            {/* Card 3: Tilts Right */}
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:rotate-3 transition-all duration-300 cursor-default">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <MapPinned className="text-orange-500" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Spatial Hotspots</h3>
              <p className="text-slate-600 leading-relaxed">We use PostGIS math to automatically tag your report to the correct BMC Ward and group them into glowing heatmaps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="bg-teal-900 text-white py-24 md:py-32 overflow-hidden border-t border-teal-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="p-4 bg-teal-800/50 border border-teal-700/50 rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500">
             <div className="aspect-[4/3] bg-teal-950/80 rounded-2xl border-2 border-teal-700 overflow-hidden relative group">
                <Image 
                  src="/heatmap.jpeg" 
                  alt="FreeWalk Admin Heatmap showing blocked footpaths" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Optional: A subtle gradient overlay so it looks premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                  <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Live Data: Ward 118
                  </div>
                </div>
              </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">Data for Local Heroes.</h2>
            <p className="text-lg text-teal-100 mb-10 leading-relaxed opacity-90">We are handing enterprise-grade spatial data directly to Resident Welfare Associations (RWAs) and ALMs so they can negotiate with the BMC using hard numbers, not just complaints.</p>
            
            <div className="flex gap-5 p-6 bg-white/10 rounded-2xl border border-white/20 items-center backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                <Building className="text-emerald-400 flex-shrink-0 animate-bounce" size={36} />
                <div>
                    <h4 className="font-bold text-white text-lg">ALM Leadership Access</h4>
                    <p className="text-sm text-teal-200 mt-1">If you run a local citizen group, contact us for free access to the Ward 118 Admin Dashboard.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* NEW: About The Builder Section (Added directly to the Landing Page!) */}
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-200 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-teal-500 to-emerald-500"></div>
            
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200">
              <User className="text-teal-700" size={32} />
            </div>
            
            <h2 className="text-3xl font-extrabold mb-6 text-slate-800">Who is building this?</h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
              Honestly? I am just an average guy and a hobby coder. I don't work at a massive tech giant, I just do a lot of "vibe coding" on the weekends.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              I definitely don't have all the answers, and this is first time I am building an app. This app is a massive work in progress. I am completely open to suggestions, feedback, and help from anyone.
            </p>
            
            <a 
              href="mailto:masterthesisrcse@gmail.com" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-teal-500 text-slate-700 hover:text-teal-700 font-bold rounded-2xl transition-all shadow-sm hover:shadow-md"
            >
              <MessageSquare size={20} />
              Drop me a suggestion
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 text-center text-slate-500 text-sm">
        <div className="text-2xl font-extrabold tracking-tighter mb-4 text-teal-900 grayscale hover:grayscale-0 transition-all cursor-pointer">
          FreeWalk
        </div>
        <p className="font-bold">Built for Mumbai. Powered by Citizen Data.</p>
        <p className="text-xs mt-2 opacity-75">FreeWalk is an independent civic initiative. We just really like walking safely.</p>
      </footer>
    </main>
  );
}