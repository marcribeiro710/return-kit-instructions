
import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function MonitorInstructionsPage() {
  const monitorBlocks = [
    { type: "title", content: "Single Monitor Return Instructions" },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeTwD8HNsIEGopL_NTwttvJ09sM9pLqv-txVCuU1Zt5iCEzBuYfqzM-Qo2v7BEd0VZTYt36Fr_OSKurAwMS6AlhExWUlN4EKGWjrxugQooMSqs0BppMJnGfbUY9sLVrHJHZYKdT?key=2Nw8X9s7WldysDyqAkD7pg", style: { maxWidth: 441 } },
    { type: "paragraph", content: "1. Unplug the monitor from power and detach all cables." },
    { type: "paragraph", content: "2. Remove the stand/base from the monitor if detachable." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXelP4U_rKAw_UzmFEZWFbfkHheXl2zR_z_fyTtBa5po8g04SsvyNlP3uK5cI-eY_BvgLyGSVaZUGroO80TrQigzslVby4kxHw5NZXoOLHw7u7s3Tj6WZRwPgzxkEN41rgRkE7sl?key=2Nw8X9s7WldysDyqAkD7pg", style: { maxWidth: 441 } },
    { type: "paragraph", content: "3. If you have the original box, place the monitor face down surrounded by foam or the original inserts. Otherwise, generously wrap the monitor in bubble wrap and place it in a sturdy shipping box." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdhaHNIMdrYLDLZ_b-oySwj7hZueRfAJhcQXDpZHjtA7_IZAopnKEnvTg42yx4xvlozMfQIgFZEM_WH1wsLnwYaKWefsfpwMa6RLa2FQ1lhxRmTHBXDfMSOi1Tgnwntq-ydA2sh?key=2Nw8X9s7WldysDyqAkD7pg", style: { maxWidth: 441 } },
    { type: "paragraph", content: "4. Place cables and accessories in a smaller bag or box, and secure it inside the main shipping box (not loose)." },
    { type: "paragraph", content: "5. Fill any extra space around the monitor with soft packing material to prevent movement during shipping." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXegaUmPu8WkeAh_H9YG1aJd5Qn0ioKIAiEqepROx8Y2wZtzp-d44quqXzmWQ6dHcSvhvEKXxtPXuAlqujZsz2rfZIQ9vdwHzPX8ny6Qv1zDFCBzTLMjl72bLoPQSHypD0mjL_KR?key=2Nw8X9s7WldysDyqAkD7pg", style: { maxWidth: 441 } },
    { type: "paragraph", content: "6. Tape the box securely and attach the included return shipping label over any old labels." },
    { type: "paragraph", content: "7. Drop off the package at the designated shipping location or schedule a pickup." },
    { type: "image", src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeXsLZyGMd49amdaZK2FytIhO2yFL7TYOLqKWKBtBSUuGQZyvPvUlQ7sfeAd7ThJkqPZaeXk2tEYZ1PdHljkzFQKywqSSMToWyxk6musNPaKFp-4g2fvQnsG8U8KuclUAdJVFlc?key=2Nw8X9s7WldysDyqAkD7pg", style: { maxWidth: 441 } }
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
