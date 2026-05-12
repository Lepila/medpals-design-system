function TextBlock() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[0] left-[50px] text-[#17354f] text-[20px] top-[942px]" data-name="Text Block">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-end relative shrink-0 w-[380px]">
        <p className="leading-[26px]">Recommendation #1</p>
      </div>
      <div className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">
        <p className="leading-[26px] mb-0 whitespace-pre">{`Use these colors as lead `}</p>
        <p className="leading-[26px] whitespace-pre">brand colors for marketing.</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex items-center left-[50px] top-[40px]" data-name="Title">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#17354f] text-[20px] whitespace-nowrap">Primary colors</p>
    </div>
  );
}

export default function BrandGuidelines() {
  return (
    <div className="bg-white relative size-full" data-name="BRAND GUIDELINES">
      <div className="absolute bg-[#1e192d] h-[196px] left-[1225px] top-[442px] w-[645px]" />
      <div className="absolute bg-[#f1f2f6] h-[196px] left-[1225px] top-[638px] w-[645px]" />
      <div className="absolute bg-white border border-black border-solid h-[196px] left-[1225px] top-[834px] w-[645px]" />
      <div className="absolute h-[1080px] left-0 top-0 w-[480px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 1080">
          <path d="M480 0H0V1080H480V0Z" fill="var(--fill-0, #F2F2F0)" id="Rectangle 3183" />
        </svg>
      </div>
      <TextBlock />
      <Title />
      <div className="absolute h-[980px] left-[530px] top-[50px] w-[650px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 650 980">
          <path d="M0 0H650V980H0V0Z" fill="var(--fill-0, #005AB5)" id="Rectangle 3297" />
        </svg>
      </div>
      <div className="absolute bg-[#008080] h-[196px] left-[1225px] top-[50px] w-[645px]" />
      <div className="absolute bg-[#a7cced] h-[196px] left-[1225px] top-[246px] w-[645px]" />
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[0] left-[580px] text-[20px] text-white top-[100px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">Denim</p>
        <p className="leading-[26px]">#005AB5</p>
      </div>
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[0] left-[1275px] text-[20px] text-white top-[100px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">Teal</p>
        <p className="leading-[26px]">#008080</p>
      </div>
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[0] left-[1275px] text-[#1e192d] text-[20px] top-[296px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">Uranian Blue</p>
        <p className="leading-[26px]">#A7CCED</p>
      </div>
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[0] left-[1265px] text-[#17354f] text-[20px] top-[671px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">Anti-flash White</p>
        <p className="leading-[26px]">#F1F2F6</p>
      </div>
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[0] left-[1265px] text-[#17354f] text-[20px] top-[859px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">White</p>
        <p className="leading-[26px]">#FFFFFF</p>
      </div>
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[0] left-[1275px] text-[#f1f2f6] text-[20px] top-[492px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">Dark Purple</p>
        <p className="leading-[26px]">#FFFFFF</p>
      </div>
    </div>
  );
}