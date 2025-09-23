
import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

  const navigate = useNavigate();

  // Images taken directly from the Google Doc HTML export
  const stepImages = [
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdEuJhvIN6Ho6FSU-dAkL0whoH9yPniaVLYEWSlbzUpJlzrmyeCUTylgj0N35wweBIfgACdPfjoX_zNpYqyIAywpNYSeuGI6Saajtlk0qry7TiuxhjBjVHnE7dj2WKS7kZ_l0cg?key=mctFDgD6vLorRwTP2I4PnQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfEnBXWvH1JP8Yia48B4aAW2PKSB9dWg-IK469OMuSCZz43EgskURaoQCWWB-gvIGQcdoFL8luBFMndLjhEHyK8DV6sTurRvHBinVmSR1rYlyX_9U_p0OGM1bj5m_yC_QdDyLUL0w?key=mctFDgD6vLorRwTP2I4PnQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeduAhdsWbWWorBJa_5amIGlXLNa4Rj8x6dLVy-JKzdvHwnD_oZs3sn5wnLiM1cuez380_bPeaDQbNzxgTE3TsnrLkJh_zJtWIOv5dF60VxgrEC3OnECDj_lKAAxbvPavMDQMhjRw?key=mctFDgD6vLorRwTP2I4PnQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLYeYLUsqGe-2MB3ijoIUPFL12tjeywv_vaHfrKpZs9ksLlc94OyR4HHVo0rsObe9PTYug5mHoB4gc3DI2aV21eJNLO_hRe9nbPkmPa_JICiZuimSWR0vRraeKscUNkcoKKuxF?key=mctFDgD6vLorRwTP2I4PnQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc9YX11U6A3FftWTCJa8Zoc1OHHSbJwIA4UMUqIvvunNHJx8z4Lg5vpcfM1S9qiyyDbgZ2qPs6-mJSYbo9VLTd4agM0Jh3yZYi1jY6jTlN-gBiHJub6yiq3eBdo8V22QamXqqQSmw?key=mctFDgD6vLorRwTP2I4PnQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeiOlQ-lGhWz4DM6FHFjWjgS_M2W3vQIgIryvlno1wAjb4XuJR73HNhdP1stE8hPNWG7wS8sQ1cECACiYOmAZ6PaXwzmAoIdnONvrc-BL0A9wwekwGEXR1rw9uFbZ9rVJR3bx97iQ?key=mctFDgD6vLorRwTP2I4PnQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeyHfGQHtEYx0Ba1xBbNYNADqwhLtex2a6ePWHXaSH7BDTcmD3PV9t1KOxEsUywpfwNaEj44BLsnaVdBIvrnUhezEynQi4M6ux1Y1D-h5inHKYYz3hfk3n3PFLIx4ZrSYFKN4cN?key=mctFDgD6vLorRwTP2I4PnQ",
    "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeXap5Wml2NG4DWEnFG31REXbnJqR4wtRe1beEIVzDUMB305ahAvxziG7mAhIbAJoBN7ARdW3abo-v_ho_GTEfvbTAUUfOkNL8Fb_Ab5cDogD4xrk165V4a1EiDKlFppJInws3TnA?key=mctFDgD6vLorRwTP2I4PnQ",
  ];
  const steps = [
    "1. Please remove the 4 corner foam protectors from the box. Please set them aside as they will be reused later. Do not remove the inner box, and open the flaps.",
    "2. Wrap your tower with the included bubble wrap and place it inside the inner box. It should fit snugly. If it's too tight remove one section of bubble wrap at a time and reinsert into the inner box.",
    "3. Tape the inner box closed with one of the included pieces of tape.",
    "4. Reinsert the foam corner blocks. It'll be a tight fit.",
    "5. Use one of the of the included tape strips to hold the two outer two flaps together.",
    "6. Use the other six tape strips to securely close the box the rest of the way by using two overlapping strips of tape on each flap and two overlapping strips of tape down the center to finish sealing the box. Overlap the tape as seen below.",
    "7. Repeat on the other flap and down the middle.",
    "8. Attach the return label over the top of the inbound label.",
  ];
  const supportingText = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "Please reach out with any questions or if you're ready for us to schedule a courier pickup.",
  ];
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>Desktop Return Instructions</h1>
      <div className="google-doc-section" style={{ width: '100%', maxWidth: 670, margin: '0 auto', textAlign: "left" }}>
        <h2 style={{ fontSize: 23, fontWeight: "bold", marginBottom: 18 }}>Packaging Your Full Size Desktop</h2>
        <ol style={{ paddingLeft: 22, fontSize: 18, lineHeight: 1.65, margin: 0 }}>
          {steps.map((step, idx) => (
            <li style={{ marginBottom: 29, fontWeight: 400, color: '#19263d' }} key={idx}>
              <div>{step}</div>
              {stepImages[idx] ? (
                <img
                  src={stepImages[idx]}
                  alt={`Packing step ${idx + 1}`}
                  style={{
                    margin: "18px 0 9px 0",
                    borderRadius: 8,
                    maxWidth: idx === 1 ? 340 : idx === 3 ? 340 : idx === 4 ? 360 : idx === 6 ? 390 : idx === 7 ? 336 : 520,
                    width: "100%",
                    boxShadow: "0 1px 6px rgba(20,32,70,.13)",
                  }}
                />
              ) : null}
              {supportingText[idx] ? (
                <div style={{ marginTop: 13, fontWeight: 600, color: '#444', fontSize: 17 }}>{supportingText[idx]}</div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
      <button className="return-option" onClick={() => navigate("/")}>Back to Instructions</button>
    </div>
  );
}
