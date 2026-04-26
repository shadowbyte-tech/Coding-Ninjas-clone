import React, { useState } from 'react';
import WEBSITE_TEXTS from '../config/texts';

export default function TextEditor() {
  const [activeSection, setActiveSection] = useState('navbar');
  const [editedTexts, setEditedTexts] = useState(WEBSITE_TEXTS);
  const [isSaved, setIsSaved] = useState(false);

  const sections = Object.keys(editedTexts);

  const handleTextChange = (path, value) => {
    const keys = path.split('.');
    const newTexts = { ...editedTexts };
    
    let current = newTexts;
    for (let i = 0; i < keys.length - 1; i++) {
      current[keys[i]] = { ...current[keys[i]] };
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setEditedTexts(newTexts);
    setIsSaved(false);
  };

  const saveChanges = () => {
    // In a real app, this would save to backend
    localStorage.setItem('websiteTexts', JSON.stringify(editedTexts));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const resetToDefault = () => {
    setEditedTexts(WEBSITE_TEXTS);
    setIsSaved(false);
  };

  const renderTextInput = (path, value, label) => (
    <div key={path} className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => handleTextChange(path, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={label}
      />
    </div>
  );

  const renderTextArea = (path, value, label) => (
    <div key={path} className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        value={value || ''}
        onChange={(e) => handleTextChange(path, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
        placeholder={label}
      />
    </div>
  );

  const renderSection = () => {
    const section = editedTexts[activeSection];
    
    if (activeSection === 'navbar') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderTextInput('navbar.logo', section.logo, 'Logo Text')}
          {renderTextInput('navbar.forWorkingProfessionals', section.forWorkingProfessionals, 'For Working Professionals')}
          {renderTextInput('navbar.forCollegeStudents', section.forCollegeStudents, 'For College Students')}
          {renderTextInput('navbar.courses', section.courses, 'Courses')}
          {renderTextInput('navbar.practice', section.practice, 'Practice')}
          {renderTextInput('navbar.events', section.events, 'Events')}
          {renderTextInput('navbar.about', section.about, 'About')}
          {renderTextInput('navbar.login', section.login, 'Login')}
          {renderTextInput('navbar.tryForFree', section.tryForFree, 'Try for Free')}
        </div>
      );
    }

    if (activeSection === 'hero') {
      return (
        <div className="space-y-4">
          {renderTextInput('hero.mainHeading', section.mainHeading, 'Main Heading')}
          {renderTextArea('hero.subHeading', section.subHeading, 'Sub Heading')}
          {renderTextInput('hero.ctaButton', section.ctaButton, 'CTA Button')}
          {renderTextInput('hero.secondaryCta', section.secondaryCta, 'Secondary CTA')}
        </div>
      );
    }

    if (activeSection === 'placement') {
      return (
        <div className="space-y-4">
          {renderTextInput('placement.title', section.title, 'Title')}
          {renderTextArea('placement.subtitle', section.subtitle, 'Subtitle')}
          {renderTextInput('placement.badge', section.badge, 'Badge')}
          {renderTextInput('placement.searchPlaceholder', section.searchPlaceholder, 'Search Placeholder')}
          {renderTextInput('placement.downloadReport', section.downloadReport, 'Download Report')}
          {renderTextInput('placement.viewMoreStories', section.viewMoreStories, 'View More Stories')}
          {renderTextArea('placement.exploreDirectory', section.exploreDirectory, 'Explore Directory')}
          
          <h4 className="text-lg font-semibold mt-6 mb-4">Stats</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderTextInput('placement.stats.totalPlacements', section.stats.totalPlacements, 'Total Placements')}
            {renderTextInput('placement.stats.totalPlacementsLabel', section.stats.totalPlacementsLabel, 'Total Placements Label')}
            {renderTextInput('placement.stats.highestPackage', section.stats.highestPackage, 'Highest Package')}
            {renderTextInput('placement.stats.highestPackageLabel', section.stats.highestPackageLabel, 'Highest Package Label')}
            {renderTextInput('placement.stats.averageHike', section.stats.averageHike, 'Average Hike')}
            {renderTextInput('placement.stats.averageHikeLabel', section.stats.averageHikeLabel, 'Average Hike Label')}
          </div>
        </div>
      );
    }

    // Default rendering for other sections
    return (
      <div className="space-y-4">
        {Object.entries(section).map(([key, value]) => {
          if (typeof value === 'string') {
            return renderTextInput(`${activeSection}.${key}`, value, key);
          } else if (typeof value === 'object') {
            return (
              <div key={key} className="mb-6">
                <h4 className="text-lg font-semibold mb-3 capitalize">{key}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(value).map(([subKey, subValue]) => {
                    if (typeof subValue === 'string') {
                      return renderTextInput(`${activeSection}.${key}.${subKey}`, subValue, subKey);
                    }
                    return null;
                  })}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Website Text Editor</h1>
            <div className="flex gap-3">
              <button
                onClick={resetToDefault}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Reset to Default
              </button>
              <button
                onClick={saveChanges}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isSaved 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSaved ? '✓ Saved' : 'Save Changes'}
              </button>
            </div>
          </div>

          <div className="flex gap-6">
            {/* Section Sidebar */}
            <div className="w-64 flex-shrink-0">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">SECTIONS</h3>
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeSection === section
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                  </button>
                ))}
              </div>
            </div>

            {/* Editor Content */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                {activeSection.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                {renderSection()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
