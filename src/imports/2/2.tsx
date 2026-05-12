function TextBlock() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[50px] text-[#0a0a0a] text-[20px] top-[942px]" data-name="Text Block">
      <div className="flex flex-col font-['Rubik:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 w-[380px]">
        <p className="leading-[26px]">Recommendation #1</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 w-[380px]">Use these Inter sizes for marketing use: landing pages, presentations, etc.</p>
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

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="2">
      <div className="absolute bg-[#f2f2f0] h-[1080px] left-0 top-0 w-[480px]" />
      <TextBlock />
      <Title />
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[580px] text-[#0a0a0a] text-[31.1px] top-[-116px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (1.728rem/31.10px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[580px] text-[#0a0a0a] text-[37.32px] top-[-188px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (2.074rem/37.32px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[580px] text-[#0a0a0a] text-[44.79px] top-[-260px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (2.488rem/44.79px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[580px] text-[#0a0a0a] text-[53.75px] top-[-332px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (2.986rem/53.75px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[18px] top-[631px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (1rem/18.00px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[22px] top-[548px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (1.200rem/22px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[26px] top-[465px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (1.440rem/26px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[31px] top-[382px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (1.728rem/31px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[37px] top-[299px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (2.074rem/37px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[45px] top-[216px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (2.488rem/45px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[45px] top-[92px] whitespace-nowrap">Manrope</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[15px] top-[714px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (0.833rem/15px)</p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[66px] left-[559px] text-[#0a0a0a] text-[12px] top-[797px] whitespace-nowrap">The quick brown fox jumps over the lazy dog (0.694rem/12px)</p>
    </div>
  );
}