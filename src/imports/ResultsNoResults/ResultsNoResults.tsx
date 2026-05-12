import svgPaths from "./svg-gthl1iukgf";

function Notch() {
  return (
    <div className="-translate-x-1/2 absolute h-[32px] left-[calc(50%+0.5px)] top-[-2px] w-[164px]" data-name="Notch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 32">
        <g id="Notch">
          <g id="Notch_2">
            <path d={svgPaths.p3b40e580} fill="black" />
            <path d={svgPaths.p3f2f4600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p27a68100} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(16.67%-10.5px)] top-[14px]" data-name="Left Side">
      <div className="-translate-x-1/2 absolute h-[21px] left-[calc(16.67%-10.5px)] rounded-[24px] top-[14px] w-[54px]" data-name="_StatusBar-time">
        <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-black text-center top-px tracking-[-0.408px] w-[54px]">9:41</p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="-translate-x-1/2 absolute h-[13px] left-[calc(83.33%+0.2px)] top-[19px] w-[77.401px]" data-name="Right Side">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.4012 13">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p2646e000} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="1.05509" />
            <path d={svgPaths.p4c0c710} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
            <path d={svgPaths.p22239c00} fill="var(--fill-0, black)" id="Fill" />
          </g>
          <path d={svgPaths.p16893900} fill="var(--fill-0, black)" id="Wifi" />
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p16816b00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p18ef7a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2262f080} fill="var(--fill-0, black)" />
            <path d={svgPaths.pc5da680} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[47px] left-1/2 overflow-clip top-0 w-[375px]" data-name="StatusBar / iPhone 15">
      <Notch />
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <mask height="24" id="mask0_2_222" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_222)">
            <path d={svgPaths.pc423380} fill="var(--fill-0, #494A4D)" id="search_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[49px] items-center justify-between min-w-px pt-[8px] relative" data-name="item">
      <Search />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#494a4d] text-[14px] text-center whitespace-nowrap">Search</p>
    </div>
  );
}

function Pill() {
  return (
    <div className="relative size-[24px]" data-name="pill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pill">
          <mask height="24" id="mask0_2_193" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_193)">
            <path d={svgPaths.p20e2ed00} fill="var(--fill-0, #005AB5)" id="pill_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[49px] items-center min-w-px pt-[8px] relative" data-name="item">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Pill />
        </div>
      </div>
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#005ab5] text-[13px] text-center whitespace-nowrap">
        Medication
        <br aria-hidden="true" />
        Tracker
      </p>
    </div>
  );
}

function AccountCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="account_circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="account_circle">
          <mask height="24" id="mask0_2_218" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_218)">
            <path d={svgPaths.p8ea680} fill="var(--fill-0, #494A4D)" id="account_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[49px] items-center justify-between min-w-px pt-[8px] relative" data-name="item">
      <AccountCircle />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666] text-[13px] text-center whitespace-nowrap">Profil</p>
    </div>
  );
}

function Atr() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="atr">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="atr">
          <mask height="24" id="mask0_2_203" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_203)">
            <path d={svgPaths.ped4a800} fill="var(--fill-0, #494A4D)" id="atr_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[49px] items-center justify-between min-w-px pt-[8px] relative" data-name="item">
      <Atr />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#666] text-[13px] text-center whitespace-nowrap">Community</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="tabs">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-start justify-center px-[12px] relative size-full">
          <Item />
          <Item1 />
          <Item2 />
          <Item3 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch drop-shadow-[-1px_-2px_15.25px_rgba(0,0,0,0.1)] flex flex-col items-start left-1/2 w-[375px]">
      <Tabs />
      <div className="bg-white h-[34px] relative shrink-0 w-full" data-name="HomeIndicator">
        <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex h-[52px] items-center min-h-[24px] min-w-[24px] overflow-clip py-[16px] relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[15px] text-black tracking-[0.15px]">Lev</p>
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="absolute bg-white content-stretch flex h-[2px] items-center left-[12px] px-[4px] top-0" data-name="Label Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#005ab5] text-[14px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[12px]">Medication Name</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="h-[52px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#005ab5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Content />
        <LabelContainer />
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[129px] w-[327px]" data-name="<TextField>">
      <Input />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[24px] top-[129px]">
      <TextField />
    </div>
  );
}

