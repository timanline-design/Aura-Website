import { motion } from 'motion/react';

export default function TexturePreview() {
  const textures = [
    {
      name: 'Cream',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXlaGw5UDe7Knmdx_D3pzxjV90V1Ty66t50b1K35zfo1JqEtES0cO8Ha7nJ9lv_TQ9eNG-Xv2oBuwlaxCDrg0ehO1fDjEv8uWiVA91Efw4ac2Za6TSgCxJfJm9eLUDyUkUVSpMyCRH53Sd8ttIVZBgHl-GgibwnIezsMqtRHSLyBF78ye-yr1bijC5aSiyVps5m-TQnAAKomXKscZnpntHzRPKb4kAsXlHYeJ71RM3j3kkQTctZqrBhZMQntPBMA-vANMLuCzR-i7r'
    },
    {
      name: 'Exfoliant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8rHX1BQHY-OsyCqk_VhWs-kMnz2LrJ6VR_OHNtyZuQ5IbqBNLcB4_vq5JiFBbqk2ZJbkbnLcoEhn4MF0fIt65t17xt3YKD9agThpxkdDArqOc5flonz_Gg6r_Jo_yXxg7tIgp07Krt-ibFPwuPEeAAw6RtUrlXaoT_iWlOwbq8EDMkj7uFZc1cGyFocz-TaZ6LG8r8oHdgLfVSS9cu-MreKNYZy8IcdNviIEoChtGiomXP6WeHJ82fj2imNTsrNJhCi6Labo8xErt'
    },
    {
      name: 'Oil',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC20V9yu6FZ2OjYl8u6nlpPvVrEEge5i4OOr_dIcloVZRMBsYSd0nKhKB0Kf_c1PCONPKoKdBn7cipbfbDJ-kQD5FbYCt0U7Esd42uPUhfXE3ggIu1mgc2hC_BSTYlyaN1hQvB5zzAmy8ZXnfpWJVxExE2iFCUoyfSqMB-0eNIxN6mHsFRujjQXzw-OEubBv6JniaiJ1OBrYptLvYLyFW3k-qVauM4e1YgSxP7VCjiq6Do8g76wHmBT-0DNUcXymqGU6vJ1pnjyNB1B'
    }
  ];

  return (
    <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-md">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl mb-6"
          >
            Tactile Science
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-lg opacity-80 mb-8"
          >
            Experience the textures of AURA. From silk-light serums to dense, buttery balms, every formula is a sensory journey.
          </motion.p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide w-full md:w-auto">
          {textures.map((texture, i) => (
            <motion.div 
              key={texture.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-48 h-48 rounded-full border border-stone-800 p-2 flex items-center justify-center group cursor-pointer"
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={texture.image} 
                  alt={texture.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
