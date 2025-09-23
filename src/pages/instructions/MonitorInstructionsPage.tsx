
import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function MonitorInstructionsPage() {
  const monitorBlocks = [
    { type: "title", content: "Single Monitor Return Instructions" },
    { type: "paragraph", content: "1. Unplug and clean your monitor. Remove all cables and accessories." },
    { type: "image", src: "https://lh7-us.googleusercontent.com/1kB5L9EWk1129j2U8GpTs2W6fOIiTXKhPVILJwT13sYSJwoATdB51CGdm4xvWp9w1wiJKMxzzzLg6Rf35ayu0bawrA62JNvlUgpi9jZsVp6tDgHiI1V0s2tl7wGUkmnp7w=w624", style: { maxWidth: 624 } },
    { type: "paragraph", content: "2. Detach the monitor stand/base if possible." },
    { type: "image", src: "https://lh7-us.googleusercontent.com/T-hZSTFxp7nEM7M4jOHvlnJld4xKuw7KICsmDDHHmiqpMNsfGF1trKDX2z4AAEcln0t_QBMup6J4QfA-0-YV8rjfE6g41FnTBGvVtMEqK3h-MkOzTox4yGDiwB1wFOdLcA=w441", style: { maxWidth: 441 } },
    { type: "paragraph", content: "3. Use the original box and foam inserts if available. Otherwise, wrap the monitor securely with bubble wrap." },
    { type: "image", src: "https://lh7-us.googleusercontent.com/f0YFrqh50Exr7kjV8RxaA5u7XdiTGEb4tZXyxtcHx_d0j1O2GeH0BlHyx66r8BdUV6liGUmUV9OMMLqFWQqKPlm5EK6nIlRtANLSI4ehBd4EWUlSDXBUhbvR812NRZt2Ew=w441", style: { maxWidth: 441 } },
    { type: "paragraph", content: "4. Place all cables and small accessories in a clearly labeled bag inside the main box." },
    { type: "paragraph", content: "5. Use extra packing material as needed to ensure there's no movement inside the box." },
    { type: "image", src: "https://lh7-us.googleusercontent.com/P5A44TlwTiCrnMgQ1wCg7uabS02RKwIuDhUILKCqfU26W6AbZ4Wk1_Hw-9Uhxnz3VpH7N12Y1v7Uk2inFoaljTG1qjQcpjXZ2e8HLJMZUzQK1ECvHChIBNJkjmWGBchrcg=w441", style: { maxWidth: 441 } },
    { type: "paragraph", content: "6. Tape the box securely and attach the provided return label over any other labels." },
    { type: "paragraph", content: "7. Drop the box at the designated shipping location or arrange a pickup as instructed." },
    { type: "image", src: "https://lh7-us.googleusercontent.com/ihTQBv2zprmeOxZC1kmEG9YJKisnqLsGAOHak0mw2pqa_6uEFK7W7QZAGQuWR5J4hCBYQnxaXo_2i7dCgYAl8IIWk2F1lxHnRdyKw5fpBxMq7BPB3XV8bQdiP7o9eIlfKWg=w441", style: { maxWidth: 441 } }
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