function AddAPhoto() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add_a_photo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add_a_photo">
          <mask height="24" id="mask0_2_189" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_189)">
            <path d={svgPaths.p1887e200} fill="var(--fill-0, #008080)" id="add_a_photo_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <AddAPhoto />
      <div className="font-['Manrope:Regular',sans-serif] font-normal h-[20px] leading-[0] relative shrink-0 text-[#008080] text-[14px] tracking-[0.17px] w-[251px]">
        <p className="leading-[1.43] mb-0">Take or upload a picture instead.</p>
        <p className="leading-[1.43]">​</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] p-[10px] top-[187px] w-[347px]">
      <Frame1 />
    </div>
  );
}

function ListItemText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black tracking-[0.15px] w-full">Levetiracetam</p>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add_2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add_2">
          <mask height="24" id="mask0_2_207" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_207)">
            <path d={svgPaths.p3ad56700} fill="var(--fill-0, #008080)" id="add_2_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Add />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <ListItemText />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function MinHeight() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #3">
      <Container />
      <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
        <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
            <MinHeight />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F6)" x2="326" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItemText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[4px] relative" data-name="ListItem Text">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black tracking-[0.15px] w-full">Lamotrigine</p>
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add_2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add_2">
          <mask height="24" id="mask0_2_207" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_207)">
            <path d={svgPaths.p3ad56700} fill="var(--fill-0, #008080)" id="add_2_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="<IconButton>">
      <Add1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <ListItemText1 />
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function MinHeight1() {
  return <div className="h-px w-0" data-name="min-height" />;
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item #3">
      <Container1 />
      <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-0 right-0" data-name="<Divider> | Horizontal">
        <div className="flex items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none scale-x-0 scale-y-[NaN%] skew-x-[NaNdeg] skew-y-[NaNdeg]">
            <MinHeight1 />
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F6)" x2="326" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] top-[229px] w-[326px]">
      <Item4 />
      <Item5 />
      <div className="-translate-x-1/2 absolute h-0 left-1/2 top-0 w-[326px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1.00003">
            <line id="Line 1" stroke="var(--stroke-0, #F1F2F6)" x1="4.37114e-08" x2="326" y1="0.5" y2="0.500028" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TopRow() {
  return (
    <div className="absolute h-[42px] left-[5px] right-[5px] top-[8px]" data-name="Top Row">
      <div className="absolute h-[42px] left-0 right-[calc(90%+4.5px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">Q</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(10%+0.5px)] right-[calc(80%+4px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">W</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(20%+1px)] right-[calc(70%+3.5px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">E</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(30%+1.5px)] right-[calc(60%+3px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">R</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(40%+2px)] right-[calc(50%+2.5px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">T</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(50%+2.5px)] right-[calc(40%+2px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">Y</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(60%+3px)] right-[calc(30%+1.5px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">U</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(70%+3.5px)] right-[calc(20%+1px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">I</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(80%+4px)] right-[calc(10%+0.5px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">O</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(90%+4.5px)] right-0 top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">P</p>
        </div>
      </div>
    </div>
  );
}

function MiddleRow() {
  return (
    <div className="absolute h-[42px] left-[24px] right-[23px] top-[62px]" data-name="Middle Row">
      <div className="absolute h-[42px] left-0 right-[calc(88.89%+4.44px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">A</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(11.11%+0.56px)] right-[calc(77.78%+3.89px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">S</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(22.22%+1.11px)] right-[calc(66.67%+3.33px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">D</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(33.33%+1.67px)] right-[calc(55.56%+2.78px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">F</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(44.44%+2.22px)] right-[calc(44.44%+2.22px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">G</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(55.56%+2.78px)] right-[calc(33.33%+1.67px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">H</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(66.67%+3.33px)] right-[calc(22.22%+1.11px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">J</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(77.78%+3.89px)] right-[calc(11.11%+0.56px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">K</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(88.89%+4.44px)] right-0 top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">L</p>
        </div>
      </div>
    </div>
  );
}

function Letters() {
  return (
    <div className="absolute h-[42px] left-[56px] right-[56px] top-0" data-name="Letters">
      <div className="absolute h-[42px] left-0 right-[calc(85.71%+4.29px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">Z</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(14.29%+0.71px)] right-[calc(71.43%+3.57px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">X</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(28.57%+1.43px)] right-[calc(57.14%+2.86px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">C</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(42.86%+2.14px)] right-[calc(42.86%+2.14px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">V</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(57.14%+2.86px)] right-[calc(28.57%+1.43px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">B</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(71.43%+3.57px)] right-[calc(14.29%+0.71px)] top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">N</p>
        </div>
      </div>
      <div className="absolute h-[42px] left-[calc(85.71%+4.29px)] right-0 top-0" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-black text-center top-1/2 tracking-[0.35px]">
          <p className="leading-[28px]">M</p>
        </div>
      </div>
    </div>
  );
}

function BottomRow() {
  return (
    <div className="absolute h-[42px] left-[5px] right-[4px] top-[118px]" data-name="Bottom Row">
      <div className="absolute left-0 size-[42px] top-0" data-name="_Key">
        <div className="absolute bg-[#adb3bc] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.3px] left-1/2 top-[calc(50%+0.15px)] w-[19px]" data-name="Shift Active">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.3">
            <path d={svgPaths.p1fa9a780} fill="var(--fill-0, black)" id="Shift Active" />
          </svg>
        </div>
      </div>
      <Letters />
      <div className="absolute right-0 size-[42px] top-0" data-name="_Key">
        <div className="absolute bg-[#adb3bc] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[23px]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
            <g id="Union">
              <path d={svgPaths.p308e9e00} fill="var(--fill-0, black)" />
              <path clipRule="evenodd" d={svgPaths.p320b9800} fill="var(--fill-0, black)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BottomRow1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-start left-[5px] right-[5px] top-[174px]" data-name="Bottom Row">
      <div className="h-[42px] relative shrink-0 w-[85.5px]" data-name="_Key">
        <div className="absolute bg-[#adb3bc] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.32px]">
          <p className="leading-[21px]">123</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[42px] min-w-px relative" data-name="_Key">
        <div className="absolute bg-white inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.32px]">
          <p className="leading-[21px]">space</p>
        </div>
      </div>
      <div className="h-[42px] relative shrink-0 w-[85.5px]" data-name="_Key">
        <div className="absolute bg-[#adb3bc] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_Key Container" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-black text-center top-1/2 tracking-[-0.32px]">
          <p className="leading-[21px]">return</p>
        </div>
      </div>
    </div>
  );
}

function EmojiDictation() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[24px] right-[24px] top-[233px]" data-name="Emoji & Dictation">
      <div className="relative shrink-0 size-[27px]" data-name="Icon / Emoji">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path clipRule="evenodd" d={svgPaths.p7205000} fill="var(--fill-0, #50555C)" fillRule="evenodd" id="Icon / Emoji" />
        </svg>
      </div>
      <div className="h-[25px] relative shrink-0 w-[15px]" data-name="Icon / Dictation">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 25.0002">
          <path clipRule="evenodd" d={svgPaths.p8f58300} fill="var(--fill-0, #50555C)" fillRule="evenodd" id="Icon / Dictation" />
        </svg>
      </div>
    </div>
  );
}

export default function ResultsNoResults() {
  return (
    <div className="bg-white relative size-full" data-name="results - no results">
      <StatusBarIPhone />
      <Frame />
      <p className="absolute capitalize font-['Manrope:Bold',sans-serif] font-bold leading-[24px] left-[calc(18.75%-45.31px)] text-[#005ab5] text-[18px] top-[87px] tracking-[0.4px] whitespace-nowrap">Add Medication</p>
      <Group />
      <Frame2 />
      <Frame3 />
      <div className="-translate-x-1/2 absolute backdrop-blur-[54.366px] bg-[rgba(209,213,219,0.9)] bottom-0 h-[291px] left-1/2 w-[375px]" data-name="Alphabetic Keyboard">
        <div className="absolute bottom-0 h-[34px] left-0 right-0" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
        <TopRow />
        <MiddleRow />
        <BottomRow />
        <BottomRow1 />
        <EmojiDictation />
      </div>
    </div>
  );
}