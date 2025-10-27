import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function LaptopInstructionsPage() {
  document.title = "Return Instructions";
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>
        Laptop Return Instructions
      </h1>
      <div className="google-doc-section" style={{ width: '100%', maxWidth: 520, margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ fontWeight: 700, fontSize: 22, margin: '26px 0 16px 0', color: '#235' }}>Packing your laptop return.</h2>
        <div style={{ fontSize: 18, margin: '13px 0 7px 0', color: '#222' }}><b>1- Unpack the Box</b><br />Carefully open the box and remove all contents. You should receive a laptop box, return labels (located inside the yellow envelope), bubble wrap, and tape.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcEuP7kemPD5kgKreAOqs33DvsByGVm_M19iRujq6GYWXXTzw1DusLPF1Lb3wNmbys_Hg1PDB2ep9Kz_M8ftRi0QPfktirpvTA4xsXzilW8UyKEx2bmBVr7Lzf37-RLCNV7OFYjdw?key=m3RGN7PzqtZiBtw9Y9OGZQ" alt="laptop_step1_unpack" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 279, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>2- Pack the Laptop and Accessories</b><br />Place the laptop securely within the chamber pack. Insert the charger and any other small items to be returned into the designated side compartment.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXf7WsnDP8o4UD7iHLFXLKa0vOSDQ2lhrEAEW9pK9WmWhXgq6bcJp8qjByXR-VIBb8Pz3_gltdv_A5yyiOIz-gcL7oPw8CDaYNGgXLDshAasNNVltmK9btIkPm0jhEwRFMyL3qYm?key=m3RGN7PzqtZiBtw9Y9OGZQ" alt="laptop_step2_chamber_pack" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 249, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>3- Wrap for Protection</b><br />Wrap the laptop box using the provided bubble wrap. Then, place the wrapped laptop box back into the original outer carton.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcq2QXbr3FdzRO29jq9dZhymXU8VRK6QODX2hJkYXjAYud-NmPJdZtkkShu8v7TFFHNvTSYc7GrN7ZVkCIpfxnrw2htHWqr78looAIxpvKHhQdGtg9jW6ySZQgi8QqPZROZuSZfNw?key=m3RGN7PzqtZiBtw9Y9OGZQ" alt="laptop_step3_wrap_a" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 265, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcrKSi9zOlLhVGpO64aUnRyl53A_WM91pLErxTkCqoH3yFqbKZzQ9lWInnDgSzPnbEsSUbkAodb2HGpTzSekBafUTnkrTMNvjiOKRxX37wmjcghiIxuDLahDNA7ioIRdaX37Kfpdw?key=m3RGN7PzqtZiBtw9Y9OGZQ" alt="laptop_step3_wrap_b" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 264, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>4- Include Additional Items (if applicable)</b><br />If you are returning additional items that do not fit inside the laptop box, please place them in the outer carton alongside the laptop box.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdB_rV3qvT7MxcQtOWhT1Jt06QkcoKPZc6ij0cE1RoJDf-wZuXVv2oVaseznaj-xZA4nfqlJT38BxdqgD8_aiKHoF9i8wymKNh68Ffc8eSjEV9TXqGjyzNldCmmwBbxV1AB_ug7Hw?key=m3RGN7PzqtZiBtw9Y9OGZQ" alt="laptop_step4_extra_items" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 212, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>5- Seal and Label the Box</b><br />Use the provided tape to securely close the box. Affix the return labels accordingly </div>
        <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXehdQQLGoIw5Ieakki0b0bNwAZXZTa8-7xOHQfs5IiAmJBbYBcu3pOCBfv89m28WTbPWjay0AXC7OQ0LJeqB0RVfxuqXk9_mHu997nHX-LC1JKnrt6vBaxHEp23AB-2yzRkmffWGw?key=m3RGN7PzqtZiBtw9Y9OGZQ" alt="laptop_step5_seal_label" style={{ display: 'block', margin: '18px 0 18px 0', borderRadius: 8, width: '100%', maxWidth: 237, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
      </div>
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
