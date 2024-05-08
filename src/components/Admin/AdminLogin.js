import React from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import './adminLogin.css'

const AdminLoginPage = () => {
    const [signIn, toggle] = React.useState(true);
    const navigate = useNavigate(); // Import and initialize useNavigate hook

    return (
        <div className="Loginpage" style={{display:'flex' ,justifyContent:'center',background:'#f6f5f7', boxSizing:'border-box' ,alignItems:'center', flexDirection:'column' ,height:'100vh' ,margin:'-20px 0 50px'}}>
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Button onClick={() => navigate("/adminhome")}>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button onClick={() => navigate("/adminhome")}>Sigin In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                        <br />
                        <Components.GhostButton onClick={() => navigate("/")}>
                            Go to HomePage
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                        <br />
                        <Components.GhostButton onClick={() => navigate("/")}>
                            Go to HomePage
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
        </div>
    )
}

export default AdminLoginPage;
