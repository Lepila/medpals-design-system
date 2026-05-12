import svgPaths from "./svg-u79mr2gnkx";

function Title() {
  return (
    <div className="absolute content-stretch flex items-center left-[50px] top-[40px]" data-name="Title">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#18191a] text-[20px] whitespace-nowrap">Logo</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[26.94%_35.47%_60.51%_55.57%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.927 135.505">
        <g id="Group">
          <path d={svgPaths.p334b1e00} id="Vector" stroke="var(--stroke-0, #F1F2F6)" strokeWidth="3" />
          <path d={svgPaths.p3343a800} id="Vector_2" stroke="var(--stroke-0, #F1F2F6)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[996px] top-[202px]">
      <div className="absolute left-[996px] rounded-[20px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] size-[313.439px] top-[202px]" style={{ backgroundImage: "linear-gradient(43.5937deg, rgb(0, 128, 128) 2.4058%, rgb(0, 90, 181) 99.932%)" }} />
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[60.46%_55.52%_26.99%_35.52%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.927 135.505">
        <g id="Group">
          <path d={svgPaths.p229397f0} fill="var(--fill-0, #008080)" id="Vector" />
          <path d={svgPaths.p2bb33bf0} fill="var(--fill-0, #005AB5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[60.46%_35.47%_26.99%_55.57%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.927 135.505">
        <g id="Group">
          <path d={svgPaths.p229397f0} fill="var(--fill-0, #008080)" id="Vector" />
          <path d={svgPaths.p2bb33bf0} fill="var(--fill-0, #005AB5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[26.94%_55.52%_60.51%_35.52%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.927 135.505">
        <g id="Group">
          <path d={svgPaths.p229397f0} fill="var(--fill-0, #F1F2F6)" id="Vector" />
          <path d={svgPaths.p2bb33bf0} fill="var(--fill-0, #F1F2F6)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[611px] top-[202px]">
      <div className="absolute left-[611px] rounded-[20px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] size-[313.439px] top-[202px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 313.44 313.44\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.0000027397 40 -40 -0.0000027397 157 157)\\'><stop stop-color=\\'rgba(0,128,128,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,87,181,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <Group3 />
    </div>
  );
}

export default function BrandGuidelines() {
  return (
    <div className="bg-white relative size-full" data-name="BRAND GUIDELINES">
      <div className="-translate-y-full absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-end leading-[0] left-[50px] text-[#18191a] text-[20px] top-[1030px] w-[380px]">
        <p className="leading-[26px]">Main logo - icon</p>
      </div>
      <Title />
      <div className="absolute bg-[#a7cced] left-[611px] rounded-[20px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] size-[313.439px] top-[564px]" />
      <div className="absolute bg-[#1e192d] left-[996px] rounded-[20px] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] size-[313.439px] top-[564px]" />
      <Group5 />
      <Group1 />
      <Group2 />
      <Group4 />
    </div>
  );
}