"use client";

import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import { ArrowRight, Heart, Shield, Users, Linkedin, Github, Instagram, Phone, Mail, X, LineChart, UserCircle, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 z-50 transition-all duration-150 animate-gradient"
        style={{ 
          width: `${scrollProgress}%`,
          backgroundSize: '200% 100%',
          animation: 'gradient 3s linear infinite'
        }}
      />
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
      <FlickeringGrid
        className="fixed inset-0 z-0"
        squareSize={8}
        gridGap={8}
        color="#ffffff"
        maxOpacity={0.15}
        flickerChance={0.05}
        height={2000}
        width={2000}
      />
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <div className="text-2xl font-bold text-white">Hope Bridge</div>
            <div className="flex gap-6">
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="#team" className="text-gray-300 hover:text-white">Team</a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-gray-300 hover:text-white"
              >
                About
              </button>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </nav>

        {/* Add padding to account for fixed header */}
        <div className="pt-16">
          {/* Hero Section */}
          <section className="mx-auto max-w-7xl px-4 py-20">
            <div className="flex flex-col items-center text-center">
              <TypingAnimation 
                className="mb-6 text-5xl font-bold text-white"
                duration={100}
                delay={500}
              >
                Connecting Hearts, Building Hope
              </TypingAnimation>
              <p className="mb-8 max-w-2xl text-xl text-gray-300">
                Hope Bridge is your platform for meaningful connections and support. Join our community of caring individuals who are making a difference in each other's lives.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => document.getElementById('feedback-form').scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 px-6 py-3 text-black font-medium bg-white rounded-full transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </button>
                <InteractiveHoverButton 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 text-black font-medium bg-white rounded-full"
                >
                  Learn More
                </InteractiveHoverButton>
              </div>
            </div>
          </section>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
                onClick={() => setIsModalOpen(false)}
              />
              
              {/* Modal Content */}
              <div className="relative w-full max-w-2xl rounded-2xl border border-gray-800 bg-gradient-to-b from-black/95 to-black/90 shadow-2xl animate-slideUp">
                {/* Fixed Header */}
                <div className="sticky top-0 z-10 rounded-t-2xl border-b border-gray-800 bg-black/95 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-500/20 p-1.5">
                        <Heart className="h-5 w-5 text-blue-500" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">About Hope Bridge</h2>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="rounded-full p-1.5 text-gray-400 transition hover:bg-white/10 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="max-h-[calc(100vh-8rem)] overflow-y-auto p-4">
                  <div className="space-y-6 text-gray-300">
                    <div className="relative rounded-lg border border-gray-800 bg-black/50 p-4 transition duration-300 hover:border-gray-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 group">
                      <div className="absolute inset-0 rounded-lg bg-[url('/HopeBridge-/images/bgPic/mission.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30" />
                      <div className="relative">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-pink-500/20 p-1.5">
                            <Heart className="h-4 w-4 text-pink-500" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">Our Mission</h3>
                        </div>
                        <p className="text-sm leading-relaxed">
                          Hope Bridge is dedicated to creating a supportive community where individuals can find connection, understanding, and hope. We believe in the power of human connection to transform lives and build a better world.
                        </p>
                      </div>
                    </div>

                    <div className="relative rounded-lg border border-gray-800 bg-black/50 p-4 transition duration-300 hover:border-gray-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20 group">
                      <div className="absolute inset-0 rounded-lg bg-[url('/HopeBridge-/images/bgPic/services.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30" />
                      <div className="relative">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-green-500/20 p-1.5">
                            <Shield className="h-4 w-4 text-green-500" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">What We Offer</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-green-500" />
                            Safe and supportive environment for meaningful connections
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-green-500" />
                            Professional guidance and resources for personal growth
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-green-500" />
                            Community events and group activities
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-green-500" />
                            24/7 support system
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-green-500" />
                            Privacy-focused platform with secure communication
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative rounded-lg border border-gray-800 bg-black/50 p-4 transition duration-300 hover:border-gray-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 group">
                      <div className="absolute inset-0 rounded-lg bg-[url('/HopeBridge-/images/bgPic/how-it-works.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30" />
                      <div className="relative">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-blue-500/20 p-1.5">
                            <Users className="h-4 w-4 text-blue-500" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">How It Works</h3>
                        </div>
                        <ol className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-500">1</span>
                            Create your profile and set your preferences
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-500">2</span>
                            Connect with like-minded individuals
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-500">3</span>
                            Participate in community activities
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-500">4</span>
                            Access resources and support when needed
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-500">5</span>
                            Build lasting relationships
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className="relative rounded-lg border border-gray-800 bg-black/50 p-4 transition duration-300 hover:border-gray-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 group">
                      <div className="absolute inset-0 rounded-lg bg-[url('/HopeBridge-/images/bgPic/community.jpg')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30" />
                      <div className="relative">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-purple-500/20 p-1.5">
                            <Heart className="h-4 w-4 text-purple-500" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">Join Our Community</h3>
                        </div>
                        <p className="text-sm leading-relaxed">
                          Whether you're seeking support, looking to give back, or simply want to connect with others who understand, Hope Bridge welcomes you. Together, we can create a world where everyone feels supported and valued.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Section */}
          <section id="features" className="border-t border-gray-800 bg-black/50 py-20">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="mb-12 text-center text-3xl font-bold text-white">Why Choose Hope Bridge?</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-800 bg-black/50 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20">
                  <Heart className="mb-4 h-12 w-12 text-pink-500" />
                  <h3 className="mb-2 text-xl font-semibold text-white">Direct Donation System</h3>
                  <p className="text-gray-300">Donors contribute funds that are converted into vouchers for essential goods, ensuring direct impact on families in need.</p>
                </div>
                <div className="rounded-lg border border-gray-800 bg-black/50 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                  <Shield className="mb-4 h-12 w-12 text-blue-500" />
                  <h3 className="mb-2 text-xl font-semibold text-white">Voucher-Based System</h3>
                  <p className="text-gray-300">Families can redeem vouchers at partnered local businesses for food, clothing, and medicine, supporting both beneficiaries and local economy.</p>
                </div>
                <div className="rounded-lg border border-gray-800 bg-black/50 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/20">
                  <Users className="mb-4 h-12 w-12 text-green-500" />
                  <h3 className="mb-2 text-xl font-semibold text-white">Employment Portal</h3>
                  <p className="text-gray-300">Connects beneficiaries with job opportunities and training programs to promote long-term independence.</p>
                </div>
                <div className="rounded-lg border border-gray-800 bg-black/50 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/20">
                  <LineChart className="mb-4 h-12 w-12 text-yellow-500" />
                  <h3 className="mb-2 text-xl font-semibold text-white">Impact Tracking</h3>
                  <p className="text-gray-300">Donors receive real-time updates on how their donations are used, ensuring complete transparency in the giving process.</p>
                </div>
                <div className="rounded-lg border border-gray-800 bg-black/50 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                  <UserCircle className="mb-4 h-12 w-12 text-purple-500" />
                  <h3 className="mb-2 text-xl font-semibold text-white">Personalized Support</h3>
                  <p className="text-gray-300">Donors can sponsor specific families and track their progress, creating meaningful connections and lasting impact.</p>
                </div>
                <div className="rounded-lg border border-gray-800 bg-black/50 p-6 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/20">
                  <Lock className="mb-4 h-12 w-12 text-indigo-500" />
                  <h3 className="mb-2 text-xl font-semibold text-white">Secure Transactions</h3>
                  <p className="text-gray-300">End-to-end encryption ensures secure handling of donations and user data, protecting everyone's privacy.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="border-t border-gray-800 py-16">
            <div className="mx-auto max-w-5xl px-4">
              <div className="mb-10 text-center">
                <h2 className="mb-2 text-3xl font-bold text-white">Meet Our Team</h2>
                <p className="text-base text-gray-400">The passionate individuals behind Hope Bridge</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* chanithu */}
                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-black/40">
                  <div className="relative">
                    <div className="mb-4 aspect-square w-32 overflow-hidden rounded-full mx-auto ring-2 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
                      <img
                        src="/HopeBridge-/images/team/chanithu.JPG"
                        alt="Chanithu"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 text-center text-lg font-medium text-white">Chanithu Senvidu</h3>
                    <div className="flex justify-center gap-3">
                      <a href="https://www.linkedin.com/in/chanithusenvidu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="https://github.com/Senvidu" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* thisul */}
                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-black/40">
                  <div className="relative">
                    <div className="mb-4 aspect-square w-32 overflow-hidden rounded-full mx-auto ring-2 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
                      <img
                        src="/HopeBridge-/images/team/thisul.JPG"
                        alt="Thisul"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 text-center text-lg font-medium text-white">Thisul Devagiri</h3>
                    <div className="flex justify-center gap-3">
                      <a href="https://www.linkedin.com/in/thisul-devagiri-8172002b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="https://github.com/ThisulDeva05" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Gihan */}
                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-black/40">
                  <div className="relative">
                    <div className="mb-4 aspect-square w-32 overflow-hidden rounded-full mx-auto ring-2 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
                      <img
                        src="/HopeBridge-/images/team/gihan.JPG"
                        alt="Gihan"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 text-center text-lg font-medium text-white">Gihan Samaraweera</h3>
                    <div className="flex justify-center gap-3">
                      <a href="https://www.linkedin.com/in/gihan-samaraweera-8aa604333/" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="https://github.com/gihan-r" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Jayodya */}
                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-black/40">
                  <div className="relative">
                    <div className="mb-4 aspect-square w-32 overflow-hidden rounded-full mx-auto ring-2 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
                      <img
                        src="/HopeBridge-/images/team/jayodya.JPG"
                        alt="Jayodya"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 text-center text-lg font-medium text-white">Jayodya Abhises</h3>
                    <div className="flex justify-center gap-3">
                      <a href="https://www.linkedin.com/in/jayodya-abises-3a0a8631b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="https://github.com/Abisesj" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* pasindu */}
                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-black/40">
                  <div className="relative">
                    <div className="mb-4 aspect-square w-32 overflow-hidden rounded-full mx-auto ring-2 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
                      <img
                        src="/HopeBridge-/images/team/pasindu.JPG"
                        alt="Pasindu"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 text-center text-lg font-medium text-white">Pasindu Isuranda</h3>
                    <div className="flex justify-center gap-3">
                      <a href="https://www.linkedin.com/in/pasindu-isuranda-54b281353/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="https://github.com/Pasinduisu" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* naveen */}
                <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 p-4 transition-all duration-300 hover:border-gray-700 hover:bg-black/40">
                  <div className="relative">
                    <div className="mb-4 aspect-square w-32 overflow-hidden rounded-full mx-auto ring-2 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
                      <img
                        src="/HopeBridge-/images/team/naveen.JPG"
                        alt="Naveen"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 text-center text-lg font-medium text-white">Naveen Thanusha</h3>
                    <div className="flex justify-center gap-3">
                      <a href="https://lk.linkedin.com/in/naveen-thanusha-364085356" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="https://github.com/Naveen5811" 
                         className="rounded-full bg-white/5 p-1.5 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border-t border-gray-800 py-20">
            <div className="mx-auto max-w-7xl px-4 text-center">
              <h2 className="mb-6 text-3xl font-bold text-white">Ready to Make a Difference?</h2>
              <p className="mb-8 text-xl text-gray-300">
                Join thousands of others who have found hope and connection through Hope Bridge.
              </p>
              <div className="flex justify-center">
                <RainbowButton 
                  className="px-8 py-4 text-lg font-semibold"
                >
                  Start Your Journey Today
                </RainbowButton>
              </div>
            </div>
          </section>

          {/* Feedback Form Section */}
          <section id="feedback-form" className="border-t border-gray-800 bg-black/50 py-16">
            <div className="mx-auto max-w-3xl px-4">
              <h2 className="mb-8 text-center text-3xl font-bold text-white">Share Your Ideas</h2>
              <p className="mb-8 text-center text-gray-300">
                Have ideas to make Hope Bridge better? We'd love to hear from you.
              </p>
              <form 
                action="https://formsubmit.co/hopebridgelk@gmail.com" 
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="New Hope Bridge Feedback" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://hopebridge.vercel.app/thank-you" />
                <input type="hidden" name="_autoresponse" value="Thank you for your feedback! We'll get back to you soon." />
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-700 bg-black/50 px-4 py-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-700 bg-black/50 px-4 py-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">Your Ideas</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full rounded-lg border border-gray-700 bg-black/50 px-4 py-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Share your ideas and suggestions..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="rounded-full bg-white px-8 py-3 text-black transition hover:bg-gray-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="border-t border-gray-800 bg-black/50">
            <div className="mx-auto max-w-7xl px-4 py-12">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                  <div className="space-y-3">
                    <a href="https://www.instagram.com/_hope_bridge_/profilecard/?igsh=cTJ5eGZpYzJmMWQz" className="flex items-center gap-2 text-gray-300 hover:text-white">
                      <Instagram className="h-4 w-4" />
                      <span className="text-sm">@hopebridge</span>
                    </a>
                    <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-300 hover:text-white">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">+94 (76) 240 4734</span>
                    </a>
                    <a href="mailto:contact@hopebridge.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">hopebridgelk@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/_hope_bridge_/profilecard/?igsh=cTJ5eGZpYzJmMWQz" className="text-gray-400 hover:text-white">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                <p>© 2025 Hope Bridge. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
