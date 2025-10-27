import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function LargeItemsInstructionsPage() {
  document.title = "Return Instructions";
  const navigate = useNavigate();
  const blocks = [
    { type: "title", content: "Packing a big return" },
    { type: "paragraph", content: "1- Unpack the Box\nCarefully open the package and remove all contents. You should receive an additional box, tape, return labels (located inside a yellow envelope), and a laptop box if applicable." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfrh823Rgtpk3eJl1_g5qPMcISvdd1WCw-DlryXJCU9ve7kVfPFs6JaAdc4-lJoEX44u8OtQGk5X99yglgLxV_k6D7XBnV8LB6kQKxjBdWJcAxYhdZ-ABqttDmd6kJYjg?key=CsgEuEfjXiF6VI1zDh72wQ", style: { maxWidth: 256 } },
    { type: "paragraph", content: "2- Prepare the Shipping Box\nAssemble the new box you received, or use the original box if it is still in good condition. Wrap any large items securely using the provided bubble wrap." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXflHDwkEFpCpH9gRyiLv7flbPIkYzbEBWOhx3p9Yn08FnGUPxxX_r5KPusYvoGR08bpiasjKuLJ-aw2XfFHUo_77dDpyxA55GZgxyd9bLJB2W0CFc0YsIarXINBOl1P5II?key=CsgEuEfjXiF6VI1zDh72wQ", style: { maxWidth: 256 } },
    { type: "paragraph", content: "3- Pack Small Electronics and Accessories\nIf you are returning a laptop, place it in the provided laptop box. Insert the charger and any other small items into the side compartment of the laptop box." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeI72b7PVdUlswXrbJBQeDfPVbVJM_EpXv0BauJuxCHKo5o-Fcz9irJBLrHxRC5rIs3dSlzsEs3BZ5tirEriEYzGVgSzAPnIU5SVGJCAWmpjVfSUO_nu1GTtCtQIsy3lfY?key=CsgEuEfjXiF6VI1zDh72wQ", style: { maxWidth: 286 } },
    { type: "paragraph", content: "4- Pack All Items\nPlace all items to be returned into the shipping box." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd7jVdDqMKhSw7Lt9lUYMa04916xvLpn7OIY7t5HId7lLDapB2ewwwNxcGc8C8xAViaFKNqIDUASSncPp3oe3r28Jk8a0MRBBih_AGDm3WZ3mDfT2Ig39V2Cb-uBMdWenQ?key=CsgEuEfjXiF6VI1zDh72wQ", style: { maxWidth: 257 } },
    { type: "paragraph", content: "5- Secure and Fill\nUse any remaining bubble wrap to fill empty spaces and protect the contents during shipping." },
    { type: "paragraph", content: "6- Seal and Label\nClose the box securely with the provided tape. Attach all return labels to the outside of the box." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdkgwxAM1HSNTCnyv-ABZ9HIFyfWzhnuhV-n-8mnkSx4HkVs4d3sBG6hMlqaBHKTipN_LvGFVjJATA20cc-ZA-pWDL7ACb16P3xX-_7mv26eX0iKPNdB11x85zPvhv4yw?key=CsgEuEfjXiF6VI1zDh72wQ", style: { maxWidth: 269 } },
  ];

  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: "block" }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>
        Large Items/Quantities Return Instructions
      </h1>
      <div className="google-doc-section" style={{ width: "100%", maxWidth: 520, margin: "0 auto", textAlign: "left" }}>
        {blocks.map((block, idx) => {
          if (block.type === "title") {
            return (
              <h2 key={idx} style={{ fontWeight: 700, fontSize: 22, margin: "26px 0 16px 0", color: "#235" }}>
                {block.content}
              </h2>
            );
          }
          if (block.type === "paragraph") {
            return (
              <div key={idx} style={{ fontSize: 18, margin: "12px 0", color: "#222" }}>
                {block.content.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            );
          }
          if (block.type === "image") {
            return (
              <img
                key={idx}
                src={block.src}
                alt="Instruction visual"
                style={{
                  display: "block",
                  margin: "18px 0 12px 0",
                  borderRadius: 8,
                  width: "100%",
                  maxWidth: block.style?.maxWidth || 520,
                  boxShadow: "0 1px 6px rgba(20,32,70,.13)",
                }}
              />
            );
          }
          return null;
        })}
      </div>
      <button className="return-option" style={{ marginTop: 28 }} onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
