import Link from "next/link";


export default function Home(){
  return(
    <div>
      <h2>Landing Page </h2>
      <Link href={"/signin"}>Sign-in</Link>
      <Link href={"/signup"}>Sign-up</Link>
    </div>
    
  )
}










// "use client"
// import React, { useState } from 'react'

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   // Features data
//   const features = [
//     {
//       name: 'Simple and Intuitive',
//       description: 'Our clean interface makes it easy to start drawing immediately without a learning curve.',
//       icon: (
//         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//     },
//     {
//       name: 'Real-time Collaboration',
//       description: 'Work together with your team in real-time, seeing changes as they happen.',
//       icon: (
//         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       ),
//     },
//     {
//       name: 'Hand-drawn Style',
//       description: 'Create diagrams that look hand-drawn, perfect for brainstorming and ideation.',
//       icon: (
//         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//         </svg>
//       ),
//     },
//     {
//       name: 'Export Options',
//       description: 'Export your diagrams as PNG, SVG, or PDF to use in presentations or documents.',
//       icon: (
//         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//         </svg>
//       ),
//     },
//     {
//       name: 'Libraries & Templates',
//       description: 'Access a wide range of shapes, icons, and templates to speed up your diagramming.',
//       icon: (
//         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//         </svg>
//       ),
//     },
//     {
//       name: 'Offline Support',
//       description: 'Work offline and sync your changes when you reconnect to the internet.',
//       icon: (
//         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
//         </svg>
//       ),
//     },
//   ]

//   // How it works steps
//   const steps = [
//     {
//       id: 1,
//       title: 'Create a new board',
//       description: 'Start with a blank canvas or choose from our templates to get started quickly.',
//       image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     },
//     {
//       id: 2,
//       title: 'Draw your ideas',
//       description: 'Use our intuitive tools to sketch shapes, add text, and connect elements with arrows.',
//       image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     },
//     {
//       id: 3,
//       title: 'Collaborate with others',
//       description: 'Share your board with teammates and work together in real-time.',
//       image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     },
//     {
//       id: 4,
//       title: 'Export and share',
//       description: 'Export your diagram in various formats or share a link for others to view and edit.',
//       image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//     },
//   ]

//   // Testimonials
//   const testimonials = [
//     {
//       content: "ExciDraw has completely transformed how our team collaborates on design projects. The intuitive interface and real-time collaboration features have made our brainstorming sessions much more productive.",
//       author: {
//         name: 'Sarah Johnson',
//         role: 'Product Designer at TechCorp',
//         image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       content: "As a software engineer, I use ExciDraw daily to sketch out system architectures and workflows. The ability to quickly create professional-looking diagrams has saved me countless hours.",
//       author: {
//         name: 'Michael Chen',
//         role: 'Senior Developer at StartupX',
//         image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       content: "I teach UX design, and ExciDraw has become an essential tool for my students. The hand-drawn style gives their wireframes a more approachable feel during user testing phases.",
//       author: {
//         name: 'Emily Rodriguez',
//         role: 'Design Educator',
//         image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//   ]

//   // Pricing tiers
//   const tiers = [
//     {
//       name: 'Free',
//       price: '$0',
//       description: 'Perfect for individuals and small projects',
//       features: [
//         'Unlimited public boards',
//         '3 private boards',
//         'Basic shapes and templates',
//         'PNG export',
//         'Community support',
//       ],
//       cta: 'Start for free',
//       mostPopular: false,
//     },
//     {
//       name: 'Pro',
//       price: '$12',
//       description: 'For professionals and teams',
//       features: [
//         'Unlimited private boards',
//         'Advanced shapes and templates',
//         'All export options (PNG, SVG, PDF)',
//         'Real-time collaboration up to 10 users',
//         'Version history (30 days)',
//         'Priority support',
//       ],
//       cta: 'Start free trial',
//       mostPopular: true,
//     },
//     {
//       name: 'Enterprise',
//       price: 'Custom',
//       description: 'For organizations with advanced needs',
//       features: [
//         'Everything in Pro',
//         'Unlimited team members',
//         'Advanced security features',
//         'SSO integration',
//         'Dedicated support',
//         'Custom templates',
//       ],
//       cta: 'Contact sales',
//       mostPopular: false,
//     },
//   ]

