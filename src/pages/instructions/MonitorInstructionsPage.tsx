
import { useNavigate } from "react-router-dom";
import LogoButton from "../../shared/LogoButton";
import "../../App.css";

export default function MonitorInstructionsPage() {
  document.title = "Return Instructions";
  const monitorBlocks = [
    { type: 'title', content: 'Packing your monitor and laptop box.' },
    { type: 'paragraph', content: '1- Unpack the Box' },
    { type: 'paragraph', content: 'Carefully open the box and remove all contents.' },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXe3JIrkjmCawjCM37BEeiDPmcz8MxG18122tXlG-R-uKTwH1S30KUC1AvZPW-mm9v1J1NRhiUu20CB-9PTZwN7SfYobpfyRTQrMiN4ll7SK8_QrgR_94rsMBOxZZQ6i5yiLfFah?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 268 } },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXd06mQ1nOFi23nAD-sKV_78qDvUHdoej3jeyzJwDqTHKBKO8PYRpeVAorWpFh9yN8a8MpFxQs3_bzNVpM6cFH9fnNJpozYJu5T3PeermAjnmu0GCHE_R9vzaH7JFPBLPhEEowBaRA?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 268 } },
    { type: 'paragraph', content: 'You should find tape, return labels (located inside the smaller box), and bubble wrap' },
    { type: 'paragraph', content: '2- Prepare the Insert' },
    { type: 'paragraph', content: 'Open the monitor/laptop insert and trim it to fit the size of your monitor.' },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXc_QwSIXw4EueFQoNmgkR4iekoM84uJCr5I6CNijCjbw4JRJTBiwEYNHCCPl7jTWhFh8pdp8lPrwfPkKj137w9kiiqRmGlCSSjmb5Y06FJyaA2UHPB7jKgdkBO3tumBszKfpL1BDw?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 302 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcJ3X9HvSL_OXSWrLjpXYvm3OkwUh1sbnarf24-AOnhJYHNVsigCtYZu8dOQUHqJwTjoUekkeqI74iDyIfu5WAIIw7590jpS98mSOSdQQIqTNEh9UqcHaS9glnoq6UxgVDkFeGZqQ?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 301 } },
    ] },
    { type: 'paragraph', content: '3- Prepare the Monitor' },
    { type: 'paragraph', content: 'Detach the stand from the monitor and place the monitor securely inside the insert.' },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXc3YmtBXBdUwXCUb959LtdBT5_Epn-g2FfEMduLolQ9XDf0xZJI-Izr44CiHp71VPlZJKEdBXsNOgmDzPZ6Z4whWTajl7t9l7KgKFdr6x-s1JXMuv8c2U7riAWjWnNWEDuX0Zujbw?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 272 } },
    { type: 'paragraph', content: '4- (If Returning a Laptop)' },
    { type: 'paragraph', content: 'If you are returning a laptop in addition to the monitor, flip the insert to the other side and place the laptop box in the back.' },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXegmdnyb4vqEkA_jPCS3lZeuKL6LK3TGw1pre_DfZl-3N5_nxLh9zCE9XLa2M1ixRhQ_2FTaBdfHIbcwqDpymGyy8mEH51ranrRp1F4u_SleaoMkDjjAKyWXa_lTCaefmQLC3pS?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 293 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcx4vUC4CBjHbvpTzDMqNpng_Ym0OBnWhcuRcY4FRfm3iYCN0qRWTPCTdwsWZ7oTYVfilJ2sfJnZYjTuauX6zllhjqh2VyUQkFT6rcA-JJd6SGjmrDsWQB51I7_8I0rCSHZBoQp0A?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 293 } },
    ] },
    { type: 'paragraph', content: '5- Detach Monitor Base' },
    { type: 'paragraph', content: 'Detach the monitor base from the arm.' },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXc4y7tuK2AzRSNx_Ih7Ioue1YtzJwT2VtHGYctSS7R_bPXQzvbdjiu5Ap6nxdAHVTyXtKBs_Fj5btmR_LaA5ZSLAB9SgvQpSYAS5f1j5PsGMqilaMk55DUjSyn2o_pEY3rRYqKewg?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 278 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcNgftWYBXSzuDsZ3x7zH9Wyd_w7wh9IHwpcyFIvang0gg9kLE-lcTJ6-2PR-JRYPucJjQoCY8n6qbWzRKz7tckTNAQrGto94Oi7rr_eRvZ81Uem4q4KqYAgVRzBs39AXPsil3NXw?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 278 } },
    ] },
    { type: 'paragraph', content: '6- Pack Accessories' },
    { type: 'paragraph', content: 'Place the separated parts, along with any additional items you are returning (such as cables or adapters), into the extra box provided in the kit. Use the provided bubble wrap to protect the items and fill any empty spaces.' },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvSlWQDGIyJiOnBERWl0ipRNkerW-8ofyZALV2-5AKOa0vN8xH2y10sjCdq4i3_Ls914t8-nTDi2XOJa-rpGIgUoB9QuVyxROpd9Vq0bz-Jn6mcsoNB-Kge9KDyDHWssh6ybGvyA?key=y7SfZ1HMZRkm8gyOEIZGqA', style: { maxWidth: 240 } },
    { type: 'paragraph', content: '6- Pack Accessories' },
    { type: 'paragraph', content: 'Place the separated parts, along with any additional items you are returning (such as cables or adapters), into the extra box provided in the kit. Use the provided bubble wrap to protect the items and fill any empty spaces.' },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfAKtKYNTjJG0w2xPYFv9r29T7BFVdw75k4uY-rjKDJzc4UUYi0K64NvLEId0KXFIY33E0T0DiDlhF1KlWN8GFbo43EbK3i9aS3AuLCN1uY9DDbUWnCPZYgLfwYuquctde4', style: { maxWidth: 266 } },
    ] },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfCsQlbZmfoAL14PTbleboObFF6LjXP0AHzNV9Zot9vlpfOdR5FzZ46XhNV3WLV7BFu5nBAZx_aq3sxw9SboOcQdCZd4eXzUFHceyaa8oMwgojSbG3bMIkU6th2IMhWGKZpYPXghXwnAjT-UHeA', style: { maxWidth: 265 } },
    { type: 'image-group', images: [
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfAShokV1Qf-a_CHyYEvsu3qJEFe2SX6XhhrMhvFORYqaCTcibVOFNPopNyozO-iuB8gOUUO81J-DDbtDZn5btn08mAAvs3TyO_FMZDWH849FfrMVfOHixEXIiBZLbw2U_hKNd6BwYdiD79K4og', style: { maxWidth: 278 } },
      { src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfA1k9BZzpDwgZzwGiFWU1nt7BElQa8JZBgJ-xCz-wRn25TMr6mPBrD_MJGLMXRqNP7vulnsizNzljLvUJNbel2bUeVimKpY-zFxqUJu86h1JiRCGiJb44TQqcjQnL-zF_1DbOoA6hqs2LQGGJY', style: { maxWidth: 279 } },
    ] },
    { type: 'paragraph', content: '7- Finalize Packing' },
    { type: 'paragraph', content: 'Place all packed items in the overpack carton.' },
    { type: 'image', src: 'https://lh7-rt.googleusercontent.com/docsd/ANYlcfAwBULiNKaEo88B9AKY7u0BQS04AysF0UAI97dg7Xp_QkIJ_dp22yy1zOkG7cWDiqtZQYYoZcpqoebfIoDj_cFQCKR0rDqDRNd8NpXni-WDtkTZtKK8SNp37hOUU5zvehdrMsEuOLiBvyMYZao', style: { maxWidth: 279 } },
    { type: 'paragraph', content: '8- Seal and Label' },
    { type: 'paragraph', content: 'Use the provided tape to securely close the box. Affix the return labels to the outside of the box.' },
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
