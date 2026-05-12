function TextBlock() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[50px] not-italic text-[#0a0a0a] text-[20px] top-[916px]" data-name="Text Block">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 w-[380px]">
        <p className="leading-[26px]">Recommendation #1</p>
      </div>
      <p className="font-['Nova_Round:Book',sans-serif] leading-[26px] relative shrink-0 w-[380px]">Use these Nova Round sizes for marketing use: landing pages, presentations, etc.</p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex items-center left-[50px] top-[40px]" data-name="Title">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[20px] whitespace-nowrap">Typography</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Lexend:Regular',sans-serif] font-normal gap-[6px] items-start leading-[66px] left-[580px] text-[#0a0a0a] top-[210px] w-[833px]">
      <p className="relative shrink-0 text-[22px] w-full">The quick brown fox jumps over the lazy dog (1.250rem/22px)</p>
      <p className="relative shrink-0 text-[18px] w-full">The quick brown fox jumps over the lazy dog (1rem/18.00px)</p>
      <p className="relative shrink-0 text-[14px] w-full">The quick brown fox jumps over the lazy dog (0.800rem/14px)</p>
      <p className="relative shrink-0 text-[12px] w-full">The quick brown fox jumps over the lazy dog (0.640rem/12px)</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="4">
      <div className="absolute bg-[#f2f2f0] h-[1080px] left-0 top-0 w-[480px]" />
      <TextBlock />
      <p className="absolute font-['Lexend:Regular',sans-serif] font-normal leading-[66px] left-[580px] text-[#0a0a0a] text-[48px] top-[100px] whitespace-nowrap">Lexend</p>
      <Title />
      <Frame />
    </div>
  );
}