
import './App.css';

function App() {

  return (
    <>

        <div className="bg_image">
        <main>
            <div className="box-left"> 
              <div className="content">
                  <h2>Learn to code by watching others</h2>
                  <p> See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>          
              </div>
            </div> 


            <div className="box-right">
              <div className="trial">
                  <header><span className="span-1">Try it free 7 days </span>then $20/mo. thereafter</header>
              </div>
              
              <div className="form">
                    <form>
                        <input type="text" id="fname" name="fname" placeholder="First Name"/>   
                    
                        <input type="text" id="lname" name="lname" placeholder="Last Name"/>

                        <input type="email" id="email" name="email" placeholder="Email Address"/>

                        <input type="password" id="pword" name="pword" placeholder="Password"/>

                        <input type="button" value="CLAIM YOUR FREE TRIAL"/>
                    
                        <p>By clicking the button, your are agreeing to our <span className="span-2">Terms and Services</span></p>
                    </form>
              </div>
            </div>
            </main>
            </div> 

  
    </>
  );
}

export default App;
