export const REEL_DURATIONS = [10, 15, 20, 30] as const;
export const REEL_EXPORT_SIZE = {width:1080,height:1920} as const;
export type ReelDuration = (typeof REEL_DURATIONS)[number];
export const SCENE_KEYS = ['intro', 'original', 'prompt', 'transition', 'final', 'cta'] as const;
export type SceneKey = (typeof SCENE_KEYS)[number];
export type TransitionKind = 'crossfade' | 'horizontal-wipe' | 'vertical-wipe' | 'center-reveal' | 'split-screen';
export type TextStyle = {
  text: string; visible: boolean; fontFamily: string; fontSize: number; fontWeight: number;
  color: string; backgroundColor: string; backgroundOpacity: number; align: 'left'|'center'|'right';
  outline: boolean; letterSpacing: number; lineSpacing: number; maxWidth: number; wrap: boolean;
  animation: 'none'|'fade'|'slide'; start: number; end: number; position: string;
  x: number; y: number; locked: boolean;
};

export const TEXT_DEFAULTS: Record<string, { label: string; scenes: SceneKey[]; style: TextStyle }> = {
  introTitle: {label:'Intro title',scenes:['intro'],style:{text:'“Every Prompt Tells a Visual Story.”',visible:true,fontFamily:'Inter',fontSize:13,fontWeight:800,color:'#c3b7ff',backgroundColor:'#111116',backgroundOpacity:0,align:'center',outline:false,letterSpacing:1.5,lineSpacing:1.25,maxWidth:84,wrap:true,animation:'fade',start:0,end:99,position:'Center',x:50,y:43,locked:true}},
  promptNumber: {label:'Prompt number',scenes:['intro'],style:{text:'PROMPT #01',visible:true,fontFamily:'Inter',fontSize:15,fontWeight:600,color:'#c3b7ff',backgroundColor:'#111116',backgroundOpacity:0,align:'center',outline:false,letterSpacing:2,lineSpacing:1.2,maxWidth:72,wrap:true,animation:'fade',start:0,end:99,position:'Bottom center',x:50,y:75,locked:true}},
  hook: {label:'Opening hook',scenes:['original'],style:{text:'Watch This Transformation',visible:true,fontFamily:'Inter',fontSize:24,fontWeight:700,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:.32,align:'center',outline:true,letterSpacing:0,lineSpacing:1.2,maxWidth:84,wrap:true,animation:'fade',start:0,end:99,position:'Top center',x:50,y:13,locked:true}},
  beforeLabel: {label:'BEFORE label',scenes:['original','transition'],style:{text:'BEFORE',visible:true,fontFamily:'Inter',fontSize:13,fontWeight:700,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:.45,align:'center',outline:true,letterSpacing:1.5,lineSpacing:1.2,maxWidth:24,wrap:true,animation:'fade',start:0,end:99,position:'Bottom left',x:12,y:84,locked:true}},
  afterLabel: {label:'AFTER label',scenes:['transition'],style:{text:'AFTER',visible:true,fontFamily:'Inter',fontSize:13,fontWeight:700,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:.45,align:'center',outline:true,letterSpacing:1.5,lineSpacing:1.2,maxWidth:24,wrap:true,animation:'fade',start:0,end:99,position:'Bottom right',x:88,y:84,locked:true}},
  promptHeading: {label:'Prompt heading',scenes:['prompt','transition'],style:{text:'THE PROMPT',visible:true,fontFamily:'Inter',fontSize:13,fontWeight:700,color:'#c3b7ff',backgroundColor:'#17151f',backgroundOpacity:.82,align:'left',outline:false,letterSpacing:1.5,lineSpacing:1.3,maxWidth:82,wrap:true,animation:'fade',start:0,end:99,position:'Top center',x:50,y:30,locked:true}},
  prompt: {label:'Full prompt',scenes:['prompt','transition'],style:{text:'',visible:true,fontFamily:'Inter',fontSize:17,fontWeight:500,color:'#ffffff',backgroundColor:'#17151f',backgroundOpacity:.82,align:'left',outline:false,letterSpacing:0,lineSpacing:1.35,maxWidth:82,wrap:true,animation:'fade',start:0,end:99,position:'Top center',x:50,y:37,locked:true}},
  promptTeaser: {label:'Prompt teaser',scenes:['prompt'],style:{text:'',visible:true,fontFamily:'Inter',fontSize:15,fontWeight:500,color:'#ffffff',backgroundColor:'#17151f',backgroundOpacity:.82,align:'left',outline:false,letterSpacing:0,lineSpacing:1.3,maxWidth:82,wrap:true,animation:'fade',start:0,end:99,position:'Top center',x:50,y:62,locked:true}},
  transformationHeadline: {label:'Transformation headline',scenes:['transition'],style:{text:'THE REVEAL',visible:true,fontFamily:'Inter',fontSize:18,fontWeight:700,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:.32,align:'center',outline:true,letterSpacing:1,lineSpacing:1.2,maxWidth:86,wrap:true,animation:'fade',start:0,end:99,position:'Top center',x:50,y:13,locked:true}},
  finalCaption: {label:'Final-result caption',scenes:['final'],style:{text:'The Final Result',visible:true,fontFamily:'Inter',fontSize:22,fontWeight:700,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:.28,align:'center',outline:true,letterSpacing:0,lineSpacing:1.25,maxWidth:84,wrap:true,animation:'fade',start:0,end:99,position:'Bottom center',x:50,y:82,locked:true}},
  ctaHeadline: {label:'CTA headline',scenes:['cta'],style:{text:'WANT THIS LOOK?',visible:true,fontFamily:'Inter',fontSize:26,fontWeight:800,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:.34,align:'center',outline:true,letterSpacing:1,lineSpacing:1.2,maxWidth:86,wrap:true,animation:'fade',start:0,end:99,position:'Bottom center',x:50,y:70,locked:true}},
  ctaSubheading: {label:'CTA subheading',scenes:['cta'],style:{text:'Get the exact prompt',visible:true,fontFamily:'Inter',fontSize:17,fontWeight:500,color:'#f4f0ff',backgroundColor:'#111116',backgroundOpacity:.24,align:'center',outline:true,letterSpacing:0,lineSpacing:1.2,maxWidth:84,wrap:true,animation:'fade',start:0,end:99,position:'Bottom center',x:50,y:78,locked:true}},
  ctaFooter: {label:'Link-in-bio text',scenes:['cta'],style:{text:'Full prompt in bio',visible:true,fontFamily:'Inter',fontSize:14,fontWeight:700,color:'#c3b7ff',backgroundColor:'#111116',backgroundOpacity:.18,align:'center',outline:false,letterSpacing:.5,lineSpacing:1.2,maxWidth:80,wrap:true,animation:'fade',start:0,end:99,position:'Bottom center',x:50,y:87,locked:true}},
  brand: {label:'Brand name',scenes:['intro','original','prompt','transition','final','cta'],style:{text:'PROMPT MASTER',visible:true,fontFamily:'Inter',fontSize:10,fontWeight:700,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:.28,align:'left',outline:false,letterSpacing:1,lineSpacing:1.2,maxWidth:42,wrap:true,animation:'none',start:0,end:99,position:'Top left',x:8,y:7,locked:true}},
  sceneCaption: {label:'Optional scene caption',scenes:['original','prompt','transition','final','cta'],style:{text:'',visible:false,fontFamily:'Inter',fontSize:15,fontWeight:600,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:.35,align:'center',outline:true,letterSpacing:0,lineSpacing:1.25,maxWidth:82,wrap:true,animation:'fade',start:0,end:99,position:'Middle center',x:50,y:52,locked:true}},
  watermark: {label:'Optional watermark',scenes:['intro','original','prompt','transition','final','cta'],style:{text:'',visible:false,fontFamily:'Inter',fontSize:11,fontWeight:600,color:'#ffffff',backgroundColor:'#111116',backgroundOpacity:0,align:'right',outline:true,letterSpacing:.5,lineSpacing:1.2,maxWidth:32,wrap:true,animation:'none',start:0,end:99,position:'Bottom right',x:92,y:91,locked:true}},
};

