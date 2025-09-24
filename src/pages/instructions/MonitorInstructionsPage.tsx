
import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function MonitorInstructionsPage() {
  const monitorBlocks = [
    { type: 'title', content: 'Packing your monitor and laptop box.' },
    { type: 'paragraph', content: '1- Unpack the Box' },
    { type: 'paragraph', content: 'Carefully open the box and remove all contents.' },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfDdz1Yq_tOOD2ak_CXgBpyg0bkvJnkt3k907Uf5Gsz3EfYVMY-xSpj0zsEGbZJjNrjaExrvWKe5UxtSAwf7XMmhX-21vrFV_KIoW_UqfZQZMmzXBIt8NYktWx4PZCrp_A7kViwbodG6YZTu', style: { maxWidth: 268 } },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfCllxL367NVQoAujyV4akXWqWlQywpaniiRLAWWgL1bJXPa-91nepiI1nM3rogPtpGmUhDr4pjkA61fFIIDNdNJB_gvEVnIc9eYqGQZ6jCkqIGgTN_X63BKtxF_3PZr1XKH0459AmBupCRBwaQ', style: { maxWidth: 268 } },
    { type: 'paragraph', content: 'You should find tape, return labels (located inside the smaller box), and bubble wrap' },
    { type: 'paragraph', content: '2- Prepare the Insert' },
    { type: 'paragraph', content: 'Open the monitor/laptop insert and trim it to fit the size of your monitor.' },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfDKBVsSfGKpHo4htD0SnTgnMn3xXxqzZ8IrnQ1LURzlrY1OhbSMjiAuZhVTdf-HsWYhKZVp3aM0JttkSb1kPZQ9UL9rVnCOwqA_a6BtQ8778k70cmev1wXlx-mLbnjTZWlhvtNxDFrAqSTW5z0', style: { maxWidth: 302 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfCI41CeSFTYgGZWSEQLlLmoBsdIZJfgdRLuc70SR6tG4lXn77dA6IgUwZxoBSbmeXezmUzBNbKtATrpXACHSkkgP4eHlkGKk24aUAOrzJH55ssSl32s7jMdhfvQ_vpfVtNzcgMUDU_vidl4dOk', style: { maxWidth: 301 } },
    ] },
    { type: 'paragraph', content: '3- Prepare the Monitor' },
    { type: 'paragraph', content: 'Detach the stand from the monitor and place the monitor securely inside the insert.' },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfB81WZ9B71vjgUrwTO1aITlh_gF1B92R-slS-ce4Ng1OfHm5n38eRq1nzfX1VCcQ46al2eZwN_Q7A18TURgmSxQ9wG-shzb5qYuhrhovXpYoKOvtu2IAYNXJxxkKFKsRCMWlLWY_W45TLEr-oo', style: { maxWidth: 272 } },
    { type: 'paragraph', content: '4- (If Returning a Laptop)' },
    { type: 'paragraph', content: 'If you are returning a laptop in addition to the monitor, flip the insert to the other side and place the laptop box in the back.' },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfAB8auivRjQTO6bqhdpcU1PweJK8jzOIrALidHPf335PNcOgpIgN-HK5g1lJJtTrFNRFJobS_gWj5j6tCIlGCmdlDWwGGL16eDGJrYKxRWHEDcAuT21oojgW1WofPK-OjK0AVfuu1oRPk6z', style: { maxWidth: 293 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfBWqPegi-ZU_eTG0yZIc2ZIDM_ol8YWrH2WQq_cLcEq-BT_ZO3szswhROuEmAlL891bow6JgQRlrs5r8AC5SIIJm_buP-JmwQ_xmmMN6TWk8QYWtqbPCozb0YQ9UHwj81xvgxRAwthJyKIyyBI', style: { maxWidth: 293 } },
    ] },
    { type: 'paragraph', content: '5- Detach Monitor Base' },
    { type: 'paragraph', content: 'Detach the monitor base from the arm.' },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfBWy3321BUQ6r_bS73IeK1-S-A3V6pvlve9XXeOG-9USvxuhkKqauB073OznQTSWSrPWhHDkkeSFX4u2VZD_pTbFp3JsS-IwXe8LnGlKiMaQQl6P3YEKeJextXIoS_ndXPXlo91Mi1FSy2OyPg', style: { maxWidth: 278 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfCyji8xughCPAT-Ng53hmsguuo_7tsCHaEQAh5xigi5jJkUsE8JWbYcjUYQSTLXXyqPYZ59_B8qTDiNueZfOylzL_xfbrX0JhiNFbT2XCdK3KGofMmXasWuooQSFhWHJs2nhEP8YLR8D5QG8NQ', style: { maxWidth: 278 } },
    ] },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfBOk7Ed9iXX2RL1Y1c4b8KVI7Vc6gfQt49YYV6CnIEdmPiI0hfJsvJ7St8zWcjHZ9iJCrbRNgmmBJ0unNr2traFqtN14PIZbEvf9YbBhI7940WRrXalytjtJ1A78wjaEpQVST7T6Nv6oVPM', style: { maxWidth: 240 } },
    { type: 'paragraph', content: '6- Pack Accessories' },
    { type: 'paragraph', content: 'Place the separated parts, along with any additional items you are returning (such as cables or adapters), into the extra box provided in the kit. Use the provided bubble wrap to protect the items and fill any empty spaces.' },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfAKtKYNTjJG0w2xPYFv9r29T7BFVdw75k4uY-rjKDJzc4UUYi0K64NvLEId0KXFIY33E0T0DiDlhF1KlWN8GFbo43EbK3i9aS3AuLCN1uY9DDbUWnCPZYgLfwYuquctde4', style: { maxWidth: 266 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfCsQlbZmfoAL14PTbleboObFF6LjXP0AHzNV9Zot9vlpfOdR5FzZ46XhNV3WLV7BFu5nBAZx_aq3sxw9SboOcQdCZd4eXzUFHceyaa8oMwgojSbG3bMIkU6th2IMhWGKZpYPXghXwnAjT-UHeA', style: { maxWidth: 265 } },
    ] },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfAShokV1Qf-a_CHyYEvsu3qJEFe2SX6XhhrMhvFORYqaCTcibVOFNPopNyozO-iuB8gOUUO81J-DDbtDZn5btn08mAAvs3TyO_FMZDWH849FfrMVfOHixEXIiBZLbw2U_hKNd6BwYdiD79K4og', style: { maxWidth: 278 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfA1k9BZzpDwgZzwGiFWU1nt7BElQa8JZBgJ-xCz-wRn25TMr6mPBrD_MJGLMXRqNP7vulnsizNzljLvUJNbel2bUeVimKpY-zFxqUJu86h1JiRCGiJb44TQqcjQnL-zF_1DbOoA6hqs2LQGGJY', style: { maxWidth: 279 } },
    ] },
    { type: 'paragraph', content: '7- Finalize Packing' },
    { type: 'paragraph', content: 'Place all packed items in the overpack carton.' },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfAwBULiNKaEo88B9AKY7u0BQS04AysF0UAI97dg7Xp_QkIJ_dp22yy1zOkG7cWDiqtZQYYoZcpqoebfIoDj_cFQCKR0rDqDRNd8NpXni-WDtkTZtKK8SNp37hOUU5zvehdrMsEuOLiBvyMYZao', style: { maxWidth: 279 } },
    { type: 'paragraph', content: '8- Seal and Label' },
    { type: 'paragraph', content: 'Use the provided tape to securely close the box. Affix the return labels to the outside of the box.' },
    { type: 'paragraph', content: 'Your return is now complete!' },
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
            const stepTitles = [
              'Unpack the Box',
              'Prepare the Insert',
              'Prepare the Monitor',
              '(If Returning a Laptop)',
              'Detach Monitor Base',
              'Pack Accessories',
              'Finalize Packing',
              'Seal and Label',
            ];
            // Bold any paragraph matching full step title (with or without number prefix)
            let matchedStepTitle = null;
            for (const title of stepTitles) {
              // Match titles with number (e.g., '1- Unpack the Box') or standalone
              if (block.content.includes(title)) {
                matchedStepTitle = title;
                break;
              }
            }
            if (matchedStepTitle) {
              return (
                <div key={idx} style={{ fontSize: 18, margin: '17px 0 7px 0', color: '#222' }}>
                  <b>{block.content}</b>
                </div>
              );
            }
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
          if (block.type === 'image-group') {
            return (
              <div key={idx} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', margin: '18px 0 12px 0' }}>
                {block.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt="monitor_instructions_grouped"
                    style={{
                      display: 'block',
                      borderRadius: 8,
                      width: '100%',
                      maxWidth: img.style && img.style.maxWidth ? img.style.maxWidth : 400,
                      boxShadow: '0 1px 6px rgba(20,32,70,.13)'
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
