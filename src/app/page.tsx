'use client'

import React from 'react'
import { Search, Menu, ChevronRight, TrendingUp, Users, Calendar, Award, BookOpen, FileText, Bell, ArrowRight } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

const HomePage = () => {
  const { theme, mounted, toggleTheme, isDark } = useTheme()

  const jobEntries = [
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती",
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती",
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती",
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती",
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती",
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती"
  ]

  const categories = [
    { name: "सरकारी नौकरी", icon: TrendingUp, count: "2.5k+", description: "Latest government job opportunities" },
    { name: "प्रवेश पत्र", icon: FileText, count: "1.2k+", description: "Admit cards and hall tickets" },
    { name: "सरकारी रिजल्ट", icon: Award, count: "3.1k+", description: "Government exam results" },
    { name: "सरकारी योजना", icon: BookOpen, count: "890+", description: "Government schemes and policies" },
    { name: "ब्रेकिंग न्यूज", icon: Bell, count: "450+", description: "Latest breaking news updates" },
    { name: "उत्तर कुंजी / सिलेबस", icon: Users, count: "1.8k+", description: "Answer keys and syllabus" }
  ]

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Professional Header */}
      <header className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-lg hover:bg-accent cursor-pointer transition-all duration-200"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 text-foreground" />
              </button>
            </div>
            
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-foreground">
                Sarkariprep.in
              </h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                className="p-2 rounded-lg hover:bg-accent transition-all duration-200"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-foreground" />
              </button>
              <ThemeToggle size="sm" />
              <div className="w-8 h-8 bg-foreground text-background rounded-full cursor-pointer flex items-center justify-center font-medium text-sm">
                U
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="py-3 border-t border-border">
            <div className="flex items-center space-x-8 text-sm font-medium overflow-x-auto scrollbar-hide">
              {[
                "होम", "गवर्नमेंट जॉब", "न्यूज़", "प्राइवेट जॉब", "राज्य", 
                "सरकारी योजना", "सिलेबस", "उत्तर कुंजी", "प्रवेश पत्र", 
                "रिजल्ट", "करंट अफेयर्स", "टेस्ट सीरीज", "सामान ज्ञान", "वेब स्टोरी"
              ].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Find Your Dream Government Job
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover thousands of government job opportunities, exam results, and career resources all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div 
                key={index}
                className="group"
              >
                <div className="rounded-xl border border-border bg-card p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-border/50">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {category.count}
                    </span>
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  
                  {/* Job Entries */}
                  <div className="space-y-3 mb-6">
                    {jobEntries.slice(0, 4).map((job, jobIndex) => (
                      <div 
                        key={jobIndex} 
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-muted-foreground"></div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {job}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* View More Button */}
                  <button className="w-full py-2.5 px-4 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>View All</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <section className="py-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">25K+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </section>
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-border bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Sarkariprep Education Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage