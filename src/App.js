import React, { Component } from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Job } from './Components/Job'
import { JobNotification } from './Components/JobNotification'
import { Footer } from './Components/Footer'
import { Copyrights } from './Components/Copyrights'

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Job />
        <br />
        <JobNotification />
        <Footer />
        <Copyrights/>
      </>
    )
  }
}

export default App
