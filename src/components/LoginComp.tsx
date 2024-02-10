import React, { useEffect } from "react";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import GoogleIcon from "../assets/svgs/google-icon.svg";
import { useSelector , useDispatch } from "react-redux";
import {logIn, logOut, initialUserState} from '@/features/userstate/userStateSlice'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from "@/auth/providers/firebase";
const LoginComp = () => {
  const dispatch = useDispatch()
  const user = useSelector(initialUserState)

  useEffect(() => {
      const auth = getAuth(app)
      console.log("Auth",auth)
      console.log("After Auth")
      const unSubscribe = auth.onAuthStateChanged((user) => {
        console.log("User Infor",user)
        if(user){
          dispatch(logIn(user))
        }
        else{
          dispatch(logOut())
        }
      })
      console.log("subscribe or not",unSubscribe)

      return () => unSubscribe()
  },[])

  const continueWithGoogle = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    console.log("Provider",provider)
    try {
      await signInWithPopup(auth , provider)
    }
    catch(error : unknown){
      console.error("Error Sign In With Google")
    }
  }
  return (
    <>
      {/* Navigation */}
      <nav className="mx-auto max-w-7xl p-6 flex bg-white drop-shadow-sm font-semibold sticky top-0">
        Study Sphere
      </nav>

      {/* Main Content */}
      <div className="h-svh flex justify-center">
        <div className="max-w-[20rem] md:max-w-[30rem] h-full flex flex-col space-y-10 pt-20">
          {/* Login Section */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <span className="text-4xl font-bold md:text-5xl">Log in</span>
            
            {/* Google Login Button */}
            <Button onClick = {continueWithGoogle} variant="outline" className="w-[20rem] flex space-x-3 items-center justify-center">
              <Image src={GoogleIcon} alt="Google Icon" width={15} height={15} />
              <span>Continue with Google</span>
            </Button>
          </div>

          {/* Divider */}
          <hr />

          {/* Terms and Conditions */}
          <div className="text-xs text-gray-400 text-center">
            <span>
              By clicking “Continue with Google” above, you acknowledge that you have read and understood, and agree to StudySphere's{' '}
            </span>
            <a className="underline">Terms & Conditions</a>
            <span>and</span>
            <a className="underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComp;
