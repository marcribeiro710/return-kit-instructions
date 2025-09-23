
import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";
export default function DesktopInstructionsPage() {
  const blocks = [
    { type: "title", content: "Packaging your full size desktop:" },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdEuJhvIN6Ho6FSU-dAkL0whoH9yPniaVLYEWSlbzUpJlzrmyeCUTylgj0N35wweBIfgACdPfjoX_zNpYqyIAywpNYSeuGI6Saajtlk0qry7TiuxhjBjVHnE7dj2WKS7kZ_l0cg?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 624 } },
    { type: "paragraph", content: "1- Please remove the 4 corner foam protectors from the box. Please set them aside as they will be reused later. Do not remove the inner box, and open the flaps." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfEnBXWvH1JP8Yia48B4aAW2PKSB9dWg-IK469OMuSCZz43EgskURaoQCWWB-gvIGQcdoFL8luBFMndLjhEHyK8DV6sTurRvHBinVmSR1rYlyX_9U_p0OGM1bj5m_yC_QdDyLUL0w?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 624 } },
    { type: "paragraph", content: "2- Wrap your tower with the included bubble wrap and place it inside the inner box. It should fit snugly. If it's too tight remove one section of bubble wrap at a time and reinsert into the inner box." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeduAhdsWbWWorBJa_5amIGlXLNa4Rj8x6dLVy-JKzdvHwnD_oZs3sn5wnLiM1cuez380_bPeaDQbNzxgTE3TsnrLkJh_zJtWIOv5dF60VxgrEC3OnECDj_lKAAxbvPavMDQMhjRw?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 299 } },
    { type: "paragraph", content: "3- Tape the inner box closed with one of the included pieces of tape." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLYeYLUsqGe-2MB3ijoIUPFL12tjeywv_vaHfrKpZs9ksLlc94OyR4HHVo0rsObe9PTYug5mHoB4gc3DI2aV21eJNLO_hRe9nbPkmPa_JICiZuimSWR0vRraeKscUNkcoKKuxF?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 624 } },
    { type: "paragraph", content: "4- Reinsert the foam corner blocks. It'll be a tight fit." },
    { type: "image-group", images: [
      { src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc9YX11U6A3FftWTCJa8Zoc1OHHSbJwIA4UMUqIvvunNHJx8z4Lg5vpcfM1S9qiyyDbgZ2qPs6-mJSYbo9VLTd4agM0Jh3yZYi1jY6jTlN-gBiHJub6yiq3eBdo8V22QamXqqQSmw?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 258 } },
      { src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeiOlQ-lGhWz4DM6FHFjWjgS_M2W3vQIgIryvlno1wAjb4XuJR73HNhdP1stE8hPNWG7wS8sQ1cECACiYOmAZ6PaXwzmAoIdnONvrc-BL0A9wwekwGEXR1rw9uFbZ9rVJR3bx97iQ?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 583 } }
    ] },
    { type: "paragraph", content: "5- Use one of the of the included tape strips to hold the two outer two flaps together." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeyHfGQHtEYx0Ba1xBbNYNADqwhLtex2a6ePWHXaSH7BDTcmD3PV9t1KOxEsUywpfwNaEj44BLsnaVdBIvrnUhezEynQi4M6ux1Y1D-h5inHKYYz3hfk3n3PFLIx4ZrSYFKN4cN?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 333 } },
    { type: "paragraph", content: "6- Use the other six tape strips to securely close the box the rest of the way by using two overlapping strips of tape on each flap and two overlapping strips of tape down the center to finish sealing the box. Overlap the tape as seen below." },
    { type: "image-group", images: [
      { src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeXap5Wml2NG4DWEnFG31REXbnJqR4wtRe1beEIVzDUMB305ahAvxziG7mAhIbAJoBN7ARdW3abo-v_ho_GTEfvbTAUUfOkNL8Fb_Ab5cDogD4xrk165V4a1EiDKlFppJInws3TnA?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 299 } },
      { src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeMeI7a6Z9U2b3vRe3slQu_LbsRS5fTEaut2pJsNvFTv6MCOJTs5ghw32HhKvnDtrSeoAZWBJ_Efpy8VvMIFIfzvZTUrIXjyy9uLqk_v50hyerVAzSFT-jL2OXGw0-aqQVo-M21WQ?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 247 } },
    ] },
    { type: "paragraph", content: "7- Repeat on the other flap and down the middle." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfUjVYzXfF6LpM03wT7oazECwqGsfObd3FXOQ6kp7yBuC6_RlCAM0hXszoypywhGT4zXIzcG7M514LsfQhXTEack3NBhJQTEoLejW0JXWnSt0PYPPwmuxVjMH6W0QPbBhNHfsZa?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 391 } },
    { type: "paragraph", content: "8- Attach the return label over the top of the inbound label." },
    { type: "paragraph", content: "Please reach out with any questions or if you're ready for us to schedule a courier" },
    { type: "paragraph", content: "pickup." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfMfJdL9ZKpve69swjZlMjHWxzKbGbrWXBLAEKuPiTikvVJc9KcILYflbcoqHi6SDz2QPBPcdb-uh1cGeIBFKxFqv7NSfQAp0vTU23R5mU0JN2Wzo7egqsckMnOnAcyrTihpGwBbw?key=mctFDgD6vLorRwTP2I4PnQ", style: { maxWidth: 336 } },
  ];
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>Desktop Return Instructions</h1>
      <div className="google-doc-section" style={{ width: '100%', maxWidth: 680, margin: '0 auto', textAlign: "left" }}>
        {blocks.map((block, idx) => {
          if (block.type === "title") {
            return (
              <h2 key={idx} style={{ fontWeight: 700, fontSize: 24, margin: '26px 0 18px 0', color: '#193050' }}>{block.content}</h2>
            );
          }
          if (block.type === "paragraph") {
            return (
              <div key={idx} style={{ fontSize: 18, margin: '17px 0 7px 0', color: '#222' }}>{block.content}</div>
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
                  maxWidth: block.style && block.style.maxWidth ? block.style.maxWidth : 520,
                  boxShadow: "0 1px 6px rgba(20,32,70,.13)",
                }}
              />
            );
          }
          if (block.type === "image-group") {
            return (
              <div key={idx} style={{ display: "flex", gap: 16, flexWrap: "wrap", margin: "15px 0 11px 0" }}>
                {block.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt="Instruction visual"
                    style={{
                      display: "block",
                      borderRadius: 8,
                      width: "100%",
                      maxWidth: img.style && img.style.maxWidth ? img.style.maxWidth : 400,
                      boxShadow: "0 1px 6px rgba(20,32,70,.13)",
                    }}
                  />
                ))}
              </div>
            );
          }
          return null;
        })}
      </div>
      <button className="return-option" style={{ marginTop: 28 }} onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
