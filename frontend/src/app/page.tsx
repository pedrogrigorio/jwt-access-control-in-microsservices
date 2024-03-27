import EmailForm from './components/EmailForm'

export default function Home() {
  return (
    <div className="bg-[#121214] w-screen h-screen flex justify-center items-center">
      <div className="bg-[#17171A] w-[605px] h-[485px] flex-col justify-center items-center">
        <div className="font-bold mb-8 text-white ml-6 mt-4">
          <h1>Log in</h1>
        </div>

        <div>
          <EmailForm />
        </div>

        <div className="text-white flex justify-center mt-20 font-bold">
          <h1>Don't have an account? Sign up</h1>
        </div>
      </div>
    </div>
  )
}
