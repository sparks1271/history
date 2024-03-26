import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {historyList: initialHistoryList, isTrue: false, searchInput: ''}

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = value => {
    const {historyList} = this.state
    const newHistory = historyList.filter(eachItem => eachItem.id !== value)
    if (newHistory.length === 0) {
      this.setState({historyList: newHistory, isTrue: true})
    } else {
      this.setState({historyList: newHistory})
    }
  }

  render() {
    const {searchInput, historyList} = this.state
    let {isTrue} = this.state
    const updateHistory = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (updateHistory.length === 0) {
      isTrue = true
    }
    return (
      <div className="container-1">
        <div className="container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="pic"
            alt="app logo"
          />
          <div className="container-3">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search logo"
            />
            <input
              type="search"
              className="input-element"
              onChange={this.onChange}
              value={searchInput}
              placeholder="search history"
            />
          </div>
        </div>
        <div className="container-4">
          {!isTrue && (
            <ul>
              {updateHistory.map(eachObject => (
                <li
                  className="list-object"
                  key={eachObject.id}
                  uniqueId={eachObject.id}
                >
                  <p className="para-object">{eachObject.timeAccessed}</p>
                  <div className="container-5">
                    <img
                      src={eachObject.logoUrl}
                      className="pic"
                      alt="domain logo"
                    />
                    <div className="title">
                      <p className="para2">{eachObject.title}</p>
                      <p className="para3">{eachObject.domainUrl}</p>
                    </div>
                  </div>
                  <div className="container-6">
                    <button
                      className="button"
                      type="button"
                      data-testid="delete"
                      onClick={() => this.deleteHistory(eachObject.id)}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        className="pic"
                        alt="delete"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {isTrue && (
            <div className="empty-container">
              <p className="paraStyle">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default App
