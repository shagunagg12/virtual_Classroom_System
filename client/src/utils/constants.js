/**
 * Application Constants
 * 
 * Centralized constants used throughout the app
 */

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    ME: '/api/auth/me',
  },
  SESSION: {
  CREATE: '/api/session/create',
  JOIN: '/api/session/join',
  END: '/api/session/end',
  LEAVE: '/api/session/leave',
  GET: '/api/session',
  LIST: '/api/session/list',
},
  // ZEGO token generation moved to frontend - no backend endpoint needed
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  HOST: '/host',
  JOIN: '/join',
};

export const ZEGO_CONFIG = {
  APP_ID: process.env.REACT_APP_ZEGO_APP_ID,
  SERVER_SECRET: process.env.REACT_APP_ZEGO_SERVER_SECRET || '', // Optional for test tokens
};

/**
 * App Configuration
 * Brand information and app-wide settings
 */
export const APP_CONFIG = {
  // Brand Information
  APP_NAME: 'Live Classes',
  APP_DESCRIPTION: 'Connect, learn, and grow together with our live class platform. Host or join interactive sessions with HD video, real-time chat, and seamless collaboration.',
  APP_TAGLINE: 'Connect, Learn, Grow Together',
  
  // Social Media Links
  SOCIAL_LINKS: {
    GITHUB: 'https://github.com',
    TWITTER: 'https://twitter.com',
    LINKEDIN: 'https://linkedin.com',
    EMAIL: 'mailto:support@liveclasses.com',
  },
  
  // Footer Links
  FOOTER_LINKS: {
    QUICK_LINKS: [
      { label: 'Home', route: '/', isExternal: false },
      { label: 'Dashboard', route: '/dashboard', isExternal: false },
      { label: 'Sign In', route: '/login', isExternal: false },
      { label: 'Sign Up', route: '/register', isExternal: false },
    ],
    SUPPORT_LINKS: [
      { label: 'Help Center', url: '#', isExternal: true },
      { label: 'Documentation', url: '#', isExternal: true },
      { label: 'Privacy Policy', url: '#', isExternal: true },
      { label: 'Terms of Service', url: '#', isExternal: true },
    ],
  },
  
  // Copyright
  COPYRIGHT_TEXT: 'All rights reserved.',
  
  // Features Data (for Home and Dashboard)
  FEATURES: [
    {
      icon: 'FaVideo',
      title: 'HD Video Quality',
      description: 'Crystal clear video calls with multiple participants in high definition',
      shortDescription: 'Crystal clear video calls with multiple participants',
      color: 'blue'
    },
    {
      icon: 'FaComments',
      title: 'Built-in Chat',
      description: 'Real-time messaging during your sessions for seamless communication',
      shortDescription: 'Real-time messaging during your sessions',
      color: 'green'
    },
    {
      icon: 'FaShieldAlt',
      title: 'Secure & Private',
      description: 'End-to-end encryption for all your sessions and data protection',
      shortDescription: 'End-to-end encryption for all your sessions',
      color: 'purple'
    },
    {
      icon: 'FaUsers',
      title: 'Easy Collaboration',
      description: 'Invite participants with a simple room ID and start collaborating instantly',
      shortDescription: 'Invite participants with a simple room ID',
      color: 'indigo'
    }
  ],
  
  // Benefits Data (for Home page)
  BENEFITS: [
    'Unlimited session duration',
    'Screen sharing capabilities',
    'Record your sessions',
    'Mobile-friendly interface',
    'No downloads required',
    '24/7 customer support'
  ],
  
  // Trust Indicators (for Hero section)
  TRUST_INDICATORS: [
    'No credit card required',
    'Free forever',
    'Setup in minutes'
  ],
  
  // Home Page Content
  HOME_CONTENT: {
    HERO: {
      BADGE_TEXT: 'Start Your First Live Session Today',
      HEADING: 'Connect, Learn,',
      HEADING_HIGHLIGHT: 'Grow Together',
      SUBHEADING: 'Host and join live interactive sessions with HD video, real-time chat, and seamless collaboration. Perfect for education, meetings, and more.',
      CTA_AUTHENTICATED: 'Go to Dashboard',
      CTA_PRIMARY: 'Get Started Free',
      CTA_SECONDARY: 'Sign In',
    },
    FEATURES: {
      HEADING: 'Everything You Need for Live Sessions',
      DESCRIPTION: 'Powerful features designed to make your live sessions engaging and productive',
    },
    BENEFITS: {
      HEADING: 'Why Choose {APP_NAME}?',
      DESCRIPTION: 'Experience the best-in-class platform for hosting and joining live interactive sessions.',
    },
    CTA: {
      HEADING: 'Ready to Start Your First Session?',
      DESCRIPTION: 'Join thousands of users who are already using {APP_NAME} for their online sessions.',
      BUTTON_AUTHENTICATED: 'Go to Dashboard',
      BUTTON_GUEST: 'Get Started Free',
    },
  },
  
  // Dashboard Content
  DASHBOARD_CONTENT: {
    WELCOME: {
      GREETING: 'Welcome back, {userName}! 👋',
      DESCRIPTION: 'Start or join a live session to connect with others',
    },
    ACTION_CARDS: {
      HOST: {
        TITLE: 'Host a Session',
        DESCRIPTION: 'Create a new live session and invite participants to join your class',
        BUTTON: 'Create Session',
        BUTTON_LOADING: 'Creating...',
      },
      JOIN: {
        TITLE: 'Join a Session',
        DESCRIPTION: 'Enter a room ID to join an existing live session',
        BUTTON: 'Join Session',
      },
    },
    SESSIONS_LIST: {
      HEADING: 'Your Sessions',
      DESCRIPTION: 'Active and past sessions you hosted or joined',
      LOADING: 'Loading sessions...',
      EMPTY: 'No sessions yet.',
      FILTER_ALL: 'All',
      FILTER_ACTIVE: 'Active',
      FILTER_ENDED: 'Ended',
      REJOIN_BUTTON: 'Rejoin',
      ENDED_BUTTON: 'Ended',
    },
  },
  
  // Session Content
  SESSION_CONTENT: {
    JOIN_FORM: {
      HEADING: 'Join a Session',
      DESCRIPTION: 'Enter the room ID to join a live session',
      ROOM_ID_LABEL: 'Room ID',
      ROOM_ID_PLACEHOLDER: 'Enter room ID',
      ROOM_ID_HELP: 'Ask the host for the room ID',
      BUTTON: 'Join Session',
      BUTTON_LOADING: 'Joining...',
    },
    INFO_CARD: {
      HEADING: 'Session Information',
      ROOM_ID_LABEL: 'Room ID',
      SHAREABLE_LINK_LABEL: 'Shareable Link',
      COPY_BUTTON: 'Copy',
      COPIED_BUTTON: 'Copied!',
      STATUS_LABEL: 'Status',
      PARTICIPANTS_LABEL: 'Participants',
    },
    HEADER: {
      HOSTING_TITLE: 'Hosting Session',
      JOINING_TITLE: 'Join Session',
      END_SESSION_BUTTON: 'End Session',
    },
    VIDEO: {
      TITLE: 'Live Video Session',
      CONNECTED: 'Connected',
      FULLSCREEN: 'Fullscreen',
      CONNECTING: 'Connecting to video room...',
      LEAVE_BUTTON: 'Leave Session',
      END_BUTTON: 'End Session',
    },
    PARTICIPANTS: {
      HEADING: 'Participants',
      HOST_LABEL: 'Host',
      PARTICIPANT_LABEL: 'Participant',
      JOINED_USERS_LABEL: 'Joined Users',
      EMPTY_MESSAGE: 'Participants will appear here as they join',
    },
  },
  
  // Auth Content
  AUTH_CONTENT: {
    LOGIN: {
      HEADING: 'Welcome Back',
      DESCRIPTION: 'Sign in to continue to your account',
    },
    REGISTER: {
      HEADING: 'Create Account',
      DESCRIPTION: 'Sign up to start hosting and joining live sessions',
    },
  },
  
  // Loading Messages
  LOADING_MESSAGES: {
    SESSION: 'Loading session...',
    SESSIONS: 'Loading sessions...',
    GENERAL: 'Loading...',
  },
};