export const INTRO_STYLE_DEFAULTS = { duration:2, logoSize:88, animation:'fade' as 'fade'|'slide'|'zoom'|'none', showLogo:true, showTitle:true, showNumber:true };
const BASE_TIMES: Record<Exclude<SceneKey,'cta'>,number> = {intro:2,original:4,prompt:4,transition:4,final:4};

export function buildTimeline(total:number, overrides:Partial<Record<Exclude<SceneKey,'cta'>,number>>={}) {
  if(!REEL_DURATIONS.includes(total as ReelDuration)) throw new RangeError('Reel duration must be 10, 15, 20, or 30 seconds.');
  const requested={...BASE_TIMES,...overrides};
  const values=(Object.keys(BASE_TIMES) as (keyof typeof BASE_TIMES)[]).map(key=>Math.max(key==='intro'?.4:.2,Number.isFinite(requested[key])?requested[key]!:BASE_TIMES[key]));
  const reserveCTA=Math.min(1.2,total*.12), sum=values.reduce((a,b)=>a+b,0), scale=sum>total-reserveCTA?(total-reserveCTA)/sum:1;
  let cursor=0;const scenes={} as Record<SceneKey,{start:number;end:number;duration:number}>;
  (Object.keys(BASE_TIMES) as (keyof typeof BASE_TIMES)[]).forEach((key,index)=>{const d=values[index]*scale;scenes[key]={start:cursor,end:cursor+d,duration:d};cursor+=d;});
  scenes.cta={start:cursor,end:total,duration:Math.max(0,total-cursor)};
  return {total,scenes,scale};
}

