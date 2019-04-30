# galleryproject

### TODO
- FORWARD + BACK:<br />click arrow buttons to navigate between next & previous embedded image, or to move from intro to image #1

**maybes:**
- separate framework & content
- function togglezoom() - debating whether state should reset to zoomed-out (88vh) upon clicking to a different image, or whether (current behaviour) it should retain its state across images
- script to easily write uploaded image files into gallery html (tempted to drop this)
- i wish the arrows would dynamically float a distance from the displayed image/text, & the caption floated between the bottom of the image & the bottom of the screen, but it's definitely not winning the priority war...


**broader site checklist:**
- IMAGE-ONLY GALLERY | instead of a text intro, I want a version that is images only & opens on image 1. name the code script_gallery_images.js pls
- PROSE ARCHIVE | script where text intro displays by default, & clicking text A displays text B. separation of layout & content would be ideal.
- GALLERY POPUPS (low priority) | each gallery page displaying as a lightbox over the index page (https://html5box.com/blog/jquery-lightbox/open-webpage-with-html5-lightbox/?). clicking the X in the corner would make it remove itself (as opposed to being a plain index link - I don't really want the index to keep reloading).

-----
### Changelog
<dl>
  <dt>190430</dt>
  <dd>Zoom implemented!!! I wrote a code!!!!! T__T<br />
    Buggy in vertical/mobile mode - need to disable where @media (max-aspect-ratio: 5/4).<br />
    Testing vertical image in about section.
  
  <dt>190417</dt>
  <dd>navigation change - scrollbar, arrows.<br />
    *index now pulls from script_gallery_intro and style_gallery for its JS & CSS, respectively.
    i'm glassing the fork hahaha since we've basically pushed everything to main at this point.
  
  <dt>190214</dt>
  <dd>
    google chrome bug fixed<br/>
    added probably duct-taped-together minor shiet (X button, useless arrows)</dd>
  
  <dt>190117</dt>
  <dd>@media vertical conditions now based on aspect ratio (also more logically includes half-screen windows)</dd>

  <dt>190115</dt>
  <dd>
    Removed the borders around thumbnails<br/>
    Updated major visual elements to match changed made in the visual-rehaul branch<br/>
    Changed a few variables and edited script to match<br/>
    Deleted original style.css file (no longer used)
  </dd>
  
  <dt>190103</dt>
  <dd>
    Rearranged ABOUT. (The difference in margins doesn't matter; I think the final version will have transparent bg.)<br/><br/>
    The other branch makes the behaviour of the mobile reel clear: it's floating below the main content, but has a maximum height it'll stray from the bottom of the page. If that helps to troubleshoot that issue.<br/><br/>
    redo layout<br/>
    fixed about section thumbnail and spacing<br/>
    fix photoreel on mobile layout
  </dd>
  
  <dt>181207</dt>
  <dd>
    Changed colours and removed random background colours<br/>
    Adjusted margins and page sizing<br/>
    Added fade in for images; Doesn't work properly yet
  </dd>
  
  <dt>181206</dt>
  <dd>
    Changed and added to script1.js to show/hide about text in the appropriate section<br/>
    Tweak height issue with mobile view<br/>
    Reduced photoreel and thumbnails size from 150px to 100px
  </dd>
  
  <dt>181129</dt>
  <dd>
    Fixed reel in media format to overflow properly<br/>
    Added gallery script<br/>
    Clickable about section, doesnt do anything ATM
  </dd>
  
  <dt>181128</dt>
  <dd>
    reStyling.css<br/>
    Re-arranged grid for photo reel to sit on the right side<br/>
    Added mouse hover effects to thumbails<br/>
    Added container to cover scrollbar in reel
  </dd>

  <dt>181127</dt>
  <dd>
    Uploaded to github<br/>
    Added thumbnails + fixed thumbnail sizing
  </dd>

  <dt>181126</dt>
  <dd>
    Rebuild website<br/>
    Use grid css<br/>
    Left aligned photoreel
  </dd>
  
  <dt></dt>
  <dd>
    
  </dd>
</dl>
