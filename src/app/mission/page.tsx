import Link from "next/link";
import { Hammer, Database, Route, ArrowLeft, Lightbulb, Building } from 'lucide-react';


export default function Mission() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white font-sans antialiased">

      {/* Minimal Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors font-bold text-sm">
            <ArrowLeft size={16} />
            Back to App
          </Link>
          <div className="text-xl font-extrabold tracking-tighter text-teal-900">
            Free<span className="text-emerald-500">Walk</span>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
            We don't pour concrete. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              We provide the data.
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A lot of people might think FreeWalk is an app that magically fixes broken footpaths. It isn't. Here is exactly what we are building, and why.
          </p>
        </div>

       {/* The Reality Check */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: The Origin Story / BMC */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Building className="text-red-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">The "Black Hole"</h3>
            <p className="text-slate-600 leading-relaxed">
              I complained on MyBMC about 2 illegal shops on the footpath (one belonged to a politician). The BMC mailed me saying "issue resolved," but the shops are still there. It feels like official portals are just a black hole where complaints go to die.
            </p>
          </div>

          {/* Card 2: The Misconception */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Hammer className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">The Misconception</h3>
            <p className="text-slate-600 leading-relaxed">
              "If I take a photo of an illegally parked car on this app, the BMC or Traffic Police will instantly come and tow it away."
            </p>
          </div>

          {/* Card 3: The Reality */}
          <div className="bg-white p-8 rounded-3xl border-2 border-teal-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Database className="text-teal-700" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">The Reality</h3>
            <p className="text-slate-600 leading-relaxed">
              We are an <strong className="text-teal-900">Evidence Engine</strong>. Individual complaints are easily ignored. But when citizens generate thousands of AI-verified spatial data points, local leaders (ALMs) can use that heatmap to force systemic changes.
            </p>
          </div>

        </div>

        {/* The Master Plan Roadmap */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl font-extrabold mb-10 text-teal-900 flex items-center gap-3">
            <Route className="text-orange-500" size={32} />
            The Master Plan
          </h2>

          <div className="space-y-12 relative border-l-2 border-slate-100 ml-4 md:ml-6 pl-8 md:pl-10">
            
            {/* Phase 1 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1 w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-sm ring-2 ring-teal-100"></div>
              <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                Phase 1 (Current Beta)
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">The Data Collection Engine</h3>
              <p className="text-slate-600 leading-relaxed">
                Rolling out the V1 Android app in Ward 118 to stress-test the Gemini AI verification and PostGIS location clustering. During this phase, maps are kept private to administrators to protect citizen privacy while we validate the data.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1 w-6 h-6 bg-slate-300 rounded-full border-4 border-white"></div>
              <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                Phase 2 (Upcoming)
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">The ALM Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                Opening up read-only, sanitized heatmap dashboards to verified Resident Welfare Associations (RWAs) and ALMs. Empowering community leaders to walk into BMC meetings with hard, indisputable evidence of infrastructure failures.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[49px] top-1 w-6 h-6 bg-slate-300 rounded-full border-4 border-white"></div>
              <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                Phase 3 (Future)
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Automated Accountability</h3>
              <p className="text-slate-600 leading-relaxed">
                Direct integration with official civic grievance portals. The app will eventually auto-generate formal PDF reports and Twitter escalations directly to the relevant authorities based on clustered spatial data.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center text-slate-500 text-sm mt-12">
        <p className="font-bold">Built for Mumbai. Powered by Citizen Data.</p>
        <p className="text-xs mt-2 opacity-75">FreeWalk is an independent civic initiative.</p>
      </footer>
    </main>
  );
}