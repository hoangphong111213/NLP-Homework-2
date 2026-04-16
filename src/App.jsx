import { useState } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState('active')
  const [expandedCards, setExpandedCards] = useState({})

  const toggleExpanded = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  // Mock data
  const activeAssignments = [
    {
      id: 'hw2',
      title: 'NLP Homework 2: Sentiment Analysis Model',
      dueDate: '4/20/2026',
      description: 'Build a machine learning model to classify sentiment in movie reviews.',
      status: 'Submitted'
    },
    {
      id: 'hw3',
      title: 'NLP Homework 3: Named Entity Recognition',
      dueDate: '4/25/2026',
      description: 'Develop an NER system using spaCy or NLTK to extract entities from news articles.',
      status: 'Pending'
    }
  ]

  const pastSubmissions = [
    {
      id: 'hw1',
      title: 'NLP Homework 1: Text Preprocessing',
      dueDate: '3/15/2026',
      description: 'Implement text cleaning and tokenization algorithms.',
      status: 'Submitted'
    },
    {
      id: 'hw0',
      title: 'NLP Homework 0: Python Basics Review',
      dueDate: '3/8/2026',
      description: 'Review Python fundamentals and set up development environment.',
      status: 'Submitted'
    },
    {
      id: 'project1',
      title: 'Mini Project: Language Detection',
      dueDate: '3/22/2026',
      description: 'Build a simple language detection system using NLP techniques.',
      status: 'Submitted'
    }
  ]

  const grades = [
    { assignment: 'NLP Homework 1: Text Preprocessing', score: 92, maxScore: 100, grade: 'A', feedback: 'Excellent implementation with good optimization.' },
    { assignment: 'NLP Homework 2: Sentiment Analysis Model', score: 88, maxScore: 100, grade: 'A', feedback: 'Good model accuracy, minor issues in edge cases.' },
    { assignment: 'Mini Project: Language Detection', score: 95, maxScore: 100, grade: 'A', feedback: 'Outstanding work, very creative approach!' }
  ]

  const mockFiles = [
    { name: 'sentiment_model.py', size: '5.2 KB' },
    { name: 'report.pdf', size: '1.8 MB' }
  ]

  const AssignmentCard = ({ assignment }) => {
    const isExpanded = expandedCards[assignment.id]
    const isSubmitted = assignment.status === 'Submitted'

    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        backgroundColor: '#fff'
      }}>
        {/* Main card content */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isExpanded ? '16px' : '0' }}>
          {/* Left side: Title, date, description */}
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '4px' }}>
              {assignment.title}
            </div>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
              Due: {assignment.dueDate}
            </div>
            <div style={{ fontSize: '14px', color: '#999' }}>
              {assignment.description}
            </div>
          </div>

          {/* Right side: Status badge and action button */}
          <div style={{ marginLeft: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Status badge */}
            <div style={{
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold',
              backgroundColor: isSubmitted ? '#d4edda' : '#fff3cd',
              color: isSubmitted ? '#155724' : '#856404'
            }}>
              • {assignment.status}
            </div>

            {/* Action button */}
            <button
              onClick={() => toggleExpanded(assignment.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                border: '1px solid #6c3fa0',
                backgroundColor: 'transparent',
                color: '#6c3fa0',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                whiteSpace: 'nowrap'
              }}
            >
              {isExpanded ? (isSubmitted ? 'Hide Submission' : 'Cancel') : (isSubmitted ? 'View Submission' : 'Upload Files')}
            </button>
          </div>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #eee' }}>
            {isSubmitted ? (
              // View Submission
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '14px' }}>
                  Submitted Files
                </div>
                <div style={{ marginBottom: '12px' }}>
                  {mockFiles.map((file, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', fontSize: '14px', color: '#333', borderBottom: '1px solid #e0e0e0' }}>
                      <span>{file.name}</span>
                      <span>{file.size}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Note: This is mock data. In a real app, files would be downloadable or viewable.
                </div>
              </div>
            ) : (
              // Upload Files
              <div>
                <div
                  style={{
                    border: '2px dashed #ccc',
                    borderRadius: '8px',
                    padding: '32px',
                    textAlign: 'center',
                    backgroundColor: '#f9f9f9',
                    marginBottom: '12px'
                  }}
                >
                  <svg style={{ width: '40px', height: '40px', margin: '0 auto 12px', display: 'block' }} viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <div style={{ fontSize: '14px', color: '#333', marginBottom: '4px' }}>
                    Drag and drop files here, or{' '}
                    <span style={{ color: '#0066cc', cursor: 'pointer', textDecoration: 'underline' }}>
                      browse
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    style={{
                      padding: '8px 16px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: '#6c3fa0',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  const Header = () => (
    <div style={{
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #ddd',
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Left: Logo and title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#6c3fa0',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          S
        </div>
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
          SubmitHub
        </div>
      </div>

      {/* Center: Nav tabs */}
      <div style={{ display: 'flex', gap: '24px' }}>
        {['Active Assignments', 'Past Submissions', 'Grades'].map((tab) => {
          const tabKey = tab === 'Active Assignments' ? 'active' : tab === 'Past Submissions' ? 'past' : 'grades'
          const isActive = activeTab === tabKey
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tabKey)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#6c3fa0' : '#666',
                padding: '0'
              }}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* Right: Avatar and logout */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#333',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          ZT
        </div>
        <button
          style={{
            padding: '6px 12px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )

  const Footer = () => (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '24px',
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '40px',
      fontSize: '13px'
    }}>
      {/* Column 1: TA Emails */}
      <div>
        <div style={{ fontWeight: 'bold', color: '#6c3fa0', marginBottom: '8px' }}>
          Teaching Assistant Emails
        </div>
        <div style={{ color: '#666', lineHeight: '1.6' }}>
          ta1@tsinghua.edu.cn<br/>
          ta2@tsinghua.edu.cn<br/>
          ta3@tsinghua.edu.cn
        </div>
      </div>

      {/* Column 2: Professor Contact */}
      <div>
        <div style={{ fontWeight: 'bold', color: '#6c3fa0', marginBottom: '8px' }}>
          Professor Contact
        </div>
        <div style={{ color: '#666', lineHeight: '1.6' }}>
          prof.nlp@tsinghua.edu.cn<br/>
          Office Hours: Mon–Fri 2–4 PM
        </div>
      </div>

      {/* Column 3: Course Resources */}
      <div>
        <div style={{ fontWeight: 'bold', color: '#6c3fa0', marginBottom: '8px' }}>
          Course Discord/Forum
        </div>
        <div style={{ color: '#666', lineHeight: '1.6' }}>
          <a href="#" style={{ color: '#0066cc', textDecoration: 'underline' }}>
            Join NLP 2026 Discord
          </a><br/>
          forum.tsinghua.nlp/nlp2026
        </div>
      </div>
    </div>
  )

  const currentAssignments = activeTab === 'active' ? activeAssignments : activeTab === 'past' ? pastSubmissions : null

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Header />

      {/* Main content */}
      <div style={{ flex: 1, padding: '32px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Title */}
          <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', color: '#6c3fa0' }}>
            {activeTab === 'active' ? 'Active Assignments' : activeTab === 'past' ? 'Past Submissions' : 'Grades'}
          </div>

          {/* Content based on tab */}
          {activeTab === 'grades' ? (
            // Grades table
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f0f0f0' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Assignment</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Score</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Max Score</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Grade</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((grade, idx) => (
                    <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                      <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>{grade.assignment}</td>
                      <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #eee' }}>{grade.score}</td>
                      <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #eee' }}>{grade.maxScore}</td>
                      <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>{grade.grade}</td>
                      <td style={{ padding: '12px', borderBottom: '1px solid #eee', color: '#666' }}>{grade.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            // Assignment cards
            <div>
              {currentAssignments.map(assignment => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
