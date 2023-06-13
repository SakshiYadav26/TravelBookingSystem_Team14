import React from 'react'
import { useForm } from 'react-hook-form';
import './SignUp.css';
import { Link, useHistory } from 'react-router-dom';

function SignUp() {
    // Destructure the necessary methods and properties from useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm()
    const history = useHistory();
    
    // Handle form submission
    const onSubmit = data => {
        console.log(data);

        // Convert form data into a query string
        const queryParams = new URLSearchParams(data).toString();
        // Navigate to the user profile page with the query parameters
        history.push(`/user-profile?${queryParams}`);
      };

    // console.log(watch('username'));

    return (
        //   <div>
        //     <section>
        //         <div className="register">
        //             <div className="col-1">
        //                 <h2>Sign In</h2>
        //                 <span>register and enjoy the service</span>

        //                 <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        // <input type="text" {...register("username")} placeholder='username' />
        //                     <input type="text" {...register("password")} placeholder='password' />
        //                     <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
        //                     <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
        //                     {errors.mobile?.type === "required" && "Mobile Number is required"}
        //                     {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
        //                     <button className='btn'>Sign In</button>
        //                 </form>

        //             </div>
        //             <div className="col-2">
        //                 <img src={img} alt="" />
        //             </div>
        //         </div>
        //     </section>
        //     </div>



        <div class="wrapper">
            <div class="container main">
                <div class="row">
                    <div class="col-md-6 side-image">
                        
                     {/* this is a command    */}
                    </div>
                    <div class="col-md-6 right">
                        <div class="input-box">
                            <header>SignUp</header>

                            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" class="input"{...register("username")} placeholder='username' required/>
                                <input type="text" class="input"{...register("password")} placeholder='password' required/>
                                <input type="text" class="input"{...register("confirmpwd")} placeholder='confirm password' required/>
                                <input type="text" class="input"{...register("mobile", { required: true, maxLength: 10 })} placeholder='mobile number' required/>
                                {errors.mobile?.type === "required" && "Mobile Number is required"}
                                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                                <button className='btn'>
                                <input type="submit" class="submit" value="SignUp"  />
                                </button>
                            </form>






                            <div class="signup">
                                <span>
                                    {" "}
                                    Already have an account? <Link to="/login"> Login </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp