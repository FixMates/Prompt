import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTimeline, clampTextPosition, createDefaultText, elementVisibleAt, exportBlocker, imageCropRect, promptNumberFromId, sceneAt, smoothProgress, teaserForPrompt, transitionProgress, validateProject } from '../app-src/src/features/reel.ts';

test('10, 15, 20, and 30 second timelines exactly cover the chosen duration',()=>{
  for(const duration of [10,15,20,30]){
    const timeline=buildTimeline(duration);
    assert.equal(timeline.scenes.intro.start,0);
    assert.ok(timeline.scenes.intro.duration>0);
    assert.equal(timeline.scenes.cta.end,duration);
    assert.ok(timeline.scenes.cta.duration>=0.8);
    assert.equal(sceneAt(duration,timeline),'cta');
  }
});

test('default intro preserves title, prompt number, and 1.75 second duration',()=>{
  const text=createDefaultText();
  assert.equal(text.introTitle.text,'A PROMPT-TO-REEL STORY');
  assert.equal(text.promptNumber.text,'PROMPT #01');
  assert.equal(buildTimeline(15).scenes.intro.duration,1.75);
});

test('prompt ID binds to a padded prompt number',()=>{
  assert.equal(promptNumberFromId('42'),'PROMPT #42');
  assert.equal(promptNumberFromId('reel-7'),'PROMPT #07');
  assert.equal(promptNumberFromId('abc'),'PROMPT #01');
});

test('transition progress uses smooth easing and clamps to its timeline interval',()=>{
  assert.equal(transitionProgress(4,4,.8),0);
  assert.equal(transitionProgress(4.8,4,.8),1);
  assert.equal(transitionProgress(3,4,.8),0);
  assert.equal(smoothProgress(.5),.5);
});

test('cover crop preserves aspect ratio and follows focal point within source bounds',()=>{
  const center=imageCropRect(1600,900,360,640);
  assert.ok(Math.abs(center.width/center.height-360/640)<1e-9);
  assert.ok(Math.abs(center.x-546.875)<1e-6);
  assert.equal(imageCropRect(1600,900,360,640,0,0).x,0);
  assert.equal(imageCropRect(1600,900,360,640,1,1).x,1093.75);
  assert.throws(()=>imageCropRect(0,900,360,640),RangeError);
});

test('export preflight requires prompt, original photo, and separate result image',()=>{
  assert.match(exportBlocker('',false,false),/prompt/i);
  assert.match(exportBlocker('prompt',false,false),/original/i);
  assert.match(exportBlocker('prompt',true,false),/generated result/i);
  assert.equal(exportBlocker('prompt',true,true),'');
});

test('text positions stay within canvas margins and text timing respects visibility',()=>{
  assert.deepEqual(clampTextPosition(-10,120,80),{x:40,y:96});
  const text=createDefaultText().hook;
  assert.equal(elementVisibleAt(text,'original',0),true);
  text.visible=false;
  assert.equal(elementVisibleAt(text,'original',0),false);
  text.visible=true;text.start=2;
  assert.equal(elementVisibleAt(text,'original',1),false);
});

test('long prompt teaser stays bounded while preserving full prompt separately',()=>{
  const prompt='A vivid scene '.repeat(1000);
  const teaser=teaserForPrompt(prompt,150);
  assert.ok(teaser.length<=151);
  assert.ok(teaser.endsWith('…'));
});

test('project import applies safe defaults to bad duration, transition, and positions',()=>{
  const project=validateProject({values:{length:99,transitionType:'bogus'},text:{hook:{x:1000,y:-100,fontSize:400}}});
  assert.equal(project.values.length,15);
  assert.equal(project.values['transition-type'],'crossfade');
  assert.ok(project.text.hook.x<=100);
  assert.ok(project.text.hook.y>=4);
  assert.equal(project.text.hook.fontSize,72);
});
