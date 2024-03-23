
import './App.css'
import Grandpa from './components/Grandpa'

function App() {
  
// const handleSignUpSubmit = data => {
//   console.log('Sign up data' + data)
// }
// const handleUpdateProfile = data => {
  //   console.log('Update Profile'+ data)
  // }
  return (
    <div className='grandpa'>
      <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
        <h2>Please Sign Up Right Now</h2>
        </div>
        </ReusableForm>
        <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
        <h2>Please Update your Profile now</h2>
        </div>
      </ReusableForm> */}

      <Grandpa></Grandpa>
    </div>
  )
}

export default App
