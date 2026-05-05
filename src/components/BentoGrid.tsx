import { motion } from 'motion/react';

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="font-sans text-[10px] text-aura-primary uppercase tracking-[0.2em] mb-2 block">Freshly Formulated</span>
          <h2 className="font-serif text-3xl md:text-4xl text-aura-text">New Arrivals</h2>
        </div>
        <a href="/shop" className="font-sans text-[10px] uppercase tracking-widest border-b border-aura-muted hover:border-aura-primary transition-colors pb-1">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
        {/* Large Feature Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-aura-surface flex flex-col justify-between p-8 md:p-12 relative group cursor-pointer overflow-hidden"
        >
          <div className="z-10 relative">
            <span className="font-sans text-[10px] uppercase tracking-widest text-aura-primary">Seasonal Focus</span>
            <h3 className="font-serif text-2xl md:text-3xl mt-4 max-w-xs leading-snug">The Algae Recovery Elixir</h3>
            <p className="font-sans text-sm mt-4 max-w-xs text-aura-muted">Intense hydration sourced from regenerative ocean farms.</p>
          </div>
          <div className="absolute right-0 bottom-0 w-2/3 h-full overflow-hidden pointer-events-none">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnt3MkRrLSxZu7TVR_3zxRmEVEQAMiEWYqcwDkj8LZ11Gr3Gzj5smMwaZIHbQwsi4D-FYEwnBlta7WlAusYQeHei3dbNdw5YTqinKfAF9kt5TEvoK0oVy_lzpv5bsV3XpRMQG5ak4w30iPCfUYFyZ9JXmSTkFVkZ7wZgagxDl4bOFHm58EnTcw__D-JfCE7sSIeQA61fGrbMGPCslEeroclRnXIpr7o0YNcj4jIAN3ozcgPT1Mwaxs51tLGIn2V67lVQGjxibPbjPX" 
              alt="Serum detail"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 origin-bottom-right"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="z-10 w-fit border-b border-aura-text pb-1 font-serif text-[10px] uppercase tracking-widest mt-8">
            Explore Product
          </button>
        </motion.div>

        {/* Secondary Column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-aura-bg border border-stone-100 p-8 flex items-center justify-between group cursor-pointer"
          >
            <div className="max-w-[180px]">
              <h4 className="font-serif text-lg uppercase tracking-[0.1em]">Earth Mask</h4>
              <p className="font-sans text-[10px] text-aura-muted mt-2">Detoxifying volcanic clay</p>
              <span className="font-sans text-sm block mt-4">$48.00</span>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full overflow-hidden flex items-center justify-center p-4 shadow-sm border border-stone-50">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGQlXWFU8Z3nr62HwaEGhRtW76YDLfDYwKG4emGTAenUDCmHC1hfwh2begWq8EuCpDSVAjWBv05MVC4GcXebxVlgGev1Ufw41bpUzSCalNZO-qbqIzQTEDhjYOAXZ9xxyppTfBK31AldLoEGu_l8H3ML4YM7IAcas_OE7xbXdu9IUD66j3fxnxsHx3xgO1Ne5ahvCqEjCT2XOBGHqPNgvjSvH-CVfxvb1kPqs8LezpRCulTW2-RnFIs4VwJZrJObVr5uUNTrVvXJKP"
                alt="Earth Mask"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-aura-primary text-white p-8 flex flex-col justify-end group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-0qc9uU3k-ogWpBn2jpwFEgMDcFdddZOOq69mrDU7mG62DLhO_4MTEaBXDXLl02coJNsQ0q3yU55kE3-b4Br3VbTuPYXySvO5A9MzTmssqhw8tEB-GtGo4Orm93FubGYLeH4yuTzykBN4GjmYbYyIwafPNgGHgZE-CwMJXeGEepF542zBp_av0soVIudTbr_d8Hpy5mBUWUgiGQ1Wvtkk-ApaTwOkeFGEAbFctp0gHf5GK5Kl1DuXVB__ojFBGZLLZiRFBLUQQR1Z" 
                alt="Texture preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="z-10 relative">
              <h4 className="font-serif text-2xl mb-2">Sustainable Refills</h4>
              <p className="font-sans text-sm opacity-80 mb-6">Our first zero-waste refill program is here.</p>
              <button className="border border-white/50 px-6 py-2 font-serif text-[10px] uppercase tracking-widest hover:bg-white hover:text-aura-primary transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
