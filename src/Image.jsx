import  { useState } from "react";

const API_TOKEN = "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"; // Replace this with your actual API token

const Image = () => {
  const [show, setShow] = useState("");
  const[text,setText] = useState("")

    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/?page=3&query=office&client_id=prvcOqquBx5OU3nyIdqss0C18qBF_-aSj75tgTAo6OA",
          // {
          //   headers: { Authorization: `Bearer ${API_TOKEN}` },
          //   method: "POST",
          //   body: JSON.stringify({ "inputs": text }),
          // }
        );
        //console.log(response.json())
      
        const blobData = await response.json();
         console.log(blobData);
        // const imageUrl = URL.createObjectURL(blobData);
        // setShow(imageUrl);
      } catch (error) {
        console.error(error);
      }
    }

    const handleClick = () => {
      fetchData();
    }


  return (
    <div className="container ">
      <h1 style={{
        textAlign:"center"
      }}>Image Generation app</h1>
      <div style={{
        display:"flex"
      }}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={handleClick}>Generate</button>
      </div>

      {show && <img src={show} alt="Image from Hugging Face API" />}
    </div>
  );
};

export default Image;
