const STOP_WORDS = new Set(['with','from','this','that','under','over','into','when','what','your','their','very','have','been','some','through','details','the','and','for']);
const GENERIC_TAGS = ['#aiart','#digitalart','#creativeprocess','#visualstorytelling','#promptdesign','#artwork','#cinematic'];
const CATEGORY_TAGS: Record<string, string[]> = {
  fashion:['#fashionart','#editorial'], portraits:['#portraitart','#portrait'], anime:['#animeart','#anime'],
  fantasy:['#fantasyart','#fantasy'], landscapes:['#landscapeart','#landscape'], architecture:['#architectureart','#design'],
  'product photography':['#productphotography','#productdesign'], wallpapers:['#wallpaperart','#wallpaper'], 'digital art':['#digitalart','#conceptart'],
};

export function generateHashtags(prompt: string, category: string, count = 7): string[] {
  const words = prompt.replace(/[^\p{L}\p{N}\s]/gu, ' ').toLowerCase().split(/\s+/).filter(word => word.length > 3 && !STOP_WORDS.has(word));
  const tags = [...new Set([...words.map(word => `#${word}`), ...(CATEGORY_TAGS[category.toLowerCase()] || []), ...GENERIC_TAGS])];
  return tags.slice(0, Math.max(1, Math.min(15, Math.floor(count) || 7)));
}

export function captionTemplate(prompt: string, category: string, title = ''): string {
  const lines: Record<string, string> = {
    fashion:'A look brought to life, one detail at a time.', portraits:'A portrait imagined in words, revealed in light.',
    anime:'A new scene begins with a few carefully chosen words.', fantasy:'A world from imagination, shaped one detail at a time.',
    landscapes:'A place imagined, then brought into view.', architecture:'Lines, light, and a space brought to life.',
    'product photography':'A product concept, framed with intention.', wallpapers:'A new visual for your screen, made from a prompt.',
    'digital art':'An idea translated into a digital visual.',
  };
  const source = prompt.trim();
  const heading = title.trim() ? `${title.trim()} — ` : '';
  return `${heading}${lines[category.toLowerCase()] || 'A few words. A whole new world.'} ✨\n\n${source ? source.slice(0, 150) : 'Turn your imagination into a cinematic reveal.'}\n\nWhat would you create?`;
}
