// "use client";

// import { motion, useReducedMotion } from "motion/react";
// import { ClipboardCheck, Headset, Layers, UserCheck } from "lucide-react";
// import Counter from "@/components/ui/Counter";
// import Reveal from "@/components/ui/Reveal";

// const STATS = [
//   { value: 20, label: "Years of Experience" },
//   { value: 500, label: "Trusted Clients" },
//   { value: 350, label: "Claims Settled" },
// ];

// const FEATURES = [
//   {
//     icon: Layers,
//     title: "Multiple Insurance Solutions",
//     text: "Health, life, motor, fire, worker, transit, marine and investment plans, all in one place.",
//   },
//   {
//     icon: UserCheck,
//     title: "Personalised Customer Assistance",
//     text: "We listen to your needs and guide you towards options that suit your situation.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "Convenient Enquiry Process",
//     text: "Share your requirement through a short online form and our team will get in touch.",
//   },
//   {
//     icon: Headset,
//     title: "Dedicated Customer Support",
//     text: "Call, WhatsApp or visit our Bhiwandi office for help with your questions.",
//   },
// ];

// export default function WhyChooseUs() {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       id="why-us"
//       className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28"
//     >
//       <motion.div
//         aria-hidden
//         className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-sage/30 blur-3xl"
//         animate={reduce ? undefined : { y: [0, -25, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="site-container relative">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
//             Why Choose Arjun Joshi &amp; Co.?
//           </h2>
//           <p className="mt-4 leading-relaxed text-charcoal/80">
//             Two decades of industry experience, honest guidance and a simple
//             enquiry process, so you can choose protection with confidence.
//           </p>
//         </Reveal>

//         {/* Big numbers */}
//         <dl className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
//           {STATS.map((stat) => (
//             <div
//               key={stat.label}
//               className="shine flex flex-col-reverse rounded-3xl bg-linear-to-br from-gold/30 via-sand to-cream p-6 text-center shadow-sm ring-1 ring-gold/30 sm:p-8"
//             >
//               <dt className="mt-1 text-sm font-medium text-charcoal sm:text-base">
//                 {stat.label}
//               </dt>
//               <dd className="font-display text-5xl text-ink sm:text-6xl">
//                 <Counter to={stat.value} suffix="+" repeat />
//               </dd>
//             </div>
//           ))}
//         </dl>

//         {/* Feature cards */}
//         <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
//           {FEATURES.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <motion.li
//                 key={feature.title}
//                 className="group rounded-3xl bg-cream p-6 ring-1 ring-ink/5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/25"
//                 initial={reduce ? false : { opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
//               >
//                 <div className="relative h-14 w-14">
//                   <span
//                     aria-hidden
//                     className="ring-pulse absolute inset-0 rounded-2xl bg-gold/40"
//                     style={{ animationDelay: `${index * 0.5}s` }}
//                   />
//                   <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white text-bronze shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
//                     <Icon size={26} />
//                   </span>
//                 </div>
//                 <h3 className="mt-5 font-display text-lg leading-snug text-ink">
//                   {feature.title}
//                 </h3>
//                 <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
//                   {feature.text}
//                 </p>
//               </motion.li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "motion/react";
import { ClipboardCheck, Headset, Layers, UserCheck } from "lucide-react";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

const STATS = [
  { value: 20, label: "Years of Experience" },
  { value: 500, label: "Trusted Clients" },
  { value: 350, label: "Claims Settled" },
];

const FEATURES = [
  {
    icon: Layers,
    title: "Multiple Insurance Solutions",
    text: "Health, life, motor, fire, worker, transit, marine and investment plans, all in one place.",
  },
  {
    icon: UserCheck,
    title: "Personalised Customer Assistance",
    text: "We listen to your needs and guide you towards options that suit your situation.",
  },
  {
    icon: ClipboardCheck,
    title: "Convenient Enquiry Process",
    text: "Share your requirement through a short online form and our team will get in touch.",
  },
  {
    icon: Headset,
    title: "Dedicated Customer Support",
    text: "Call, WhatsApp or visit our Bhiwandi office for help with your questions.",
  },
];

export default function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-sage/30 blur-3xl"
        animate={reduce ? undefined : { y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="site-container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl leading-tight text-ink sm:text-4xl">
            Why Choose Arjun Joshi &amp; Co.?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/80 sm:mt-4 sm:text-base">
            Two decades of industry experience, honest guidance and a simple
            enquiry process, so you can choose protection with confidence.
          </p>
        </Reveal>

        {/* Big numbers: one row on phones */}
        <dl className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="shine flex flex-col-reverse rounded-2xl bg-linear-to-br from-gold/30 via-sand to-cream p-3 text-center shadow-sm ring-1 ring-gold/30 sm:rounded-3xl sm:p-8"
            >
              <dt className="mt-1 text-[0.7rem] font-medium leading-tight text-charcoal sm:text-base">
                {stat.label}
              </dt>
              <dd className="font-display text-3xl text-ink sm:text-6xl">
                <Counter to={stat.value} suffix="+" repeat />
              </dd>
            </div>
          ))}
        </dl>

        {/* Feature cards: 2 x 2 on phones */}
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-6 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={feature.title}
                className="group rounded-2xl bg-cream p-4 ring-1 ring-ink/5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/25 sm:rounded-3xl sm:p-6"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="relative h-11 w-11 sm:h-14 sm:w-14">
                  <span
                    aria-hidden
                    className="ring-pulse absolute inset-0 rounded-xl bg-gold/40 sm:rounded-2xl"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                  <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white text-bronze shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon size={22} />
                  </span>
                </div>
                <h3 className="mt-3 font-display text-base leading-snug text-ink sm:mt-5 sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-[0.8rem] leading-snug text-charcoal/80 sm:mt-2 sm:text-sm sm:leading-relaxed">
                  {feature.text}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}