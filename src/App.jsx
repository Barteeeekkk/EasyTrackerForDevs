import { Routes, Route } from "react-router-dom"
import { SignedIn, SignedOut} from "@clerk/clerk-react"

import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import { SignIn, SignUp } from "@clerk/clerk-react"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
       
       {/* 
       
       #LANDING BOARD I AUTH DO DOKOŃCZENIA
       
       <Route path="/sign-in" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <SignIn routing="path" path="/sign-in" /> 
        </div>
        }/>
      
      <Route path="/sign-up" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <SignUp routing="path" path="/sign-up" /> 
        </div>
        }/>

      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <SignIn />
            </SignedOut> 
          </> 
        }
      /> 
      */}

    </Routes>
  )
}

export default App
