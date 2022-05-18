import React from 'react'
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading){
      return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace/>;
    }
    if(user.providerData[0]?.providerId ==+ 'password' && !user.emailVerified){
      return <div className='text-center m-t5'>
        <h4 className='text-danger'>Your Email is not verified!!</h4>
        <h6 className='text-success' >Please Verify your email address</h6>
        <button className='btn btn-primary' onClick={async()=>{
          await sendEmailVerification();
          toast('An email has been sent to you');
        }}>
          Send Verification Email Again
        </button>

      </div>
    }
  return children;
};

export default RequireAuth