export function sceneAt(time:number,timeline:ReturnType<typeof buildTimeline>):SceneKey {
  const t=Math.max(0,Math.min(timeline.total,time));
  return SCENE_KEYS.find(key=>t<timeline.scenes[key].end)||'cta';
}

export function smoothProgress(value:number){const p=Math.max(0,Math.min(1,value));return p*p*(3-2*p);}
export function transitionProgress(time:number,start:number,duration:number){return smoothProgress(duration<=0?1:(time-start)/duration);}
export function imageCropRect(sourceWidth:number,sourceHeight:number,targetWidth:number,targetHeight:number,focalX=.5,focalY=.5){
  if(sourceWidth<=0||sourceHeight<=0||targetWidth<=0||targetHeight<=0)throw new RangeError('Image and frame dimensions must be positive.');
  const scale=Math.max(targetWidth/sourceWidth,targetHeight/sourceHeight),width=targetWidth/scale,height=targetHeight/scale;
  const fx=Math.max(0,Math.min(1,Number.isFinite(focalX)?focalX:.5)),fy=Math.max(0,Math.min(1,Number.isFinite(focalY)?focalY:.5));
  return {x:Math.max(0,Math.min(sourceWidth-width,fx*sourceWidth-width/2)),y:Math.max(0,Math.min(sourceHeight-height,fy*sourceHeight-height/2)),width,height};
}
export function exportBlocker(prompt:string,hasOriginal:boolean,hasResult:boolean){if(!prompt.trim())return 'Add a prompt before exporting.';if(!hasOriginal)return 'Upload the original photo before exporting.';if(!hasResult)return 'Upload the generated result image before exporting. The original photo is not reused as the result.';return '';}
export function promptNumberFromId(id:string){const digits=(id.match(/\d+/g)||[]).join('');return `PROMPT #${(digits||'1').padStart(2,'0')}`;}
export function teaserForPrompt(prompt:string,limit:number){const clean=prompt.trim();const safeLimit=Math.max(20,Math.min(2000,Math.round(Number.isFinite(limit)?limit:180)));return clean.length>safeLimit?`${clean.slice(0,safeLimit).trimEnd()}…`:clean;}

export const POSITION_PRESETS:Record<string,[number,number]>={
  'Top left':[8,12],'Top center':[50,12],'Top right':[92,12],
  'Middle left':[8,50],'Center':[50,50],'Middle right':[92,50],
  'Bottom left':[8,83],'Bottom center':[50,83],'Bottom right':[92,83],
};
export function clampTextPosition(x:number,y:number,width:number,position='Center'){const w=Math.max(8,Math.min(96,width)),left=position.toLowerCase().endsWith('left'),right=position.toLowerCase().endsWith('right');const min=left?4:right?4+w:w/2,max=left?96-w:right?96:100-w/2;return {x:Math.max(min,Math.min(max,Number.isFinite(x)?x:50)),y:Math.max(4,Math.min(96,Number.isFinite(y)?y:50))};}
export function elementVisibleAt(style:TextStyle,scene:SceneKey,localTime:number){return style.visible&&Number.isFinite(localTime)&&localTime>=style.start&&localTime<=style.end;}

