'use client'

import React from 'react'
import { Search, Menu, ChevronRight } from 'lucide-react'
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
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती",
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती",
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती",
    "Peon Jobs 2022 | चपरासी 1673 पदों पर 8वीं 10वीं पास के लिए निकली बंपर भर्ती"
  ]

  const stories = [
    { name: "Naresh Bhart..", image: "/images/avatars/ashoka-chakra.jpg" },
    { name: "SRP Educatio..", image: "/images/avatars/ashoka-chakra.jpg" },
    { name: "Naresh Bhart..", image: "/images/avatars/ashoka-chakra.jpg" },
    { name: "SRP Educatio..", image: "/images/avatars/ashoka-chakra.jpg" },
    { name: "Naresh Bhart..", image: "/images/avatars/ashoka-chakra.jpg" },
    { name: "SRP Educatio..", image: "/images/avatars/ashoka-chakra.jpg" }
  ]

  const categories = [
    "सरकारी नौकरी",
    "प्रवेश पत्र", 
    "सरकारी रिजल्ट",
    "सरकारी योजना",
    "ब्रेकिंग न्यूज",
    "उत्तर कुंजी / सिलेबस"
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
        className="border-b"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-muted-foreground cursor-pointer hover:text-green-600 transition-colors" />
            </div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">Sarkariprep.in</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-green-600 transition-colors" />
              <ThemeToggle size="md" />
              <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"></div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav 
            className="py-3 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div 
              className="flex items-center space-x-6 text-sm font-medium overflow-x-auto"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">होम</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">गवर्नमेंट जॉब</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">न्यूज़</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">प्राइवेट जॉब</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">राज्य</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">सरकारी योजना</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">सिलेबस</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">उत्तर कुंजी</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">प्रवेश पत्र</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">रिजल्ट</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">करंट अफेयर्स</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">टेस्ट सीरीज</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">सामान ज्ञान</a>
              <a href="#" className="hover:text-green-600 transition-colors whitespace-nowrap">वेब स्टोरी</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Stories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2" style={{ color: 'var(--foreground)' }}>STORIES</span>
            <span className="text-sm font-medium text-green-600">NOW.</span>
          </div>
          <div className="flex items-center space-x-3">
            {stories.map((story, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--muted)' }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>
                  {story.name}
                </span>
              </div>
            ))}
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Main Content - 6 Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="rounded-lg border p-4"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <h3 
                className="text-lg font-bold mb-4 text-center"
                style={{ color: 'var(--foreground)' }}
              >
                {category}
              </h3>
              <div className="space-y-2">
                {jobEntries.map((job, jobIndex) => (
                  <div 
                    key={jobIndex} 
                    className={`flex items-start space-x-2 p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors ${
                      index % 2 === 0 ? 'bg-muted' : ''
                    }`}
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">
                      {job}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
          <div 
            className="text-center text-sm"
            style={{ color: 'var(--muted-foreground)' }}
          >
            ©2022. Sarkariprep Education Group | About | Contact | Privacy Policy | Disclaimer | Sitemap | DMCA
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage