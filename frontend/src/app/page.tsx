'use client'

import { useState } from 'react'
import EmailForm from './components/EmailForm'

export default function Home() {
  const [isLogged, setLogged] = useState(true)

  const changeLogin = function () {
    setLogged(!isLogged)
  }

  return (
    <div className="bg-[#121214] w-screen h-screen flex justify-center items-center">
      <div
        className={`bg-[#17171A] w-[605px] ${isLogged ? 'h-[465px]' : 'h-[593px]'} flex-col justify-center items-center rounded-xl`}
      >
        <div className="font-bold mb-8 text-white ml-6 mt-4">
          {isLogged ? <h1>Log in </h1> : <h1>Sing in</h1>}
        </div>

        <div>
          <EmailForm isLogged={isLogged} />
        </div>

        <div className="text-white flex justify-center mt-20 font-bold">
          {isLogged ? (
            <div>
              <h1>
                Don't have an account?{' '}
                <button onClick={changeLogin}>Sign up</button>{' '}
              </h1>
            </div>
          ) : (
            <h1>
              Have an account? <button onClick={changeLogin}>Log in</button>{' '}
            </h1>
          )}
        </div>
      </div>
    </div>
  )
}
