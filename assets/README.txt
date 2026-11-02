Pre-made pictures shown by the fake camera (steps 3 and 5).
Use exactly these file names (JPG; portrait ~1200px tall for photos, landscape for documents).
If a file is missing, the prototype shows a grey placeholder picture instead.

photos/
  front.jpg        1st, 3rd, 5th ... photo taken
  front-left.jpg   2nd, 4th ... photo taken
  (Only these two are needed - they are reused for every angle and for "Add photo".)

documents/
  licence.jpg      Driver's licence
  green-card.jpg   Vehicle green card

To change which files are used, edit DEMO_PHOTOS in app.js.

illustrations/  (last screen: optional services)
  service.jpg (or .png)   "Book a service" picture
  tow.jpg (or .png)       "Tow vehicle" picture
  (If missing, the drawn placeholders are shown. Square pictures work best - shown at 64x64.)
