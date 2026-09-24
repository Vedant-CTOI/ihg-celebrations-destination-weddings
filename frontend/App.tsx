import React, { useState, useEffect } from 'react';
import { PageView, InquiryFormData, WeddingFunctionId } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DestinationDiscovery } from './components/DestinationDiscovery';
import { HotelsExploration } from './components/HotelsExploration';
import { RealWeddings } from './components/RealWeddings';
import { VisualiseWedding } from './components/VisualiseWedding';
import { WeddingQuiz } from './components/WeddingQuiz';
import { DiscoveryForm } from './components/DiscoveryForm';
import { Footer } from './components/Footer';

// Standalone Full-Page Views (NO POPUPS)
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { HotelDetailPage } from './pages/HotelDetailPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { VisualiseStudioPage } from './pages/VisualiseStudioPage';
import { WeddingQuizPage } from './pages/WeddingQuizPage';
import { ConversationPage } from './pages/ConversationPage';
import { PlanningCharterPage } from './pages/PlanningCharterPage';
import { ConfirmationPage } from './pages/ConfirmationPage';

export const App: React.FC = () => {
  // Navigation state (Default is home)
  const [currentView, setCurrentView] = useState<PageView>({ type: 'home' });

  // Scroll to top whenever navigating to a separate page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigateHome = (anchor?: string) => {
    setCurrentView({ type: 'home' });
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleNavigateToDestination = (destinationId: string) => {
    setCurrentView({ type: 'destination-detail', destinationId });
  };

  const handleNavigateToHotel = (hotelId: string) => {
    setCurrentView({ type: 'hotel-detail', hotelId });
  };

  const handleNavigateToStory = (storyId: string) => {
    setCurrentView({ type: 'story-detail', storyId });
  };

  const handleNavigateToStudio = (functionId: WeddingFunctionId = 'wedding') => {
    setCurrentView({ type: 'visualise-studio', functionId });
  };

  const handleNavigateToQuiz = () => {
    setCurrentView({ type: 'wedding-quiz' });
  };

  const handleNavigateToCharter = () => {
    setCurrentView({ type: 'planning-charter' });
  };

  const handleNavigateToConversation = (prefilledDestination?: string, prefilledHotel?: string) => {
    setCurrentView({ type: 'conversation', prefilledDestination, prefilledHotel });
  };

  const handleFormSubmitted = (data: InquiryFormData) => {
    setCurrentView({ type: 'confirmation', data });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2937] font-body">
      
      {/* 1. Main Sticky Header */}
      <Header
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateToCharter={handleNavigateToCharter}
        onNavigateToQuiz={handleNavigateToQuiz}
        onNavigateToConversation={() => handleNavigateToConversation()}
      />

      {/* 2. Page View Routing - Each section opens as an independent separate page with comprehensive additional information */}
      <main className="flex-grow">
        {currentView.type === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <HeroSection />

            {/* Section 1: Destination Discovery (CTA opens separate Destination Detail Page) */}
            <DestinationDiscovery
              onOpenDetail={(dest) => handleNavigateToDestination(dest.id)}
            />

            {/* Section 2: Hotels & Sanctuaries Exploration (CTA opens separate Hotel Detail Page) */}
            <HotelsExploration
              onSelectHotel={(hotel) => handleNavigateToHotel(hotel.id)}
            />

            {/* Section 3: Real Weddings Cultural Confluence (CTA opens separate Story Detail Page) */}
            <RealWeddings
              onSelectStory={(wedding) => handleNavigateToStory(wedding.id)}
            />

            {/* Section 4: Visualise Your Wedding (CTA opens separate Visualise Studio Page) */}
            <VisualiseWedding
              onOpenStudio={handleNavigateToStudio}
            />

            {/* Section 5: Take the Wedding Quiz (Interactive 5-step matcher with go-back journey & CTA to dedicated page) */}
            <WeddingQuiz
              onOpenFullQuizPage={handleNavigateToQuiz}
              onSelectHotel={handleNavigateToHotel}
              onProceedToInquiry={(name) => handleNavigateToConversation(undefined, name)}
            />

            {/* Section 6: Begin the Conversation (Clean landing teaser with a line of what it does + CTA to dedicated full page) */}
            <DiscoveryForm
              onOpenConversationPage={() => handleNavigateToConversation()}
              onOpenCharter={handleNavigateToCharter}
            />
          </div>
        )}

        {/* Separate Page 1: Comprehensive Destination Dossier Page */}
        {currentView.type === 'destination-detail' && (
          <DestinationDetailPage
            destinationId={currentView.destinationId}
            onNavigateBack={() => handleNavigateHome('destinations')}
            onNavigateToHotel={handleNavigateToHotel}
            onNavigateToInquiry={(name) => handleNavigateToConversation(name)}
          />
        )}

        {/* Separate Page 2: Comprehensive Hotel Sanctuary Floorplan & Blueprint Page */}
        {currentView.type === 'hotel-detail' && (
          <HotelDetailPage
            hotelId={currentView.hotelId}
            onNavigateBack={() => handleNavigateHome('hotels-exploration')}
            onNavigateToInquiry={(name) => handleNavigateToConversation(undefined, name)}
          />
        )}

        {/* Separate Page 3: Comprehensive Real Wedding Case Study & Timeline Page */}
        {currentView.type === 'story-detail' && (
          <StoryDetailPage
            storyId={currentView.storyId}
            onNavigateBack={() => handleNavigateHome('real-weddings')}
            onNavigateToInquiry={(title) => handleNavigateToConversation(undefined, title)}
          />
        )}

        {/* Separate Page 4: Visualise Your Wedding Full Studio Simulator Page */}
        {currentView.type === 'visualise-studio' && (
          <VisualiseStudioPage
            initialFunctionId={currentView.functionId}
            onNavigateBack={() => handleNavigateHome('visualise')}
            onAdoptSetup={() => handleNavigateToConversation()}
          />
        )}

        {/* Separate Page 5: Dedicated Wedding Quiz Full Page */}
        {currentView.type === 'wedding-quiz' && (
          <WeddingQuizPage
            onNavigateBack={() => handleNavigateHome('wedding-quiz')}
            onNavigateToHotel={handleNavigateToHotel}
            onProceedToInquiry={(name) => handleNavigateToConversation(undefined, name)}
          />
        )}

        {/* Separate Page 6: Dedicated 'Begin the Conversation' Full Intake Page */}
        {currentView.type === 'conversation' && (
          <ConversationPage
            prefilledDestination={currentView.prefilledDestination}
            prefilledHotel={currentView.prefilledHotel}
            onNavigateBack={() => handleNavigateHome('contact')}
            onSubmitSuccess={handleFormSubmitted}
            onOpenCharter={handleNavigateToCharter}
          />
        )}

        {/* Separate Page 7: Official Luxury Wedding Charter & Protocol Page */}
        {currentView.type === 'planning-charter' && (
          <PlanningCharterPage
            onNavigateBack={() => handleNavigateHome('contact')}
            onProceedToForm={() => handleNavigateToConversation()}
          />
        )}

        {/* Separate Page 8: Dedicated Confirmation Receipt Page */}
        {currentView.type === 'confirmation' && (
          <ConfirmationPage
            data={currentView.data}
            onNavigateHome={() => handleNavigateHome()}
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer />

    </div>
  );
};

export default App;