//   // FAQs
//   const faqs = [
//     {
//       question: 'Is ExciDraw free to use?',
//       answer: 'Yes, ExciDraw offers a free plan with unlimited public boards and up to 3 private boards. For more advanced features and additional private boards, we offer Pro and Enterprise plans.',
//     },
//     {
//       question: 'Can I collaborate with others in real-time?',
//       answer: 'Absolutely! Real-time collaboration is one of our core features. You can invite team members to your boards and work together simultaneously, seeing changes as they happen.',
//     },
//     {
//       question: 'What export options are available?',
//       answer: 'The free plan allows PNG exports. Pro and Enterprise plans include additional export options such as SVG and PDF formats, making it easy to use your diagrams in presentations and documents.',
//     },
//     {
//       question: 'Does ExciDraw work offline?',
//       answer: 'Yes, ExciDraw has offline support. You can create and edit diagrams without an internet connection, and your changes will sync when you reconnect.',
//     },
//     {
//       question: 'Can I import diagrams from other tools?',
//       answer: 'Currently, we support importing SVG files. We\'re working on adding support for more formats in the future.',
//     },
//     {
//       question: 'Is my data secure?',
//       answer: 'We take security seriously. All data is encrypted in transit and at rest. Enterprise plans include additional security features such as SSO integration and advanced access controls.',
//     },
//   ]

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 flex items-center">
//                 <svg className="h-8 w-auto text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
//                   <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
//                   <path d="M2 2l7.586 7.586"></path>
//                   <circle cx="11" cy="11" r="2"></circle>
//                 </svg>
//                 <span className="ml-2 text-xl font-bold text-gray-900">ExciDraw</span>
//               </div>
//               <nav className="hidden md:ml-6 md:flex md:space-x-8">
//                 <a href="#features" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Features</a>
//                 <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">How It Works</a>
//                 <a href="#pricing" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Pricing</a>
//                 <a href="#faq" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">FAQ</a>
//               </nav>
//             </div>
//             <div className="hidden md:flex items-center">
//               <a href="#" className="btn btn-outline mr-4">Log in</a>
//               <a href="#" className="btn btn-primary">Sign up free</a>
//             </div>
//             <div className="-mr-2 flex items-center md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isMenuOpen ? (
//                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 ) : (
//                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu, show/hide based on menu state */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="pt-2 pb-3 space-y-1">
//               <a href="#features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">Features</a>
//               <a href="#how-it-works" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">How It Works</a>
//               <a href="#pricing" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">Pricing</a>
//               <a href="#faq" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">FAQ</a>
//             </div>
//             <div className="pt-4 pb-3 border-t border-gray-200">
//               <div className="flex items-center px-4">
//                 <a href="#" className="block text-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700">Sign up free</a>
//               </div>
//               <div className="mt-3 flex items-center px-4">
//                 <a href="#" className="block text-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">Log in</a>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       <main>
//         {/* Hero Section */}
//         <div className="relative bg-white overflow-hidden">
//           <div className="max-w-7xl mx-auto">
//             <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//               <svg
//                 className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
//                 fill="currentColor"
//                 viewBox="0 0 100 100"
//                 preserveAspectRatio="none"
//                 aria-hidden="true"
//               >
//                 <polygon points="50,0 100,0 50,100 0,100" />
//               </svg>

//               <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

//               <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                 <div className="sm:text-center lg:text-left">
//                   <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                     <span className="block xl:inline">Create diagrams with</span>{' '}
//                     <span className="block text-primary-600 xl:inline">simplicity and speed</span>
//                   </h1>
//                   <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                     ExciDraw is a virtual whiteboard for sketching hand-drawn like diagrams. Collaborate with others in real-time and share your ideas visually.
//                   </p>
//                   <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                     <div className="rounded-md shadow">
//                       <a
//                         href="#"
//                         className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
//                       >
//                         Try it now
//                       </a>
//                     </div>
//                     <div className="mt-3 sm:mt-0 sm:ml-3">
//                       <a
//                         href="#"
//                         className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
//                       >
//                         Watch demo
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </main>
//             </div>
//           </div>
//           <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//             <img
//               className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
//               src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
//               alt="Person drawing on a whiteboard"
//             />
//           </div>
//         </div>

//         {/* Features Section */}
//         <div id="features" className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Everything you need to visualize your ideas
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 ExciDraw combines simplicity with powerful features to help you create beautiful diagrams quickly.
//               </p>
//             </div>

//             <div className="mt-10">
//               <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//                 {features.map((feature) => (
//                   <div key={feature.name} className="relative">
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                       {feature.icon}
//                     </div>
//                     <div className="ml-16">
//                       <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
//                       <p className="mt-2 text-base text-gray-500">{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* How It Works Section */}
//         <div id="how-it-works" className="bg-gray-50 py-12">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">How It Works</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Simple steps to create amazing diagrams
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 ExciDraw makes it easy to go from idea to visualization in minutes.
//               </p>
//             </div>

