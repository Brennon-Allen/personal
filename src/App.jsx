import "./css/App.css";
import Picture from "./components/Picture";
import Link from "./components/Link";
import Content from "./components/Content";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";

function App() {
  return (
    <div className="flex-center-column">
      <Picture />
      <Heading text="Brennon Allen" />
      <Subheading text="brennon.t.allen@gmail.com" />
      <Subheading text="+1 (726) 400-3411" />
      <div className="small-margin">
        <Heading text="Links" />
        <div className="flex-center-row">
          <Link text="GitHub" link={"https://github.com/Brennon-Allen"} />
          <Link text="LinkedIn" link={"https://www.linkedin.com/in/brennon-allen/"} />
          <Link text="UpWork" link={"https://www.upwork.com/freelancers/~01dc0e627900ce593c"}/>
        </div>
      </div>

      <div>
        <Heading text="Downloads" />
        <div className="flex-center-row">
          {/* <Link text="Cover Letter" /> */}
          <Link text="Resume" link={"src/assets/Tech Resume-Brennon Allen.pdf"} file={"Brennon Allen's Tech Resume"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