export function createDefaultText(){return Object.fromEntries(Object.entries(TEXT_DEFAULTS).map(([key,value])=>[key,{...value.style}]));}
export function validateProject(raw:unknown){
  if(!raw||typeof raw!=='object')throw new TypeError('Project must be an object.');
  const data=raw as Record<string,unknown>;
  const values=(data.values&&typeof data.values==='object'?data.values:{}) as Record<string,unknown>;
  const defaults=createDefaultText(), incoming=(data.text&&typeof data.text==='object'?data.text:{}) as Record<string,unknown>;
  for(const [key,base] of Object.entries(defaults)){
    const candidate=incoming[key];if(!candidate||typeof candidate!=='object')continue;
    const item=candidate as Record<string,unknown>;
    defaults[key]={...base,...Object.fromEntries(Object.entries(base).map(([field,defaultValue])=>[field,typeof item[field]===typeof defaultValue?item[field]:defaultValue]))} as TextStyle;
    const validColor=(value:unknown,fallback:string)=>typeof value==='string'&&/^#[\da-f]{6}$/i.test(value)?value:fallback;
    defaults[key].text=typeof item.text==='string'?item.text.slice(0,5000):base.text;
    defaults[key].fontFamily=['Inter','Manrope','Arial','Georgia','serif','monospace'].includes(String(item.fontFamily))?String(item.fontFamily):base.fontFamily;
    defaults[key].fontSize=Math.max(8,Math.min(72,Number(defaults[key].fontSize)||base.fontSize));
    defaults[key].fontWeight=[400,500,600,700,800].includes(Number(item.fontWeight))?Number(item.fontWeight):base.fontWeight;
    defaults[key].color=validColor(item.color,base.color);defaults[key].backgroundColor=validColor(item.backgroundColor,base.backgroundColor);
    defaults[key].backgroundOpacity=Math.max(0,Math.min(1,Number.isFinite(Number(item.backgroundOpacity))?Number(item.backgroundOpacity):base.backgroundOpacity));
    defaults[key].align=['left','center','right'].includes(String(item.align))?item.align as TextStyle['align']:base.align;
    defaults[key].animation=['none','fade','slide'].includes(String(item.animation))?item.animation as TextStyle['animation']:base.animation;
    defaults[key].position=Object.hasOwn(POSITION_PRESETS,String(item.position))?String(item.position):base.position;
    defaults[key].start=Math.max(0,Math.min(120,Number.isFinite(Number(item.start))?Number(item.start):base.start));
    defaults[key].end=Math.max(defaults[key].start,Math.min(120,Number.isFinite(Number(item.end))?Number(item.end):base.end));
    defaults[key].letterSpacing=Math.max(-2,Math.min(16,Number.isFinite(Number(item.letterSpacing))?Number(item.letterSpacing):base.letterSpacing));
    defaults[key].lineSpacing=Math.max(1,Math.min(2.5,Number.isFinite(Number(item.lineSpacing))?Number(item.lineSpacing):base.lineSpacing));
    defaults[key].maxWidth=Math.max(8,Math.min(96,Number.isFinite(Number(item.maxWidth))?Number(item.maxWidth):base.maxWidth));
    const position=clampTextPosition(Number(defaults[key].x),Number(defaults[key].y),Number(defaults[key].maxWidth),defaults[key].position);defaults[key].x=position.x;defaults[key].y=position.y;
  }
  const duration=REEL_DURATIONS.includes(Number(values.length) as ReelDuration)?Number(values.length):15;
  const rawTransition=values['transition-type']??values.transitionType;
  const transition=['crossfade','horizontal-wipe','vertical-wipe','center-reveal','split-screen'].includes(String(rawTransition))?String(rawTransition) as TransitionKind:'crossfade';
  const promptId=typeof values.promptId==='string'?values.promptId.slice(0,80):'01';
  defaults.promptNumber.text=typeof defaults.promptNumber.text==='string'?defaults.promptNumber.text:promptNumberFromId(promptId);
  return {values:{...values,length:duration,'transition-type':transition,promptId},text:defaults,intro:{...INTRO_STYLE_DEFAULTS,...(data.intro&&typeof data.intro==='object'?data.intro as object:{})}};
}