//             <div className="mt-16">
//               <div className="space-y-12">
//                 {steps.map((step, stepIdx) => (
//                   <div
//                     key={step.id}
//                     className="flex flex-col lg:flex-row items-center"
//                     style={{ flexDirection: stepIdx % 2 === 0 ? 'row' : 'row-reverse' }}
//                   >
//                     <div className={`flex-1 ${stepIdx % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
//                       <h3 className="text-2xl font-bold text-gray-900">
//                         <span className="text-primary-600">{step.id}.</span> {step.title}
//                       </h3>
//                       <p className="mt-3 text-lg text-gray-500">{step.description}</p>
//                     </div>
//                     <div className="mt-6 lg:mt-0 flex-1">
//                       <img
//                         className="rounded-lg shadow-lg object-cover"
//                         src={step.image}
//                         alt={step.title}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials Section */}
//         <div className="bg-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Testimonials</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Trusted by thousands of creators
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 See what our users are saying about their experience with ExciDraw.
//               </p>
//             </div>

//             <div className="mt-12">
//               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 {testimonials.map((testimonial, index) => (
//                   <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
//                     <div className="flex items-start">
//                       <div className="flex-shrink-0">
//                         <img className="h-12 w-12 rounded-full" src={testimonial.author.image} alt={testimonial.author.name} />
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">{testimonial.author.name}</div>
//                         <div className="text-sm text-gray-500">{testimonial.author.role}</div>
//                       </div>
//                     </div>
//                     <div className="mt-4">
//                       <p className="text-gray-600 italic">"{testimonial.content}"</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Pricing Section */}
//         <div id="pricing" className="bg-gray-50 py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Pricing</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Plans for teams of all sizes
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 Choose the perfect plan for your needs. All plans include a 14-day free trial.
//               </p>
//             </div>

//             <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
//               {tiers.map((tier) => (
//                 <div
//                   key={tier.name}
//                   className={`relative p-8 bg-white border rounded-lg shadow-sm flex flex-col ${
//                     tier.mostPopular ? 'ring-2 ring-primary-500' : ''
//                   }`}
//                 >
//                   {tier.mostPopular && (
//                     <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 px-4 py-1 bg-primary-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white">
//                       Most popular
//                     </div>
//                   )}
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
//                     <p className="mt-4 flex items-baseline text-gray-900">
//                       <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
//                       {tier.name !== 'Enterprise' && <span className="ml-1 text-xl font-semibold">/month</span>}
//                     </p>
//                     <p className="mt-2 text-gray-500">{tier.description}</p>

//                     <ul className="mt-6 space-y-4">
//                       {tier.features.map((feature) => (
//                         <li key={feature} className="flex">
//                           <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                           </svg>
//                           <span className="ml-3 text-gray-500">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mt-8">
//                     <button
//                       className={`w-full btn ${
//                         tier.mostPopular ? 'btn-primary' : 'btn-outline'
//                       }`}
//                     >
//                       {tier.cta}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div id="faq" className="bg-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">FAQ</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Frequently asked questions
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 Find answers to common questions about ExciDraw.
//               </p>
//             </div>

//             <div className="mt-12">
//               <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//                 {faqs.map((faq) => (
//                   <div key={faq.question} className="relative">
//                     <dt>
//                       <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                       </div>
//                       <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{faq.question}</p>
//                     </dt>
//                     <dd className="mt-2 ml-16 text-base text-gray-500">{faq.answer}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center">
//                 <svg className="h-8 w-auto text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
//                   <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
//                   <path d="M2 2l7.586 7.586"></path>
//                   <circle cx="11" cy="11" r="2"></circle>
//                 </svg>
//                 <span className="ml-2 text-xl font-bold text-white">ExciDraw</span>
//               </div>
//               <p className="mt-4 text-gray-300">
//                 A virtual whiteboard for sketching hand-drawn like diagrams. Collaborate with others in real-time and share your ideas visually.
//               </p>
//               <div className="mt-6 flex space-x-6">
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <span className="sr-only">GitHub</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
//               <ul className="mt-4 space-y-4">
//                 <li>
//                   <a href="#features" className="text-base text-gray-300 hover:text-white">Features</a>
//                 </li>
//                 <li>
//                   <a href="#pricing" className="text-base text-gray-300 hover:text-white">Pricing</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-base text-gray-300 hover:text-white">Templates</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-base text-gray-300 hover:text-white">Tutorials</a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
//               <ul className="mt-4 space-y-4">
//                 <li>
//                   <a href="#" className="text-base text-gray-300 hover:text-white">About</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-base text-gray-300 hover:text-white">Blog</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-base text-gray-300 hover:text-white">Careers</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-base text-gray-300 hover:text-white">Contact</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-12 border-t border-gray-700 pt-8">
//             <p className="text-base text-gray-400 text-center">
//               &copy; 2025 ExciDraw. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default App