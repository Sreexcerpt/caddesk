function Login (){
    return(
        <>
        <section className="login" style={{background: "url(/src/assets/backEnd/img/edulia-login-bg.jpg) noRepeat center", backgroundSize: "cover "}}>
        <div className="login_wrapper">

            <div className="login_wrapper_login_content">
                <div className="login_wrapper_logo text-center"><img src="/src/assets/uploads/settings/45a61b6d67a9239ac7f7c8a33f6299ef.png"
                        alt=""/></div>
                <div className="login_wrapper_content">
                    <h4>Login Details</h4>
                    <form action="https://lms.webdigitalmantra.in/login" method='POST'>
                        <input type="hidden" name="_token" value="E8s0RdnCQEc6FyuFqQRDQbJSLeCLDxtsJScemm4o" autocomplete="off"/>                        <input type="hidden" name="username" id="username-hidden"/>
                        <div className="input-control">
                            <label for="#" className="input-control-icon"><i className="fal fa-envelope"></i></label>
                            <input type="text" name="email" className="input-control-input"
                                placeholder="Enter Email Address" value=""/>
                        </div>
                                                <div className="input-control">
                            <label for="#" className="input-control-icon"><i className="fal fa-lock-alt"></i></label>
                            <input type="password" name='password' className="input-control-input"
                                placeholder='Enter Password'/>
                        </div>
                                                <div className="input-control d-flex flex-wrap row_gap_24">
                            <label for="#" className="checkbox">
                                <input type="checkbox" className="checkbox-input" name="remember" id="rememberMe"
                                    />
                                <span className="checkbox-title">Remember Me</span>
                            </label>
                            <a href="https://lms.webdigitalmantra.in/recovery/password" id='forget'>Forget Password?</a>
                        </div>
                        <div className="input-control">
                            <input type="submit" className='input-control-input' value="Sign In"/>
                        </div>
                    </form>
                </div>
            </div>

                        
                    </div>

    </section>
        </>
    )
}
export default Login;