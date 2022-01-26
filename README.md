<img src="/InlineSvgPicker/package-icon.svg" width="100" style="margin-bottom:15px" />

# Inline Svg Picker

An umbraco property editor which allows you to pick an icon based on a custom defined SVG spritesheet. This will allow you to render your SVG's inline.

This package is based on the [Umbraco.SvgIconPicker](https://github.com/skttl/Umbraco.SvgIconPicker) package by [Skttl](https://github.com/skttl) which is no longer maintained.

## How to use

Create a new data type and choose Inline Svg Picker as the property editor.

Optionally, you can add a custom title that appears when you open the editor window from content. By default, the title is **Choose an icon** (see second screenshot below).

For SVG path, type the path to your SVG spritesheet. This is required for the package to work correctly. For information on how this spritesheet is created and structure, [read this post](https://w3bits.com/svg-sprites).

![Add data type instructions screenshot](/InlineSvgPicker/images/instructions.png 'Add data type')

There is an example spritesheet in this repo [here](/InlineSvgPicker/InlineSvgPicker/img/icons.svg). Each SVG is written as a symbol, and looks like this:

```html
<symbol id="icon-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" preserveAspectRatio="xMinYMid">
  <path d="m7 12.3-6.6-6.6c-.3-.3-.4-.6-.4-1s.1-.7.4-1c.6-.6 1.4-.6 2 0l5.6 5.6 5.6-5.6c.6-.6 1.4-.6 2 0s.6 1.4 0 2l-6.6 6.6c-.6.5-1.4.5-2 0z" />
</symbol>
```

This umbraco package allows you to view each of these symbol elements and choose one from the CMS. The ID of the selected icon is saved as a string in the property value.

Add this new data type to a document type (e.g. the homepage document type). Click the plus icon from within your content and the popup window will appear showing the icons from your spritesheet. You can filter these icons, by searching for the ID of the icon. Select an icon by clicking it.

![How to choose an icon from within content](/InlineSvgPicker/images/picker.png 'Choose icon')

To render this out in your view, here is some example markup:

```html
<svg aria-hidden="true">
  <use xlink:href="/img/icons.svg#@Model.SvgIcon" />
</svg>
```

`@Model.SvgIcon` will pull through the ID you selected from the picker.
