
import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function MonitorInstructionsPage() {
  const monitorBlocks = [
    { type: "title", content: "Single Monitor Return Instructions" },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfCVpAhqYbr3BPnwO7P3YqKYAx5eVvku_dXoft7aMY2MB-0a4-IMz_GYgOow_bWCWn6jf1Q_sr27AOknx91coLNSh25FdJCPIkktcOKXd2u8N9MLpNFtIV3VE8aV0W1EBgJsic1TWG0gzFff", style: { maxWidth: 268 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfC0YokIUv0-DQaYSL2tFpyRKaw24WE4bS5feneTTH5b7AV_bgqFrCdl37qOGxrxc7nkEpUqK4Q8L2IinoU6v4Ydk9HgpObjfODRam72HKNwK0iEBXGvJ8yU8mi5FuwS8FNnXgcdJzdHpT1d0Xc", style: { maxWidth: 268 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfDKBVsSfGKpHo4htD0SnTgnMn3xXxqzZ8IrnQ1LURzlrY1OhbSMjiAuZhVTdf-HsWYhKZVp3aM0JttkSb1kPZQ9UL9rVnCOwqA_a6BtQ8778k70cmev1wXlx-mLbnjTZWlhvtNxDFrAqSTW5z0", style: { maxWidth: 302 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfCI41CeSFTYgGZWSEQLlLmoBsdIZJfgdRLuc70SR6tG4lXn77dA6IgUwZxoBSbmeXezmUzBNbKtATrpXACHSkkgP4eHlkGKk24aUAOrzJH55ssSl32s7jMdhfvQ_vpfVtNzcgMUDU_vidl4dOk", style: { maxWidth: 301 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfBeFv_YfEl6rg4J-A5ZVtHsTFJFlyCrsNhXJxy_yyp1WMeOzuOgGNZENA2c9pAdzvewF0qhNRX0z5w35iG9kSlDN5d0sLXNHwWFjuY9wGIOhhpFTrng2AUMGIpkB3raJQFGJzYErvWfTbX63yQ", style: { maxWidth: 272 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfAB8auivRjQTO6bqhdpcU1PweJK8jzOIrALidHPf335PNcOgpIgN-HK5g1lJJtTrFNRFJobS_gWj5j6tCIlGCmdlDWwGGL16eDGJrYKxRWHEDcAuT21oojgW1WofPK-OjK0AVfuu1oRPk6z", style: { maxWidth: 293 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfBWqPegi-ZU_eTG0yZIc2ZIDM_ol8YWrH2WQq_cLcEq-BT_ZO3szswhROuEmAlL891bow6JgQRlrs5r8AC5SIIJm_buP-JmwQ_xmmMN6TWk8QYWtqbPCozb0YQ9UHwj81xvgxRAwthJyKIyyBI", style: { maxWidth: 293 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfBWy3321BUQ6r_bS73IeK1-S-A3V6pvlve9XXeOG-9USvxuhkKqauB073OznQTSWSrPWhHDkkeSFX4u2VZD_pTbFp3JsS-IwXe8LnGlKiMaQQl6P3YEKeJextXIoS_ndXPXlo91Mi1FSy2OyPg", style: { maxWidth: 278 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfCyji8xughCPAT-Ng53hmsguuo_7tsCHaEQAh5xigi5jJkUsE8JWbYcjUYQSTLXXyqPYZ59_B8qTDiNueZfOylzL_xfbrX0JhiNFbT2XCdK3KGofMmXasWuooQSFhWHJs2nhEP8YLR8D5QG8NQ", style: { maxWidth: 278 } },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsd/ANYlcfAp38iwY4v2D40wB1fmqtVef4CuK0QOCO2OwJAsW3DWJukO5irTRzLIdNc6fgpgUembZP1-Iqs_qdlM1mmN8GXl9LZaBYMcD_jTgmHI3WzARL3Qzp-xbkX3QESra57ORKW71phah6dHOAvG", style: { maxWidth: 240 } },
  ];
  const navigate = useNavigate();
  return (
    <div className="welcome-root">
      <LogoButton isStatic size={376} style={{ marginBottom: 13, display: 'block' }} />
      <h1 className="welcome-title" style={{ marginBottom: 31 }}>Single Monitor Return Instructions</h1>
      <div className="google-doc-section" style={{ width: '100%', maxWidth: 520, margin: '0 auto', textAlign: 'left' }}>
        {monitorBlocks.map((block, idx) => {
          if (block.type === 'title') {
            return (
              <h2 key={idx} style={{ fontWeight: 700, fontSize: 24, margin: '26px 0 18px 0', color: '#235' }}>{block.content}</h2>
            );
          }
          if (block.type === 'paragraph') {
            return (
              <div key={idx} style={{ fontSize: 18, margin: '17px 0 7px 0', color: '#222' }}>{block.content}</div>
            );
          }
          if (block.type === 'image') {
            return (
              <img
                key={idx}
                src={block.src}
                alt="monitor_instructions_step"
                style={{
                  display: 'block',
                  margin: '18px 0 12px 0',
                  borderRadius: 8,
                  width: '100%',
                  maxWidth: block.style && block.style.maxWidth ? block.style.maxWidth : 520,
                  boxShadow: '0 1px 6px rgba(20,32,70,.13)'
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
