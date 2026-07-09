import React, { useState } from 'react';

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

interface MenuCategory {
  id: string;
  title: string;
  emoji: string;
  color: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'dokaria',
    title: 'ΔΟΚΑΡΙΑ',
    emoji: '/icons/dokaria.svg',
    color: 'orange',
    items: [
      { name: 'Κοτόπουλο Σουβλάκι', desc: 'Με lemoni που ξυπνάει νεκρούς', price: '3,50€' },
      { name: 'Χοιρινό Σουβλάκι', desc: 'Το κλασικό, όπως πρέπει', price: '3,80€' },
      { name: 'Μπιφτέκι Σουβλάκι', desc: 'Χειροποίητο, με μυρωδικά απ\' το βουνό', price: '4,20€' },
      { name: 'Σουτζουκάκι Σουβλάκι', desc: 'Πικάντικο, με καυτερή φλόγα', price: '4,50€' },
      { name: 'Μείγμα Δοκάρια (3 κομμάτια)', desc: 'Για αυτούς που δεν αποφασίζουν', price: '9,90€' },
    ],
  },
  {
    id: 'meze',
    title: 'ΜΕΖΕΔΕΣ',
    emoji: '/icons/meze.svg',
    color: 'red',
    items: [
      { name: 'Τζατζίκι Της Γιαγιάς', desc: 'Σκόρδο που ακούγεται μέχρι Δευτέρας', price: '3,00€' },
      { name: 'Τυροκαυτερή', desc: 'Καίει ωραία, όχι κακά', price: '3,50€' },
      { name: 'Μελιτζανοσαλάτα Καπνιστή', desc: 'Καπνίζουμε κι εμείς, αλλά σωστά', price: '3,50€' },
      { name: 'Τραγανές Πατάτες', desc: 'Τραγανές σαν τη λογική του μπάρμπα', price: '3,00€' },
      { name: 'Σαγανάκι Φρέσκο', desc: 'Με ούζο φλογέρα!', price: '5,00€' },
    ],
  },
  {
    id: 'special',
    title: 'ΣΠΕΣΙΑΛΙΤΕ',
    emoji: '/icons/special.svg',
    color: 'teal',
    items: [
      { name: 'Μπέικον στη Σούβλα', desc: 'Ζουλάει κι αυτό — μαζί με τα όνειρά σου', price: '6,50€' },
      { name: 'Λουκάνικο Χωριάτικο', desc: 'Από χωριό που δεν υπάρχει σε χάρτη', price: '5,50€' },
      { name: 'Πανσέτα Χοιρινή', desc: 'Τραγανή έξω, ζουμερή μέσα', price: '7,50€' },
      { name: 'Κοτόπουλο Ψητό Ολόκληρο', desc: 'Για παρέα 3-4 — ή για έναν πεινασμένο', price: '14,00€' },
      { name: 'Παϊδάκια Αρνίσια', desc: 'Όταν θέλεις να εντυπωσιάσεις', price: '18,00€' },
    ],
  },
  {
    id: 'salates',
    title: 'ΣΑΛΑΤΕΣ',
    emoji: '/icons/salates.svg',
    color: 'gold',
    items: [
      { name: 'Χωριάτικη Αληθινή', desc: 'Με ελαιόλαδο που κλάπε από Κρήτη', price: '5,00€' },
      { name: 'Ντομάτα-Αγγούρι', desc: 'Απλή, όπως η αλήθεια', price: '4,00€' },
      { name: 'Μαρούλι Φρέσκο', desc: 'Από κήπο του κυρίου Γιάννη', price: '4,00€' },
      { name: 'Μελιτζανοσαλάτα (πιάτο)', desc: 'Με ψωμάκια δωρεάν', price: '4,50€' },
    ],
  },
  {
    id: 'pota',
    title: 'ΠΟΤΑ',
    emoji: '/icons/pota.svg',
    color: 'ink',
    items: [
      { name: 'Ούζο (50ml)', desc: 'Με πάγο και νερό — όπως πρέπει', price: '3,00€' },
      { name: 'Τσίπουρο (50ml)', desc: 'Με ή χωρίς γλυκάνιστο', price: '3,00€' },
      { name: 'Μπύρα Ψυγείου (μπουκάλι)', desc: 'Παγωμένη σαν χειμώνας', price: '3,50€' },
      { name: 'Κόκα Κόλα / Σόδα', desc: 'Για αυτούς που οδηγούν', price: '2,00€' },
      { name: 'Κρασί Χύμα (250ml)', desc: 'Από βαρέλι — κόκκινο ή λευκό', price: '3,50€' },
      { name: 'Ρετσίνα', desc: 'Η αυθεντική, με ρετσίνι πεύκου', price: '4,00€' },
    ],
  },
];

export default function MenuApp() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? menuData
    : menuData.filter(cat => cat.id === activeCategory);

  const categories = menuData;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2.5 border-ink border-3 font-display text-xs uppercase tracking-wider bg-cream transition-all ${
            activeCategory === 'all'
              ? 'bg-orange text-cream shadow-block-sm border-4'
              : 'border-2 opacity-70 hover:opacity-100'
          }`}
        >
          Όλα
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2.5 border-ink font-display text-xs uppercase tracking-wider bg-cream transition-all ${
              activeCategory === cat.id
                ? `bg-orange text-cream shadow-block-sm border-4`
                : 'border-2 opacity-70 hover:opacity-100'
            }`}
          >
            <img src={cat.emoji} alt="" className="w-5 h-5 inline-block align-middle icon-ink" /> {cat.title}
          </button>
        ))}
      </div>

      <div className="bg-cream border-ink border-8 shadow-block-lg p-8 md:p-10">
        <div className="text-center mb-6 pb-4 border-b-2 border-ink/20">
          <div className="font-display text-lg">ΚΥΜΑ ΣΤΟ ΧΥΜΑ</div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">Ψητομεζεδοπωλείο • Από 1960</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map(cat => (
            <div key={cat.id}>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2" style={{ borderColor: `var(--color-${cat.color})` }}>
                <img src={cat.emoji} alt="" className="w-7 h-7 icon-ink" />
                <h3 className="text-xl font-display uppercase" style={{ color: `var(--color-${cat.color})` }}>{cat.title}</h3>
              </div>
              <div className={cat.id === 'pota' ? 'grid sm:grid-cols-2 gap-x-6' : ''}>
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between gap-3 py-2 border-b border-dotted border-ink/15 last:border-b-0">
                    <div className="flex-1 min-w-0">
                      <div className="font-body font-semibold text-sm">{item.name}</div>
                      <div className="text-xs text-ink/60 italic">{item.desc}</div>
                    </div>
                    <div className="font-display text-sm text-red whitespace-nowrap">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t-2 border-ink/20 text-center">
          <div className="meander-bar mb-3"></div>
          <p className="font-hand text-lg text-red">"ΓΙΑΤΙ ΕΔΩ ΧΤΙΣΟΥΜΕ ΚΟΡΜΙ."</p>
          <p className="text-[10px] mt-1 opacity-50 uppercase tracking-widest">Όλες οι τιμές περιλαμβάνουν ΦΠΑ</p>
        </div>
      </div>
    </>
  );
}
