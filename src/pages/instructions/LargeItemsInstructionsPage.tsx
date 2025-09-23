import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function LargeItemsInstructionsPage() {
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>
        Large Items/Quantities Return Instructions
      </h1>
      <div className="google-doc-section" style={{ width: '100%', maxWidth: 520, margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ fontWeight: 700, fontSize: 22, margin: '26px 0 16px 0', color: '#235' }}>Packing a big return</h2>
        <div style={{ fontSize: 18, margin: '12px 0', color: '#222' }}><b>1- Unpack the Box</b><br />Carefully open the package and remove all contents. You should receive an additional box, tape, return labels (located inside a yellow envelope), and a laptop box if applicable.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfC5p7B2jjicmwhn5NenLvcWcne13-fHgtzBqVFTKaQqc9WA56TBx5QJOF_JoGCDTdVkbvLGFSPUVWCZD3D8wmoEdT8i5Be07p3_xFqMTEYZT-hTf7wzvZPXYBvOcAhoOGCEUgSC7G5hzU00" alt="large_item_unpack_box" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 256, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>2- Prepare the Shipping Box</b><br />Assemble the new box you received, or use the original box if it is still in good condition. Wrap any large items securely using the provided bubble wrap.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfB_s24z9qCC-RSt0Yacb1Zgb-vSXlRbausxja3jH1vakGEsfoKSU3rdsWwTSoWoJZ0Vw0onyKo5l-jKgA_sa151SGHKOiCFnijE0sFldPVJhONGNQQVdm1qFV2RAkQUR43dw8HPZwNA5_s5lXk" alt="large_item_prepare_shipping_box" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 256, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>3- Pack Small Electronics and Accessories</b><br />If you are returning a laptop, place it in the provided laptop box. Insert the charger and any other small items into the side compartment of the laptop box.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfB7JlMLfn-AMTZmkd2AE1xO4IoNXAu46yLrSgFBOsbTJM-pW_In03A3mCe4TJh6hNYR6Pi_qfhfQnC64zcUEN645GjVGegVt-U4l3gwooHWGj74RykDQHO9BSYKahxLWSBbrH8JYNIJ0wZmFG4" alt="large_item_laptop_box" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 286, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>4- Pack All Items</b><br />Place all items to be returned into the shipping box.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfCuvHs_smmvY6uZvUPb3vxPIEESHF_FVZ2mh9S22502vPCNjNZTOwChCk6F6aTpZ15IVBgNiRf9sxz0NWVUBFdHErHCuyr8aQPEtzpuR4nFbEuMlbbhRKNJOS2GoqCxslLvOBcKa0ulMNC59uo" alt="large_item_pack_all_items" style={{ display: 'block', margin: '18px 0 12px 0', borderRadius: 8, width: '100%', maxWidth: 257, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>5- Secure and Fill</b><br />Use any remaining bubble wrap to fill empty spaces and protect the contents during shipping.</div>
        <div style={{ fontSize: 18, margin: '23px 0 9px 0', color: '#222' }}><b>6- Seal and Label</b><br />Close the box securely with the provided tape. Attach all return labels to the outside of the box as instructed.</div>
        <img src="https://lh7-rt.googleusercontent.com/docsd/ANYlcfBgNS51Rl9Tlv1-BBmtO3nnQC6NPCB01mL0tawBzdtvR0EO7uvkr1Arl9XnoWYqX-BnfgvsblOsZ4jRe7vSLZiFaevVdLE2TVIqRNqzu0kcQ1vudpXAWCokGShbHyKXnP0HGYU2gXMda_ZV" alt="large_item_seal_and_label" style={{ display: 'block', margin: '18px 0 18px 0', borderRadius: 8, width: '100%', maxWidth: 269, boxShadow: '0 1px 6px rgba(20,32,70,.13)' }} />
        <div style={{ fontSize: 18, margin: '22px 0 5px 0', color: '#222', fontWeight: 700 }}>Your return is now complete!!!!</div>
      </div>
      <button className="return-option" style={{ marginTop: 28 }} onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
