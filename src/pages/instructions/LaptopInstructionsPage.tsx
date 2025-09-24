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
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfD0B9YsISOcbD_Yycn6X-hyNKvIPucHBqfoUNSli34OcDrDJbykKjWAyGPNF38EVpyQ0XBrDf8fiGFMjW7G524rzFTLmW9sm2FaOsfTZ5wnylcW0LXPe5b-k4ss9d3MKxryQmA7bK_x0htKyS0" alt="laptop_step1_unpack" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 279, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>2- Pack the Laptop and Accessories</b><br />Place the laptop securely within the chamber pack. Insert the charger and any other small items to be returned into the designated side compartment.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfDqjfdIOJA7h9GREmQSfebytWPG0y-VyI3SDDWACgtMyBi3ucveVv23s-Q4bplKBUfxbDi7a7s6U9_R4yPHnB_kQctPTKl6odyrCLXQvh6KoV9FAem0MW-K5GDrdbXay4OczO3M-FoPhDL8" alt="laptop_step2_chamber_pack" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 249, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>3- Wrap for Protection</b><br />Wrap the laptop box using the provided bubble wrap. Then, place the wrapped laptop box back into the original outer carton.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfDHxZdIZe_kunp2eOJWosRpwaHfDNzk_IV6cRpMoD9UMfL9SjnG3GfvRjluxc7rzp9TlHR1dtnfyexZeVjFU8e_HdZV22ACuwgyRQl0BEgcg9t3vPHBDSNwHOpIYfbBYc3RYX9JAPj6xwse6yg" alt="laptop_step3_wrap_a" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 265, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfDYN7-NG9VBymdaU4qWybLttbj_DBVEM40zMur4Kby4ynUvRwd7rLoPKPuPKv19EWPwkSOdVFIVYamGx2ZZIABMFUHs8aww6eDYdWJXJcWBVmyL36S8b5UcGljlEiIHUvIKFKr49ie6JefjH8Q" alt="laptop_step3_wrap_b" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 264, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>4- Include Additional Items (if applicable)</b><br />If you are returning additional items that do not fit inside the laptop box, please place them in the outer carton alongside the laptop box.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfDGhzEER3ztEktifFk87ElA_C5YQjJIMY7LX87_SOpimy4cQHkCEs9L-AUN_vvzXueujGJ-QFjv3HWVWP6iNjdNC-low2EJa_qhgOhQrJW4KYV5HFYLA6z0C45eO84RxuGw04mdvtXdZ2fqZSE" alt="laptop_step4_extra_items" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 212, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>5- Seal and Label the Box</b><br />Use the provided tape to securely close the box. Affix the return labels accordingly </div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfCYvyMXwiuLet4XyTDJ44lvWcVRa5fj0VRH7fF1cydnWUFA3fiSech6mklS8yqkBlEYa2mte-9SWW9UUiUPdsKLvfcqUoTVDe-fkLNM_e9_jTfhwoysvTUh2kZUAH6SJEeBfKeflI0dViYBTE8" alt="laptop_step5_seal_label" style={{ display: 'block', margin: '18px 0 18px 0', borderRadius: 8, width: '100%', maxWidth: 237, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
      </div>
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
