import React from "react"
const Contact = () => {

function refreshpage() {
  window.location.reload(false)
};

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);


    formData.append("access_key", "8ea21553-121b-4370-93a7-031914aea616");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert('Message has sent successfully');
    }

  };



  return (
    <section id="contact">
        <h2 className="text-2xl lg:text-3xl pt-44 flex justify-center">Wanna work together? Then</h2> 
        <h2 className="text-3xl pt-4 flex justify-center">CONTACT ME</h2> 
      
<form onSubmit={onSubmit} className="flex flex-col items-center px-12 pt-6">
    <label className="mt-4 text-xl underline">NAME:</label>
<input type="text" name="name" placeholder=" Enter Your name" required className="p-1.5 w-80 lg:w-96 mt-2 border border-s-gray-600 rounded text-black"/>

<label className="mt-4 text-xl underline">EMAIL:</label>
<input type="text" name="email" placeholder="Enter Your Email" required className="p-1.5 w-80 lg:w-96 mt-2 border border-s-gray-600 rounded text-black" />
<label className="mt-4 text-xl underline">CONTACT NO.:</label>
<input type="number" name="phone" placeholder="Enter Your Contact Number" required className="p-1.5 w-80 lg:w-96 mt-2 border border-s-gray-600 rounded text-black"  />

<label className="mt-4 text-xl underline" > HIRE ME AS:</label>
<select name="feedback" id="feedback" className="p-1.5 cursor-pointer text-base mt-4 bg-slate-800 text-white hover:text-xl lg:hover:bg-slate-950">

<option value="Full Stack Development" >Full Stack Development</option>
<option value="Front-end Development">Front-end Development</option>
<option value="Backend Support">Backend Support</option>
<option value="Designer">Web Design</option>

</select>

<label  className="mt-4 text-xl underline">YOUR MESSAGE</label>
<textarea name="comments" id="comments" cols="30" rows="5" required className="p-1.5 w-80 lg:w-96 mt-2 border border-s-gray-600 rounded text-black"></textarea>


<button type="submit" value="Send" className="text-base mt-7 mb-2 bg-blue-700 text-white p-1 cursor-pointer hover:bg-blue-950 hover:text-xl">
  SUBMIT 
  </button>

<button onClick={refreshpage} className="text-base mt-7 mb-2 bg-green-600 text-white p-1 cursor-pointer hover:bg-green-900 hover:text-xl">
  REFRESH
  </button>


</form>

    </section>
   );   
   }

   export default Contact