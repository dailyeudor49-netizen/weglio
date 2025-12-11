import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero - Community Style */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🇮🇹</span>
              <span className="font-medium">La community dei rivenditori italiani</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insieme si Cresce
            </h1>
            <p className="text-xl text-red-100 mb-10">
              Piu di 450 rivenditori in Italia hanno scelto Weglio.
              Unisciti alla nostra community e fai crescere il tuo business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50">
                Esplora Prodotti
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800">
                Unisciti a Noi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "👥", value: "450+", label: "Rivenditori Attivi" },
              { icon: "📦", value: "2,800+", label: "Prodotti Disponibili" },
              { icon: "🏆", value: "8", label: "Anni di Esperienza" },
              { icon: "⭐", value: "4.9/5", label: "Valutazione Media" },
            ].map((s, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                <div className="text-gray-600 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Storie dalla Community</h2>
            <p className="text-gray-600">Scopri come altri rivenditori hanno fatto crescere il loro business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                story: "Da quando collaboro con Weglio, il mio fatturato e cresciuto del 40%. Il supporto e fantastico!",
                name: "Marco B.",
                location: "Milano",
                years: "Cliente da 3 anni"
              },
              {
                story: "Prodotti di qualita, prezzi competitivi e consegne sempre puntuali. Consiglio Weglio a tutti.",
                name: "Giulia R.",
                location: "Roma",
                years: "Cliente da 2 anni"
              },
              {
                story: "Il gruppo WhatsApp dei rivenditori e una risorsa preziosa. Si condividono consigli e si cresce insieme.",
                name: "Antonio D.",
                location: "Napoli",
                years: "Cliente da 5 anni"
              },
            ].map((t, i) => (
              <div key={i} className="bg-red-50 p-6 rounded-2xl">
                <p className="text-gray-700 mb-4 italic">&quot;{t.story}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-red-600 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.location} | {t.years}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Community Labels */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">I Piu Venduti dalla Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🔊", name: "Speaker", tag: "Top Seller" },
              { icon: "🎧", name: "Cuffie", tag: "Novita" },
              { icon: "🔋", name: "Power Bank", tag: "Best Value" },
              { icon: "⌚", name: "Smartwatch", tag: "Trending" },
              { icon: "📱", name: "Cover", tag: "Classico" },
              { icon: "🔌", name: "Cavi", tag: "Essenziale" },
            ].map((c, i) => (
              <Link key={i} href="/products" className="bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-700 transition-colors">
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="font-medium">{c.name}</div>
                <span className="inline-block mt-2 px-2 py-1 bg-red-600 text-xs rounded-full">{c.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Vantaggi della Community</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💬", title: "Gruppo WhatsApp", desc: "Connettiti con altri rivenditori, condividi esperienze e ricevi supporto in tempo reale" },
              { icon: "🎓", title: "Formazione Gratuita", desc: "Webinar mensili su vendita, marketing e novita di prodotto" },
              { icon: "🏷️", title: "Prezzi Esclusivi", desc: "Sconti riservati ai membri della community e offerte anticipate" },
              { icon: "🚚", title: "Consegna 24/48h", desc: "Spedizioni rapide in tutta Italia con tracciamento completo" },
            ].map((b, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Join Community */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Entra nella Community Weglio</h2>
          <p className="text-red-100 mb-8 text-lg">
            Oltre 450 rivenditori italiani ci hanno gia scelto. Il prossimo potresti essere tu!
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50">
            Richiedi Accesso
          </Link>
          <p className="text-red-200 text-sm mt-6">
            info@weglio.it | Lun-Ven 9:00-18:00
          </p>
        </div>
      </section>
    </div>
  );
}
