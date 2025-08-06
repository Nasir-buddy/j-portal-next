'use client'

import React from 'react'
import { Search, Menu, Grid3X3, Twitter, Facebook, MessageCircle, Linkedin, Youtube, FileText, Send } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

const HomePage = () => {
  const { theme, mounted, toggleTheme, isDark } = useTheme()

  const trendingJobs = [
    "Software Engineer Jobs 2024 | 5000+ Positions Available for IT Professionals",
    "Government Teacher Recruitment 2024 | 2000+ Teaching Positions Open",
    "Bank Clerk Jobs 2024 | 1500+ Banking Positions for Graduates",
    "Data Analyst Jobs 2024 | 3000+ Analytics Positions in Tech Companies",
    "Marketing Manager Jobs 2024 | 1200+ Marketing Positions Available",
    "Nurse Jobs 2024 | 2500+ Healthcare Positions in Hospitals",
    "Sales Executive Jobs 2024 | 4000+ Sales Positions Across Industries",
    "Content Writer Jobs 2024 | 1800+ Writing Positions for Creative Professionals",
    "Accountant Jobs 2024 | 2200+ Finance Positions in Various Companies",
    "Customer Service Jobs 2024 | 3500+ Support Positions Available"
  ]

  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "Bangalore, Karnataka",
      salary: "₹12-18 LPA",
      type: "Full-time",
      experience: "3-5 years",
      posted: "2 days ago"
    },
    {
      title: "Marketing Manager",
      company: "Global Marketing Inc",
      location: "Mumbai, Maharashtra",
      salary: "₹8-12 LPA",
      type: "Full-time",
      experience: "2-4 years",
      posted: "1 day ago"
    },
    {
      title: "Data Scientist",
      company: "AI Analytics Ltd",
      location: "Hyderabad, Telangana",
      salary: "₹15-25 LPA",
      type: "Full-time",
      experience: "4-6 years",
      posted: "3 days ago"
    },
    {
      title: "UI/UX Designer",
      company: "Creative Design Studio",
      location: "Pune, Maharashtra",
      salary: "₹6-10 LPA",
      type: "Full-time",
      experience: "1-3 years",
      posted: "5 days ago"
    }
  ]

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div 
        className="min-h-screen transition-colors duration-300"
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)'
        }}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
      </div>
    )
  }

  // Debug: Log current theme
  console.log('Current theme:', theme, 'isDark:', isDark, 'mounted:', mounted)



  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* Header */}
      <header 
        className="job-portal-header border-b"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">JobPortal.in</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-green-600 transition-colors" />
              <Grid3X3 className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-green-600 transition-colors" />
              <ThemeToggle />
              <div 
                className="px-2 py-1 text-xs rounded"
                style={{
                  backgroundColor: 'var(--card)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)'
                }}
              >
                {theme}
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav 
            className="py-3 border-t job-portal-nav"
            style={{ borderColor: 'var(--border)' }}
          >
            <div 
              className="flex items-center space-x-8 text-sm font-medium"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <a href="#" className="hover:text-green-600 transition-colors">Home</a>
              <a href="#" className="hover:text-green-600 transition-colors">Government Jobs</a>
              <a href="#" className="hover:text-green-600 transition-colors">Private Jobs</a>
              <a href="#" className="hover:text-green-600 transition-colors">News</a>
              <a href="#" className="hover:text-green-600 transition-colors">State Jobs</a>
              <a href="#" className="hover:text-green-600 transition-colors">Government Schemes</a>
              <a href="#" className="hover:text-green-600 transition-colors">Syllabus</a>
              <a href="#" className="hover:text-green-600 transition-colors">Answer Keys</a>
              <a href="#" className="hover:text-green-600 transition-colors">Admit Cards</a>
              <a href="#" className="hover:text-green-600 transition-colors">Results</a>
              <a href="#" className="hover:text-green-600 transition-colors">Current Affairs</a>
              <a href="#" className="hover:text-green-600 transition-colors">Test Series</a>
              <a href="#" className="hover:text-green-600 transition-colors">General Knowledge</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div 
          className="text-sm"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Home » Jobs » Latest Job Openings 2024
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Main Article */}
            <article 
              className="rounded-lg shadow-sm border p-6 mb-6"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <h1 
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Latest Job Openings 2024 - 50,000+ Positions Available Across India
              </h1>
              
              {/* Author Info */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                  <div>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: 'var(--foreground)' }}
                    >
                      JobPortal
                    </span>
                    <span 
                      className="text-sm ml-2"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      Updated on Dec 15, 2024
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Twitter className="h-5 w-5 text-blue-400 cursor-pointer" />
                  <MessageCircle className="h-5 w-5 text-green-500 cursor-pointer" />
                  <Facebook className="h-5 w-5 text-blue-600 cursor-pointer" />
                </div>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none job-article">
                <p 
                  className="mb-6"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Discover the latest job opportunities across various sectors in India. We have compiled a comprehensive list of job openings from government departments, private companies, and multinational corporations. Whether you're a fresh graduate or an experienced professional, find your dream job here.
                </p>

                {/* Advertisement Placeholder */}
                <div className="advertisement-placeholder rounded-lg p-8 text-center mb-6">
                  <span 
                    className="font-medium"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Advertisement
                  </span>
                </div>

                <p 
                  className="mb-6"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  The job market in India is experiencing significant growth with opportunities in technology, healthcare, education, finance, and manufacturing sectors. Companies are actively hiring skilled professionals to meet their business objectives and drive innovation.
                </p>
              </div>
            </article>

            {/* Featured Jobs */}
            <div className="space-y-4">
              <h2 
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Featured Job Openings
              </h2>
              {featuredJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="rounded-lg shadow-sm border p-6 job-card-hover"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 
                        className="text-lg font-semibold mb-2"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {job.title}
                      </h3>
                      <p 
                        className="mb-2"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {job.company}
                      </p>
                      <div 
                        className="flex items-center space-x-4 text-sm"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        <span>📍 {job.location}</span>
                        <span>💰 {job.salary}</span>
                        <span>⏰ {job.type}</span>
                        <span>📅 {job.experience}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span 
                        className="text-sm"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {job.posted}
                      </span>
                      <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Job Statistics */}
            <div 
              className="rounded-lg shadow-sm border p-6 mt-6"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <h2 
                className="text-xl font-bold mb-4 text-center"
                style={{ color: 'var(--foreground)' }}
              >
                Job Market Statistics 2024
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50,000+</div>
                  <div 
                    className="text-sm"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Total Jobs
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1,200+</div>
                  <div 
                    className="text-sm"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Companies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div 
                    className="text-sm"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Cities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div 
                    className="text-sm"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    Sectors
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Advertisement */}
            <div className="advertisement-placeholder rounded-lg p-8 text-center mb-6">
              <span className="text-muted-foreground font-medium">Advertisement</span>
            </div>

            {/* Trending Jobs */}
            <div 
              className="rounded-lg shadow-sm border p-6"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <h3 
                className="text-lg font-bold mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Trending Jobs
              </h3>
              <div className="space-y-3">
                {trendingJobs.map((job, index) => (
                  <div key={index} className="flex items-start space-x-2 trending-job-item p-2 rounded">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {job}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Another Advertisement */}
            <div className="advertisement-placeholder rounded-lg p-8 text-center mt-6">
              <span className="text-muted-foreground font-medium">Advertisement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer 
        className="border-t mt-12"
        style={{
          backgroundColor: 'var(--muted)',
          borderColor: 'var(--border)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Social Media Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-0.5 bg-green-600 mx-auto mb-4"></div>
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              Follow us on Social Media
            </h3>
                          <div className="flex justify-center space-x-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer social-icon"
                  style={{ backgroundColor: 'var(--muted-foreground)' }}
                >
                  <FileText 
                    className="h-5 w-5"
                    style={{ color: 'var(--background)' }}
                  />
                </div>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer social-icon"
                  style={{ backgroundColor: 'var(--muted-foreground)' }}
                >
                  <Send 
                    className="h-5 w-5"
                    style={{ color: 'var(--background)' }}
                  />
                </div>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer social-icon"
                  style={{ backgroundColor: 'var(--muted-foreground)' }}
                >
                  <Linkedin 
                    className="h-5 w-5"
                    style={{ color: 'var(--background)' }}
                  />
                </div>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer social-icon"
                  style={{ backgroundColor: 'var(--muted-foreground)' }}
                >
                  <Facebook 
                    className="h-5 w-5"
                    style={{ color: 'var(--background)' }}
                  />
                </div>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer social-icon"
                  style={{ backgroundColor: 'var(--muted-foreground)' }}
                >
                  <Twitter 
                    className="h-5 w-5"
                    style={{ color: 'var(--background)' }}
                  />
                </div>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer social-icon"
                  style={{ backgroundColor: 'var(--muted-foreground)' }}
                >
                  <Youtube 
                    className="h-5 w-5"
                    style={{ color: 'var(--background)' }}
                  />
                </div>
              </div>
          </div>

          {/* Copyright */}
          <div 
            className="text-center text-sm"
            style={{ color: 'var(--muted-foreground)' }}
          >
            ©2024. JobPortal Education Group | About | Contact | Privacy Policy | Disclaimer | Sitemap | DMCA
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage