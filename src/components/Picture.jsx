import ProPic from "../assets/Pro-pic.png"

function Picture() {
  return (
    <>
      <div className="image-box flex-center-column">
        <img src={ProPic} alt="picture" className="image"/>
      </div>
    </>
  );
}

export default Picture;
